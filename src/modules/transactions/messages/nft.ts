import {
    createMsgIssueDenom as protoMsgIssuDenom,
    createMsgMintNft as protoMsgMintNft,
    createMsgTransferNft as protoMsgTransferNft,
    createMsgBurnNft as protoMsgBurnNft,
    createMsgEditeNft as protoMsgEditeNft,
    createTransaction,
} from '../proto'

import {
    createEIP712,
    generateFee,
    generateMessage,
    generateTypes,
    MSG_ISSUEDENOM_TYPES,
    MSG_MINT_NFT_TYPES,
    MSG_TRANSFER_NFT_TYPES,
    MSG_BURN_NFT_TYPES,
    MSG_EDITE_NFT_TYPES
} from '../eip712'
  
import { Chain, Fee, Sender } from './common'
import { createMsgIssueDenom,createMsgMintNft,createMsgTransferNft,
  createMsgBurnNft,createMsgEditeNft
 } from '../eip712/messages/nft'
  
export interface MsgIssueDenomParams {
    id: string
    name: string
    schema: string,
    symbol: string,
    mint_restricted: boolean,
    update_restricted:boolean,
    description: string,
    uri: string,
    uri_hash: string,
    data: string,
}

export interface MsgMintNftParams {
  id: string, denom_id: string, name: string, uri: string, data: string,
  sender:string, recipient: string,uri_hash:string
}

export interface MsgTransferNftParams {
  id: string,
  denom_id: string,
  name: string,
  uri: string,
  data: string,
  sender: string,
  recipient: string,
  uri_hash: string,
}

export interface MsgBurnNftParams {
  id: string, denom_id: string,sender: string
}

export interface MsgEditeNftParams {
  id: string, 
  denom_id: string ,
  name?: string | undefined,
  uri?: string | undefined,
  data?: string | undefined,
  sender?: string | undefined,
  uri_hash?: string | undefined,
}
export function createTxMsgIssueDenom(
    chain: Chain,
    sender: Sender,
    fee: Fee,
    memo: string,
    params: MsgIssueDenomParams,
  ) {
    // EIP712
    const feeObject = generateFee(
      fee.amount,
      fee.denom,
      fee.gas,
      sender.accountAddress,
    )
    const types = generateTypes(MSG_ISSUEDENOM_TYPES)
    const msg = createMsgIssueDenom(
      params.id,
      params.name,
      params.schema,
      sender,
      params.symbol,
      params.mint_restricted,
      params.update_restricted,
      params.description,
      params.uri,
      params.uri_hash,
      params.data,
    )
    const messages = generateMessage(
      sender.accountNumber.toString(),
      sender.sequence.toString(),
      chain.cosmosChainId,
      memo,
      feeObject,
      msg,
    )
    const eipToSign = createEIP712(types, chain.chainId, messages)
  
    // Cosmos
    const protoMessage = protoMsgIssuDenom(
        params.id,
        params.name,
        params.schema,
        sender,
        params.symbol,
        params.mint_restricted,
        params.update_restricted,
        params.description,
        params.uri,
        params.uri_hash,
        params.data,
    )
    const tx = createTransaction(
      protoMessage,
      memo,
      fee.amount,
      fee.denom,
      parseInt(fee.gas, 10),
      'ethsecp256',
      sender.pubkey,
      sender.sequence,
      sender.accountNumber,
      chain.cosmosChainId,
    )
  
    return {
      signDirect: tx.signDirect,
      legacyAmino: tx.legacyAmino,
      eipToSign,
    }
}

export function createTxMsgMintNft(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MsgMintNftParams,
) {
  // EIP712
  const feeObject = generateFee(
    fee.amount,
    fee.denom,
    fee.gas,
    sender.accountAddress,
  )
  const types = generateTypes(MSG_MINT_NFT_TYPES)
  const msg = createMsgMintNft(
    params.id, 
    params.denom_id, 
    params.name, 
    params.uri, 
    params.data, 
    params.sender,
    params.recipient,
    params.uri_hash
  )
  const messages = generateMessage(
    sender.accountNumber.toString(),
    sender.sequence.toString(),
    chain.cosmosChainId,
    memo,
    feeObject,
    msg,
  )
  const eipToSign = createEIP712(types, chain.chainId, messages)

  // Cosmos
  const protoMessage = protoMsgMintNft(
    params.id, 
    params.denom_id, 
    params.name, 
    params.uri, 
    params.data, 
    params.sender,
    params.recipient,
    params.uri_hash
  )
  const tx = createTransaction(
    protoMessage,
    memo,
    fee.amount,
    fee.denom,
    parseInt(fee.gas, 10),
    'ethsecp256',
    sender.pubkey,
    sender.sequence,
    sender.accountNumber,
    chain.cosmosChainId,
  )

  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign,
  }
}

