/// <reference types="node" />
import * as dependency_3 from "./../../../cosmos/base/query/v1beta1/pagination";
import * as dependency_4 from "./genesis";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace kynno.epochs.v1 {
    export class QueryEpochsInfoRequest extends pb_1.Message {
        constructor(data?: any[] | {
            pagination?: dependency_3.cosmos.base.query.v1beta1.PageRequest;
        });
        get pagination(): dependency_3.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_3.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_3.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryEpochsInfoRequest;
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryEpochsInfoRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryEpochsInfoRequest;
    }
    export class QueryEpochsInfoResponse extends pb_1.Message {
        constructor(data?: any[] | {
            epochs?: dependency_4.kynno.epochs.v1.EpochInfo[];
            pagination?: dependency_3.cosmos.base.query.v1beta1.PageResponse;
        });
        get epochs(): dependency_4.kynno.epochs.v1.EpochInfo[];
        set epochs(value: dependency_4.kynno.epochs.v1.EpochInfo[]);
        get pagination(): dependency_3.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_3.cosmos.base.query.v1beta1.PageResponse);
        static fromObject(data: {
            epochs?: ReturnType<typeof dependency_4.kynno.epochs.v1.EpochInfo.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_3.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryEpochsInfoResponse;
        toObject(): {
            epochs?: {
                identifier?: string | undefined;
                start_time?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                duration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                current_epoch?: number | undefined;
                current_epoch_start_time?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                epoch_counting_started?: boolean | undefined;
                current_epoch_start_height?: number | undefined;
            }[] | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryEpochsInfoResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryEpochsInfoResponse;
    }
    export class QueryCurrentEpochRequest extends pb_1.Message {
        constructor(data?: any[] | {
            identifier?: string;
        });
        get identifier(): string;
        set identifier(value: string);
        static fromObject(data: {
            identifier?: string;
        }): QueryCurrentEpochRequest;
        toObject(): {
            identifier?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryCurrentEpochRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryCurrentEpochRequest;
    }
    export class QueryCurrentEpochResponse extends pb_1.Message {
        constructor(data?: any[] | {
            current_epoch?: number;
        });
        get current_epoch(): number;
        set current_epoch(value: number);
        static fromObject(data: {
            current_epoch?: number;
        }): QueryCurrentEpochResponse;
        toObject(): {
            current_epoch?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryCurrentEpochResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryCurrentEpochResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedQueryService {
        static definition: {
            EpochInfos: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryEpochsInfoRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryEpochsInfoRequest;
                responseSerialize: (message: QueryEpochsInfoResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryEpochsInfoResponse;
            };
            CurrentEpoch: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryCurrentEpochRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryCurrentEpochRequest;
                responseSerialize: (message: QueryCurrentEpochResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryCurrentEpochResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract EpochInfos(call: grpc_1.ServerUnaryCall<QueryEpochsInfoRequest, QueryEpochsInfoResponse>, callback: grpc_1.sendUnaryData<QueryEpochsInfoResponse>): void;
        abstract CurrentEpoch(call: grpc_1.ServerUnaryCall<QueryCurrentEpochRequest, QueryCurrentEpochResponse>, callback: grpc_1.sendUnaryData<QueryCurrentEpochResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        EpochInfos: GrpcUnaryServiceInterface<QueryEpochsInfoRequest, QueryEpochsInfoResponse>;
        CurrentEpoch: GrpcUnaryServiceInterface<QueryCurrentEpochRequest, QueryCurrentEpochResponse>;
    }
    export {};
}
