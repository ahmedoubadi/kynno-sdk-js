import * as consts from './types/constants';
import * as modules from './modules';
import { RpcClient } from './nets/rpc-client';
import {WsClient} from './nets/ws-client';
import { AxiosRequestConfig } from 'axios';
import * as types from './types';
import { SdkError, CODES } from './errors';
import * as AES from 'crypto-js/aes';
import * as ENC from 'crypto-js/enc-utf8';
import {Wallet} from "./types";
import { ethers } from 'ethers';

/** KYNNO Client */
export class Client {
  /** KYNNO Client Config */
  config: DefaultClientConfig;

  /** Axios client for tendermint rpc requests */
  private _rpcClient?: RpcClient;
  get rpcClient():RpcClient{
    if (!this._rpcClient) {this._rpcClient = new RpcClient(this.config.rpcConfig)}
    return this._rpcClient;
  }

  /** Axios client for tendermint rpc requests */
  private _wsClient?: WsClient;
  get wsClient():WsClient{
    if (!this._wsClient) {this._wsClient = new WsClient(this.config.wsUrl)}
    return this._wsClient;
  }

  /** Auth module */
  private _auth?: modules.Auth;
  get auth(): modules.Auth{
    if (!this._auth) {this._auth = new modules.Auth(this)}
    return this._auth;
  }


  /** Bank module */
  private _bank?: modules.Bank;
  get bank():modules.Bank{
    if (!this._bank) {this._bank = new modules.Bank(this)}
    return this._bank;
  }

  /** Key management module */
  private _keys?: modules.Keys;
  get keys():modules.Keys{
    if (!this._keys) {this._keys = new modules.Keys(this)}
    return this._keys;
  }

  /** Protobuf module */
  private _protobuf?: modules.Protobuf;
  get protobuf():modules.Protobuf{
    if (!this._protobuf) {this._protobuf = new modules.Protobuf(this)}
    return this._protobuf;
  }

  /** Staking module */
  private _staking?: modules.Staking;
  get staking():modules.Staking{
    if (!this._staking) {this._staking = new modules.Staking(this)}
    return this._staking;
  }

  /** Gov module */
  private _gov?: modules.Gov;
  get gov():modules.Gov{
    if (!this._gov) {this._gov = new modules.Gov(this)}
    return this._gov;
  }


  /** Slashing module */
  private _slashing?: modules.Slashing;
  get slashing(): modules.Slashing{
    if (!this._slashing) {this._slashing = new modules.Slashing(this)}
    return this._slashing;
  }

  /** Distribution module */
  private _distribution?: modules.Distribution;
  get distribution(): modules.Distribution{
    if (!this._distribution) {this._distribution = new modules.Distribution(this)}
    return this._distribution;
  }


  /** Utils module */
  private _utils?: modules.Utils;
  get utils(): modules.Utils{
    if (!this._utils) {this._utils = new modules.Utils(this)}
    return this._utils;
  }

  /** Tendermint module */
  private _tendermint?: modules.Tendermint;
  get tendermint(): modules.Tendermint{
    if (!this._tendermint) {this._tendermint = new modules.Tendermint(this)}
    return this._tendermint;
  }

  /** NFT module */
  private _nft?: modules.Nft;
  get nft(): modules.Nft{
    if (this.config.chainNetwork != consts.ChainNetwork.Kynno) {
      throw new SdkError('This module is not supported on the current chain network.',CODES.Panic);
    }
    if (!this._nft) {this._nft = new modules.Nft(this)}
    return this._nft;
  }

  /** NAMESERVICE module */
  private _nameservice?: modules.NameService;
  get nameservice(): modules.NameService{
    if (this.config.chainNetwork != consts.ChainNetwork.Kynno) {
      throw new SdkError('This module is not supported on the current chain network.',CODES.Panic);
    }
    if (!this._nameservice) {this._nameservice = new modules.NameService(this)}
    return this._nameservice;
  }

  /** Transaction module */
  private _transaction?: modules.Transaction;
  get transaction(): modules.Transaction{
    if (this.config.chainNetwork != consts.ChainNetwork.Kynno) {
      throw new SdkError('This module is not supported on the current chain network.',CODES.Panic);
    }
    if (!this._transaction) {this._transaction = new modules.Transaction(this,this.config.rpcConfig)}
    return this._transaction;
  }

