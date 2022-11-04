/// <reference types="node" />
import * as dependency_2 from "./../../base/v1beta1/coin";
import * as dependency_3 from "./bank";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.bank.v1beta1 {
    export class MsgSend extends pb_1.Message {
        constructor(data?: any[] | {
            from_address?: string;
            to_address?: string;
            amount?: dependency_2.cosmos.base.v1beta1.Coin[];
        });
        get from_address(): string;
        set from_address(value: string);
        get to_address(): string;
        set to_address(value: string);
        get amount(): dependency_2.cosmos.base.v1beta1.Coin[];
        set amount(value: dependency_2.cosmos.base.v1beta1.Coin[]);
        static fromObject(data: {
            from_address?: string;
            to_address?: string;
            amount?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }): MsgSend;
        toObject(): {
            from_address?: string | undefined;
            to_address?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSend;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSend;
    }
    export class MsgSendResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgSendResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSendResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSendResponse;
    }
    export class MsgMultiSend extends pb_1.Message {
        constructor(data?: any[] | {
            inputs?: dependency_3.cosmos.bank.v1beta1.Input[];
            outputs?: dependency_3.cosmos.bank.v1beta1.Output[];
        });
        get inputs(): dependency_3.cosmos.bank.v1beta1.Input[];
        set inputs(value: dependency_3.cosmos.bank.v1beta1.Input[]);
        get outputs(): dependency_3.cosmos.bank.v1beta1.Output[];
        set outputs(value: dependency_3.cosmos.bank.v1beta1.Output[]);
        static fromObject(data: {
            inputs?: ReturnType<typeof dependency_3.cosmos.bank.v1beta1.Input.prototype.toObject>[];
            outputs?: ReturnType<typeof dependency_3.cosmos.bank.v1beta1.Output.prototype.toObject>[];
        }): MsgMultiSend;
        toObject(): {
            inputs?: {
                address?: string | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            outputs?: {
                address?: string | undefined;
                coins?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgMultiSend;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgMultiSend;
    }
    export class MsgMultiSendResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgMultiSendResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgMultiSendResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgMultiSendResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedMsgService {
        static definition: {
            Send: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgSend) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgSend;
                responseSerialize: (message: MsgSendResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgSendResponse;
            };
            MultiSend: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgMultiSend) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgMultiSend;
                responseSerialize: (message: MsgMultiSendResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgMultiSendResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Send(call: grpc_1.ServerUnaryCall<MsgSend, MsgSendResponse>, callback: grpc_1.sendUnaryData<MsgSendResponse>): void;
        abstract MultiSend(call: grpc_1.ServerUnaryCall<MsgMultiSend, MsgMultiSendResponse>, callback: grpc_1.sendUnaryData<MsgMultiSendResponse>): void;
    }
    const MsgClient_base: grpc_1.ServiceClientConstructor;
    export class MsgClient extends MsgClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Send: GrpcUnaryServiceInterface<MsgSend, MsgSendResponse>;
        MultiSend: GrpcUnaryServiceInterface<MsgMultiSend, MsgMultiSendResponse>;
    }
    export {};
}
