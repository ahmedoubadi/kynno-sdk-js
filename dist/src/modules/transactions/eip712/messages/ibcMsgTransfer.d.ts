export declare const IBC_MSG_TRANSFER_TYPES: {
    MsgValue: {
        name: string;
        type: string;
    }[];
    TypeToken: {
        name: string;
        type: string;
    }[];
    TypeTimeoutHeight: {
        name: string;
        type: string;
    }[];
};
export declare function createIBCMsgTransfer(receiver: string, sender: string, sourceChannel: string, sourcePort: string, revisionHeight: number, revisionNumber: number, timeoutTimestamp: string, amount: string, denom: string): {
    type: string;
    value: {
        receiver: string;
        sender: string;
        source_channel: string;
        source_port: string;
        timeout_height: {
            revision_height: string;
            revision_number: string;
        };
        timeout_timestamp: string;
        token: {
            amount: string;
            denom: string;
        };
    };
};
