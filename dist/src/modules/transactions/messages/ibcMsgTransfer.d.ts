import { Chain, Fee, Sender } from './common';
export interface MessageIBCMsgTransfer {
    sourcePort: string;
    sourceChannel: string;
    amount: string;
    denom: string;
    receiver: string;
    revisionNumber: number;
    revisionHeight: number;
    timeoutTimestamp: string;
}
export declare function createTxIBCMsgTransfer(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MessageIBCMsgTransfer): {
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
