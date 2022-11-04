/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: cosmos/auth/v1beta1/auth.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../cosmos_proto/cosmos";
import * as dependency_2 from "./../../../gogoproto/gogo";
import * as dependency_3 from "./../../../google/protobuf/any";
import * as pb_1 from "google-protobuf";
export namespace cosmos.auth.v1beta1 {
    export class BaseAccount extends pb_1.Message {
        constructor(data?: any[] | {
            address?: string;
            pub_key?: dependency_3.google.protobuf.Any;
            account_number?: number;
            sequence?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
                if ("pub_key" in data && data.pub_key != undefined) {
                    this.pub_key = data.pub_key;
                }
                if ("account_number" in data && data.account_number != undefined) {
                    this.account_number = data.account_number;
                }
                if ("sequence" in data && data.sequence != undefined) {
                    this.sequence = data.sequence;
                }
            }
        }
        get address() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get pub_key() {
            return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Any, 2) as dependency_3.google.protobuf.Any;
        }
        set pub_key(value: dependency_3.google.protobuf.Any) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get account_number() {
            return pb_1.Message.getField(this, 3) as number;
        }
        set account_number(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get sequence() {
            return pb_1.Message.getField(this, 4) as number;
        }
        set sequence(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            address?: string;
            pub_key?: ReturnType<typeof dependency_3.google.protobuf.Any.prototype.toObject>;
            account_number?: number;
            sequence?: number;
        }) {
            const message = new BaseAccount({});
            if (data.address != null) {
                message.address = data.address;
            }
            if (data.pub_key != null) {
                message.pub_key = dependency_3.google.protobuf.Any.fromObject(data.pub_key);
            }
            if (data.account_number != null) {
                message.account_number = data.account_number;
            }
            if (data.sequence != null) {
                message.sequence = data.sequence;
            }
            return message;
        }
        toObject() {
            const data: {
                address?: string;
                pub_key?: ReturnType<typeof dependency_3.google.protobuf.Any.prototype.toObject>;
                account_number?: number;
                sequence?: number;
            } = {};
            if (this.address != null) {
                data.address = this.address;
            }
            if (this.pub_key != null) {
                data.pub_key = this.pub_key.toObject();
            }
            if (this.account_number != null) {
                data.account_number = this.account_number;
            }
            if (this.sequence != null) {
                data.sequence = this.sequence;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length)
                writer.writeString(1, this.address);
            if (this.pub_key !== undefined)
                writer.writeMessage(2, this.pub_key, () => this.pub_key.serialize(writer));
            if (this.account_number !== undefined)
                writer.writeUint64(3, this.account_number);
            if (this.sequence !== undefined)
                writer.writeUint64(4, this.sequence);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BaseAccount {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BaseAccount();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.address = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.pub_key, () => message.pub_key = dependency_3.google.protobuf.Any.deserialize(reader));
                        break;
                    case 3:
                        message.account_number = reader.readUint64();
                        break;
                    case 4:
                        message.sequence = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): BaseAccount {
            return BaseAccount.deserialize(bytes);
        }
    }
    export class ModuleAccount extends pb_1.Message {
        constructor(data?: any[] | {
            base_account?: BaseAccount;
            name?: string;
            permissions?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("base_account" in data && data.base_account != undefined) {
                    this.base_account = data.base_account;
                }
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("permissions" in data && data.permissions != undefined) {
                    this.permissions = data.permissions;
                }
            }
        }
        get base_account() {
            return pb_1.Message.getWrapperField(this, BaseAccount, 1) as BaseAccount;
        }
        set base_account(value: BaseAccount) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get name() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get permissions() {
            return pb_1.Message.getField(this, 3) as string[];
        }
        set permissions(value: string[]) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            base_account?: ReturnType<typeof BaseAccount.prototype.toObject>;
            name?: string;
            permissions?: string[];
        }) {
            const message = new ModuleAccount({});
            if (data.base_account != null) {
                message.base_account = BaseAccount.fromObject(data.base_account);
            }
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.permissions != null) {
                message.permissions = data.permissions;
            }
            return message;
        }
        toObject() {
            const data: {
                base_account?: ReturnType<typeof BaseAccount.prototype.toObject>;
                name?: string;
                permissions?: string[];
            } = {};
            if (this.base_account != null) {
                data.base_account = this.base_account.toObject();
            }
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.permissions != null) {
                data.permissions = this.permissions;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.base_account !== undefined)
                writer.writeMessage(1, this.base_account, () => this.base_account.serialize(writer));
            if (typeof this.name === "string" && this.name.length)
                writer.writeString(2, this.name);
            if (this.permissions !== undefined)
                writer.writeRepeatedString(3, this.permissions);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ModuleAccount {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ModuleAccount();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.base_account, () => message.base_account = BaseAccount.deserialize(reader));
                        break;
                    case 2:
                        message.name = reader.readString();
                        break;
                    case 3:
                        pb_1.Message.addToRepeatedField(message, 3, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ModuleAccount {
            return ModuleAccount.deserialize(bytes);
        }
    }
    export class Params extends pb_1.Message {
        constructor(data?: any[] | {
            max_memo_characters?: number;
            tx_sig_limit?: number;
            tx_size_cost_per_byte?: number;
            sig_verify_cost_ed25519?: number;
            sig_verify_cost_secp256k1?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("max_memo_characters" in data && data.max_memo_characters != undefined) {
                    this.max_memo_characters = data.max_memo_characters;
                }
                if ("tx_sig_limit" in data && data.tx_sig_limit != undefined) {
                    this.tx_sig_limit = data.tx_sig_limit;
                }
                if ("tx_size_cost_per_byte" in data && data.tx_size_cost_per_byte != undefined) {
                    this.tx_size_cost_per_byte = data.tx_size_cost_per_byte;
                }
                if ("sig_verify_cost_ed25519" in data && data.sig_verify_cost_ed25519 != undefined) {
                    this.sig_verify_cost_ed25519 = data.sig_verify_cost_ed25519;
                }
                if ("sig_verify_cost_secp256k1" in data && data.sig_verify_cost_secp256k1 != undefined) {
                    this.sig_verify_cost_secp256k1 = data.sig_verify_cost_secp256k1;
                }
            }
        }
        get max_memo_characters() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set max_memo_characters(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get tx_sig_limit() {
            return pb_1.Message.getField(this, 2) as number;
        }
        set tx_sig_limit(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get tx_size_cost_per_byte() {
            return pb_1.Message.getField(this, 3) as number;
        }
        set tx_size_cost_per_byte(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get sig_verify_cost_ed25519() {
            return pb_1.Message.getField(this, 4) as number;
        }
        set sig_verify_cost_ed25519(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        get sig_verify_cost_secp256k1() {
            return pb_1.Message.getField(this, 5) as number;
        }
        set sig_verify_cost_secp256k1(value: number) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            max_memo_characters?: number;
            tx_sig_limit?: number;
            tx_size_cost_per_byte?: number;
            sig_verify_cost_ed25519?: number;
            sig_verify_cost_secp256k1?: number;
        }) {
            const message = new Params({});
            if (data.max_memo_characters != null) {
                message.max_memo_characters = data.max_memo_characters;
            }
            if (data.tx_sig_limit != null) {
                message.tx_sig_limit = data.tx_sig_limit;
            }
            if (data.tx_size_cost_per_byte != null) {
                message.tx_size_cost_per_byte = data.tx_size_cost_per_byte;
            }
            if (data.sig_verify_cost_ed25519 != null) {
                message.sig_verify_cost_ed25519 = data.sig_verify_cost_ed25519;
            }
            if (data.sig_verify_cost_secp256k1 != null) {
                message.sig_verify_cost_secp256k1 = data.sig_verify_cost_secp256k1;
            }
            return message;
        }
        toObject() {
            const data: {
                max_memo_characters?: number;
                tx_sig_limit?: number;
                tx_size_cost_per_byte?: number;
                sig_verify_cost_ed25519?: number;
                sig_verify_cost_secp256k1?: number;
            } = {};
            if (this.max_memo_characters != null) {
                data.max_memo_characters = this.max_memo_characters;
            }
            if (this.tx_sig_limit != null) {
                data.tx_sig_limit = this.tx_sig_limit;
            }
            if (this.tx_size_cost_per_byte != null) {
                data.tx_size_cost_per_byte = this.tx_size_cost_per_byte;
            }
            if (this.sig_verify_cost_ed25519 != null) {
                data.sig_verify_cost_ed25519 = this.sig_verify_cost_ed25519;
            }
            if (this.sig_verify_cost_secp256k1 != null) {
                data.sig_verify_cost_secp256k1 = this.sig_verify_cost_secp256k1;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.max_memo_characters !== undefined)
                writer.writeUint64(1, this.max_memo_characters);
            if (this.tx_sig_limit !== undefined)
                writer.writeUint64(2, this.tx_sig_limit);
            if (this.tx_size_cost_per_byte !== undefined)
                writer.writeUint64(3, this.tx_size_cost_per_byte);
            if (this.sig_verify_cost_ed25519 !== undefined)
                writer.writeUint64(4, this.sig_verify_cost_ed25519);
            if (this.sig_verify_cost_secp256k1 !== undefined)
                writer.writeUint64(5, this.sig_verify_cost_secp256k1);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Params {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Params();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.max_memo_characters = reader.readUint64();
                        break;
                    case 2:
                        message.tx_sig_limit = reader.readUint64();
                        break;
                    case 3:
                        message.tx_size_cost_per_byte = reader.readUint64();
                        break;
                    case 4:
                        message.sig_verify_cost_ed25519 = reader.readUint64();
                        break;
                    case 5:
                        message.sig_verify_cost_secp256k1 = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Params {
            return Params.deserialize(bytes);
        }
    }
}
