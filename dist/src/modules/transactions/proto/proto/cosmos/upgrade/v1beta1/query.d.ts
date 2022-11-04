/// <reference types="node" />
import * as dependency_3 from "./upgrade";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.upgrade.v1beta1 {
    export class QueryCurrentPlanRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryCurrentPlanRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryCurrentPlanRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryCurrentPlanRequest;
    }
    export class QueryCurrentPlanResponse extends pb_1.Message {
        constructor(data?: any[] | {
            plan?: dependency_3.cosmos.upgrade.v1beta1.Plan;
        });
        get plan(): dependency_3.cosmos.upgrade.v1beta1.Plan;
        set plan(value: dependency_3.cosmos.upgrade.v1beta1.Plan);
        static fromObject(data: {
            plan?: ReturnType<typeof dependency_3.cosmos.upgrade.v1beta1.Plan.prototype.toObject>;
        }): QueryCurrentPlanResponse;
        toObject(): {
            plan?: {
                name?: string | undefined;
                time?: {
                    seconds?: number | undefined;
                    nanos?: number | undefined;
                } | undefined;
                height?: number | undefined;
                info?: string | undefined;
                upgraded_client_state?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryCurrentPlanResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryCurrentPlanResponse;
    }
    export class QueryAppliedPlanRequest extends pb_1.Message {
        constructor(data?: any[] | {
            name?: string;
        });
        get name(): string;
        set name(value: string);
        static fromObject(data: {
            name?: string;
        }): QueryAppliedPlanRequest;
        toObject(): {
            name?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAppliedPlanRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAppliedPlanRequest;
    }
    export class QueryAppliedPlanResponse extends pb_1.Message {
        constructor(data?: any[] | {
            height?: number;
        });
        get height(): number;
        set height(value: number);
        static fromObject(data: {
            height?: number;
        }): QueryAppliedPlanResponse;
        toObject(): {
            height?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAppliedPlanResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAppliedPlanResponse;
    }
    /** @deprecated*/
    export class QueryUpgradedConsensusStateRequest extends pb_1.Message {
        constructor(data?: any[] | {
            last_height?: number;
        });
        get last_height(): number;
        set last_height(value: number);
        static fromObject(data: {
            last_height?: number;
        }): QueryUpgradedConsensusStateRequest;
        toObject(): {
            last_height?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryUpgradedConsensusStateRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryUpgradedConsensusStateRequest;
    }
    /** @deprecated*/
    export class QueryUpgradedConsensusStateResponse extends pb_1.Message {
        constructor(data?: any[] | {
            upgraded_consensus_state?: Uint8Array;
        });
        get upgraded_consensus_state(): Uint8Array;
        set upgraded_consensus_state(value: Uint8Array);
        static fromObject(data: {
            upgraded_consensus_state?: Uint8Array;
        }): QueryUpgradedConsensusStateResponse;
        toObject(): {
            upgraded_consensus_state?: Uint8Array | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryUpgradedConsensusStateResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryUpgradedConsensusStateResponse;
    }
    export class QueryModuleVersionsRequest extends pb_1.Message {
        constructor(data?: any[] | {
            module_name?: string;
        });
        get module_name(): string;
        set module_name(value: string);
        static fromObject(data: {
            module_name?: string;
        }): QueryModuleVersionsRequest;
        toObject(): {
            module_name?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryModuleVersionsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryModuleVersionsRequest;
    }
    export class QueryModuleVersionsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            module_versions?: dependency_3.cosmos.upgrade.v1beta1.ModuleVersion[];
        });
        get module_versions(): dependency_3.cosmos.upgrade.v1beta1.ModuleVersion[];
        set module_versions(value: dependency_3.cosmos.upgrade.v1beta1.ModuleVersion[]);
        static fromObject(data: {
            module_versions?: ReturnType<typeof dependency_3.cosmos.upgrade.v1beta1.ModuleVersion.prototype.toObject>[];
        }): QueryModuleVersionsResponse;
        toObject(): {
            module_versions?: {
                name?: string | undefined;
                version?: number | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryModuleVersionsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryModuleVersionsResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedQueryService {
        static definition: {
            CurrentPlan: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryCurrentPlanRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryCurrentPlanRequest;
                responseSerialize: (message: QueryCurrentPlanResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryCurrentPlanResponse;
            };
            AppliedPlan: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryAppliedPlanRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryAppliedPlanRequest;
                responseSerialize: (message: QueryAppliedPlanResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryAppliedPlanResponse;
            };
            UpgradedConsensusState: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryUpgradedConsensusStateRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryUpgradedConsensusStateRequest;
                responseSerialize: (message: QueryUpgradedConsensusStateResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryUpgradedConsensusStateResponse;
            };
            ModuleVersions: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryModuleVersionsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryModuleVersionsRequest;
                responseSerialize: (message: QueryModuleVersionsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryModuleVersionsResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract CurrentPlan(call: grpc_1.ServerUnaryCall<QueryCurrentPlanRequest, QueryCurrentPlanResponse>, callback: grpc_1.sendUnaryData<QueryCurrentPlanResponse>): void;
        abstract AppliedPlan(call: grpc_1.ServerUnaryCall<QueryAppliedPlanRequest, QueryAppliedPlanResponse>, callback: grpc_1.sendUnaryData<QueryAppliedPlanResponse>): void;
        abstract UpgradedConsensusState(call: grpc_1.ServerUnaryCall<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>, callback: grpc_1.sendUnaryData<QueryUpgradedConsensusStateResponse>): void;
        abstract ModuleVersions(call: grpc_1.ServerUnaryCall<QueryModuleVersionsRequest, QueryModuleVersionsResponse>, callback: grpc_1.sendUnaryData<QueryModuleVersionsResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        CurrentPlan: GrpcUnaryServiceInterface<QueryCurrentPlanRequest, QueryCurrentPlanResponse>;
        AppliedPlan: GrpcUnaryServiceInterface<QueryAppliedPlanRequest, QueryAppliedPlanResponse>;
        /** @deprecated*/
        UpgradedConsensusState: GrpcUnaryServiceInterface<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>;
        ModuleVersions: GrpcUnaryServiceInterface<QueryModuleVersionsRequest, QueryModuleVersionsResponse>;
    }
    export {};
}
