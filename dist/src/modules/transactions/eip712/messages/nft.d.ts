import { Sender } from "../../messages/common";
export declare const MSG_ISSUEDENOM_TYPES: {
    MsgValue: {
        name: string;
        type: string;
    }[];
};
export declare function createMsgIssueDenom(id: string, name: string, schema: string, sender: Sender, symbol: string, mint_restricted: boolean, update_restricted: boolean, description: string, uri: string, uri_hash: string, data: string): {
    type: string;
    value: {
        id: string;
        name: string;
        schema: string;
        sender: string;
        symbol: string;
        mint_restricted: boolean;
        update_restricted: boolean;
        description: string;
        uri: string;
        uri_hash: string;
        data: string;
    };
};
export declare const MSG_MINT_NFT_TYPES: {
    MsgValue: {
        name: string;
        type: string;
    }[];
};
export declare function createMsgMintNft(id: string, denom_id: string, name: string, uri: string, data: string, sender: string, recipient: string, uri_hash: string): {
    type: string;
    value: {
        id: string;
        denom_id: string;
        name: string;
        uri: string;
        data: string;
        sender: string;
        recipient: string;
        uri_hash: string;
    };
};
export declare const MSG_BURN_NFT_TYPES: {
    MsgValue: {
        name: string;
        type: string;
    }[];
};
export declare function createMsgBurnNft(id: string, denom_id: string, sender?: string | undefined): {
    type: string;
    value: {
        id: string;
        denom_id: string;
        sender: string | undefined;
    };
};
export declare const MSG_EDITE_NFT_TYPES: {
    MsgValue: {
        name: string;
        type: string;
    }[];
};
export interface NewPropertiy {
    name?: string;
    uri?: string;
    data?: string;
}
export declare function createMsgEditeNft(id: string, denom_id: string, name?: string | undefined, uri?: string | undefined, data?: string | undefined, sender?: string | undefined, uri_hash?: string | undefined): {
    type: string;
    value: {
        id: string;
        denom_id: string;
        name: string | undefined;
        uri: string | undefined;
        data: string | undefined;
        sender: string | undefined;
        uri_hash: string | undefined;
    };
};
export declare const MSG_TRANSFER_NFT_TYPES: {
    MsgValue: {
        name: string;
        type: string;
    }[];
};
export declare function createMsgTransferNft(id?: string | undefined, denom_id?: string | undefined, name?: string | undefined, uri?: string | undefined, data?: string | undefined, sender?: string | undefined, recipient?: string | undefined, uri_hash?: string | undefined): {
    type: string;
    value: {
        id: string | undefined;
        denom_id: string | undefined;
        name: string | undefined;
        uri: string | undefined;
        data: string | undefined;
        sender: string | undefined;
        recipient: string | undefined;
        uri_hash: string | undefined;
    };
};
