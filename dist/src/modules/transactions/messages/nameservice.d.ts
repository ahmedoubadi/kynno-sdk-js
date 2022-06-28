import { Chain, Fee, Sender } from './common';
export interface MsgIssueNameParams {
    name: string;
}
export declare function createTxMsgIssueName(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MsgIssueNameParams): {
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
