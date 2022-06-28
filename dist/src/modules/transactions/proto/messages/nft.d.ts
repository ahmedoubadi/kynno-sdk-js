import { Sender } from '../../messages/common';
import * as nft from '../proto/kynno/nft/tx';
export declare function createMsgIssueDenom(id: string, name: string, schema: string, sender: Sender, symbol: string, mint_restricted: boolean, update_restricted: boolean, description: string, uri: string, uri_hash: string, data: string): {
    message: nft.kynno.nft.MsgIssueDenom;
    path: string;
};
export declare function createMsgMintNft(id: string, denom_id: string, name: string, uri: string, data: string, sender: string, recipient: string, uri_hash: string): {
    message: nft.kynno.nft.MsgMintNFT;
    path: string;
};
export declare function createMsgBurnNft(id: string, denom_id: string, sender?: string | undefined): {
    message: nft.kynno.nft.MsgBurnNFT;
    path: string;
};
export declare function createMsgEditeNft(id: string, denom_id: string, name?: string | undefined, uri?: string | undefined, data?: string | undefined, sender?: string | undefined, uri_hash?: string | undefined): {
    message: nft.kynno.nft.MsgEditNFT;
    path: string;
};
export declare function createMsgTransferNft(id?: string | undefined, denom_id?: string | undefined, name?: string | undefined, uri?: string | undefined, data?: string | undefined, sender?: string | undefined, recipient?: string | undefined, uri_hash?: string | undefined): {
    message: nft.kynno.nft.MsgTransferNFT;
    path: string;
};
