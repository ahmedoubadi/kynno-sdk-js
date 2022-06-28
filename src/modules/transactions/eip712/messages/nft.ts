import { Sender } from "../../messages/common"

export const MSG_ISSUEDENOM_TYPES = {
  MsgValue: [
    {name: 'id',type: 'string'}, 
    {name: 'name', type: 'string'}, 
    {name: 'schema', type: 'string'}, 
    {name: 'sender', type: 'string'}, 
    {name: 'symbol', type: 'string'}, 
    {name: 'mint_restricted', type: 'bool'}, 
    {name: 'update_restricted', type: 'bool'},
    {name: 'description', type: 'string'}, 
    {name: 'uri', type: 'string'}, 
    {name: 'uri_hash', type: 'string'}, 
    {name: 'data', type: 'string'}
  ],
}
export function createMsgIssueDenom(
    id: string,
    name: string,
    schema: string,
    sender:Sender,
    symbol: string,
    mint_restricted: boolean,
    update_restricted:boolean,
    description: string,
    uri: string,
    uri_hash: string,
    data: string,
) {
    return {
        type: "kynno/nft/MsgIssueDenom",
        value: {
            id,
            name,
            schema,
            sender:sender.accountAddress,
            symbol,
            mint_restricted,
            update_restricted,
            description,
            uri,
            uri_hash,
            data,
        },
    }
}

export const MSG_MINT_NFT_TYPES = {
  MsgValue: [
    {name: 'id',type: 'string'}, 
    {name: 'denom_id', type: 'string'}, 
    {name: 'name', type: 'string'}, 
    {name: 'uri', type: 'string'}, 
    {name: 'data', type: 'string'}, 
    {name: 'sender', type: 'string'}, 
    {name: 'recipient', type: 'string'}, 
    {name: 'uri_hash', type: 'string'}, 
  ],
}
export function createMsgMintNft(
  id: string, denom_id: string, name: string, uri: string, data: string,
  sender:string, recipient: string,uri_hash:string
) {
  return {
      type: "kynno/nft/MsgMintNFT",
      value: {
        id, 
        denom_id, 
        name, 
        uri, 
        data, 
        sender,
        recipient,
        uri_hash,
      },
  }
}


export const MSG_BURN_NFT_TYPES = {
  MsgValue: [
    {name: 'id',type: 'string'}, 
    {name: 'denom_id', type: 'string'},
    {name: 'sender', type: 'string'}
  ],
}

export function createMsgBurnNft(
  id: string, denom_id: string,sender?:string|undefined
) {
  return {
      type: "kynno/nft/MsgBurnNFT",
      value: {
        id, 
        denom_id,
        sender
      },
  }
}

export const MSG_EDITE_NFT_TYPES = {
  MsgValue: [
    {name: 'id',type: 'string'}, 
    {name: 'denom_id', type: 'string'},
    {name: 'name', type: 'string'}, 
    {name: 'uri', type: 'string'}, 
    {name: 'data', type: 'string'},
    {name: 'sender', type: 'string'},
    {name: 'uri_hash', type: 'string'},
  ]
}
export interface NewPropertiy {
  name?: string;
  uri?: string;
  data?: string;
}
export function createMsgEditeNft(
  id: string, 
  denom_id: string ,
  name?: string | undefined,
  uri?: string | undefined,
  data?: string | undefined,
  sender?: string | undefined,
  uri_hash?: string | undefined,
) {
  return {
      type: "kynno/nft/MsgEditeNFT",
      value: {
        id, 
        denom_id, 
        name,
        uri,
        data,
        sender,
        uri_hash
      },
  }
}

export const MSG_TRANSFER_NFT_TYPES = {
  MsgValue: [
    {name: 'id',type: 'string'}, 
    {name: 'denom_id', type: 'string'},
    {name: 'name', type: 'string'}, 
    {name: 'uri', type: 'string'}, 
    {name: 'data', type: 'string'},
    {name: 'sender', type: 'string'},
    {name: 'recipient', type: 'string'},
    {name: 'uri_hash', type: 'string'},
  ]
}

export function createMsgTransferNft(
  id?: string | undefined,
  denom_id?: string | undefined,
  name?: string | undefined,
  uri?: string | undefined,
  data?: string | undefined,
  sender?: string | undefined,
  recipient?: string | undefined,
  uri_hash?: string | undefined,
) {
  return {
      type: "kynno/nft/MsgTransferNFT",
      value: {
        id, 
        denom_id, 
        name,
        uri,
        data,
        sender,
        recipient,
        uri_hash
      },
  }
}