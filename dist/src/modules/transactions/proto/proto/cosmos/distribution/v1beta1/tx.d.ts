/// <reference types="node" />
import * as dependency_2 from "./../../base/v1beta1/coin";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.distribution.v1beta1 {
    export class MsgSetWithdrawAddress extends pb_1.Message {
        constructor(data?: any[] | {
            delegator_address?: string;
            withdraw_address?: string;
        });
        get delegator_address(): string;
        set delegator_address(value: string);
        get withdraw_address(): string;
        set withdraw_address(value: string);
        static fromObject(data: {
            delegator_address?: string;
            withdraw_address?: string;
        }): MsgSetWithdrawAddress;
        toObject(): {
            delegator_address?: string | undefined;
            withdraw_address?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSetWithdrawAddress;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSetWithdrawAddress;
    }
    export class MsgSetWithdrawAddressResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgSetWithdrawAddressResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSetWithdrawAddressResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSetWithdrawAddressResponse;
    }
    export class MsgWithdrawDelegatorReward extends pb_1.Message {
        constructor(data?: any[] | {
            delegator_address?: string;
            validator_address?: string;
        });
        get delegator_address(): string;
        set delegator_address(value: string);
        get validator_address(): string;
        set validator_address(value: string);
        static fromObject(data: {
            delegator_address?: string;
            validator_address?: string;
        }): MsgWithdrawDelegatorReward;
        toObject(): {
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgWithdrawDelegatorReward;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgWithdrawDelegatorReward;
    }
    export class MsgWithdrawDelegatorRewardResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgWithdrawDelegatorRewardResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgWithdrawDelegatorRewardResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgWithdrawDelegatorRewardResponse;
    }
    export class MsgWithdrawValidatorCommission extends pb_1.Message {
        constructor(data?: any[] | {
            validator_address?: string;
        });
        get validator_address(): string;
        set validator_address(value: string);
        static fromObject(data: {
            validator_address?: string;
        }): MsgWithdrawValidatorCommission;
        toObject(): {
            validator_address?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgWithdrawValidatorCommission;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgWithdrawValidatorCommission;
    }
    export class MsgWithdrawValidatorCommissionResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgWithdrawValidatorCommissionResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgWithdrawValidatorCommissionResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgWithdrawValidatorCommissionResponse;
    }
    export class MsgFundCommunityPool extends pb_1.Message {
        constructor(data?: any[] | {
            amount?: dependency_2.cosmos.base.v1beta1.Coin[];
            depositor?: string;
        });
        get amount(): dependency_2.cosmos.base.v1beta1.Coin[];
        set amount(value: dependency_2.cosmos.base.v1beta1.Coin[]);
        get depositor(): string;
        set depositor(value: string);
        static fromObject(data: {
            amount?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            depositor?: string;
        }): MsgFundCommunityPool;
        toObject(): {
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            depositor?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgFundCommunityPool;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgFundCommunityPool;
    }
    export class MsgFundCommunityPoolResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgFundCommunityPoolResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgFundCommunityPoolResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgFundCommunityPoolResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedMsgService {
        static definition: {
            SetWithdrawAddress: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgSetWithdrawAddress) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgSetWithdrawAddress;
                responseSerialize: (message: MsgSetWithdrawAddressResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgSetWithdrawAddressResponse;
            };
            WithdrawDelegatorReward: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgWithdrawDelegatorReward) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgWithdrawDelegatorReward;
                responseSerialize: (message: MsgWithdrawDelegatorRewardResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgWithdrawDelegatorRewardResponse;
            };
            WithdrawValidatorCommission: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgWithdrawValidatorCommission) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgWithdrawValidatorCommission;
                responseSerialize: (message: MsgWithdrawValidatorCommissionResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgWithdrawValidatorCommissionResponse;
            };
            FundCommunityPool: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgFundCommunityPool) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgFundCommunityPool;
                responseSerialize: (message: MsgFundCommunityPoolResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgFundCommunityPoolResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract SetWithdrawAddress(call: grpc_1.ServerUnaryCall<MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse>, callback: grpc_1.sendUnaryData<MsgSetWithdrawAddressResponse>): void;
        abstract WithdrawDelegatorReward(call: grpc_1.ServerUnaryCall<MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse>, callback: grpc_1.sendUnaryData<MsgWithdrawDelegatorRewardResponse>): void;
        abstract WithdrawValidatorCommission(call: grpc_1.ServerUnaryCall<MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse>, callback: grpc_1.sendUnaryData<MsgWithdrawValidatorCommissionResponse>): void;
        abstract FundCommunityPool(call: grpc_1.ServerUnaryCall<MsgFundCommunityPool, MsgFundCommunityPoolResponse>, callback: grpc_1.sendUnaryData<MsgFundCommunityPoolResponse>): void;
    }
    const MsgClient_base: grpc_1.ServiceClientConstructor;
    export class MsgClient extends MsgClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        SetWithdrawAddress: GrpcUnaryServiceInterface<MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse>;
        WithdrawDelegatorReward: GrpcUnaryServiceInterface<MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse>;
        WithdrawValidatorCommission: GrpcUnaryServiceInterface<MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse>;
        FundCommunityPool: GrpcUnaryServiceInterface<MsgFundCommunityPool, MsgFundCommunityPoolResponse>;
    }
    export {};
}
