import { Sender } from "../../messages/common"

export const MSG_ISSUENAME_TYPES = {
  MsgValue: [{
    name: 'creator', type: 'string'
  },{
    name: 'name', type: 'string'
  }],
}
export function createMsgIssueName(
    sender:Sender,
    name: string,
) {
    return {
        type: "kynno/nameservice/MsgCreateName",
        value: {
          creator:sender.accountAddress,
          name,
        },
    }
}
  
