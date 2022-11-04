/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: cosmos/slashing/v1beta1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./slashing";
import * as pb_1 from "google-protobuf";
export namespace cosmos.slashing.v1beta1 {
    export class GenesisState extends pb_1.Message {
        constructor(data?: any[] | {
            params?: dependency_2.cosmos.slashing.v1beta1.Params;
            signing_infos?: SigningInfo[];
            missed_blocks?: ValidatorMissedBlocks[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 3], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
                if ("signing_infos" in data && data.signing_infos != undefined) {
                    this.signing_infos = data.signing_infos;
                }
                if ("missed_blocks" in data && data.missed_blocks != undefined) {
                    this.missed_blocks = data.missed_blocks;
                }
            }
        }
        get params() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.slashing.v1beta1.Params, 1) as dependency_2.cosmos.slashing.v1beta1.Params;
        }
        set params(value: dependency_2.cosmos.slashing.v1beta1.Params) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get signing_infos() {
            return pb_1.Message.getRepeatedWrapperField(this, SigningInfo, 2) as SigningInfo[];
        }
        set signing_infos(value: SigningInfo[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get missed_blocks() {
            return pb_1.Message.getRepeatedWrapperField(this, ValidatorMissedBlocks, 3) as ValidatorMissedBlocks[];
        }
        set missed_blocks(value: ValidatorMissedBlocks[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        static fromObject(data: {
            params?: ReturnType<typeof dependency_2.cosmos.slashing.v1beta1.Params.prototype.toObject>;
            signing_infos?: ReturnType<typeof SigningInfo.prototype.toObject>[];
            missed_blocks?: ReturnType<typeof ValidatorMissedBlocks.prototype.toObject>[];
        }) {
            const message = new GenesisState({});
            if (data.params != null) {
                message.params = dependency_2.cosmos.slashing.v1beta1.Params.fromObject(data.params);
            }
            if (data.signing_infos != null) {
                message.signing_infos = data.signing_infos.map(item => SigningInfo.fromObject(item));
            }
            if (data.missed_blocks != null) {
                message.missed_blocks = data.missed_blocks.map(item => ValidatorMissedBlocks.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                params?: ReturnType<typeof dependency_2.cosmos.slashing.v1beta1.Params.prototype.toObject>;
                signing_infos?: ReturnType<typeof SigningInfo.prototype.toObject>[];
                missed_blocks?: ReturnType<typeof ValidatorMissedBlocks.prototype.toObject>[];
            } = {};
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            if (this.signing_infos != null) {
                data.signing_infos = this.signing_infos.map((item: SigningInfo) => item.toObject());
            }
            if (this.missed_blocks != null) {
                data.missed_blocks = this.missed_blocks.map((item: ValidatorMissedBlocks) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.params !== undefined)
                writer.writeMessage(1, this.params, () => this.params.serialize(writer));
            if (this.signing_infos !== undefined)
                writer.writeRepeatedMessage(2, this.signing_infos, (item: SigningInfo) => item.serialize(writer));
            if (this.missed_blocks !== undefined)
                writer.writeRepeatedMessage(3, this.missed_blocks, (item: ValidatorMissedBlocks) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisState();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.params, () => message.params = dependency_2.cosmos.slashing.v1beta1.Params.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.signing_infos, () => pb_1.Message.addToRepeatedWrapperField(message, 2, SigningInfo.deserialize(reader), SigningInfo));
                        break;
                    case 3:
                        reader.readMessage(message.missed_blocks, () => pb_1.Message.addToRepeatedWrapperField(message, 3, ValidatorMissedBlocks.deserialize(reader), ValidatorMissedBlocks));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GenesisState {
            return GenesisState.deserialize(bytes);
        }
    }
    export class SigningInfo extends pb_1.Message {
        constructor(data?: any[] | {
            address?: string;
            validator_signing_info?: dependency_2.cosmos.slashing.v1beta1.ValidatorSigningInfo;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
                if ("validator_signing_info" in data && data.validator_signing_info != undefined) {
                    this.validator_signing_info = data.validator_signing_info;
                }
            }
        }
        get address() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get validator_signing_info() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.slashing.v1beta1.ValidatorSigningInfo, 2) as dependency_2.cosmos.slashing.v1beta1.ValidatorSigningInfo;
        }
        set validator_signing_info(value: dependency_2.cosmos.slashing.v1beta1.ValidatorSigningInfo) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        static fromObject(data: {
            address?: string;
            validator_signing_info?: ReturnType<typeof dependency_2.cosmos.slashing.v1beta1.ValidatorSigningInfo.prototype.toObject>;
        }) {
            const message = new SigningInfo({});
            if (data.address != null) {
                message.address = data.address;
            }
            if (data.validator_signing_info != null) {
                message.validator_signing_info = dependency_2.cosmos.slashing.v1beta1.ValidatorSigningInfo.fromObject(data.validator_signing_info);
            }
            return message;
        }
        toObject() {
            const data: {
                address?: string;
                validator_signing_info?: ReturnType<typeof dependency_2.cosmos.slashing.v1beta1.ValidatorSigningInfo.prototype.toObject>;
            } = {};
            if (this.address != null) {
                data.address = this.address;
            }
            if (this.validator_signing_info != null) {
                data.validator_signing_info = this.validator_signing_info.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length)
                writer.writeString(1, this.address);
            if (this.validator_signing_info !== undefined)
                writer.writeMessage(2, this.validator_signing_info, () => this.validator_signing_info.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SigningInfo {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SigningInfo();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.address = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.validator_signing_info, () => message.validator_signing_info = dependency_2.cosmos.slashing.v1beta1.ValidatorSigningInfo.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SigningInfo {
            return SigningInfo.deserialize(bytes);
        }
    }
    export class ValidatorMissedBlocks extends pb_1.Message {
        constructor(data?: any[] | {
            address?: string;
            missed_blocks?: MissedBlock[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
                if ("missed_blocks" in data && data.missed_blocks != undefined) {
                    this.missed_blocks = data.missed_blocks;
                }
            }
        }
        get address() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get missed_blocks() {
            return pb_1.Message.getRepeatedWrapperField(this, MissedBlock, 2) as MissedBlock[];
        }
        set missed_blocks(value: MissedBlock[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            address?: string;
            missed_blocks?: ReturnType<typeof MissedBlock.prototype.toObject>[];
        }) {
            const message = new ValidatorMissedBlocks({});
            if (data.address != null) {
                message.address = data.address;
            }
            if (data.missed_blocks != null) {
                message.missed_blocks = data.missed_blocks.map(item => MissedBlock.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                address?: string;
                missed_blocks?: ReturnType<typeof MissedBlock.prototype.toObject>[];
            } = {};
            if (this.address != null) {
                data.address = this.address;
            }
            if (this.missed_blocks != null) {
                data.missed_blocks = this.missed_blocks.map((item: MissedBlock) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length)
                writer.writeString(1, this.address);
            if (this.missed_blocks !== undefined)
                writer.writeRepeatedMessage(2, this.missed_blocks, (item: MissedBlock) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ValidatorMissedBlocks {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ValidatorMissedBlocks();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.address = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.missed_blocks, () => pb_1.Message.addToRepeatedWrapperField(message, 2, MissedBlock.deserialize(reader), MissedBlock));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ValidatorMissedBlocks {
            return ValidatorMissedBlocks.deserialize(bytes);
        }
    }
    export class MissedBlock extends pb_1.Message {
        constructor(data?: any[] | {
            index?: number;
            missed?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("index" in data && data.index != undefined) {
                    this.index = data.index;
                }
                if ("missed" in data && data.missed != undefined) {
                    this.missed = data.missed;
                }
            }
        }
        get index() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set index(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get missed() {
            return pb_1.Message.getField(this, 2) as boolean;
        }
        set missed(value: boolean) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            index?: number;
            missed?: boolean;
        }) {
            const message = new MissedBlock({});
            if (data.index != null) {
                message.index = data.index;
            }
            if (data.missed != null) {
                message.missed = data.missed;
            }
            return message;
        }
        toObject() {
            const data: {
                index?: number;
                missed?: boolean;
            } = {};
            if (this.index != null) {
                data.index = this.index;
            }
            if (this.missed != null) {
                data.missed = this.missed;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.index !== undefined)
                writer.writeInt64(1, this.index);
            if (this.missed !== undefined)
                writer.writeBool(2, this.missed);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MissedBlock {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MissedBlock();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.index = reader.readInt64();
                        break;
                    case 2:
                        message.missed = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MissedBlock {
            return MissedBlock.deserialize(bytes);
        }
    }
}
