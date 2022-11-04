/// <reference types="node" />
import * as dependency_2 from "./../../../../cosmos/base/query/v1beta1/pagination";
import * as dependency_3 from "./../../client/v1/client";
import * as dependency_4 from "./connection";
import * as dependency_6 from "./../../../../google/protobuf/any";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace ibc.core.connection.v1 {
    export class QueryConnectionRequest extends pb_1.Message {
        constructor(data?: any[] | {
            connection_id?: string;
        });
        get connection_id(): string;
        set connection_id(value: string);
        static fromObject(data: {
            connection_id?: string;
        }): QueryConnectionRequest;
        toObject(): {
            connection_id?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryConnectionRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryConnectionRequest;
    }
    export class QueryConnectionResponse extends pb_1.Message {
        constructor(data?: any[] | {
            connection?: dependency_4.ibc.core.connection.v1.ConnectionEnd;
            proof?: Uint8Array;
            proof_height?: dependency_3.ibc.core.client.v1.Height;
        });
        get connection(): dependency_4.ibc.core.connection.v1.ConnectionEnd;
        set connection(value: dependency_4.ibc.core.connection.v1.ConnectionEnd);
        get proof(): Uint8Array;
        set proof(value: Uint8Array);
        get proof_height(): dependency_3.ibc.core.client.v1.Height;
        set proof_height(value: dependency_3.ibc.core.client.v1.Height);
        static fromObject(data: {
            connection?: ReturnType<typeof dependency_4.ibc.core.connection.v1.ConnectionEnd.prototype.toObject>;
            proof?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_3.ibc.core.client.v1.Height.prototype.toObject>;
        }): QueryConnectionResponse;
        toObject(): {
            connection?: {
                client_id?: string | undefined;
                versions?: {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] | undefined;
                state?: dependency_4.ibc.core.connection.v1.State | undefined;
                counterparty?: {
                    client_id?: string | undefined;
                    connection_id?: string | undefined;
                    prefix?: {
                        key_prefix?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                delay_period?: number | undefined;
            } | undefined;
            proof?: Uint8Array | undefined;
            proof_height?: {
                revision_number?: number | undefined;
                revision_height?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryConnectionResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryConnectionResponse;
    }
    export class QueryConnectionsRequest extends pb_1.Message {
        constructor(data?: any[] | {
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageRequest;
        });
        get pagination(): dependency_2.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryConnectionsRequest;
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryConnectionsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryConnectionsRequest;
    }
    export class QueryConnectionsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            connections?: dependency_4.ibc.core.connection.v1.IdentifiedConnection[];
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageResponse;
            height?: dependency_3.ibc.core.client.v1.Height;
        });
        get connections(): dependency_4.ibc.core.connection.v1.IdentifiedConnection[];
        set connections(value: dependency_4.ibc.core.connection.v1.IdentifiedConnection[]);
        get pagination(): dependency_2.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageResponse);
        get height(): dependency_3.ibc.core.client.v1.Height;
        set height(value: dependency_3.ibc.core.client.v1.Height);
        static fromObject(data: {
            connections?: ReturnType<typeof dependency_4.ibc.core.connection.v1.IdentifiedConnection.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
            height?: ReturnType<typeof dependency_3.ibc.core.client.v1.Height.prototype.toObject>;
        }): QueryConnectionsResponse;
        toObject(): {
            connections?: {
                id?: string | undefined;
                client_id?: string | undefined;
                versions?: {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] | undefined;
                state?: dependency_4.ibc.core.connection.v1.State | undefined;
                counterparty?: {
                    client_id?: string | undefined;
                    connection_id?: string | undefined;
                    prefix?: {
                        key_prefix?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                delay_period?: number | undefined;
            }[] | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
            height?: {
                revision_number?: number | undefined;
                revision_height?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryConnectionsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryConnectionsResponse;
    }
    export class QueryClientConnectionsRequest extends pb_1.Message {
        constructor(data?: any[] | {
            client_id?: string;
        });
        get client_id(): string;
        set client_id(value: string);
        static fromObject(data: {
            client_id?: string;
        }): QueryClientConnectionsRequest;
        toObject(): {
            client_id?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryClientConnectionsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryClientConnectionsRequest;
    }
    export class QueryClientConnectionsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            connection_paths?: string[];
            proof?: Uint8Array;
            proof_height?: dependency_3.ibc.core.client.v1.Height;
        });
        get connection_paths(): string[];
        set connection_paths(value: string[]);
        get proof(): Uint8Array;
        set proof(value: Uint8Array);
        get proof_height(): dependency_3.ibc.core.client.v1.Height;
        set proof_height(value: dependency_3.ibc.core.client.v1.Height);
        static fromObject(data: {
            connection_paths?: string[];
            proof?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_3.ibc.core.client.v1.Height.prototype.toObject>;
        }): QueryClientConnectionsResponse;
        toObject(): {
            connection_paths?: string[] | undefined;
            proof?: Uint8Array | undefined;
            proof_height?: {
                revision_number?: number | undefined;
                revision_height?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryClientConnectionsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryClientConnectionsResponse;
    }
    export class QueryConnectionClientStateRequest extends pb_1.Message {
        constructor(data?: any[] | {
            connection_id?: string;
        });
        get connection_id(): string;
        set connection_id(value: string);
        static fromObject(data: {
            connection_id?: string;
        }): QueryConnectionClientStateRequest;
        toObject(): {
            connection_id?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryConnectionClientStateRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryConnectionClientStateRequest;
    }
    export class QueryConnectionClientStateResponse extends pb_1.Message {
        constructor(data?: any[] | {
            identified_client_state?: dependency_3.ibc.core.client.v1.IdentifiedClientState;
            proof?: Uint8Array;
            proof_height?: dependency_3.ibc.core.client.v1.Height;
        });
        get identified_client_state(): dependency_3.ibc.core.client.v1.IdentifiedClientState;
        set identified_client_state(value: dependency_3.ibc.core.client.v1.IdentifiedClientState);
        get proof(): Uint8Array;
        set proof(value: Uint8Array);
        get proof_height(): dependency_3.ibc.core.client.v1.Height;
        set proof_height(value: dependency_3.ibc.core.client.v1.Height);
        static fromObject(data: {
            identified_client_state?: ReturnType<typeof dependency_3.ibc.core.client.v1.IdentifiedClientState.prototype.toObject>;
            proof?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_3.ibc.core.client.v1.Height.prototype.toObject>;
        }): QueryConnectionClientStateResponse;
        toObject(): {
            identified_client_state?: {
                client_id?: string | undefined;
                client_state?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            proof?: Uint8Array | undefined;
            proof_height?: {
                revision_number?: number | undefined;
                revision_height?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryConnectionClientStateResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryConnectionClientStateResponse;
    }
    export class QueryConnectionConsensusStateRequest extends pb_1.Message {
        constructor(data?: any[] | {
            connection_id?: string;
            revision_number?: number;
            revision_height?: number;
        });
        get connection_id(): string;
        set connection_id(value: string);
        get revision_number(): number;
        set revision_number(value: number);
        get revision_height(): number;
        set revision_height(value: number);
        static fromObject(data: {
            connection_id?: string;
            revision_number?: number;
            revision_height?: number;
        }): QueryConnectionConsensusStateRequest;
        toObject(): {
            connection_id?: string | undefined;
            revision_number?: number | undefined;
            revision_height?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryConnectionConsensusStateRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryConnectionConsensusStateRequest;
    }
    export class QueryConnectionConsensusStateResponse extends pb_1.Message {
        constructor(data?: any[] | {
            consensus_state?: dependency_6.google.protobuf.Any;
            client_id?: string;
            proof?: Uint8Array;
            proof_height?: dependency_3.ibc.core.client.v1.Height;
        });
        get consensus_state(): dependency_6.google.protobuf.Any;
        set consensus_state(value: dependency_6.google.protobuf.Any);
        get client_id(): string;
        set client_id(value: string);
        get proof(): Uint8Array;
        set proof(value: Uint8Array);
        get proof_height(): dependency_3.ibc.core.client.v1.Height;
        set proof_height(value: dependency_3.ibc.core.client.v1.Height);
        static fromObject(data: {
            consensus_state?: ReturnType<typeof dependency_6.google.protobuf.Any.prototype.toObject>;
            client_id?: string;
            proof?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_3.ibc.core.client.v1.Height.prototype.toObject>;
        }): QueryConnectionConsensusStateResponse;
        toObject(): {
            consensus_state?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            client_id?: string | undefined;
            proof?: Uint8Array | undefined;
            proof_height?: {
                revision_number?: number | undefined;
                revision_height?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryConnectionConsensusStateResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryConnectionConsensusStateResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedQueryService {
        static definition: {
            Connection: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryConnectionRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryConnectionRequest;
                responseSerialize: (message: QueryConnectionResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryConnectionResponse;
            };
            Connections: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryConnectionsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryConnectionsRequest;
                responseSerialize: (message: QueryConnectionsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryConnectionsResponse;
            };
            ClientConnections: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryClientConnectionsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryClientConnectionsRequest;
                responseSerialize: (message: QueryClientConnectionsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryClientConnectionsResponse;
            };
            ConnectionClientState: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryConnectionClientStateRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryConnectionClientStateRequest;
                responseSerialize: (message: QueryConnectionClientStateResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryConnectionClientStateResponse;
            };
            ConnectionConsensusState: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryConnectionConsensusStateRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryConnectionConsensusStateRequest;
                responseSerialize: (message: QueryConnectionConsensusStateResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryConnectionConsensusStateResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Connection(call: grpc_1.ServerUnaryCall<QueryConnectionRequest, QueryConnectionResponse>, callback: grpc_1.sendUnaryData<QueryConnectionResponse>): void;
        abstract Connections(call: grpc_1.ServerUnaryCall<QueryConnectionsRequest, QueryConnectionsResponse>, callback: grpc_1.sendUnaryData<QueryConnectionsResponse>): void;
        abstract ClientConnections(call: grpc_1.ServerUnaryCall<QueryClientConnectionsRequest, QueryClientConnectionsResponse>, callback: grpc_1.sendUnaryData<QueryClientConnectionsResponse>): void;
        abstract ConnectionClientState(call: grpc_1.ServerUnaryCall<QueryConnectionClientStateRequest, QueryConnectionClientStateResponse>, callback: grpc_1.sendUnaryData<QueryConnectionClientStateResponse>): void;
        abstract ConnectionConsensusState(call: grpc_1.ServerUnaryCall<QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse>, callback: grpc_1.sendUnaryData<QueryConnectionConsensusStateResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Connection: GrpcUnaryServiceInterface<QueryConnectionRequest, QueryConnectionResponse>;
        Connections: GrpcUnaryServiceInterface<QueryConnectionsRequest, QueryConnectionsResponse>;
        ClientConnections: GrpcUnaryServiceInterface<QueryClientConnectionsRequest, QueryClientConnectionsResponse>;
        ConnectionClientState: GrpcUnaryServiceInterface<QueryConnectionClientStateRequest, QueryConnectionClientStateResponse>;
        ConnectionConsensusState: GrpcUnaryServiceInterface<QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse>;
    }
    export {};
}
