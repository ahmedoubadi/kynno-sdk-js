/// <reference types="node" />
import * as dependency_3 from "./../../../cosmos/base/v1beta1/coin";
import * as dependency_4 from "./genesis";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace kynno.inflation.v1 {
    export class QueryPeriodRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryPeriodRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryPeriodRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryPeriodRequest;
    }
    export class QueryPeriodResponse extends pb_1.Message {
        constructor(data?: any[] | {
            period?: number;
        });
        get period(): number;
        set period(value: number);
        static fromObject(data: {
            period?: number;
        }): QueryPeriodResponse;
        toObject(): {
            period?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryPeriodResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryPeriodResponse;
    }
    export class QueryEpochMintProvisionRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryEpochMintProvisionRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryEpochMintProvisionRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryEpochMintProvisionRequest;
    }
    export class QueryEpochMintProvisionResponse extends pb_1.Message {
        constructor(data?: any[] | {
            epoch_mint_provision?: dependency_3.cosmos.base.v1beta1.DecCoin;
        });
        get epoch_mint_provision(): dependency_3.cosmos.base.v1beta1.DecCoin;
        set epoch_mint_provision(value: dependency_3.cosmos.base.v1beta1.DecCoin);
        static fromObject(data: {
            epoch_mint_provision?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.DecCoin.prototype.toObject>;
        }): QueryEpochMintProvisionResponse;
        toObject(): {
            epoch_mint_provision?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryEpochMintProvisionResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryEpochMintProvisionResponse;
    }
    export class QuerySkippedEpochsRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): QuerySkippedEpochsRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuerySkippedEpochsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QuerySkippedEpochsRequest;
    }
    export class QuerySkippedEpochsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            skipped_epochs?: number;
        });
        get skipped_epochs(): number;
        set skipped_epochs(value: number);
        static fromObject(data: {
            skipped_epochs?: number;
        }): QuerySkippedEpochsResponse;
        toObject(): {
            skipped_epochs?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuerySkippedEpochsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QuerySkippedEpochsResponse;
    }
    export class QueryCirculatingSupplyRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryCirculatingSupplyRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryCirculatingSupplyRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryCirculatingSupplyRequest;
    }
    export class QueryCirculatingSupplyResponse extends pb_1.Message {
        constructor(data?: any[] | {
            circulating_supply?: dependency_3.cosmos.base.v1beta1.DecCoin;
        });
        get circulating_supply(): dependency_3.cosmos.base.v1beta1.DecCoin;
        set circulating_supply(value: dependency_3.cosmos.base.v1beta1.DecCoin);
        static fromObject(data: {
            circulating_supply?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.DecCoin.prototype.toObject>;
        }): QueryCirculatingSupplyResponse;
        toObject(): {
            circulating_supply?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryCirculatingSupplyResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryCirculatingSupplyResponse;
    }
    export class QueryInflationRateRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryInflationRateRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryInflationRateRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryInflationRateRequest;
    }
    export class QueryInflationRateResponse extends pb_1.Message {
        constructor(data?: any[] | {
            inflation_rate?: string;
        });
        get inflation_rate(): string;
        set inflation_rate(value: string);
        static fromObject(data: {
            inflation_rate?: string;
        }): QueryInflationRateResponse;
        toObject(): {
            inflation_rate?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryInflationRateResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryInflationRateResponse;
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
            params?: dependency_4.kynno.inflation.v1.Params;
        });
        get params(): dependency_4.kynno.inflation.v1.Params;
        set params(value: dependency_4.kynno.inflation.v1.Params);
        static fromObject(data: {
            params?: ReturnType<typeof dependency_4.kynno.inflation.v1.Params.prototype.toObject>;
        }): QueryParamsResponse;
        toObject(): {
            params?: {
                mint_denom?: string | undefined;
                exponential_calculation?: {
                    a?: string | undefined;
                    r?: string | undefined;
                    c?: string | undefined;
                    bonding_target?: string | undefined;
                    max_variance?: string | undefined;
                } | undefined;
                inflation_distribution?: {
                    staking_rewards?: string | undefined;
                    usage_incentives?: string | undefined;
                    community_pool?: string | undefined;
                } | undefined;
                enable_inflation?: boolean | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedQueryService {
        static definition: {
            Period: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryPeriodRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryPeriodRequest;
                responseSerialize: (message: QueryPeriodResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryPeriodResponse;
            };
            EpochMintProvision: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryEpochMintProvisionRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryEpochMintProvisionRequest;
                responseSerialize: (message: QueryEpochMintProvisionResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryEpochMintProvisionResponse;
            };
            SkippedEpochs: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QuerySkippedEpochsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QuerySkippedEpochsRequest;
                responseSerialize: (message: QuerySkippedEpochsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QuerySkippedEpochsResponse;
            };
            CirculatingSupply: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryCirculatingSupplyRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryCirculatingSupplyRequest;
                responseSerialize: (message: QueryCirculatingSupplyResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryCirculatingSupplyResponse;
            };
            InflationRate: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryInflationRateRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryInflationRateRequest;
                responseSerialize: (message: QueryInflationRateResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryInflationRateResponse;
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
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Period(call: grpc_1.ServerUnaryCall<QueryPeriodRequest, QueryPeriodResponse>, callback: grpc_1.sendUnaryData<QueryPeriodResponse>): void;
        abstract EpochMintProvision(call: grpc_1.ServerUnaryCall<QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse>, callback: grpc_1.sendUnaryData<QueryEpochMintProvisionResponse>): void;
        abstract SkippedEpochs(call: grpc_1.ServerUnaryCall<QuerySkippedEpochsRequest, QuerySkippedEpochsResponse>, callback: grpc_1.sendUnaryData<QuerySkippedEpochsResponse>): void;
        abstract CirculatingSupply(call: grpc_1.ServerUnaryCall<QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse>, callback: grpc_1.sendUnaryData<QueryCirculatingSupplyResponse>): void;
        abstract InflationRate(call: grpc_1.ServerUnaryCall<QueryInflationRateRequest, QueryInflationRateResponse>, callback: grpc_1.sendUnaryData<QueryInflationRateResponse>): void;
        abstract Params(call: grpc_1.ServerUnaryCall<QueryParamsRequest, QueryParamsResponse>, callback: grpc_1.sendUnaryData<QueryParamsResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Period: GrpcUnaryServiceInterface<QueryPeriodRequest, QueryPeriodResponse>;
        EpochMintProvision: GrpcUnaryServiceInterface<QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse>;
        SkippedEpochs: GrpcUnaryServiceInterface<QuerySkippedEpochsRequest, QuerySkippedEpochsResponse>;
        CirculatingSupply: GrpcUnaryServiceInterface<QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse>;
        InflationRate: GrpcUnaryServiceInterface<QueryInflationRateRequest, QueryInflationRateResponse>;
        Params: GrpcUnaryServiceInterface<QueryParamsRequest, QueryParamsResponse>;
    }
    export {};
}
