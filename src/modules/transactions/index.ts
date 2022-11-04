import {
    protoTxNamespace,
    MessageGenerated,
} from './proto'
import { Client } from '../../client';
import { createTxRawEIP712 } from './messages/txRaw';
import { createTxMsgBeginRedelegate, createTxMsgDelegate, createTxMsgMultipleWithdrawDelegatorReward, createTxMsgUndelegate, createTxMsgWithdrawDelegatorReward, MsgBeginRedelegateParams, MsgDelegateParams, MsgMultipleWithdrawDelegatorRewardParams, MsgUndelegateParams, MsgWithdrawDelegatorRewardParams } from './messages/staking';
import { Chain, Fee, Sender } from './messages/common';
import { createMessageSend, MessageSendParams } from './messages/msgSend';
import { createTxIBCMsgTransfer, MessageIBCMsgTransfer } from './messages/ibcMsgTransfer';
import { createTxMsgVote, MessageMsgVote } from './messages/gov';
import { createTxMsgBurnNft, createTxMsgEditeNft, createTxMsgIssueDenom, createTxMsgMintNft, createTxMsgTransferNft, MsgBurnNftParams, MsgEditeNftParams, MsgIssueDenomParams, MsgMintNftParams, MsgTransferNftParams } from './messages/nft';
import { signatureToWeb3Extension } from './messages/web3Extension';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import * as is from 'is_js';
import { SdkError, CODES } from '../../errors';
import { generatePostBodyBroadcast, TxToSend } from '../../nets/broadcast';
import { generateEndpointBroadcast } from '../../nets/endpoint';
import { MessageTypes, recoverTypedSignature, signTypedData, SignTypedDataVersion, TypedDataV1, TypedMessage } from '../../helper/sign-typed-data';
/**
 * This module implements Transaction related functions
 *
 * @category Modules
 * @since v0.1
 */
export class Transaction {
    /** @hidden */
    private client: Client;
    /** @hidden */
    private instance: AxiosInstance;
    /** @hidden */
    private config: AxiosRequestConfig;
    /** @hidden */
    constructor(client: Client,config: AxiosRequestConfig) {
        this.client = client;
        if (is.empty(config)) {
            throw new SdkError('RpcClient Config not initialized');
        }
        if (is.empty(config.baseURL)) {
            throw new SdkError('baseURL of RpcClient cannot be empty');
        }
        if (is.empty(config.timeout)) {
            config.timeout = 2000; // Set default timeout
        }
      
        config.url = '/'; // Fixed url
      
        this.config = config;
        this.instance = axios.create(config);
    }

    /**
     * create Tx Raw EIP712
     * @param body TxBody
     * @param authInfo AuthInfo
     * @param extension MessageGenerated
     * @returns
     * @since v0.1
     */
    _createTxRawEIP712(
        body: protoTxNamespace.txn.TxBody,
        authInfo: protoTxNamespace.txn.AuthInfo,
        extension: MessageGenerated,
    ) {
        
        return createTxRawEIP712(body,authInfo,extension)
        
    }

    // send tx
    _createMessageSend(
        chain: Chain,
        sender: Sender,
        fee: Fee,
        memo: string,
        params: MessageSendParams,
    ){
        return createMessageSend(chain,sender,fee,memo,params)
    }

    //issue new collection
    _createTxMsgIssueDenom(
        chain: Chain,
        sender: Sender,
        fee: Fee,
        memo: string,
        params: MsgIssueDenomParams,
    ){
        return createTxMsgIssueDenom(chain,sender,fee,memo,params)
    }

    // mint nft
    _createTxMsgMintNft(
        chain: Chain,
        sender: Sender,
        fee: Fee,
        memo: string,
        params: MsgMintNftParams,
    ){
        return createTxMsgMintNft(chain,sender,fee,memo,params)
    }

    // burn nft
    _createTxMsgBurnNft(
        chain: Chain,
        sender: Sender,
        fee: Fee,
        memo: string,
        params: MsgBurnNftParams,
    ){
        return createTxMsgBurnNft(chain,sender,fee,memo,params)
    }

