/// <reference types="node" />
import * as dependency_3 from "./mint";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.mint.v1beta1 {
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
            params?: dependency_3.cosmos.mint.v1beta1.Params;
        });
        get params(): dependency_3.cosmos.mint.v1beta1.Params;
        set params(value: dependency_3.cosmos.mint.v1beta1.Params);
        static fromObject(data: {
            params?: ReturnType<typeof dependency_3.cosmos.mint.v1beta1.Params.prototype.toObject>;
        }): QueryParamsResponse;
        toObject(): {
            params?: {
                mint_denom?: string | undefined;
                inflation_rate_change?: string | undefined;
                inflation_max?: string | undefined;
                inflation_min?: string | undefined;
                goal_bonded?: string | undefined;
                blocks_per_year?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
    }
    export class QueryInflationRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryInflationRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryInflationRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryInflationRequest;
    }
    export class QueryInflationResponse extends pb_1.Message {
        constructor(data?: any[] | {
            inflation?: Uint8Array;
        });
        get inflation(): Uint8Array;
        set inflation(value: Uint8Array);
        static fromObject(data: {
            inflation?: Uint8Array;
        }): QueryInflationResponse;
        toObject(): {
            inflation?: Uint8Array | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryInflationResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryInflationResponse;
    }
    export class QueryAnnualProvisionsRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryAnnualProvisionsRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAnnualProvisionsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAnnualProvisionsRequest;
    }
    export class QueryAnnualProvisionsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            annual_provisions?: Uint8Array;
        });
        get annual_provisions(): Uint8Array;
        set annual_provisions(value: Uint8Array);
        static fromObject(data: {
            annual_provisions?: Uint8Array;
        }): QueryAnnualProvisionsResponse;
        toObject(): {
            annual_provisions?: Uint8Array | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAnnualProvisionsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAnnualProvisionsResponse;
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
            Inflation: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryInflationRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryInflationRequest;
                responseSerialize: (message: QueryInflationResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryInflationResponse;
            };
            AnnualProvisions: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryAnnualProvisionsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryAnnualProvisionsRequest;
                responseSerialize: (message: QueryAnnualProvisionsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryAnnualProvisionsResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Params(call: grpc_1.ServerUnaryCall<QueryParamsRequest, QueryParamsResponse>, callback: grpc_1.sendUnaryData<QueryParamsResponse>): void;
        abstract Inflation(call: grpc_1.ServerUnaryCall<QueryInflationRequest, QueryInflationResponse>, callback: grpc_1.sendUnaryData<QueryInflationResponse>): void;
        abstract AnnualProvisions(call: grpc_1.ServerUnaryCall<QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse>, callback: grpc_1.sendUnaryData<QueryAnnualProvisionsResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Params: GrpcUnaryServiceInterface<QueryParamsRequest, QueryParamsResponse>;
        Inflation: GrpcUnaryServiceInterface<QueryInflationRequest, QueryInflationResponse>;
        AnnualProvisions: GrpcUnaryServiceInterface<QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse>;
    }
    export {};
}
