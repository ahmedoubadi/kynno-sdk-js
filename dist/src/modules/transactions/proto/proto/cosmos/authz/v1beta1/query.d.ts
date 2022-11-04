/// <reference types="node" />
import * as dependency_2 from "./../../base/query/v1beta1/pagination";
import * as dependency_3 from "./authz";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.authz.v1beta1 {
    export class QueryGrantsRequest extends pb_1.Message {
        constructor(data?: any[] | {
            granter?: string;
            grantee?: string;
            msg_type_url?: string;
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageRequest;
        });
        get granter(): string;
        set granter(value: string);
        get grantee(): string;
        set grantee(value: string);
        get msg_type_url(): string;
        set msg_type_url(value: string);
        get pagination(): dependency_2.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            granter?: string;
            grantee?: string;
            msg_type_url?: string;
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryGrantsRequest;
        toObject(): {
            granter?: string | undefined;
            grantee?: string | undefined;
            msg_type_url?: string | undefined;
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGrantsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryGrantsRequest;
    }
    export class QueryGrantsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            grants?: dependency_3.cosmos.authz.v1beta1.Grant[];
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageResponse;
        });
        get grants(): dependency_3.cosmos.authz.v1beta1.Grant[];
        set grants(value: dependency_3.cosmos.authz.v1beta1.Grant[]);
        get pagination(): dependency_2.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageResponse);
        static fromObject(data: {
            grants?: ReturnType<typeof dependency_3.cosmos.authz.v1beta1.Grant.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryGrantsResponse;
        toObject(): {
            grants?: {
                authorization?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                expiration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[] | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGrantsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryGrantsResponse;
    }
    export class QueryGranterGrantsRequest extends pb_1.Message {
        constructor(data?: any[] | {
            granter?: string;
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageRequest;
        });
        get granter(): string;
        set granter(value: string);
        get pagination(): dependency_2.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            granter?: string;
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryGranterGrantsRequest;
        toObject(): {
            granter?: string | undefined;
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGranterGrantsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryGranterGrantsRequest;
    }
    export class QueryGranterGrantsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            grants?: dependency_3.cosmos.authz.v1beta1.GrantAuthorization[];
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageResponse;
        });
        get grants(): dependency_3.cosmos.authz.v1beta1.GrantAuthorization[];
        set grants(value: dependency_3.cosmos.authz.v1beta1.GrantAuthorization[]);
        get pagination(): dependency_2.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageResponse);
        static fromObject(data: {
            grants?: ReturnType<typeof dependency_3.cosmos.authz.v1beta1.GrantAuthorization.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryGranterGrantsResponse;
        toObject(): {
            grants?: {
                granter?: string | undefined;
                grantee?: string | undefined;
                authorization?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                expiration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[] | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGranterGrantsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryGranterGrantsResponse;
    }
    export class QueryGranteeGrantsRequest extends pb_1.Message {
        constructor(data?: any[] | {
            grantee?: string;
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageRequest;
        });
        get grantee(): string;
        set grantee(value: string);
        get pagination(): dependency_2.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            grantee?: string;
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryGranteeGrantsRequest;
        toObject(): {
            grantee?: string | undefined;
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGranteeGrantsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryGranteeGrantsRequest;
    }
    export class QueryGranteeGrantsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            grants?: dependency_3.cosmos.authz.v1beta1.GrantAuthorization[];
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageResponse;
        });
        get grants(): dependency_3.cosmos.authz.v1beta1.GrantAuthorization[];
        set grants(value: dependency_3.cosmos.authz.v1beta1.GrantAuthorization[]);
        get pagination(): dependency_2.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageResponse);
        static fromObject(data: {
            grants?: ReturnType<typeof dependency_3.cosmos.authz.v1beta1.GrantAuthorization.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryGranteeGrantsResponse;
        toObject(): {
            grants?: {
                granter?: string | undefined;
                grantee?: string | undefined;
                authorization?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                expiration?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
            }[] | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGranteeGrantsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryGranteeGrantsResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedQueryService {
        static definition: {
            Grants: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryGrantsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryGrantsRequest;
                responseSerialize: (message: QueryGrantsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryGrantsResponse;
            };
            GranterGrants: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryGranterGrantsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryGranterGrantsRequest;
                responseSerialize: (message: QueryGranterGrantsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryGranterGrantsResponse;
            };
            GranteeGrants: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryGranteeGrantsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryGranteeGrantsRequest;
                responseSerialize: (message: QueryGranteeGrantsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryGranteeGrantsResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Grants(call: grpc_1.ServerUnaryCall<QueryGrantsRequest, QueryGrantsResponse>, callback: grpc_1.sendUnaryData<QueryGrantsResponse>): void;
        abstract GranterGrants(call: grpc_1.ServerUnaryCall<QueryGranterGrantsRequest, QueryGranterGrantsResponse>, callback: grpc_1.sendUnaryData<QueryGranterGrantsResponse>): void;
        abstract GranteeGrants(call: grpc_1.ServerUnaryCall<QueryGranteeGrantsRequest, QueryGranteeGrantsResponse>, callback: grpc_1.sendUnaryData<QueryGranteeGrantsResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Grants: GrpcUnaryServiceInterface<QueryGrantsRequest, QueryGrantsResponse>;
        GranterGrants: GrpcUnaryServiceInterface<QueryGranterGrantsRequest, QueryGranterGrantsResponse>;
        GranteeGrants: GrpcUnaryServiceInterface<QueryGranteeGrantsRequest, QueryGranteeGrantsResponse>;
    }
    export {};
}
