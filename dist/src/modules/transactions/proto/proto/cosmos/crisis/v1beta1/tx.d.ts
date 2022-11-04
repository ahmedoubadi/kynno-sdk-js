/// <reference types="node" />
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.crisis.v1beta1 {
    export class MsgVerifyInvariant extends pb_1.Message {
        constructor(data?: any[] | {
            sender?: string;
            invariant_module_name?: string;
            invariant_route?: string;
        });
        get sender(): string;
        set sender(value: string);
        get invariant_module_name(): string;
        set invariant_module_name(value: string);
        get invariant_route(): string;
        set invariant_route(value: string);
        static fromObject(data: {
            sender?: string;
            invariant_module_name?: string;
            invariant_route?: string;
        }): MsgVerifyInvariant;
        toObject(): {
            sender?: string | undefined;
            invariant_module_name?: string | undefined;
            invariant_route?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgVerifyInvariant;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgVerifyInvariant;
    }
    export class MsgVerifyInvariantResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgVerifyInvariantResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgVerifyInvariantResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgVerifyInvariantResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedMsgService {
        static definition: {
            VerifyInvariant: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgVerifyInvariant) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgVerifyInvariant;
                responseSerialize: (message: MsgVerifyInvariantResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgVerifyInvariantResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract VerifyInvariant(call: grpc_1.ServerUnaryCall<MsgVerifyInvariant, MsgVerifyInvariantResponse>, callback: grpc_1.sendUnaryData<MsgVerifyInvariantResponse>): void;
    }
    const MsgClient_base: grpc_1.ServiceClientConstructor;
    export class MsgClient extends MsgClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        VerifyInvariant: GrpcUnaryServiceInterface<MsgVerifyInvariant, MsgVerifyInvariantResponse>;
    }
    export {};
}
