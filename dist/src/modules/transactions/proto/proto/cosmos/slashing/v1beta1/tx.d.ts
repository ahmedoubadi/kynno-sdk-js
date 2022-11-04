/// <reference types="node" />
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.slashing.v1beta1 {
    export class MsgUnjail extends pb_1.Message {
        constructor(data?: any[] | {
            validator_addr?: string;
        });
        get validator_addr(): string;
        set validator_addr(value: string);
        static fromObject(data: {
            validator_addr?: string;
        }): MsgUnjail;
        toObject(): {
            validator_addr?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUnjail;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgUnjail;
    }
    export class MsgUnjailResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgUnjailResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUnjailResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgUnjailResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedMsgService {
        static definition: {
            Unjail: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgUnjail) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgUnjail;
                responseSerialize: (message: MsgUnjailResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgUnjailResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Unjail(call: grpc_1.ServerUnaryCall<MsgUnjail, MsgUnjailResponse>, callback: grpc_1.sendUnaryData<MsgUnjailResponse>): void;
    }
    const MsgClient_base: grpc_1.ServiceClientConstructor;
    export class MsgClient extends MsgClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Unjail: GrpcUnaryServiceInterface<MsgUnjail, MsgUnjailResponse>;
    }
    export {};
}
