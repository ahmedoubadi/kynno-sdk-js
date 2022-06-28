import { Chain, Fee, Sender } from './common';
export interface MsgIssueDenomParams {
    id: string;
    name: string;
    schema: string;
    symbol: string;
    mint_restricted: boolean;
    update_restricted: boolean;
    description: string;
    uri: string;
    uri_hash: string;
    data: string;
}
export interface MsgMintNftParams {
    id: string;
    denom_id: string;
    name: string;
    uri: string;
    data: string;
    sender: string;
    recipient: string;
    uri_hash: string;
}
export interface MsgTransferNftParams {
    id: string;
    denom_id: string;
    name: string;
    uri: string;
    data: string;
    sender: string;
    recipient: string;
    uri_hash: string;
}
export interface MsgBurnNftParams {
    id: string;
    denom_id: string;
    sender: string;
}
export interface MsgEditeNftParams {
    id: string;
    denom_id: string;
    name?: string | undefined;
    uri?: string | undefined;
    data?: string | undefined;
    sender?: string | undefined;
    uri_hash?: string | undefined;
}
export declare function createTxMsgIssueDenom(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MsgIssueDenomParams): {
    signDirect: {
        body: import("../proto/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.TxBody;
        authInfo: import("../proto/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.AuthInfo;
        signBytes: string;
    };
    legacyAmino: {
        body: import("../proto/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.TxBody;
        authInfo: import("../proto/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.AuthInfo;
        signBytes: string;
    };
    eipToSign: {
        types: import("./common").TypedDataTypes;
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
export declare function createTxMsgMintNft(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MsgMintNftParams): {
    signDirect: {
        body: import("../proto/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.TxBody;
        authInfo: import("../proto/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.AuthInfo;
        signBytes: string;
    };
    legacyAmino: {
        body: import("../proto/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.TxBody;
        authInfo: import("../proto/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.AuthInfo;
        signBytes: string;
    };
    eipToSign: {
        types: import("./common").TypedDataTypes;
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
export declare function createTxMsgTransferNft(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MsgTransferNftParams): {
    signDirect: {
        body: import("../proto/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.TxBody;
        authInfo: import("../proto/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.AuthInfo;
        signBytes: string;
    };
    legacyAmino: {
        body: import("../proto/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.TxBody;
        authInfo: import("../proto/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.AuthInfo;
        signBytes: string;
    };
    eipToSign: {
        types: import("./common").TypedDataTypes;
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
export declare function createTxMsgBurnNft(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MsgBurnNftParams): {
    signDirect: {
        body: import("../proto/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.TxBody;
        authInfo: import("../proto/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.AuthInfo;
        signBytes: string;
    };
    legacyAmino: {
        body: import("../proto/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.TxBody;
        authInfo: import("../proto/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.AuthInfo;
        signBytes: string;
    };
    eipToSign: {
        types: import("./common").TypedDataTypes;
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
export declare function createTxMsgEditeNft(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MsgEditeNftParams): {
    signDirect: {
        body: import("../proto/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.TxBody;
        authInfo: import("../proto/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.AuthInfo;
        signBytes: string;
    };
    legacyAmino: {
        body: import("../proto/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.TxBody;
        authInfo: import("../proto/proto/cosmos/tx/v1beta1/tx").cosmos.tx.v1beta1.AuthInfo;
        signBytes: string;
    };
    eipToSign: {
        types: import("./common").TypedDataTypes;
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
