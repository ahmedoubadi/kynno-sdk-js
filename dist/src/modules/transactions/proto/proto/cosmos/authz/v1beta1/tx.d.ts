/// <reference types="node" />
import * as dependency_4 from "./../../../google/protobuf/any";
import * as dependency_6 from "./authz";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.authz.v1beta1 {
    export class MsgGrant extends pb_1.Message {
        constructor(data?: any[] | {
            granter?: string;
            grantee?: string;
            grant?: dependency_6.cosmos.authz.v1beta1.Grant;
        });
        get granter(): string;
        set granter(value: string);
        get grantee(): string;
        set grantee(value: string);
        get grant(): dependency_6.cosmos.authz.v1beta1.Grant;
        set grant(value: dependency_6.cosmos.authz.v1beta1.Grant);
        static fromObject(data: {
            granter?: string;
            grantee?: string;
            grant?: ReturnType<typeof dependency_6.cosmos.authz.v1beta1.Grant.prototype.toObject>;
        }): MsgGrant;
        toObject(): {
            granter?: string | undefined;
            grantee?: string | undefined;
            grant?: {
                authorization?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                expiration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgGrant;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgGrant;
    }
    export class MsgExecResponse extends pb_1.Message {
        constructor(data?: any[] | {
            results?: Uint8Array[];
        });
        get results(): Uint8Array[];
        set results(value: Uint8Array[]);
        static fromObject(data: {
            results?: Uint8Array[];
        }): MsgExecResponse;
        toObject(): {
            results?: Uint8Array[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgExecResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgExecResponse;
    }
    export class MsgExec extends pb_1.Message {
        constructor(data?: any[] | {
            grantee?: string;
            msgs?: dependency_4.google.protobuf.Any[];
        });
        get grantee(): string;
        set grantee(value: string);
        get msgs(): dependency_4.google.protobuf.Any[];
        set msgs(value: dependency_4.google.protobuf.Any[]);
        static fromObject(data: {
            grantee?: string;
            msgs?: ReturnType<typeof dependency_4.google.protobuf.Any.prototype.toObject>[];
        }): MsgExec;
        toObject(): {
            grantee?: string | undefined;
            msgs?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgExec;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgExec;
    }
    export class MsgGrantResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgGrantResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgGrantResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgGrantResponse;
    }
    export class MsgRevoke extends pb_1.Message {
        constructor(data?: any[] | {
            granter?: string;
            grantee?: string;
            msg_type_url?: string;
        });
        get granter(): string;
        set granter(value: string);
        get grantee(): string;
        set grantee(value: string);
        get msg_type_url(): string;
        set msg_type_url(value: string);
        static fromObject(data: {
            granter?: string;
            grantee?: string;
            msg_type_url?: string;
        }): MsgRevoke;
        toObject(): {
            granter?: string | undefined;
            grantee?: string | undefined;
            msg_type_url?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRevoke;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgRevoke;
    }
    export class MsgRevokeResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgRevokeResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRevokeResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgRevokeResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedMsgService {
        static definition: {
            Grant: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgGrant) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgGrant;
                responseSerialize: (message: MsgGrantResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgGrantResponse;
            };
            Exec: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgExec) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgExec;
                responseSerialize: (message: MsgExecResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgExecResponse;
            };
            Revoke: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgRevoke) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgRevoke;
                responseSerialize: (message: MsgRevokeResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgRevokeResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Grant(call: grpc_1.ServerUnaryCall<MsgGrant, MsgGrantResponse>, callback: grpc_1.sendUnaryData<MsgGrantResponse>): void;
        abstract Exec(call: grpc_1.ServerUnaryCall<MsgExec, MsgExecResponse>, callback: grpc_1.sendUnaryData<MsgExecResponse>): void;
        abstract Revoke(call: grpc_1.ServerUnaryCall<MsgRevoke, MsgRevokeResponse>, callback: grpc_1.sendUnaryData<MsgRevokeResponse>): void;
    }
    const MsgClient_base: grpc_1.ServiceClientConstructor;
    export class MsgClient extends MsgClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Grant: GrpcUnaryServiceInterface<MsgGrant, MsgGrantResponse>;
        Exec: GrpcUnaryServiceInterface<MsgExec, MsgExecResponse>;
        Revoke: GrpcUnaryServiceInterface<MsgRevoke, MsgRevokeResponse>;
    }
    export {};
}