  /** Ibc module */
  private _ibc?: modules.Ibc;
  get ibc():modules.Ibc{
    if (!this._ibc) {this._ibc = new modules.Ibc(this)}
    return this._ibc;
  }

  /** Account module */
  private _account?: modules.Account;
  get account():modules.Account{
    if (!this._account) {this._account = new modules.Account(this,this.config.rpcConfig)}
    return this._account;
  }

  /** KYNNO SDK Constructor */
  constructor(config: DefaultClientConfig) {
    this.config = config;
    if (!this.config.rpcConfig) this.config.rpcConfig = {};
    if (!this.config.bech32Prefix || !this.config.bech32Prefix.AccAddr) {
      switch(this.config.chainNetwork){
        case consts.ChainNetwork.Cosmos:
        this.config.bech32Prefix = types.Bech32Prefix_Cosmos;
        break;
        case consts.ChainNetwork.Kynno:
        default:
        this.config.bech32Prefix = types.Bech32Prefix_Kynno;
        break
      }
    }

    this.config.rpcConfig.baseURL = this.config.node;

    // Set default encrypt/decrypt methods
    if (!this.config.keyDAO.encrypt || !this.config.keyDAO.decrypt) {
      const defaultKeyDAO = new DefaultKeyDAOImpl();
      this.config.keyDAO.encrypt = defaultKeyDAO.encrypt;
      this.config.keyDAO.decrypt = defaultKeyDAO.decrypt;
    }
  }

  /**
   * Set Key DAO Implemention
   *
   * @param keyDAO Key DAO Implemention
   * @returns The SDK itself
   */
  withKeyDAO(keyDAO: KeyDAO) {
    // Set default encrypt/decrypt methods
    if (!keyDAO.encrypt || !keyDAO.decrypt) {
      const defaultKeyDAO = new DefaultKeyDAOImpl();
      keyDAO.encrypt = defaultKeyDAO.encrypt;
      keyDAO.decrypt = defaultKeyDAO.decrypt;
    }
    this.config.keyDAO = keyDAO;
    return this;
  }
  /**
   * Set web3 provider Implemention
   *
   * @param provider web3 provider Implemention
   * @returns The SDK itself
   */
   withProvider(provider: any) {
    this.config.provider = provider;
    return this;
  }

  /**
   * Set KYNNO network type
   *
   * @param network KYNNO network type, mainnet / testnet
   * @returns The SDK itself
   */
  withNetwork(network: consts.Network) {
    this.config.network = network;
    return this;
  }

  /**
   * Set KYNNO network type
   *
   * @param network KYNNO network type, mainnet / testnet
   * @returns The SDK itself
   */
  withChainNetwork(chainNetwork: consts.ChainNetwork) {
    this.config.chainNetwork = chainNetwork;
    return this;
  }

  /**
   * Set KYNNO chain-id
   *
   * @param chainId KYNNO chain-id
   * @returns The SDK itself
   */
  withChainId(chainId: string) {
    this.config.chainId = chainId;
    return this;
  }

  /**
   * Set default gas limit
   *
   * @param gas Default gas limit
   * @returns The SDK itself
   */
  withGas(gas: string) {
    this.config.gas = gas;
    return this;
  }

  /**
   * Set default fees
   *
   * @param fee Default fee amount
   * @returns The SDK itself
   */
  withFee(fee: types.Coin) {
    this.config.fee = fee;
    return this;
  }

  /**
   * Set Axios config for tendermint rpc requests, refer to: https://github.com/axios/axios#request-config.
   *
   * Note the `baseURL` is set by `SdkConfig.node` and cannot be overwritten by this config
   *
   * @param rpcConfig Axios config for tendermint rpc requests
   * @returns The SDK itself
   */
  withRpcConfig(rpcConfig: AxiosRequestConfig) {
    rpcConfig.baseURL = this.config.node;
    this.config.rpcConfig = rpcConfig;
    this._rpcClient = new RpcClient(this.config.rpcConfig);
    return this;
  }
  /**
   * Set default websocket Url
   *
   * @param wsUrl Default websocket Url
   * @returns The SDK itself
   */
  withWebsocket(wsUrl: string) {
    this.config.wsUrl = wsUrl;
    return this;
  }
  /**
   * Set default websocket Url
   *
   * @param wsUrl Default websocket Url
   * @returns The SDK itself
   */
  withRpcUrl(rpcUrl: string) {
    this.config.rpcUrl = rpcUrl;
    return this;
  }
}

