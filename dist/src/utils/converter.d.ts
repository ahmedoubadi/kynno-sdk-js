/// <reference types="node" />
export declare const ETH: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => string;
    name: string;
};
export declare const ETHERMINT: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => any;
    name: string;
};
export declare const ethToEthermint: (ethAddress: string) => any;
export declare const ethermintToEth: (ethermintAddress: string) => string;
export declare const KYNNO: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => any;
    name: string;
};
export declare const ethToKynno: (ethAddress: string) => any;
export declare const kynnoToEth: (kynnoAddress: string) => string;
export declare const OSMOSIS: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => any;
    name: string;
};
export declare const ethToOsmosis: (ethAddress: string) => any;
export declare const osmosisToEth: (kynnoAddress: string) => string;
export declare const COSMOS: {
    decoder: (data: string) => Buffer;
    encoder: (data: Buffer) => any;
    name: string;
};
export declare const ethToCosmos: (ethAddress: string) => any;
export declare const cosmosToEth: (kynnoAddress: string) => string;
