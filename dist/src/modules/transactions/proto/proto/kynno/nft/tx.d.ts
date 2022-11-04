/// <reference types="node" />
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace kynno.nft {
    export class MsgIssueDenom extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
            name?: string;
            schema?: string;
            sender?: string;
            symbol?: string;
            mint_restricted?: boolean;
            update_restricted?: boolean;
            description?: string;
            uri?: string;
            uri_hash?: string;
            data?: string;
        });
        get id(): string;
        set id(value: string);
        get name(): string;
        set name(value: string);
        get schema(): string;
        set schema(value: string);
        get sender(): string;
        set sender(value: string);
        get symbol(): string;
        set symbol(value: string);
        get mint_restricted(): boolean;
        set mint_restricted(value: boolean);
        get update_restricted(): boolean;
        set update_restricted(value: boolean);
        get description(): string;
        set description(value: string);
        get uri(): string;
        set uri(value: string);
        get uri_hash(): string;
        set uri_hash(value: string);
        get data(): string;
        set data(value: string);
        static fromObject(data: {
            id?: string;
            name?: string;
            schema?: string;
            sender?: string;
            symbol?: string;
            mint_restricted?: boolean;
            update_restricted?: boolean;
            description?: string;
            uri?: string;
            uri_hash?: string;
            data?: string;
        }): MsgIssueDenom;
        toObject(): {
            id?: string | undefined;
            name?: string | undefined;
            schema?: string | undefined;
            sender?: string | undefined;
            symbol?: string | undefined;
            mint_restricted?: boolean | undefined;
            update_restricted?: boolean | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            uri_hash?: string | undefined;
            data?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgIssueDenom;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgIssueDenom;
    }
    export class MsgIssueDenomResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgIssueDenomResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgIssueDenomResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgIssueDenomResponse;
    }
    export class MsgTransferNFT extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
            denom_id?: string;
            name?: string;
            uri?: string;
            data?: string;
            sender?: string;
            recipient?: string;
            uri_hash?: string;
        });
        get id(): string;
        set id(value: string);
        get denom_id(): string;
        set denom_id(value: string);
        get name(): string;
        set name(value: string);
        get uri(): string;
        set uri(value: string);
        get data(): string;
        set data(value: string);
        get sender(): string;
        set sender(value: string);
        get recipient(): string;
        set recipient(value: string);
        get uri_hash(): string;
        set uri_hash(value: string);
        static fromObject(data: {
            id?: string;
            denom_id?: string;
            name?: string;
            uri?: string;
            data?: string;
            sender?: string;
            recipient?: string;
            uri_hash?: string;
        }): MsgTransferNFT;
        toObject(): {
            id?: string | undefined;
            denom_id?: string | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            data?: string | undefined;
            sender?: string | undefined;
            recipient?: string | undefined;
            uri_hash?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgTransferNFT;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgTransferNFT;
    }
    export class MsgTransferNFTResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgTransferNFTResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgTransferNFTResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgTransferNFTResponse;
    }
    export class MsgEditNFT extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
            denom_id?: string;
            name?: string;
            uri?: string;
            data?: string;
            sender?: string;
            uri_hash?: string;
        });
        get id(): string;
        set id(value: string);
        get denom_id(): string;
        set denom_id(value: string);
        get name(): string;
        set name(value: string);
        get uri(): string;
        set uri(value: string);
        get data(): string;
        set data(value: string);
        get sender(): string;
        set sender(value: string);
        get uri_hash(): string;
        set uri_hash(value: string);
        static fromObject(data: {
            id?: string;
            denom_id?: string;
            name?: string;
            uri?: string;
            data?: string;
            sender?: string;
            uri_hash?: string;
        }): MsgEditNFT;
        toObject(): {
            id?: string | undefined;
            denom_id?: string | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            data?: string | undefined;
            sender?: string | undefined;
            uri_hash?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgEditNFT;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgEditNFT;
    }
    export class MsgEditNFTResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgEditNFTResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgEditNFTResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgEditNFTResponse;
    }
    export class MsgMintNFT extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
            denom_id?: string;
            name?: string;
            uri?: string;
            data?: string;
            sender?: string;
            recipient?: string;
            uri_hash?: string;
        });
        get id(): string;
        set id(value: string);
        get denom_id(): string;
        set denom_id(value: string);
        get name(): string;
        set name(value: string);
        get uri(): string;
        set uri(value: string);
        get data(): string;
        set data(value: string);
        get sender(): string;
        set sender(value: string);
        get recipient(): string;
        set recipient(value: string);
        get uri_hash(): string;
        set uri_hash(value: string);
        static fromObject(data: {
            id?: string;
            denom_id?: string;
            name?: string;
            uri?: string;
            data?: string;
            sender?: string;
            recipient?: string;
            uri_hash?: string;
        }): MsgMintNFT;
        toObject(): {
            id?: string | undefined;
            denom_id?: string | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            data?: string | undefined;
            sender?: string | undefined;
            recipient?: string | undefined;
            uri_hash?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgMintNFT;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgMintNFT;
    }
    export class MsgMintNFTResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgMintNFTResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgMintNFTResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgMintNFTResponse;
    }
    export class MsgBurnNFT extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
            denom_id?: string;
            sender?: string;
        });
        get id(): string;
        set id(value: string);
        get denom_id(): string;
        set denom_id(value: string);
        get sender(): string;
        set sender(value: string);
        static fromObject(data: {
            id?: string;
            denom_id?: string;
            sender?: string;
        }): MsgBurnNFT;
        toObject(): {
            id?: string | undefined;
            denom_id?: string | undefined;
            sender?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgBurnNFT;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgBurnNFT;
    }
    export class MsgBurnNFTResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgBurnNFTResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgBurnNFTResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgBurnNFTResponse;
    }
    export class MsgTransferDenom extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
            sender?: string;
            recipient?: string;
        });
        get id(): string;
        set id(value: string);
        get sender(): string;
        set sender(value: string);
        get recipient(): string;
        set recipient(value: string);
        static fromObject(data: {
            id?: string;
            sender?: string;
            recipient?: string;
        }): MsgTransferDenom;
        toObject(): {
            id?: string | undefined;
            sender?: string | undefined;
            recipient?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgTransferDenom;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgTransferDenom;
    }
    export class MsgTransferDenomResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgTransferDenomResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgTransferDenomResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgTransferDenomResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedMsgService {
        static definition: {
            IssueDenom: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgIssueDenom) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgIssueDenom;
                responseSerialize: (message: MsgIssueDenomResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgIssueDenomResponse;
            };
            MintNFT: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgMintNFT) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgMintNFT;
                responseSerialize: (message: MsgMintNFTResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgMintNFTResponse;
            };
            EditNFT: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgEditNFT) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgEditNFT;
                responseSerialize: (message: MsgEditNFTResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgEditNFTResponse;
            };
            TransferNFT: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgTransferNFT) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgTransferNFT;
                responseSerialize: (message: MsgTransferNFTResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgTransferNFTResponse;
            };
            BurnNFT: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgBurnNFT) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgBurnNFT;
                responseSerialize: (message: MsgBurnNFTResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgBurnNFTResponse;
            };
            TransferDenom: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgTransferDenom) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgTransferDenom;
                responseSerialize: (message: MsgTransferDenomResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgTransferDenomResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract IssueDenom(call: grpc_1.ServerUnaryCall<MsgIssueDenom, MsgIssueDenomResponse>, callback: grpc_1.sendUnaryData<MsgIssueDenomResponse>): void;
        abstract MintNFT(call: grpc_1.ServerUnaryCall<MsgMintNFT, MsgMintNFTResponse>, callback: grpc_1.sendUnaryData<MsgMintNFTResponse>): void;
        abstract EditNFT(call: grpc_1.ServerUnaryCall<MsgEditNFT, MsgEditNFTResponse>, callback: grpc_1.sendUnaryData<MsgEditNFTResponse>): void;
        abstract TransferNFT(call: grpc_1.ServerUnaryCall<MsgTransferNFT, MsgTransferNFTResponse>, callback: grpc_1.sendUnaryData<MsgTransferNFTResponse>): void;
        abstract BurnNFT(call: grpc_1.ServerUnaryCall<MsgBurnNFT, MsgBurnNFTResponse>, callback: grpc_1.sendUnaryData<MsgBurnNFTResponse>): void;
        abstract TransferDenom(call: grpc_1.ServerUnaryCall<MsgTransferDenom, MsgTransferDenomResponse>, callback: grpc_1.sendUnaryData<MsgTransferDenomResponse>): void;
    }
    const MsgClient_base: grpc_1.ServiceClientConstructor;
    export class MsgClient extends MsgClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        IssueDenom: GrpcUnaryServiceInterface<MsgIssueDenom, MsgIssueDenomResponse>;
        MintNFT: GrpcUnaryServiceInterface<MsgMintNFT, MsgMintNFTResponse>;
        EditNFT: GrpcUnaryServiceInterface<MsgEditNFT, MsgEditNFTResponse>;
        TransferNFT: GrpcUnaryServiceInterface<MsgTransferNFT, MsgTransferNFTResponse>;
        BurnNFT: GrpcUnaryServiceInterface<MsgBurnNFT, MsgBurnNFTResponse>;
        TransferDenom: GrpcUnaryServiceInterface<MsgTransferDenom, MsgTransferDenomResponse>;
    }
    export {};
}
