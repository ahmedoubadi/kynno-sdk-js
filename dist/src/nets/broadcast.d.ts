export interface TxToSend {
    message: {
        serializeBinary: () => Uint8Array;
    };
    path: string;
}
export declare enum BroadcastMode {
    Unspecified = "BROADCAST_MODE_UNSPECIFIED",
    Block = "BROADCAST_MODE_BLOCK",
    Sync = "BROADCAST_MODE_SYNC",
    Async = "BROADCAST_MODE_ASYNC"
}
export declare function generatePostBodyBroadcast(txRaw: TxToSend, broadcastMode?: string): string;
export interface BroadcastPostBody {
    tx_bytes: Uint8Array;
    mode: string;
}