    // burn nft
    _createTxMsgTransferNft(
        chain: Chain,
        sender: Sender,
        fee: Fee,
        memo: string,
        params: MsgTransferNftParams,
    ){
        return createTxMsgTransferNft(chain,sender,fee,memo,params)
    }

    // edite nft
    _createTxMsgEditeNft(
        chain: Chain,
        sender: Sender,
        fee: Fee,
        memo: string,
        params: MsgEditeNftParams,
    ){
        return createTxMsgEditeNft(chain,sender,fee,memo,params)
    }


    // stacking txs
    _createTxMsgDelegate(
        chain: Chain,
        sender: Sender,
        fee: Fee,
        memo: string,
        params: MsgDelegateParams,
    ){
        return createTxMsgDelegate(chain,sender,fee,memo,params)
    }

    _createTxMsgBeginRedelegate(
        chain: Chain,
        sender: Sender,
        fee: Fee,
        memo: string,
        params: MsgBeginRedelegateParams,
    ){
        return createTxMsgBeginRedelegate(chain,sender,fee,memo,params)
    }

    _createTxMsgUndelegate(
        chain: Chain,
        sender: Sender,
        fee: Fee,
        memo: string,
        params: MsgUndelegateParams,
    ){
        return createTxMsgUndelegate(chain,sender,fee,memo,params)
    }

    _createTxMsgWithdrawDelegatorReward(
        chain: Chain,
        sender: Sender,
        fee: Fee,
        memo: string,
        params: MsgWithdrawDelegatorRewardParams,
    ){
        return createTxMsgWithdrawDelegatorReward(chain,sender,fee,memo,params)
    }

    _createTxMsgMultipleWithdrawDelegatorReward(
        chain: Chain,
        sender: Sender,
        fee: Fee,
        memo: string,
        params: MsgMultipleWithdrawDelegatorRewardParams,
    ){
        return createTxMsgMultipleWithdrawDelegatorReward(chain,sender,fee,memo,params)
    }
    
    //ibc txs
    _createTxIBCMsgTransfer(
        chain: Chain,
        sender: Sender,
        fee: Fee,
        memo: string,
        params: MessageIBCMsgTransfer,
    ){
        return createTxIBCMsgTransfer(chain,sender,fee,memo,params)
    }

    // governance txs

    _createTxMsgVote(
        chain: Chain,
        sender: Sender,
        fee: Fee,
        memo: string,
        params: MessageMsgVote,
    ){
        return createTxMsgVote(chain,sender,fee,memo,params)
    }
    _signatureToWeb3Extension(
        chain: Chain,
        sender: Sender,
        hexFormattedSignature: string,
    ){
        return signatureToWeb3Extension(chain,sender,hexFormattedSignature)
    }
    _generatePostBodyBroadcast(txRaw: TxToSend, broadcastMode?: string){
        return generatePostBodyBroadcast(txRaw,broadcastMode)
    }
    _broadcastTx<T>(txRaw: TxToSend, broadcastMode?: string): Promise<T> {
        const endpoint = generateEndpointBroadcast()
        const data = generatePostBodyBroadcast(txRaw)
        return this.instance
          .post<any>(this.client.config.api+endpoint,data,this.config)
          .then(response => {
            const res = response.data;
            
            // Internal error
            if (res.error) {
              throw new SdkError(res.error.message, res.error.code, `api_broadcastTx`);
            }
    
            return res;
          });
    }
    _signTypedData<V extends SignTypedDataVersion,T extends MessageTypes,>({
        privateKey,
        data,
        version,
    }: {
        privateKey: Buffer;
        data: V extends 'V1' ? TypedDataV1 : TypedMessage<T>;
        version: V;
    }): string {
        return signTypedData({
            privateKey,
            data,
            version,
        })
    }
    _recoverTypedSignature<V extends SignTypedDataVersion,T extends MessageTypes,>({
        data,
        signature,
        version,
    }: {
        data: V extends 'V1' ? TypedDataV1 : TypedMessage<T>;
        signature: string;
        version: V;
    }): string {
        return recoverTypedSignature({
            data,
            signature,
            version,
        })
    }
}
