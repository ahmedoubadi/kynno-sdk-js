/// <reference types="node" />
import * as dependency_3 from "./feemarket";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace ethermint.feemarket.v1 {
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
            params?: dependency_3.ethermint.feemarket.v1.Params;
        });
        get params(): dependency_3.ethermint.feemarket.v1.Params;
        set params(value: dependency_3.ethermint.feemarket.v1.Params);
        static fromObject(data: {
            params?: ReturnType<typeof dependency_3.ethermint.feemarket.v1.Params.prototype.toObject>;
        }): QueryParamsResponse;
        toObject(): {
            params?: {
                no_base_fee?: boolean | undefined;
                base_fee_change_denominator?: number | undefined;
                elasticity_multiplier?: number | undefined;
                enable_height?: number | undefined;
                base_fee?: string | undefined;
                min_gas_price?: string | undefined;
                min_gas_multiplier?: string | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
    }
    export class QueryBaseFeeRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryBaseFeeRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBaseFeeRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryBaseFeeRequest;
    }
    export class QueryBaseFeeResponse extends pb_1.Message {
        constructor(data?: any[] | {
            base_fee?: string;
        });
        get base_fee(): string;
        set base_fee(value: string);
        static fromObject(data: {
            base_fee?: string;
        }): QueryBaseFeeResponse;
        toObject(): {
            base_fee?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBaseFeeResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryBaseFeeResponse;
    }
    export class QueryBlockGasRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryBlockGasRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBlockGasRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryBlockGasRequest;
    }
    export class QueryBlockGasResponse extends pb_1.Message {
        constructor(data?: any[] | {
            gas?: number;
        });
        get gas(): number;
        set gas(value: number);
        static fromObject(data: {
            gas?: number;
        }): QueryBlockGasResponse;
        toObject(): {
            gas?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBlockGasResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryBlockGasResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedQueryService {
        static definition: {
            Params: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryParamsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryParamsRequest;
                responseSerialize: (message: QueryParamsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryParamsResponse;
            };
            BaseFee: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryBaseFeeRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryBaseFeeRequest;
                responseSerialize: (message: QueryBaseFeeResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryBaseFeeResponse;
            };
            BlockGas: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryBlockGasRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryBlockGasRequest;
                responseSerialize: (message: QueryBlockGasResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryBlockGasResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Params(call: grpc_1.ServerUnaryCall<QueryParamsRequest, QueryParamsResponse>, callback: grpc_1.sendUnaryData<QueryParamsResponse>): void;
        abstract BaseFee(call: grpc_1.ServerUnaryCall<QueryBaseFeeRequest, QueryBaseFeeResponse>, callback: grpc_1.sendUnaryData<QueryBaseFeeResponse>): void;
        abstract BlockGas(call: grpc_1.ServerUnaryCall<QueryBlockGasRequest, QueryBlockGasResponse>, callback: grpc_1.sendUnaryData<QueryBlockGasResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Params: GrpcUnaryServiceInterface<QueryParamsRequest, QueryParamsResponse>;
        BaseFee: GrpcUnaryServiceInterface<QueryBaseFeeRequest, QueryBaseFeeResponse>;
        BlockGas: GrpcUnaryServiceInterface<QueryBlockGasRequest, QueryBlockGasResponse>;
    }
    export {};
}
