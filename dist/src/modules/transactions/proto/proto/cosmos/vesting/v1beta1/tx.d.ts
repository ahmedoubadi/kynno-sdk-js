/// <reference types="node" />
import * as dependency_2 from "./../../base/v1beta1/coin";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.vesting.v1beta1 {
    export class MsgCreateVestingAccount extends pb_1.Message {
        constructor(data?: any[] | {
            from_address?: string;
            to_address?: string;
            amount?: dependency_2.cosmos.base.v1beta1.Coin[];
            end_time?: number;
            delayed?: boolean;
        });
        get from_address(): string;
        set from_address(value: string);
        get to_address(): string;
        set to_address(value: string);
        get amount(): dependency_2.cosmos.base.v1beta1.Coin[];
        set amount(value: dependency_2.cosmos.base.v1beta1.Coin[]);
        get end_time(): number;
        set end_time(value: number);
        get delayed(): boolean;
        set delayed(value: boolean);
        static fromObject(data: {
            from_address?: string;
            to_address?: string;
            amount?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            end_time?: number;
            delayed?: boolean;
        }): MsgCreateVestingAccount;
        toObject(): {
            from_address?: string | undefined;
            to_address?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            end_time?: number | undefined;
            delayed?: boolean | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCreateVestingAccount;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCreateVestingAccount;
    }
    export class MsgCreateVestingAccountResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgCreateVestingAccountResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCreateVestingAccountResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCreateVestingAccountResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedMsgService {
        static definition: {
            CreateVestingAccount: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgCreateVestingAccount) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgCreateVestingAccount;
                responseSerialize: (message: MsgCreateVestingAccountResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgCreateVestingAccountResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract CreateVestingAccount(call: grpc_1.ServerUnaryCall<MsgCreateVestingAccount, MsgCreateVestingAccountResponse>, callback: grpc_1.sendUnaryData<MsgCreateVestingAccountResponse>): void;
    }
    const MsgClient_base: grpc_1.ServiceClientConstructor;
    export class MsgClient extends MsgClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        CreateVestingAccount: GrpcUnaryServiceInterface<MsgCreateVestingAccount, MsgCreateVestingAccountResponse>;
    }
    export {};
}
