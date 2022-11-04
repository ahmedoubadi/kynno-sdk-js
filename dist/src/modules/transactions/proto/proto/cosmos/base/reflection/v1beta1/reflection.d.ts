/// <reference types="node" />
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.base.reflection.v1beta1 {
    export class ListAllInterfacesRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): ListAllInterfacesRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ListAllInterfacesRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ListAllInterfacesRequest;
    }
    export class ListAllInterfacesResponse extends pb_1.Message {
        constructor(data?: any[] | {
            interface_names?: string[];
        });
        get interface_names(): string[];
        set interface_names(value: string[]);
        static fromObject(data: {
            interface_names?: string[];
        }): ListAllInterfacesResponse;
        toObject(): {
            interface_names?: string[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ListAllInterfacesResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ListAllInterfacesResponse;
    }
    export class ListImplementationsRequest extends pb_1.Message {
        constructor(data?: any[] | {
            interface_name?: string;
        });
        get interface_name(): string;
        set interface_name(value: string);
        static fromObject(data: {
            interface_name?: string;
        }): ListImplementationsRequest;
        toObject(): {
            interface_name?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ListImplementationsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ListImplementationsRequest;
    }
    export class ListImplementationsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            implementation_message_names?: string[];
        });
        get implementation_message_names(): string[];
        set implementation_message_names(value: string[]);
        static fromObject(data: {
            implementation_message_names?: string[];
        }): ListImplementationsResponse;
        toObject(): {
            implementation_message_names?: string[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ListImplementationsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ListImplementationsResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedReflectionServiceService {
        static definition: {
            ListAllInterfaces: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: ListAllInterfacesRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => ListAllInterfacesRequest;
                responseSerialize: (message: ListAllInterfacesResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => ListAllInterfacesResponse;
            };
            ListImplementations: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: ListImplementationsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => ListImplementationsRequest;
                responseSerialize: (message: ListImplementationsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => ListImplementationsResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract ListAllInterfaces(call: grpc_1.ServerUnaryCall<ListAllInterfacesRequest, ListAllInterfacesResponse>, callback: grpc_1.sendUnaryData<ListAllInterfacesResponse>): void;
        abstract ListImplementations(call: grpc_1.ServerUnaryCall<ListImplementationsRequest, ListImplementationsResponse>, callback: grpc_1.sendUnaryData<ListImplementationsResponse>): void;
    }
    const ReflectionServiceClient_base: grpc_1.ServiceClientConstructor;
    export class ReflectionServiceClient extends ReflectionServiceClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        ListAllInterfaces: GrpcUnaryServiceInterface<ListAllInterfacesRequest, ListAllInterfacesResponse>;
        ListImplementations: GrpcUnaryServiceInterface<ListImplementationsRequest, ListImplementationsResponse>;
    }
    export {};
}
