/// <reference types="node" />
import * as dependency_2 from "./../../../../google/protobuf/any";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace ibc.core.client.v1 {
    export class MsgCreateClient extends pb_1.Message {
        constructor(data?: any[] | {
            client_state?: dependency_2.google.protobuf.Any;
            consensus_state?: dependency_2.google.protobuf.Any;
            signer?: string;
        });
        get client_state(): dependency_2.google.protobuf.Any;
        set client_state(value: dependency_2.google.protobuf.Any);
        get consensus_state(): dependency_2.google.protobuf.Any;
        set consensus_state(value: dependency_2.google.protobuf.Any);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            client_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            consensus_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            signer?: string;
        }): MsgCreateClient;
        toObject(): {
            client_state?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            consensus_state?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCreateClient;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCreateClient;
    }
    export class MsgCreateClientResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgCreateClientResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCreateClientResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCreateClientResponse;
    }
    export class MsgUpdateClient extends pb_1.Message {
        constructor(data?: any[] | {
            client_id?: string;
            header?: dependency_2.google.protobuf.Any;
            signer?: string;
        });
        get client_id(): string;
        set client_id(value: string);
        get header(): dependency_2.google.protobuf.Any;
        set header(value: dependency_2.google.protobuf.Any);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            client_id?: string;
            header?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            signer?: string;
        }): MsgUpdateClient;
        toObject(): {
            client_id?: string | undefined;
            header?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUpdateClient;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgUpdateClient;
    }
    export class MsgUpdateClientResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgUpdateClientResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUpdateClientResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgUpdateClientResponse;
    }
    export class MsgUpgradeClient extends pb_1.Message {
        constructor(data?: any[] | {
            client_id?: string;
            client_state?: dependency_2.google.protobuf.Any;
            consensus_state?: dependency_2.google.protobuf.Any;
            proof_upgrade_client?: Uint8Array;
            proof_upgrade_consensus_state?: Uint8Array;
            signer?: string;
        });
        get client_id(): string;
        set client_id(value: string);
        get client_state(): dependency_2.google.protobuf.Any;
        set client_state(value: dependency_2.google.protobuf.Any);
        get consensus_state(): dependency_2.google.protobuf.Any;
        set consensus_state(value: dependency_2.google.protobuf.Any);
        get proof_upgrade_client(): Uint8Array;
        set proof_upgrade_client(value: Uint8Array);
        get proof_upgrade_consensus_state(): Uint8Array;
        set proof_upgrade_consensus_state(value: Uint8Array);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            client_id?: string;
            client_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            consensus_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            proof_upgrade_client?: Uint8Array;
            proof_upgrade_consensus_state?: Uint8Array;
            signer?: string;
        }): MsgUpgradeClient;
        toObject(): {
            client_id?: string | undefined;
            client_state?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            consensus_state?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            proof_upgrade_client?: Uint8Array | undefined;
            proof_upgrade_consensus_state?: Uint8Array | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUpgradeClient;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgUpgradeClient;
    }
    export class MsgUpgradeClientResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgUpgradeClientResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUpgradeClientResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgUpgradeClientResponse;
    }
    export class MsgSubmitMisbehaviour extends pb_1.Message {
        constructor(data?: any[] | {
            client_id?: string;
            misbehaviour?: dependency_2.google.protobuf.Any;
            signer?: string;
        });
        get client_id(): string;
        set client_id(value: string);
        get misbehaviour(): dependency_2.google.protobuf.Any;
        set misbehaviour(value: dependency_2.google.protobuf.Any);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            client_id?: string;
            misbehaviour?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            signer?: string;
        }): MsgSubmitMisbehaviour;
        toObject(): {
            client_id?: string | undefined;
            misbehaviour?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSubmitMisbehaviour;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSubmitMisbehaviour;
    }
    export class MsgSubmitMisbehaviourResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgSubmitMisbehaviourResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSubmitMisbehaviourResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSubmitMisbehaviourResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedMsgService {
        static definition: {
            CreateClient: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgCreateClient) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgCreateClient;
                responseSerialize: (message: MsgCreateClientResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgCreateClientResponse;
            };
            UpdateClient: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgUpdateClient) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgUpdateClient;
                responseSerialize: (message: MsgUpdateClientResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgUpdateClientResponse;
            };
            UpgradeClient: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgUpgradeClient) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgUpgradeClient;
                responseSerialize: (message: MsgUpgradeClientResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgUpgradeClientResponse;
            };
            SubmitMisbehaviour: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgSubmitMisbehaviour) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgSubmitMisbehaviour;
                responseSerialize: (message: MsgSubmitMisbehaviourResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgSubmitMisbehaviourResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract CreateClient(call: grpc_1.ServerUnaryCall<MsgCreateClient, MsgCreateClientResponse>, callback: grpc_1.sendUnaryData<MsgCreateClientResponse>): void;
        abstract UpdateClient(call: grpc_1.ServerUnaryCall<MsgUpdateClient, MsgUpdateClientResponse>, callback: grpc_1.sendUnaryData<MsgUpdateClientResponse>): void;
        abstract UpgradeClient(call: grpc_1.ServerUnaryCall<MsgUpgradeClient, MsgUpgradeClientResponse>, callback: grpc_1.sendUnaryData<MsgUpgradeClientResponse>): void;
        abstract SubmitMisbehaviour(call: grpc_1.ServerUnaryCall<MsgSubmitMisbehaviour, MsgSubmitMisbehaviourResponse>, callback: grpc_1.sendUnaryData<MsgSubmitMisbehaviourResponse>): void;
    }
    const MsgClient_base: grpc_1.ServiceClientConstructor;
    export class MsgClient extends MsgClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        CreateClient: GrpcUnaryServiceInterface<MsgCreateClient, MsgCreateClientResponse>;
        UpdateClient: GrpcUnaryServiceInterface<MsgUpdateClient, MsgUpdateClientResponse>;
        UpgradeClient: GrpcUnaryServiceInterface<MsgUpgradeClient, MsgUpgradeClientResponse>;
        SubmitMisbehaviour: GrpcUnaryServiceInterface<MsgSubmitMisbehaviour, MsgSubmitMisbehaviourResponse>;
    }
    export {};
}
