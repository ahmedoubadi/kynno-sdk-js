import { Sender } from '../../messages/common'
import * as nft from '../proto/kynno/nft/tx'
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
  const message = new nft.kynno.nft.MsgIssueDenom({
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
  })

  return {
    message,
    path: 'kynno.nft.MsgIssueDenom',
  }
}

export function createMsgMintNft(
  id: string, denom_id: string, name: string, uri: string, data: string,
  sender:string, recipient: string,uri_hash:string
) {

  const message = new nft.kynno.nft.MsgMintNFT({
    id, 
    denom_id, 
    name, 
    uri, 
    data, 
    sender,
    recipient,
    uri_hash,
  })

  return {
    message,
    path: 'kynno.nft.MsgMintNFT',
  }
}

export function createMsgBurnNft(
  id: string, denom_id: string,sender?: string| undefined
) {
  const message = new nft.kynno.nft.MsgBurnNFT({
    id, 
    denom_id, 
    sender
  })

  return {
    message,
    path: 'kynno.nft.MsgBurnNFT',
  }
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
  const message = new nft.kynno.nft.MsgEditNFT({
    id, 
    denom_id, 
    name,
    uri,
    data,
    sender,
    uri_hash
  })

  return {
    message,
    path: 'kynno.nft.MsgEditNFT',
  }
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
  const message = new nft.kynno.nft.MsgTransferNFT({
    id, 
    denom_id, 
    name,
    uri,
    data,
    sender,
    recipient,
    uri_hash
  })
  return {
    message,
    path: 'kynno.nft.MsgTransferNFT',
  }
}