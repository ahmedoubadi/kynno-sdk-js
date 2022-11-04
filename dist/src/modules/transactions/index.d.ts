/// <reference types="node" />
import { protoTxNamespace, MessageGenerated } from './proto';
import { Client } from '../../client';
import { MsgBeginRedelegateParams, MsgDelegateParams, MsgMultipleWithdrawDelegatorRewardParams, MsgUndelegateParams, MsgWithdrawDelegatorRewardParams } from './messages/staking';
import { Chain, Fee, Sender } from './messages/common';
import { MessageSendParams } from './messages/msgSend';
import { MessageIBCMsgTransfer } from './messages/ibcMsgTransfer';
import { MessageMsgVote } from './messages/gov';
import { MsgBurnNftParams, MsgEditeNftParams, MsgIssueDenomParams, MsgMintNftParams, MsgTransferNftParams } from './messages/nft';
import { AxiosRequestConfig } from 'axios';
import { TxToSend } from '../../nets/broadcast';
import { MessageTypes, SignTypedDataVersion, TypedDataV1, TypedMessage } from '../../helper/sign-typed-data';
/**
 * This module implements Transaction related functions
 *
 * @category Modules
 * @since v0.1
 */
export declare class Transaction {
    /** @hidden */
    private client;
    /** @hidden */
    private instance;
    /** @hidden */
    private config;
    /** @hidden */
    constructor(client: Client, config: AxiosRequestConfig);
    /**
     * create Tx Raw EIP712
     * @param body TxBody
     * @param authInfo AuthInfo
     * @param extension MessageGenerated
     * @returns
     * @since v0.1
     */
    _createTxRawEIP712(body: protoTxNamespace.txn.TxBody, authInfo: protoTxNamespace.txn.AuthInfo, extension: MessageGenerated): {
        message: protoTxNamespace.txn.TxRaw;
        path: string;
    };
    _createMessageSend(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MessageSendParams): {
        signDirect: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        legacyAmino: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        /**
         * This module implements Transaction related functions
         *
         * @category Modules
         * @since v0.1
         */
        eipToSign: {
            types: import("./messages/common").TypedDataTypes;
            primaryType: string;
            domain: {
                name: string;
                version: string;
                chainId: number;
                verifyingContract: string;
                salt: string;
            };
            message: object;
        };
    };
    _createTxMsgIssueDenom(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MsgIssueDenomParams): {
        signDirect: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        legacyAmino: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        eipToSign: {
            types: import("./messages/common").TypedDataTypes;
            primaryType: string;
            domain: {
                name: string;
                version: string;
                chainId: number;
                verifyingContract: string;
                salt: string;
            };
            message: object;
        };
    };
    _createTxMsgMintNft(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MsgMintNftParams): {
        signDirect: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        legacyAmino: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        eipToSign: {
            types: import("./messages/common").TypedDataTypes;
            primaryType: string;
            domain: {
                name: string;
                version: string;
                chainId: number;
                verifyingContract: string;
                salt: string;
            };
            message: object;
        };
    };
    _createTxMsgBurnNft(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MsgBurnNftParams): {
        signDirect: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        legacyAmino: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        eipToSign: {
            types: import("./messages/common").TypedDataTypes;
            primaryType: string;
            domain: {
                name: string;
                version: string;
                chainId: number;
                verifyingContract: string;
                salt: string;
            };
            message: object;
        };
    };
    _createTxMsgTransferNft(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MsgTransferNftParams): {
        signDirect: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        legacyAmino: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        eipToSign: {
            types: import("./messages/common").TypedDataTypes;
            primaryType: string;
            domain: {
                name: string;
                version: string;
                chainId: number;
                verifyingContract: string;
                salt: string;
            };
            message: object;
        };
    };
    _createTxMsgEditeNft(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MsgEditeNftParams): {
        signDirect: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        legacyAmino: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        eipToSign: {
            types: import("./messages/common").TypedDataTypes;
            primaryType: string;
            domain: {
                name: string;
                version: string;
                chainId: number;
                verifyingContract: string;
                salt: string;
            };
            message: object;
        };
    };
    _createTxMsgDelegate(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MsgDelegateParams): {
        signDirect: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        legacyAmino: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        eipToSign: {
            types: import("./messages/common").TypedDataTypes;
            primaryType: string;
            domain: {
                name: string;
                version: string;
                chainId: number;
                verifyingContract: string;
                salt: string;
            };
            message: object;
        };
    };
    _createTxMsgBeginRedelegate(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MsgBeginRedelegateParams): {
        signDirect: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        legacyAmino: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        eipToSign: {
            types: import("./messages/common").TypedDataTypes;
            primaryType: string;
            domain: {
                name: string;
                version: string;
                chainId: number;
                verifyingContract: string;
                salt: string;
            };
            message: object;
        };
    };
    _createTxMsgUndelegate(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MsgUndelegateParams): {
        signDirect: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        legacyAmino: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        eipToSign: {
            types: import("./messages/common").TypedDataTypes;
            primaryType: string;
            domain: {
                name: string;
                version: string;
                chainId: number;
                verifyingContract: string;
                salt: string;
            };
            message: object;
        };
    };
    _createTxMsgWithdrawDelegatorReward(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MsgWithdrawDelegatorRewardParams): {
        signDirect: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        legacyAmino: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        eipToSign: {
            types: import("./messages/common").TypedDataTypes;
            primaryType: string;
            domain: {
                name: string;
                version: string;
                chainId: number;
                verifyingContract: string;
                salt: string;
            };
            message: object;
        };
    };
    _createTxMsgMultipleWithdrawDelegatorReward(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MsgMultipleWithdrawDelegatorRewardParams): {
        signDirect: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        legacyAmino: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        eipToSign: {
            types: import("./messages/common").TypedDataTypes;
            primaryType: string;
            domain: {
                name: string;
                version: string;
                chainId: number;
                verifyingContract: string;
                salt: string;
            };
            message: object;
        };
    };
    _createTxIBCMsgTransfer(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MessageIBCMsgTransfer): {
        signDirect: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        legacyAmino: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        eipToSign: {
            types: import("./messages/common").TypedDataTypes;
            primaryType: string;
            domain: {
                name: string;
                version: string;
                chainId: number;
                verifyingContract: string;
                salt: string;
            };
            message: object;
        };
    };
    _createTxMsgVote(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MessageMsgVote): {
        signDirect: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        legacyAmino: {
            body: protoTxNamespace.txn.TxBody;
            authInfo: protoTxNamespace.txn.AuthInfo;
            signBytes: string;
        };
        eipToSign: {
            types: import("./messages/common").TypedDataTypes;
            primaryType: string;
            domain: {
                name: string;
                version: string;
                chainId: number;
                verifyingContract: string;
                salt: string;
            };
            message: object;
        };
    };
    _signatureToWeb3Extension(chain: Chain, sender: Sender, hexFormattedSignature: string): {
        message: import("./proto/proto/ethermint/types/v1/web3").ethermint.types.v1.ExtensionOptionsWeb3Tx;
        path: string;
    };
    _generatePostBodyBroadcast(txRaw: TxToSend, broadcastMode?: string): string;
    _broadcastTx<T>(txRaw: TxToSend, broadcastMode?: string): Promise<T>;
    _signTypedData<V extends SignTypedDataVersion, T extends MessageTypes>({ privateKey, data, version, }: {
        privateKey: Buffer;
        data: V extends 'V1' ? TypedDataV1 : TypedMessage<T>;
        version: V;
    }): string;
    _recoverTypedSignature<V extends SignTypedDataVersion, T extends MessageTypes>({ data, signature, version, }: {
        data: V extends 'V1' ? TypedDataV1 : TypedMessage<T>;
        signature: string;
        version: V;
    }): string;
}
