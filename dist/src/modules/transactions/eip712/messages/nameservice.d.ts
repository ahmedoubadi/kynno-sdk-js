import { Sender } from "../../messages/common";
export declare const MSG_ISSUENAME_TYPES: {
    MsgValue: {
        name: string;
        type: string;
    }[];
};
export declare function createMsgIssueName(sender: Sender, name: string): {
    type: string;
    value: {
        creator: string;
        name: string;
    };
};
