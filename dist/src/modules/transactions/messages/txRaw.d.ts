import { protoTxNamespace, MessageGenerated } from '../proto';
export declare function createTxRawEIP712(body: protoTxNamespace.txn.TxBody, authInfo: protoTxNamespace.txn.AuthInfo, extension: MessageGenerated): {
    message: protoTxNamespace.txn.TxRaw;
    path: string;
};