export function createTxMsgTransferNft(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MsgTransferNftParams,
) {
  // EIP712
  const feeObject = generateFee(
    fee.amount,
    fee.denom,
    fee.gas,
    sender.accountAddress,
  )
  const types = generateTypes(MSG_TRANSFER_NFT_TYPES)
  const msg = createMsgTransferNft(
    params.id, 
    params.denom_id, 
    params.name, 
    params.uri, 
    params.data,
    params.sender, 
    params.recipient,
    params.uri_hash
  )
  const messages = generateMessage(
    sender.accountNumber.toString(),
    sender.sequence.toString(),
    chain.cosmosChainId,
    memo,
    feeObject,
    msg,
  )
  const eipToSign = createEIP712(types, chain.chainId, messages)

  // Cosmos
  const protoMessage = protoMsgTransferNft(
    params.id, 
    params.denom_id, 
    params.name, 
    params.uri, 
    params.data,
    params.sender, 
    params.recipient,
    params.uri_hash
  )
  const tx = createTransaction(
    protoMessage,
    memo,
    fee.amount,
    fee.denom,
    parseInt(fee.gas, 10),
    'ethsecp256',
    sender.pubkey,
    sender.sequence,
    sender.accountNumber,
    chain.cosmosChainId,
  )

  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign,
  }
}

export function createTxMsgBurnNft(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MsgBurnNftParams,
) {
  // EIP712
  const feeObject = generateFee(
    fee.amount,
    fee.denom,
    fee.gas,
    sender.accountAddress,
  )
  const types = generateTypes(MSG_BURN_NFT_TYPES)
  const msg = createMsgBurnNft(
    params.id, 
    params.denom_id, 
    params.sender, 
  )
  const messages = generateMessage(
    sender.accountNumber.toString(),
    sender.sequence.toString(),
    chain.cosmosChainId,
    memo,
    feeObject,
    msg,
  )
  const eipToSign = createEIP712(types, chain.chainId, messages)

  // Cosmos
  const protoMessage = protoMsgBurnNft(
    params.id, 
    params.denom_id, 
    params.sender, 
  )
  const tx = createTransaction(
    protoMessage,
    memo,
    fee.amount,
    fee.denom,
    parseInt(fee.gas, 10),
    'ethsecp256',
    sender.pubkey,
    sender.sequence,
    sender.accountNumber,
    chain.cosmosChainId,
  )

  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign,
  }
}

export function createTxMsgEditeNft(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MsgEditeNftParams,
) {
  // EIP712
  const feeObject = generateFee(
    fee.amount,
    fee.denom,
    fee.gas,
    sender.accountAddress,
  )
  const types = generateTypes(MSG_EDITE_NFT_TYPES)
  const msg = createMsgEditeNft(
    params.id, 
    params.denom_id, 
    params.name,
    params.uri,
    params.data,
    params.sender,
    params.uri_hash
  )
  const messages = generateMessage(
    sender.accountNumber.toString(),
    sender.sequence.toString(),
    chain.cosmosChainId,
    memo,
    feeObject,
    msg,
  )
  const eipToSign = createEIP712(types, chain.chainId, messages)

  // Cosmos
  const protoMessage = protoMsgEditeNft(
    params.id, 
    params.denom_id, 
    params.name,
    params.uri,
    params.data,
    params.sender,
    params.uri_hash
  )
  const tx = createTransaction(
    protoMessage,
    memo,
    fee.amount,
    fee.denom,
    parseInt(fee.gas, 10),
    'ethsecp256',
    sender.pubkey,
    sender.sequence,
    sender.accountNumber,
    chain.cosmosChainId,
  )

  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
    eipToSign,
  }
}