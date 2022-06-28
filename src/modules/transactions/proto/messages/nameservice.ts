import { Sender } from '../../messages/common'
import * as nameservice from '../proto/kynno/nameservice/tx'
export function createMsgIssueName(
    sender:Sender,
    name: string,
) {
  const message = new nameservice.kynno.nameservice.MsgCreateName({
    creator:sender.accountAddress,
    name,
  })

  return {
    message,
    path: 'kynno.nameservice.MsgCreateName',
  }
}