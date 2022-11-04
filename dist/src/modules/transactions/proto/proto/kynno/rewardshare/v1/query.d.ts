/// <reference types="node" />
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: kynno/rewardshare/v1/query.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../cosmos/base/query/v1beta1/pagination";
import * as dependency_2 from "./genesis";
import * as dependency_3 from "./rewardshare";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace kynno.rewardshare.v1 {
    export class QueryRewardsharesRequest extends pb_1.Message {
        constructor(data?: any[] | {
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryRewardsharesRequest;
        toObject(): {
            pagination?: {
                key?: Uint8Array | undefined;
                offset?: number | undefined;
                limit?: number | undefined;
                count_total?: boolean | undefined;
                reverse?: boolean | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryRewardsharesRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryRewardsharesRequest;
    }
    export class QueryRewardsharesResponse extends pb_1.Message {
        constructor(data?: any[] | {
            rewardshares?: dependency_3.kynno.rewardshare.v1.Rewardshare[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get rewardshares(): dependency_3.kynno.rewardshare.v1.Rewardshare[];
        set rewardshares(value: dependency_3.kynno.rewardshare.v1.Rewardshare[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        static fromObject(data: {
            rewardshares?: ReturnType<typeof dependency_3.kynno.rewardshare.v1.Rewardshare.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryRewardsharesResponse;
        toObject(): {
            rewardshares?: {
                contract_address?: string | undefined;
                deployer_address?: string | undefined;
                withdrawer_address?: string | undefined;
            }[] | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryRewardsharesResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryRewardsharesResponse;
    }
    export class QueryRewardshareRequest extends pb_1.Message {
        constructor(data?: any[] | {
            contract_address?: string;
        });
        get contract_address(): string;
        set contract_address(value: string);
        static fromObject(data: {
            contract_address?: string;
        }): QueryRewardshareRequest;
        toObject(): {
            contract_address?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryRewardshareRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryRewardshareRequest;
    }
    export class QueryRewardshareResponse extends pb_1.Message {
        constructor(data?: any[] | {
            rewardshare?: dependency_3.kynno.rewardshare.v1.Rewardshare;
        });
        get rewardshare(): dependency_3.kynno.rewardshare.v1.Rewardshare;
        set rewardshare(value: dependency_3.kynno.rewardshare.v1.Rewardshare);
        static fromObject(data: {
            rewardshare?: ReturnType<typeof dependency_3.kynno.rewardshare.v1.Rewardshare.prototype.toObject>;
        }): QueryRewardshareResponse;
        toObject(): {
            rewardshare?: {
                contract_address?: string | undefined;
                deployer_address?: string | undefined;
                withdrawer_address?: string | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryRewardshareResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryRewardshareResponse;
    }
    export class QueryParamsRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryParamsRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
    }
    export class QueryParamsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            params?: dependency_2.kynno.rewardshare.v1.Params;
        });
        get params(): dependency_2.kynno.rewardshare.v1.Params;
        set params(value: dependency_2.kynno.rewardshare.v1.Params);
        static fromObject(data: {
            params?: ReturnType<typeof dependency_2.kynno.rewardshare.v1.Params.prototype.toObject>;
        }): QueryParamsResponse;
        toObject(): {
            params?: {
                enable_reward_share?: boolean | undefined;
                developer_shares?: string | undefined;
                addr_derivation_cost_create?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
    }
    export class QueryDeployerRewardsharesRequest extends pb_1.Message {
        constructor(data?: any[] | {
            deployer_address?: string;
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get deployer_address(): string;
        set deployer_address(value: string);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            deployer_address?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryDeployerRewardsharesRequest;
        toObject(): {
            deployer_address?: string | undefined;
            pagination?: {
                key?: Uint8Array | undefined;
                offset?: number | undefined;
                limit?: number | undefined;
                count_total?: boolean | undefined;
                reverse?: boolean | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDeployerRewardsharesRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDeployerRewardsharesRequest;
    }
    export class QueryDeployerRewardsharesResponse extends pb_1.Message {
        constructor(data?: any[] | {
            contract_addresses?: string[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get contract_addresses(): string[];
        set contract_addresses(value: string[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        static fromObject(data: {
            contract_addresses?: string[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryDeployerRewardsharesResponse;
        toObject(): {
            contract_addresses?: string[] | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDeployerRewardsharesResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDeployerRewardsharesResponse;
    }
    export class QueryWithdrawerRewardsharesRequest extends pb_1.Message {
        constructor(data?: any[] | {
            withdrawer_address?: string;
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get withdrawer_address(): string;
        set withdrawer_address(value: string);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            withdrawer_address?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryWithdrawerRewardsharesRequest;
        toObject(): {
            withdrawer_address?: string | undefined;
            pagination?: {
                key?: Uint8Array | undefined;
                offset?: number | undefined;
                limit?: number | undefined;
                count_total?: boolean | undefined;
                reverse?: boolean | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryWithdrawerRewardsharesRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryWithdrawerRewardsharesRequest;
    }
    export class QueryWithdrawerRewardsharesResponse extends pb_1.Message {
        constructor(data?: any[] | {
            contract_addresses?: string[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get contract_addresses(): string[];
        set contract_addresses(value: string[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        static fromObject(data: {
            contract_addresses?: string[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryWithdrawerRewardsharesResponse;
        toObject(): {
            contract_addresses?: string[] | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryWithdrawerRewardsharesResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryWithdrawerRewardsharesResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedQueryService {
        static definition: {
            Rewardshares: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryRewardsharesRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryRewardsharesRequest;
                responseSerialize: (message: QueryRewardsharesResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryRewardsharesResponse;
            };
            Rewardshare: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryRewardshareRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryRewardshareRequest;
                responseSerialize: (message: QueryRewardshareResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryRewardshareResponse;
            };
            Params: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryParamsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryParamsRequest;
                responseSerialize: (message: QueryParamsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryParamsResponse;
            };
            DeployerRewardshares: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryDeployerRewardsharesRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryDeployerRewardsharesRequest;
                responseSerialize: (message: QueryDeployerRewardsharesResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryDeployerRewardsharesResponse;
            };
            WithdrawerRewardshares: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryWithdrawerRewardsharesRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryWithdrawerRewardsharesRequest;
                responseSerialize: (message: QueryWithdrawerRewardsharesResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryWithdrawerRewardsharesResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Rewardshares(call: grpc_1.ServerUnaryCall<QueryRewardsharesRequest, QueryRewardsharesResponse>, callback: grpc_1.sendUnaryData<QueryRewardsharesResponse>): void;
        abstract Rewardshare(call: grpc_1.ServerUnaryCall<QueryRewardshareRequest, QueryRewardshareResponse>, callback: grpc_1.sendUnaryData<QueryRewardshareResponse>): void;
        abstract Params(call: grpc_1.ServerUnaryCall<QueryParamsRequest, QueryParamsResponse>, callback: grpc_1.sendUnaryData<QueryParamsResponse>): void;
        abstract DeployerRewardshares(call: grpc_1.ServerUnaryCall<QueryDeployerRewardsharesRequest, QueryDeployerRewardsharesResponse>, callback: grpc_1.sendUnaryData<QueryDeployerRewardsharesResponse>): void;
        abstract WithdrawerRewardshares(call: grpc_1.ServerUnaryCall<QueryWithdrawerRewardsharesRequest, QueryWithdrawerRewardsharesResponse>, callback: grpc_1.sendUnaryData<QueryWithdrawerRewardsharesResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Rewardshares: GrpcUnaryServiceInterface<QueryRewardsharesRequest, QueryRewardsharesResponse>;
        Rewardshare: GrpcUnaryServiceInterface<QueryRewardshareRequest, QueryRewardshareResponse>;
        Params: GrpcUnaryServiceInterface<QueryParamsRequest, QueryParamsResponse>;
        DeployerRewardshares: GrpcUnaryServiceInterface<QueryDeployerRewardsharesRequest, QueryDeployerRewardsharesResponse>;
        WithdrawerRewardshares: GrpcUnaryServiceInterface<QueryWithdrawerRewardsharesRequest, QueryWithdrawerRewardsharesResponse>;
    }
    export {};
}
