import { Sender } from '../../messages/common';
import * as nameservice from '../proto/kynno/nameservice/tx';
export declare function createMsgIssueName(sender: Sender, name: string): {
    message: nameservice.kynno.nameservice.MsgCreateName;
    path: string;
};
