import {
    createMsgIssueName as protoMsgIssuName,
    createTransaction,
} from '../proto'

import {
    createEIP712,
    generateFee,
    generateMessage,
    generateTypes,
    MSG_ISSUENAME_TYPES,
} from '../eip712'
  
import { Chain, Fee, Sender } from './common'
import { createMsgIssueName } from '../eip712/messages/nameservice'
  
export interface MsgIssueNameParams {
    name: string
}
  
export function createTxMsgIssueName(
    chain: Chain,
    sender: Sender,
    fee: Fee,
    memo: string,
    params: MsgIssueNameParams,
  ) {
    // EIP712
    const feeObject = generateFee(
      fee.amount,
      fee.denom,
      fee.gas,
      sender.accountAddress,
    )
    const types = generateTypes(MSG_ISSUENAME_TYPES)
    const msg = createMsgIssueName(
        sender,
        params.name,
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
    const protoMessage = protoMsgIssuName(
        sender,
        params.name,
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