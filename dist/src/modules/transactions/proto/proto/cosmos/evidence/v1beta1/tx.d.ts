/// <reference types="node" />
import * as dependency_2 from "./../../../google/protobuf/any";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.evidence.v1beta1 {
    export class MsgSubmitEvidence extends pb_1.Message {
        constructor(data?: any[] | {
            submitter?: string;
            evidence?: dependency_2.google.protobuf.Any;
        });
        get submitter(): string;
        set submitter(value: string);
        get evidence(): dependency_2.google.protobuf.Any;
        set evidence(value: dependency_2.google.protobuf.Any);
        static fromObject(data: {
            submitter?: string;
            evidence?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
        }): MsgSubmitEvidence;
        toObject(): {
            submitter?: string | undefined;
            evidence?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSubmitEvidence;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSubmitEvidence;
    }
    export class MsgSubmitEvidenceResponse extends pb_1.Message {
        constructor(data?: any[] | {
            hash?: Uint8Array;
        });
        get hash(): Uint8Array;
        set hash(value: Uint8Array);
        static fromObject(data: {
            hash?: Uint8Array;
        }): MsgSubmitEvidenceResponse;
        toObject(): {
            hash?: Uint8Array | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSubmitEvidenceResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgSubmitEvidenceResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedMsgService {
        static definition: {
            SubmitEvidence: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgSubmitEvidence) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgSubmitEvidence;
                responseSerialize: (message: MsgSubmitEvidenceResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgSubmitEvidenceResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract SubmitEvidence(call: grpc_1.ServerUnaryCall<MsgSubmitEvidence, MsgSubmitEvidenceResponse>, callback: grpc_1.sendUnaryData<MsgSubmitEvidenceResponse>): void;
    }
    const MsgClient_base: grpc_1.ServiceClientConstructor;
    export class MsgClient extends MsgClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        SubmitEvidence: GrpcUnaryServiceInterface<MsgSubmitEvidence, MsgSubmitEvidenceResponse>;
    }
    export {};
}
