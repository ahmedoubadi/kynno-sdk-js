/// <reference types="node" />
import * as dependency_3 from "./../../../cosmos/base/v1beta1/coin";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace kynno.erc20.v1 {
    export class MsgConvertCoin extends pb_1.Message {
        constructor(data?: any[] | {
            coin?: dependency_3.cosmos.base.v1beta1.Coin;
            receiver?: string;
            sender?: string;
        });
        get coin(): dependency_3.cosmos.base.v1beta1.Coin;
        set coin(value: dependency_3.cosmos.base.v1beta1.Coin);
        get receiver(): string;
        set receiver(value: string);
        get sender(): string;
        set sender(value: string);
        static fromObject(data: {
            coin?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject>;
            receiver?: string;
            sender?: string;
        }): MsgConvertCoin;
        toObject(): {
            coin?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            receiver?: string | undefined;
            sender?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgConvertCoin;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgConvertCoin;
    }
    export class MsgConvertCoinResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgConvertCoinResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgConvertCoinResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgConvertCoinResponse;
    }
    export class MsgConvertERC20 extends pb_1.Message {
        constructor(data?: any[] | {
            contract_address?: string;
            amount?: string;
            receiver?: string;
            sender?: string;
        });
        get contract_address(): string;
        set contract_address(value: string);
        get amount(): string;
        set amount(value: string);
        get receiver(): string;
        set receiver(value: string);
        get sender(): string;
        set sender(value: string);
        static fromObject(data: {
            contract_address?: string;
            amount?: string;
            receiver?: string;
            sender?: string;
        }): MsgConvertERC20;
        toObject(): {
            contract_address?: string | undefined;
            amount?: string | undefined;
            receiver?: string | undefined;
            sender?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgConvertERC20;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgConvertERC20;
    }
    export class MsgConvertERC20Response extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgConvertERC20Response;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgConvertERC20Response;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgConvertERC20Response;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedMsgService {
        static definition: {
            ConvertCoin: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgConvertCoin) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgConvertCoin;
                responseSerialize: (message: MsgConvertCoinResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgConvertCoinResponse;
            };
            ConvertERC20: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgConvertERC20) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgConvertERC20;
                responseSerialize: (message: MsgConvertERC20Response) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgConvertERC20Response;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract ConvertCoin(call: grpc_1.ServerUnaryCall<MsgConvertCoin, MsgConvertCoinResponse>, callback: grpc_1.sendUnaryData<MsgConvertCoinResponse>): void;
        abstract ConvertERC20(call: grpc_1.ServerUnaryCall<MsgConvertERC20, MsgConvertERC20Response>, callback: grpc_1.sendUnaryData<MsgConvertERC20Response>): void;
    }
    const MsgClient_base: grpc_1.ServiceClientConstructor;
    export class MsgClient extends MsgClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        ConvertCoin: GrpcUnaryServiceInterface<MsgConvertCoin, MsgConvertCoinResponse>;
        ConvertERC20: GrpcUnaryServiceInterface<MsgConvertERC20, MsgConvertERC20Response>;
    }
    export {};
}
