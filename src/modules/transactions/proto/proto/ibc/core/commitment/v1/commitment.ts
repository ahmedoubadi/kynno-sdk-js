/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: ibc/core/commitment/v1/commitment.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../../gogoproto/gogo";
import * as dependency_2 from "./../../../../proofs";
import * as pb_1 from "google-protobuf";
export namespace ibc.core.commitment.v1 {
    export class MerkleRoot extends pb_1.Message {
        constructor(data?: any[] | {
            hash?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("hash" in data && data.hash != undefined) {
                    this.hash = data.hash;
                }
            }
        }
        get hash() {
            return pb_1.Message.getField(this, 1) as Uint8Array;
        }
        set hash(value: Uint8Array) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            hash?: Uint8Array;
        }) {
            const message = new MerkleRoot({});
            if (data.hash != null) {
                message.hash = data.hash;
            }
            return message;
        }
        toObject() {
            const data: {
                hash?: Uint8Array;
            } = {};
            if (this.hash != null) {
                data.hash = this.hash;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.hash !== undefined)
                writer.writeBytes(1, this.hash);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MerkleRoot {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MerkleRoot();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.hash = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MerkleRoot {
            return MerkleRoot.deserialize(bytes);
        }
    }
    export class MerklePrefix extends pb_1.Message {
        constructor(data?: any[] | {
            key_prefix?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("key_prefix" in data && data.key_prefix != undefined) {
                    this.key_prefix = data.key_prefix;
                }
            }
        }
        get key_prefix() {
            return pb_1.Message.getField(this, 1) as Uint8Array;
        }
        set key_prefix(value: Uint8Array) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            key_prefix?: Uint8Array;
        }) {
            const message = new MerklePrefix({});
            if (data.key_prefix != null) {
                message.key_prefix = data.key_prefix;
            }
            return message;
        }
        toObject() {
            const data: {
                key_prefix?: Uint8Array;
            } = {};
            if (this.key_prefix != null) {
                data.key_prefix = this.key_prefix;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.key_prefix !== undefined)
                writer.writeBytes(1, this.key_prefix);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MerklePrefix {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MerklePrefix();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.key_prefix = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MerklePrefix {
            return MerklePrefix.deserialize(bytes);
        }
    }
    export class MerklePath extends pb_1.Message {
        constructor(data?: any[] | {
            key_path?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("key_path" in data && data.key_path != undefined) {
                    this.key_path = data.key_path;
                }
            }
        }
        get key_path() {
            return pb_1.Message.getField(this, 1) as string[];
        }
        set key_path(value: string[]) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            key_path?: string[];
        }) {
            const message = new MerklePath({});
            if (data.key_path != null) {
                message.key_path = data.key_path;
            }
            return message;
        }
        toObject() {
            const data: {
                key_path?: string[];
            } = {};
            if (this.key_path != null) {
                data.key_path = this.key_path;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.key_path !== undefined)
                writer.writeRepeatedString(1, this.key_path);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MerklePath {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MerklePath();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        pb_1.Message.addToRepeatedField(message, 1, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MerklePath {
            return MerklePath.deserialize(bytes);
        }
    }
    export class MerkleProof extends pb_1.Message {
        constructor(data?: any[] | {
            proofs?: dependency_2.ics23.CommitmentProof[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("proofs" in data && data.proofs != undefined) {
                    this.proofs = data.proofs;
                }
            }
        }
        get proofs() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.ics23.CommitmentProof, 1) as dependency_2.ics23.CommitmentProof[];
        }
        set proofs(value: dependency_2.ics23.CommitmentProof[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            proofs?: ReturnType<typeof dependency_2.ics23.CommitmentProof.prototype.toObject>[];
        }) {
            const message = new MerkleProof({});
            if (data.proofs != null) {
                message.proofs = data.proofs.map(item => dependency_2.ics23.CommitmentProof.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                proofs?: ReturnType<typeof dependency_2.ics23.CommitmentProof.prototype.toObject>[];
            } = {};
            if (this.proofs != null) {
                data.proofs = this.proofs.map((item: dependency_2.ics23.CommitmentProof) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.proofs !== undefined)
                writer.writeRepeatedMessage(1, this.proofs, (item: dependency_2.ics23.CommitmentProof) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MerkleProof {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MerkleProof();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.proofs, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.ics23.CommitmentProof.deserialize(reader), dependency_2.ics23.CommitmentProof));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MerkleProof {
            return MerkleProof.deserialize(bytes);
        }
    }
}
