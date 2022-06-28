/// <reference types="node" />
import * as pb_1 from "google-protobuf";
export declare namespace kynno.fees.v1 {
    class MsgRegisterDevFeeInfo extends pb_1.Message {
        constructor(data?: any[] | {
            contract_address?: string;
            deployer_address?: string;
            withdraw_address?: string;
            nonces?: number[];
        });
        get contract_address(): string;
        set contract_address(value: string);
        get deployer_address(): string;
        set deployer_address(value: string);
        get withdraw_address(): string;
        set withdraw_address(value: string);
        get nonces(): number[];
        set nonces(value: number[]);
        static fromObject(data: {
            contract_address?: string;
            deployer_address?: string;
            withdraw_address?: string;
            nonces?: number[];
        }): MsgRegisterDevFeeInfo;
        toObject(): {
            contract_address?: string | undefined;
            deployer_address?: string | undefined;
            withdraw_address?: string | undefined;
            nonces?: number[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRegisterDevFeeInfo;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgRegisterDevFeeInfo;
    }
    class MsgRegisterDevFeeInfoResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgRegisterDevFeeInfoResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRegisterDevFeeInfoResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgRegisterDevFeeInfoResponse;
    }
    class MsgCancelDevFeeInfo extends pb_1.Message {
        constructor(data?: any[] | {
            contract_address?: string;
            deployer_address?: string;
        });
        get contract_address(): string;
        set contract_address(value: string);
        get deployer_address(): string;
        set deployer_address(value: string);
        static fromObject(data: {
            contract_address?: string;
            deployer_address?: string;
        }): MsgCancelDevFeeInfo;
        toObject(): {
            contract_address?: string | undefined;
            deployer_address?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCancelDevFeeInfo;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCancelDevFeeInfo;
    }
    class MsgCancelDevFeeInfoResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgCancelDevFeeInfoResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCancelDevFeeInfoResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCancelDevFeeInfoResponse;
    }
    class MsgUpdateDevFeeInfo extends pb_1.Message {
        constructor(data?: any[] | {
            contract_address?: string;
            deployer_address?: string;
            withdraw_address?: string;
        });
        get contract_address(): string;
        set contract_address(value: string);
        get deployer_address(): string;
        set deployer_address(value: string);
        get withdraw_address(): string;
        set withdraw_address(value: string);
        static fromObject(data: {
            contract_address?: string;
            deployer_address?: string;
            withdraw_address?: string;
        }): MsgUpdateDevFeeInfo;
        toObject(): {
            contract_address?: string | undefined;
            deployer_address?: string | undefined;
            withdraw_address?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUpdateDevFeeInfo;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgUpdateDevFeeInfo;
    }
    class MsgUpdateDevFeeInfoResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgUpdateDevFeeInfoResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUpdateDevFeeInfoResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgUpdateDevFeeInfoResponse;
    }
    abstract class UnimplementedMsgService {
        static definition: {
            RegisterDevFeeInfo: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgRegisterDevFeeInfo) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgRegisterDevFeeInfo;
                responseSerialize: (message: MsgRegisterDevFeeInfoResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgRegisterDevFeeInfoResponse;
            };
            CancelDevFeeInfo: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgCancelDevFeeInfo) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgCancelDevFeeInfo;
                responseSerialize: (message: MsgCancelDevFeeInfoResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgCancelDevFeeInfoResponse;
            };
            UpdateDevFeeInfo: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgUpdateDevFeeInfo) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgUpdateDevFeeInfo;
                responseSerialize: (message: MsgUpdateDevFeeInfoResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgUpdateDevFeeInfoResponse;
            };
        };
    }
}
