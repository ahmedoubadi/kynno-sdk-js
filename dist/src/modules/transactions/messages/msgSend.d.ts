import { Chain, Fee, Sender } from './common';
export interface MessageSendParams {
    destinationAddress: string;
    amount: string;
    denom: string;
}
export declare function createMessageSend(chain: Chain, sender: Sender, fee: Fee, memo: string, params: MessageSendParams): {
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
