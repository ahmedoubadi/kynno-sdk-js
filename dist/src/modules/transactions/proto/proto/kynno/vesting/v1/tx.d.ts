/// <reference types="node" />
import * as dependency_3 from "./../../../google/protobuf/timestamp";
import * as dependency_4 from "./../../../cosmos/vesting/v1beta1/vesting";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace kynno.vesting.v1 {
    export class MsgCreateClawbackVestingAccount extends pb_1.Message {
        constructor(data?: any[] | {
            from_address?: string;
            to_address?: string;
            start_time?: dependency_3.google.protobuf.Timestamp;
            lockup_periods?: dependency_4.cosmos.vesting.v1beta1.Period[];
            vesting_periods?: dependency_4.cosmos.vesting.v1beta1.Period[];
            merge?: boolean;
        });
        get from_address(): string;
        set from_address(value: string);
        get to_address(): string;
        set to_address(value: string);
        get start_time(): dependency_3.google.protobuf.Timestamp;
        set start_time(value: dependency_3.google.protobuf.Timestamp);
        get lockup_periods(): dependency_4.cosmos.vesting.v1beta1.Period[];
        set lockup_periods(value: dependency_4.cosmos.vesting.v1beta1.Period[]);
        get vesting_periods(): dependency_4.cosmos.vesting.v1beta1.Period[];
        set vesting_periods(value: dependency_4.cosmos.vesting.v1beta1.Period[]);
        get merge(): boolean;
        set merge(value: boolean);
        static fromObject(data: {
            from_address?: string;
            to_address?: string;
            start_time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
            lockup_periods?: ReturnType<typeof dependency_4.cosmos.vesting.v1beta1.Period.prototype.toObject>[];
            vesting_periods?: ReturnType<typeof dependency_4.cosmos.vesting.v1beta1.Period.prototype.toObject>[];
            merge?: boolean;
        }): MsgCreateClawbackVestingAccount;
        toObject(): {
            from_address?: string | undefined;
            to_address?: string | undefined;
            start_time?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            lockup_periods?: {
                length?: number | undefined;
                amount?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            vesting_periods?: {
                length?: number | undefined;
                amount?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            merge?: boolean | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCreateClawbackVestingAccount;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCreateClawbackVestingAccount;
    }
    export class MsgCreateClawbackVestingAccountResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgCreateClawbackVestingAccountResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCreateClawbackVestingAccountResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCreateClawbackVestingAccountResponse;
    }
    export class MsgClawback extends pb_1.Message {
        constructor(data?: any[] | {
            funder_address?: string;
            account_address?: string;
            dest_address?: string;
        });
        get funder_address(): string;
        set funder_address(value: string);
        get account_address(): string;
        set account_address(value: string);
        get dest_address(): string;
        set dest_address(value: string);
        static fromObject(data: {
            funder_address?: string;
            account_address?: string;
            dest_address?: string;
        }): MsgClawback;
        toObject(): {
            funder_address?: string | undefined;
            account_address?: string | undefined;
            dest_address?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgClawback;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgClawback;
    }
    export class MsgClawbackResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgClawbackResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgClawbackResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgClawbackResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedMsgService {
        static definition: {
            CreateClawbackVestingAccount: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgCreateClawbackVestingAccount) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgCreateClawbackVestingAccount;
                responseSerialize: (message: MsgCreateClawbackVestingAccountResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgCreateClawbackVestingAccountResponse;
            };
            Clawback: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgClawback) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgClawback;
                responseSerialize: (message: MsgClawbackResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgClawbackResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract CreateClawbackVestingAccount(call: grpc_1.ServerUnaryCall<MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccountResponse>, callback: grpc_1.sendUnaryData<MsgCreateClawbackVestingAccountResponse>): void;
        abstract Clawback(call: grpc_1.ServerUnaryCall<MsgClawback, MsgClawbackResponse>, callback: grpc_1.sendUnaryData<MsgClawbackResponse>): void;
    }
    const MsgClient_base: grpc_1.ServiceClientConstructor;
    export class MsgClient extends MsgClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        CreateClawbackVestingAccount: GrpcUnaryServiceInterface<MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccountResponse>;
        Clawback: GrpcUnaryServiceInterface<MsgClawback, MsgClawbackResponse>;
    }
    export {};
}
