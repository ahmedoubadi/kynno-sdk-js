import { Chain, Sender } from './common';
export declare function signatureToWeb3Extension(chain: Chain, sender: Sender, hexFormattedSignature: string): {
    message: import("../proto/proto/ethermint/types/v1/web3").ethermint.types.v1.ExtensionOptionsWeb3Tx;
    path: string;
};
