/// <reference types="node" />
import * as dependency_2 from "./../../../google/protobuf/any";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.feegrant.v1beta1 {
    export class MsgGrantAllowance extends pb_1.Message {
        constructor(data?: any[] | {
            granter?: string;
            grantee?: string;
            allowance?: dependency_2.google.protobuf.Any;
        });
        get granter(): string;
        set granter(value: string);
        get grantee(): string;
        set grantee(value: string);
        get allowance(): dependency_2.google.protobuf.Any;
        set allowance(value: dependency_2.google.protobuf.Any);
        static fromObject(data: {
            granter?: string;
            grantee?: string;
            allowance?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
        }): MsgGrantAllowance;
        toObject(): {
            granter?: string | undefined;
            grantee?: string | undefined;
            allowance?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgGrantAllowance;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgGrantAllowance;
    }
    export class MsgGrantAllowanceResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgGrantAllowanceResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgGrantAllowanceResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgGrantAllowanceResponse;
    }
    export class MsgRevokeAllowance extends pb_1.Message {
        constructor(data?: any[] | {
            granter?: string;
            grantee?: string;
        });
        get granter(): string;
        set granter(value: string);
        get grantee(): string;
        set grantee(value: string);
        static fromObject(data: {
            granter?: string;
            grantee?: string;
        }): MsgRevokeAllowance;
        toObject(): {
            granter?: string | undefined;
            grantee?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRevokeAllowance;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgRevokeAllowance;
    }
    export class MsgRevokeAllowanceResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgRevokeAllowanceResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRevokeAllowanceResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgRevokeAllowanceResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedMsgService {
        static definition: {
            GrantAllowance: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgGrantAllowance) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgGrantAllowance;
                responseSerialize: (message: MsgGrantAllowanceResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgGrantAllowanceResponse;
            };
            RevokeAllowance: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgRevokeAllowance) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgRevokeAllowance;
                responseSerialize: (message: MsgRevokeAllowanceResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgRevokeAllowanceResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract GrantAllowance(call: grpc_1.ServerUnaryCall<MsgGrantAllowance, MsgGrantAllowanceResponse>, callback: grpc_1.sendUnaryData<MsgGrantAllowanceResponse>): void;
        abstract RevokeAllowance(call: grpc_1.ServerUnaryCall<MsgRevokeAllowance, MsgRevokeAllowanceResponse>, callback: grpc_1.sendUnaryData<MsgRevokeAllowanceResponse>): void;
    }
    const MsgClient_base: grpc_1.ServiceClientConstructor;
    export class MsgClient extends MsgClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        GrantAllowance: GrpcUnaryServiceInterface<MsgGrantAllowance, MsgGrantAllowanceResponse>;
        RevokeAllowance: GrpcUnaryServiceInterface<MsgRevokeAllowance, MsgRevokeAllowanceResponse>;
    }
    export {};
}
