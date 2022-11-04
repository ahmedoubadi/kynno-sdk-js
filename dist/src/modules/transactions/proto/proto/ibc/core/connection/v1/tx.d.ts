/// <reference types="node" />
import * as dependency_2 from "./../../../../google/protobuf/any";
import * as dependency_3 from "./../../client/v1/client";
import * as dependency_4 from "./connection";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace ibc.core.connection.v1 {
    export class MsgConnectionOpenInit extends pb_1.Message {
        constructor(data?: any[] | {
            client_id?: string;
            counterparty?: dependency_4.ibc.core.connection.v1.Counterparty;
            version?: dependency_4.ibc.core.connection.v1.Version;
            delay_period?: number;
            signer?: string;
        });
        get client_id(): string;
        set client_id(value: string);
        get counterparty(): dependency_4.ibc.core.connection.v1.Counterparty;
        set counterparty(value: dependency_4.ibc.core.connection.v1.Counterparty);
        get version(): dependency_4.ibc.core.connection.v1.Version;
        set version(value: dependency_4.ibc.core.connection.v1.Version);
        get delay_period(): number;
        set delay_period(value: number);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            client_id?: string;
            counterparty?: ReturnType<typeof dependency_4.ibc.core.connection.v1.Counterparty.prototype.toObject>;
            version?: ReturnType<typeof dependency_4.ibc.core.connection.v1.Version.prototype.toObject>;
            delay_period?: number;
            signer?: string;
        }): MsgConnectionOpenInit;
        toObject(): {
            client_id?: string | undefined;
            counterparty?: {
                client_id?: string | undefined;
                connection_id?: string | undefined;
                prefix?: {
                    key_prefix?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            version?: {
                identifier?: string | undefined;
                features?: string[] | undefined;
            } | undefined;
            delay_period?: number | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgConnectionOpenInit;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenInit;
    }
    export class MsgConnectionOpenInitResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgConnectionOpenInitResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgConnectionOpenInitResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenInitResponse;
    }
    export class MsgConnectionOpenTry extends pb_1.Message {
        constructor(data?: any[] | {
            client_id?: string;
            previous_connection_id?: string;
            client_state?: dependency_2.google.protobuf.Any;
            counterparty?: dependency_4.ibc.core.connection.v1.Counterparty;
            delay_period?: number;
            counterparty_versions?: dependency_4.ibc.core.connection.v1.Version[];
            proof_height?: dependency_3.ibc.core.client.v1.Height;
            proof_init?: Uint8Array;
            proof_client?: Uint8Array;
            proof_consensus?: Uint8Array;
            consensus_height?: dependency_3.ibc.core.client.v1.Height;
            signer?: string;
        });
        get client_id(): string;
        set client_id(value: string);
        get previous_connection_id(): string;
        set previous_connection_id(value: string);
        get client_state(): dependency_2.google.protobuf.Any;
        set client_state(value: dependency_2.google.protobuf.Any);
        get counterparty(): dependency_4.ibc.core.connection.v1.Counterparty;
        set counterparty(value: dependency_4.ibc.core.connection.v1.Counterparty);
        get delay_period(): number;
        set delay_period(value: number);
        get counterparty_versions(): dependency_4.ibc.core.connection.v1.Version[];
        set counterparty_versions(value: dependency_4.ibc.core.connection.v1.Version[]);
        get proof_height(): dependency_3.ibc.core.client.v1.Height;
        set proof_height(value: dependency_3.ibc.core.client.v1.Height);
        get proof_init(): Uint8Array;
        set proof_init(value: Uint8Array);
        get proof_client(): Uint8Array;
        set proof_client(value: Uint8Array);
        get proof_consensus(): Uint8Array;
        set proof_consensus(value: Uint8Array);
        get consensus_height(): dependency_3.ibc.core.client.v1.Height;
        set consensus_height(value: dependency_3.ibc.core.client.v1.Height);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            client_id?: string;
            previous_connection_id?: string;
            client_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            counterparty?: ReturnType<typeof dependency_4.ibc.core.connection.v1.Counterparty.prototype.toObject>;
            delay_period?: number;
            counterparty_versions?: ReturnType<typeof dependency_4.ibc.core.connection.v1.Version.prototype.toObject>[];
            proof_height?: ReturnType<typeof dependency_3.ibc.core.client.v1.Height.prototype.toObject>;
            proof_init?: Uint8Array;
            proof_client?: Uint8Array;
            proof_consensus?: Uint8Array;
            consensus_height?: ReturnType<typeof dependency_3.ibc.core.client.v1.Height.prototype.toObject>;
            signer?: string;
        }): MsgConnectionOpenTry;
        toObject(): {
            client_id?: string | undefined;
            previous_connection_id?: string | undefined;
            client_state?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            counterparty?: {
                client_id?: string | undefined;
                connection_id?: string | undefined;
                prefix?: {
                    key_prefix?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            delay_period?: number | undefined;
            counterparty_versions?: {
                identifier?: string | undefined;
                features?: string[] | undefined;
            }[] | undefined;
            proof_height?: {
                revision_number?: number | undefined;
                revision_height?: number | undefined;
            } | undefined;
            proof_init?: Uint8Array | undefined;
            proof_client?: Uint8Array | undefined;
            proof_consensus?: Uint8Array | undefined;
            consensus_height?: {
                revision_number?: number | undefined;
                revision_height?: number | undefined;
            } | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgConnectionOpenTry;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenTry;
    }
    export class MsgConnectionOpenTryResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgConnectionOpenTryResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgConnectionOpenTryResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenTryResponse;
    }
    export class MsgConnectionOpenAck extends pb_1.Message {
        constructor(data?: any[] | {
            connection_id?: string;
            counterparty_connection_id?: string;
            version?: dependency_4.ibc.core.connection.v1.Version;
            client_state?: dependency_2.google.protobuf.Any;
            proof_height?: dependency_3.ibc.core.client.v1.Height;
            proof_try?: Uint8Array;
            proof_client?: Uint8Array;
            proof_consensus?: Uint8Array;
            consensus_height?: dependency_3.ibc.core.client.v1.Height;
            signer?: string;
        });
        get connection_id(): string;
        set connection_id(value: string);
        get counterparty_connection_id(): string;
        set counterparty_connection_id(value: string);
        get version(): dependency_4.ibc.core.connection.v1.Version;
        set version(value: dependency_4.ibc.core.connection.v1.Version);
        get client_state(): dependency_2.google.protobuf.Any;
        set client_state(value: dependency_2.google.protobuf.Any);
        get proof_height(): dependency_3.ibc.core.client.v1.Height;
        set proof_height(value: dependency_3.ibc.core.client.v1.Height);
        get proof_try(): Uint8Array;
        set proof_try(value: Uint8Array);
        get proof_client(): Uint8Array;
        set proof_client(value: Uint8Array);
        get proof_consensus(): Uint8Array;
        set proof_consensus(value: Uint8Array);
        get consensus_height(): dependency_3.ibc.core.client.v1.Height;
        set consensus_height(value: dependency_3.ibc.core.client.v1.Height);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            connection_id?: string;
            counterparty_connection_id?: string;
            version?: ReturnType<typeof dependency_4.ibc.core.connection.v1.Version.prototype.toObject>;
            client_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            proof_height?: ReturnType<typeof dependency_3.ibc.core.client.v1.Height.prototype.toObject>;
            proof_try?: Uint8Array;
            proof_client?: Uint8Array;
            proof_consensus?: Uint8Array;
            consensus_height?: ReturnType<typeof dependency_3.ibc.core.client.v1.Height.prototype.toObject>;
            signer?: string;
        }): MsgConnectionOpenAck;
        toObject(): {
            connection_id?: string | undefined;
            counterparty_connection_id?: string | undefined;
            version?: {
                identifier?: string | undefined;
                features?: string[] | undefined;
            } | undefined;
            client_state?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            proof_height?: {
                revision_number?: number | undefined;
                revision_height?: number | undefined;
            } | undefined;
            proof_try?: Uint8Array | undefined;
            proof_client?: Uint8Array | undefined;
            proof_consensus?: Uint8Array | undefined;
            consensus_height?: {
                revision_number?: number | undefined;
                revision_height?: number | undefined;
            } | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgConnectionOpenAck;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenAck;
    }
    export class MsgConnectionOpenAckResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgConnectionOpenAckResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgConnectionOpenAckResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenAckResponse;
    }
    export class MsgConnectionOpenConfirm extends pb_1.Message {
        constructor(data?: any[] | {
            connection_id?: string;
            proof_ack?: Uint8Array;
            proof_height?: dependency_3.ibc.core.client.v1.Height;
            signer?: string;
        });
        get connection_id(): string;
        set connection_id(value: string);
        get proof_ack(): Uint8Array;
        set proof_ack(value: Uint8Array);
        get proof_height(): dependency_3.ibc.core.client.v1.Height;
        set proof_height(value: dependency_3.ibc.core.client.v1.Height);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            connection_id?: string;
            proof_ack?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_3.ibc.core.client.v1.Height.prototype.toObject>;
            signer?: string;
        }): MsgConnectionOpenConfirm;
        toObject(): {
            connection_id?: string | undefined;
            proof_ack?: Uint8Array | undefined;
            proof_height?: {
                revision_number?: number | undefined;
                revision_height?: number | undefined;
            } | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgConnectionOpenConfirm;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenConfirm;
    }
    export class MsgConnectionOpenConfirmResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgConnectionOpenConfirmResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgConnectionOpenConfirmResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenConfirmResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedMsgService {
        static definition: {
            ConnectionOpenInit: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgConnectionOpenInit) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgConnectionOpenInit;
                responseSerialize: (message: MsgConnectionOpenInitResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgConnectionOpenInitResponse;
            };
            ConnectionOpenTry: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgConnectionOpenTry) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgConnectionOpenTry;
                responseSerialize: (message: MsgConnectionOpenTryResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgConnectionOpenTryResponse;
            };
            ConnectionOpenAck: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgConnectionOpenAck) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgConnectionOpenAck;
                responseSerialize: (message: MsgConnectionOpenAckResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgConnectionOpenAckResponse;
            };
            ConnectionOpenConfirm: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgConnectionOpenConfirm) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgConnectionOpenConfirm;
                responseSerialize: (message: MsgConnectionOpenConfirmResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgConnectionOpenConfirmResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract ConnectionOpenInit(call: grpc_1.ServerUnaryCall<MsgConnectionOpenInit, MsgConnectionOpenInitResponse>, callback: grpc_1.sendUnaryData<MsgConnectionOpenInitResponse>): void;
        abstract ConnectionOpenTry(call: grpc_1.ServerUnaryCall<MsgConnectionOpenTry, MsgConnectionOpenTryResponse>, callback: grpc_1.sendUnaryData<MsgConnectionOpenTryResponse>): void;
        abstract ConnectionOpenAck(call: grpc_1.ServerUnaryCall<MsgConnectionOpenAck, MsgConnectionOpenAckResponse>, callback: grpc_1.sendUnaryData<MsgConnectionOpenAckResponse>): void;
        abstract ConnectionOpenConfirm(call: grpc_1.ServerUnaryCall<MsgConnectionOpenConfirm, MsgConnectionOpenConfirmResponse>, callback: grpc_1.sendUnaryData<MsgConnectionOpenConfirmResponse>): void;
    }
    const MsgClient_base: grpc_1.ServiceClientConstructor;
    export class MsgClient extends MsgClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        ConnectionOpenInit: GrpcUnaryServiceInterface<MsgConnectionOpenInit, MsgConnectionOpenInitResponse>;
        ConnectionOpenTry: GrpcUnaryServiceInterface<MsgConnectionOpenTry, MsgConnectionOpenTryResponse>;
        ConnectionOpenAck: GrpcUnaryServiceInterface<MsgConnectionOpenAck, MsgConnectionOpenAckResponse>;
        ConnectionOpenConfirm: GrpcUnaryServiceInterface<MsgConnectionOpenConfirm, MsgConnectionOpenConfirmResponse>;
    }
    export {};
}
