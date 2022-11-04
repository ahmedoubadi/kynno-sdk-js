/// <reference types="node" />
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace kynno.rewardshare.v1 {
    export class MsgRegisterRewardshare extends pb_1.Message {
        constructor(data?: any[] | {
            contract_address?: string;
            deployer_address?: string;
            withdrawer_address?: string;
            nonces?: number[];
        });
        get contract_address(): string;
        set contract_address(value: string);
        get deployer_address(): string;
        set deployer_address(value: string);
        get withdrawer_address(): string;
        set withdrawer_address(value: string);
        get nonces(): number[];
        set nonces(value: number[]);
        static fromObject(data: {
            contract_address?: string;
            deployer_address?: string;
            withdrawer_address?: string;
            nonces?: number[];
        }): MsgRegisterRewardshare;
        toObject(): {
            contract_address?: string | undefined;
            deployer_address?: string | undefined;
            withdrawer_address?: string | undefined;
            nonces?: number[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRegisterRewardshare;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgRegisterRewardshare;
    }
    export class MsgRegisterRewardshareResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgRegisterRewardshareResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRegisterRewardshareResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgRegisterRewardshareResponse;
    }
    export class MsgUpdateRewardshare extends pb_1.Message {
        constructor(data?: any[] | {
            contract_address?: string;
            deployer_address?: string;
            withdrawer_address?: string;
        });
        get contract_address(): string;
        set contract_address(value: string);
        get deployer_address(): string;
        set deployer_address(value: string);
        get withdrawer_address(): string;
        set withdrawer_address(value: string);
        static fromObject(data: {
            contract_address?: string;
            deployer_address?: string;
            withdrawer_address?: string;
        }): MsgUpdateRewardshare;
        toObject(): {
            contract_address?: string | undefined;
            deployer_address?: string | undefined;
            withdrawer_address?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUpdateRewardshare;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgUpdateRewardshare;
    }
    export class MsgUpdateRewardshareResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgUpdateRewardshareResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUpdateRewardshareResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgUpdateRewardshareResponse;
    }
    export class MsgCancelRewardshare extends pb_1.Message {
        constructor(data?: any[] | {
            contract_address?: string;
            deployer_address?: string;
        });
        get contract_address(): string;
        set contract_address(value: string);
        get deployer_address(): string;
        set deployer_address(value: string);
        static fromObject(data: {
            contract_address?: string;
            deployer_address?: string;
        }): MsgCancelRewardshare;
        toObject(): {
            contract_address?: string | undefined;
            deployer_address?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCancelRewardshare;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCancelRewardshare;
    }
    export class MsgCancelRewardshareResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgCancelRewardshareResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCancelRewardshareResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCancelRewardshareResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedMsgService {
        static definition: {
            RegisterRewardshare: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgRegisterRewardshare) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgRegisterRewardshare;
                responseSerialize: (message: MsgRegisterRewardshareResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgRegisterRewardshareResponse;
            };
            UpdateRewardshare: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgUpdateRewardshare) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgUpdateRewardshare;
                responseSerialize: (message: MsgUpdateRewardshareResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgUpdateRewardshareResponse;
            };
            CancelRewardshare: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgCancelRewardshare) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgCancelRewardshare;
                responseSerialize: (message: MsgCancelRewardshareResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgCancelRewardshareResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract RegisterRewardshare(call: grpc_1.ServerUnaryCall<MsgRegisterRewardshare, MsgRegisterRewardshareResponse>, callback: grpc_1.sendUnaryData<MsgRegisterRewardshareResponse>): void;
        abstract UpdateRewardshare(call: grpc_1.ServerUnaryCall<MsgUpdateRewardshare, MsgUpdateRewardshareResponse>, callback: grpc_1.sendUnaryData<MsgUpdateRewardshareResponse>): void;
        abstract CancelRewardshare(call: grpc_1.ServerUnaryCall<MsgCancelRewardshare, MsgCancelRewardshareResponse>, callback: grpc_1.sendUnaryData<MsgCancelRewardshareResponse>): void;
    }
    const MsgClient_base: grpc_1.ServiceClientConstructor;
    export class MsgClient extends MsgClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        RegisterRewardshare: GrpcUnaryServiceInterface<MsgRegisterRewardshare, MsgRegisterRewardshareResponse>;
        UpdateRewardshare: GrpcUnaryServiceInterface<MsgUpdateRewardshare, MsgUpdateRewardshareResponse>;
        CancelRewardshare: GrpcUnaryServiceInterface<MsgCancelRewardshare, MsgCancelRewardshareResponse>;
    }
    export {};
}