/** KYNNO SDK Config */
export interface ClientConfig {
  /** KYNNO node rpc address */
  node: string;
  /** KYNNO node api url */
  api:string;

  /* nameservice contract address */
  nameContractAddress?:string;

  /** KYNNO network type, mainnet / testnet */
  network?: consts.Network;

  /** KYNNO chain-id */
  chainId?: string;

  /** Default gas limit */
  gas?: string;

  /** Default fee amount */
  fee?: types.Coin;

  /** Key DAO Implemention */
  keyDAO?: KeyDAO;

  /** Bech32 prefix of the network, will be overwritten by network type */
  bech32Prefix?: types.Bech32Prefix;

  /** Axios request config for tendermint rpc requests */
  rpcConfig?: AxiosRequestConfig;
  wsUrl?:string;
  rpcUrl?:string
}

/** Default KYNNO Client Config */
export class DefaultClientConfig implements ClientConfig {
  node: string;
  api:string;
  provider:any;
  nameContractAddress:string;
  chainNetwork: consts.ChainNetwork;
  network: consts.Network;
  chainId: string;
  gas: string;
  fee: types.Coin;
  keyDAO: KeyDAO;
  bech32Prefix: types.Bech32Prefix;
  rpcConfig: AxiosRequestConfig;
  wsUrl:string;
  rpcUrl:string

  constructor() {
    this.node = '';
    this.api = '';
    this.provider = ethers.getDefaultProvider()
    this.nameContractAddress = "";
    this.network = types.Network.Mainnet;
    this.chainNetwork = types.ChainNetwork.Kynno;
    this.chainId = 'kynno_9700-1';
    this.gas = '100000';
    this.fee = { amount: '', denom: '' };
    this.keyDAO = new DefaultKeyDAOImpl();
    this.bech32Prefix = {} as types.Bech32Prefix;
    this.rpcConfig = { timeout: 2000 };
    this.wsUrl = ""
    this.rpcUrl = ""
  }
}

/**
 * Key DAO Interface, to be implemented by apps if they need the key management.
 */
export interface KeyDAO {
  /**
   * Save the encrypted private key to app
   *
   * @param name Name of the key
   * @param key The encrypted private key object
   * @throws `SdkError` if the save fails.
   */
  write(name: string, key: Wallet): void;

  /**
   * Get the encrypted private key by name
   *
   * @param name Name of the key
   * @returns The encrypted private key object or undefined
   */
  read(name: string): Wallet;

  /**
   * Delete the key by name
   * @param name Name of the key
   * @throws `SdkError` if the deletion fails.
   */
  delete?(name: string): void;

  /**
   * Optional function to encrypt the private key by yourself. Default to AES Encryption
   * @param privKey The plain private key
   * @param password The password to encrypt the private key
   * @returns The encrypted private key
   * @throws `SdkError` if encrypt failed
   */
  encrypt?(privKey: string, password: string): string;

  /**
   * Optional function to decrypt the private key by yourself. Default to AES Decryption
   * @param encrptedPrivKey The encrpted private key
   * @param password The password to decrypt the private key
   * @returns The plain private key
   * @throws `SdkError` if decrypt failed
   */
  decrypt?(encrptedPrivKey: string, password: string): string;
}

export class DefaultKeyDAOImpl implements KeyDAO {
  write(name: string, key: Wallet): void {
    throw new SdkError(
      'Method not implemented. Please implement KeyDAO first.',
      CODES.Panic
    );
  }
  read(name: string): Wallet {
    throw new SdkError(
      'Method not implemented. Please implement KeyDAO first.',
      CODES.Panic
    );
  }
  delete(name: string): void {
    throw new SdkError(
      'Method not implemented. Please implement KeyDAO first.',
      CODES.Panic
    );
  }
  encrypt(privKey: string, password: string): string {
    const encrypted = AES.encrypt(privKey, password).toString();
    if (!encrypted) {
      throw new SdkError('Private key encrypt failed',CODES.Internal);
    }
    return encrypted;
  }

  decrypt(encrptedPrivKey: string, password: string): string {
    let decrypted:string;
    try{
      decrypted = AES.decrypt(encrptedPrivKey, password).toString(ENC);
      if (!decrypted) {
        throw new SdkError('Wrong password',CODES.InvalidPassword);
      }
    }catch(e){
      throw new SdkError('Wrong password',CODES.InvalidPassword);
    }
    return decrypted;
  }
}
