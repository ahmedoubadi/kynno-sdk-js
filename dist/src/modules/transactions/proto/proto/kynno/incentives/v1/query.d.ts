/// <reference types="node" />
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: kynno/incentives/v1/query.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../cosmos/base/query/v1beta1/pagination";
import * as dependency_2 from "./../../../cosmos/base/v1beta1/coin";
import * as dependency_3 from "./genesis";
import * as dependency_4 from "./incentives";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace kynno.incentives.v1 {
    export class QueryIncentivesRequest extends pb_1.Message {
        constructor(data?: any[] | {
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryIncentivesRequest;
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryIncentivesRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryIncentivesRequest;
    }
    export class QueryIncentivesResponse extends pb_1.Message {
        constructor(data?: any[] | {
            incentives?: dependency_4.kynno.incentives.v1.Incentive[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get incentives(): dependency_4.kynno.incentives.v1.Incentive[];
        set incentives(value: dependency_4.kynno.incentives.v1.Incentive[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        static fromObject(data: {
            incentives?: ReturnType<typeof dependency_4.kynno.incentives.v1.Incentive.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryIncentivesResponse;
        toObject(): {
            incentives?: {
                contract?: string | undefined;
                allocations?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                epochs?: number | undefined;
                start_time?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                total_gas?: number | undefined;
            }[] | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryIncentivesResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryIncentivesResponse;
    }
    export class QueryIncentiveRequest extends pb_1.Message {
        constructor(data?: any[] | {
            contract?: string;
        });
        get contract(): string;
        set contract(value: string);
        static fromObject(data: {
            contract?: string;
        }): QueryIncentiveRequest;
        toObject(): {
            contract?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryIncentiveRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryIncentiveRequest;
    }
    export class QueryIncentiveResponse extends pb_1.Message {
        constructor(data?: any[] | {
            incentive?: dependency_4.kynno.incentives.v1.Incentive;
        });
        get incentive(): dependency_4.kynno.incentives.v1.Incentive;
        set incentive(value: dependency_4.kynno.incentives.v1.Incentive);
        static fromObject(data: {
            incentive?: ReturnType<typeof dependency_4.kynno.incentives.v1.Incentive.prototype.toObject>;
        }): QueryIncentiveResponse;
        toObject(): {
            incentive?: {
                contract?: string | undefined;
                allocations?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                epochs?: number | undefined;
                start_time?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                total_gas?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryIncentiveResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryIncentiveResponse;
    }
    export class QueryGasMetersRequest extends pb_1.Message {
        constructor(data?: any[] | {
            contract?: string;
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get contract(): string;
        set contract(value: string);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            contract?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryGasMetersRequest;
        toObject(): {
            contract?: string | undefined;
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGasMetersRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryGasMetersRequest;
    }
    export class QueryGasMetersResponse extends pb_1.Message {
        constructor(data?: any[] | {
            gas_meters?: dependency_4.kynno.incentives.v1.GasMeter[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get gas_meters(): dependency_4.kynno.incentives.v1.GasMeter[];
        set gas_meters(value: dependency_4.kynno.incentives.v1.GasMeter[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        static fromObject(data: {
            gas_meters?: ReturnType<typeof dependency_4.kynno.incentives.v1.GasMeter.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryGasMetersResponse;
        toObject(): {
            gas_meters?: {
                contract?: string | undefined;
                participant?: string | undefined;
                cumulative_gas?: number | undefined;
            }[] | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGasMetersResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryGasMetersResponse;
    }
    export class QueryGasMeterRequest extends pb_1.Message {
        constructor(data?: any[] | {
            contract?: string;
            participant?: string;
        });
        get contract(): string;
        set contract(value: string);
        get participant(): string;
        set participant(value: string);
        static fromObject(data: {
            contract?: string;
            participant?: string;
        }): QueryGasMeterRequest;
        toObject(): {
            contract?: string | undefined;
            participant?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGasMeterRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryGasMeterRequest;
    }
    export class QueryGasMeterResponse extends pb_1.Message {
        constructor(data?: any[] | {
            gas_meter?: number;
        });
        get gas_meter(): number;
        set gas_meter(value: number);
        static fromObject(data: {
            gas_meter?: number;
        }): QueryGasMeterResponse;
        toObject(): {
            gas_meter?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGasMeterResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryGasMeterResponse;
    }
    export class QueryAllocationMetersRequest extends pb_1.Message {
        constructor(data?: any[] | {
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryAllocationMetersRequest;
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAllocationMetersRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAllocationMetersRequest;
    }
    export class QueryAllocationMetersResponse extends pb_1.Message {
        constructor(data?: any[] | {
            allocation_meters?: dependency_2.cosmos.base.v1beta1.DecCoin[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get allocation_meters(): dependency_2.cosmos.base.v1beta1.DecCoin[];
        set allocation_meters(value: dependency_2.cosmos.base.v1beta1.DecCoin[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        static fromObject(data: {
            allocation_meters?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.DecCoin.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryAllocationMetersResponse;
        toObject(): {
            allocation_meters?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAllocationMetersResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAllocationMetersResponse;
    }
    export class QueryAllocationMeterRequest extends pb_1.Message {
        constructor(data?: any[] | {
            denom?: string;
        });
        get denom(): string;
        set denom(value: string);
        static fromObject(data: {
            denom?: string;
        }): QueryAllocationMeterRequest;
        toObject(): {
            denom?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAllocationMeterRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAllocationMeterRequest;
    }
    export class QueryAllocationMeterResponse extends pb_1.Message {
        constructor(data?: any[] | {
            allocation_meter?: dependency_2.cosmos.base.v1beta1.DecCoin;
        });
        get allocation_meter(): dependency_2.cosmos.base.v1beta1.DecCoin;
        set allocation_meter(value: dependency_2.cosmos.base.v1beta1.DecCoin);
        static fromObject(data: {
            allocation_meter?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.DecCoin.prototype.toObject>;
        }): QueryAllocationMeterResponse;
        toObject(): {
            allocation_meter?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAllocationMeterResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAllocationMeterResponse;
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
            params?: dependency_3.kynno.incentives.v1.Params;
        });
        get params(): dependency_3.kynno.incentives.v1.Params;
        set params(value: dependency_3.kynno.incentives.v1.Params);
        static fromObject(data: {
            params?: ReturnType<typeof dependency_3.kynno.incentives.v1.Params.prototype.toObject>;
        }): QueryParamsResponse;
        toObject(): {
            params?: {
                enable_incentives?: boolean | undefined;
                allocation_limit?: string | undefined;
                incentives_epoch_identifier?: string | undefined;
                reward_scaler?: string | undefined;
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
            Incentives: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryIncentivesRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryIncentivesRequest;
                responseSerialize: (message: QueryIncentivesResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryIncentivesResponse;
            };
            Incentive: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryIncentiveRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryIncentiveRequest;
                responseSerialize: (message: QueryIncentiveResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryIncentiveResponse;
            };
            GasMeters: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryGasMetersRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryGasMetersRequest;
                responseSerialize: (message: QueryGasMetersResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryGasMetersResponse;
            };
            GasMeter: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryGasMeterRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryGasMeterRequest;
                responseSerialize: (message: QueryGasMeterResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryGasMeterResponse;
            };
            AllocationMeters: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryAllocationMetersRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryAllocationMetersRequest;
                responseSerialize: (message: QueryAllocationMetersResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryAllocationMetersResponse;
            };
            AllocationMeter: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryAllocationMeterRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryAllocationMeterRequest;
                responseSerialize: (message: QueryAllocationMeterResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryAllocationMeterResponse;
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
        abstract Incentives(call: grpc_1.ServerUnaryCall<QueryIncentivesRequest, QueryIncentivesResponse>, callback: grpc_1.sendUnaryData<QueryIncentivesResponse>): void;
        abstract Incentive(call: grpc_1.ServerUnaryCall<QueryIncentiveRequest, QueryIncentiveResponse>, callback: grpc_1.sendUnaryData<QueryIncentiveResponse>): void;
        abstract GasMeters(call: grpc_1.ServerUnaryCall<QueryGasMetersRequest, QueryGasMetersResponse>, callback: grpc_1.sendUnaryData<QueryGasMetersResponse>): void;
        abstract GasMeter(call: grpc_1.ServerUnaryCall<QueryGasMeterRequest, QueryGasMeterResponse>, callback: grpc_1.sendUnaryData<QueryGasMeterResponse>): void;
        abstract AllocationMeters(call: grpc_1.ServerUnaryCall<QueryAllocationMetersRequest, QueryAllocationMetersResponse>, callback: grpc_1.sendUnaryData<QueryAllocationMetersResponse>): void;
        abstract AllocationMeter(call: grpc_1.ServerUnaryCall<QueryAllocationMeterRequest, QueryAllocationMeterResponse>, callback: grpc_1.sendUnaryData<QueryAllocationMeterResponse>): void;
        abstract Params(call: grpc_1.ServerUnaryCall<QueryParamsRequest, QueryParamsResponse>, callback: grpc_1.sendUnaryData<QueryParamsResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Incentives: GrpcUnaryServiceInterface<QueryIncentivesRequest, QueryIncentivesResponse>;
        Incentive: GrpcUnaryServiceInterface<QueryIncentiveRequest, QueryIncentiveResponse>;
        GasMeters: GrpcUnaryServiceInterface<QueryGasMetersRequest, QueryGasMetersResponse>;
        GasMeter: GrpcUnaryServiceInterface<QueryGasMeterRequest, QueryGasMeterResponse>;
        AllocationMeters: GrpcUnaryServiceInterface<QueryAllocationMetersRequest, QueryAllocationMetersResponse>;
        AllocationMeter: GrpcUnaryServiceInterface<QueryAllocationMeterRequest, QueryAllocationMeterResponse>;
        Params: GrpcUnaryServiceInterface<QueryParamsRequest, QueryParamsResponse>;
    }
    export {};
}
