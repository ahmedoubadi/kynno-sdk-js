/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: ibc/core/client/v1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./client";
import * as dependency_2 from "./../../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace ibc.core.client.v1 {
    export class GenesisState extends pb_1.Message {
        constructor(data?: any[] | {
            clients?: dependency_1.ibc.core.client.v1.IdentifiedClientState[];
            clients_consensus?: dependency_1.ibc.core.client.v1.ClientConsensusStates[];
            clients_metadata?: IdentifiedGenesisMetadata[];
            params?: dependency_1.ibc.core.client.v1.Params;
            create_localhost?: boolean;
            next_client_sequence?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2, 3], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("clients" in data && data.clients != undefined) {
                    this.clients = data.clients;
                }
                if ("clients_consensus" in data && data.clients_consensus != undefined) {
                    this.clients_consensus = data.clients_consensus;
                }
                if ("clients_metadata" in data && data.clients_metadata != undefined) {
                    this.clients_metadata = data.clients_metadata;
                }
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
                if ("create_localhost" in data && data.create_localhost != undefined) {
                    this.create_localhost = data.create_localhost;
                }
                if ("next_client_sequence" in data && data.next_client_sequence != undefined) {
                    this.next_client_sequence = data.next_client_sequence;
                }
            }
        }
        get clients() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ibc.core.client.v1.IdentifiedClientState, 1) as dependency_1.ibc.core.client.v1.IdentifiedClientState[];
        }
        set clients(value: dependency_1.ibc.core.client.v1.IdentifiedClientState[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get clients_consensus() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ibc.core.client.v1.ClientConsensusStates, 2) as dependency_1.ibc.core.client.v1.ClientConsensusStates[];
        }
        set clients_consensus(value: dependency_1.ibc.core.client.v1.ClientConsensusStates[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get clients_metadata() {
            return pb_1.Message.getRepeatedWrapperField(this, IdentifiedGenesisMetadata, 3) as IdentifiedGenesisMetadata[];
        }
        set clients_metadata(value: IdentifiedGenesisMetadata[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        get params() {
            return pb_1.Message.getWrapperField(this, dependency_1.ibc.core.client.v1.Params, 4) as dependency_1.ibc.core.client.v1.Params;
        }
        set params(value: dependency_1.ibc.core.client.v1.Params) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get create_localhost() {
            return pb_1.Message.getField(this, 5) as boolean;
        }
        set create_localhost(value: boolean) {
            pb_1.Message.setField(this, 5, value);
        }
        get next_client_sequence() {
            return pb_1.Message.getField(this, 6) as number;
        }
        set next_client_sequence(value: number) {
            pb_1.Message.setField(this, 6, value);
        }
        static fromObject(data: {
            clients?: ReturnType<typeof dependency_1.ibc.core.client.v1.IdentifiedClientState.prototype.toObject>[];
            clients_consensus?: ReturnType<typeof dependency_1.ibc.core.client.v1.ClientConsensusStates.prototype.toObject>[];
            clients_metadata?: ReturnType<typeof IdentifiedGenesisMetadata.prototype.toObject>[];
            params?: ReturnType<typeof dependency_1.ibc.core.client.v1.Params.prototype.toObject>;
            create_localhost?: boolean;
            next_client_sequence?: number;
        }) {
            const message = new GenesisState({});
            if (data.clients != null) {
                message.clients = data.clients.map(item => dependency_1.ibc.core.client.v1.IdentifiedClientState.fromObject(item));
            }
            if (data.clients_consensus != null) {
                message.clients_consensus = data.clients_consensus.map(item => dependency_1.ibc.core.client.v1.ClientConsensusStates.fromObject(item));
            }
            if (data.clients_metadata != null) {
                message.clients_metadata = data.clients_metadata.map(item => IdentifiedGenesisMetadata.fromObject(item));
            }
            if (data.params != null) {
                message.params = dependency_1.ibc.core.client.v1.Params.fromObject(data.params);
            }
            if (data.create_localhost != null) {
                message.create_localhost = data.create_localhost;
            }
            if (data.next_client_sequence != null) {
                message.next_client_sequence = data.next_client_sequence;
            }
            return message;
        }
        toObject() {
            const data: {
                clients?: ReturnType<typeof dependency_1.ibc.core.client.v1.IdentifiedClientState.prototype.toObject>[];
                clients_consensus?: ReturnType<typeof dependency_1.ibc.core.client.v1.ClientConsensusStates.prototype.toObject>[];
                clients_metadata?: ReturnType<typeof IdentifiedGenesisMetadata.prototype.toObject>[];
                params?: ReturnType<typeof dependency_1.ibc.core.client.v1.Params.prototype.toObject>;
                create_localhost?: boolean;
                next_client_sequence?: number;
            } = {};
            if (this.clients != null) {
                data.clients = this.clients.map((item: dependency_1.ibc.core.client.v1.IdentifiedClientState) => item.toObject());
            }
            if (this.clients_consensus != null) {
                data.clients_consensus = this.clients_consensus.map((item: dependency_1.ibc.core.client.v1.ClientConsensusStates) => item.toObject());
            }
            if (this.clients_metadata != null) {
                data.clients_metadata = this.clients_metadata.map((item: IdentifiedGenesisMetadata) => item.toObject());
            }
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            if (this.create_localhost != null) {
                data.create_localhost = this.create_localhost;
            }
            if (this.next_client_sequence != null) {
                data.next_client_sequence = this.next_client_sequence;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.clients !== undefined)
                writer.writeRepeatedMessage(1, this.clients, (item: dependency_1.ibc.core.client.v1.IdentifiedClientState) => item.serialize(writer));
            if (this.clients_consensus !== undefined)
                writer.writeRepeatedMessage(2, this.clients_consensus, (item: dependency_1.ibc.core.client.v1.ClientConsensusStates) => item.serialize(writer));
            if (this.clients_metadata !== undefined)
                writer.writeRepeatedMessage(3, this.clients_metadata, (item: IdentifiedGenesisMetadata) => item.serialize(writer));
            if (this.params !== undefined)
                writer.writeMessage(4, this.params, () => this.params.serialize(writer));
            if (this.create_localhost !== undefined)
                writer.writeBool(5, this.create_localhost);
            if (this.next_client_sequence !== undefined)
                writer.writeUint64(6, this.next_client_sequence);
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
                        reader.readMessage(message.clients, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_1.ibc.core.client.v1.IdentifiedClientState.deserialize(reader), dependency_1.ibc.core.client.v1.IdentifiedClientState));
                        break;
                    case 2:
                        reader.readMessage(message.clients_consensus, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.ibc.core.client.v1.ClientConsensusStates.deserialize(reader), dependency_1.ibc.core.client.v1.ClientConsensusStates));
                        break;
                    case 3:
                        reader.readMessage(message.clients_metadata, () => pb_1.Message.addToRepeatedWrapperField(message, 3, IdentifiedGenesisMetadata.deserialize(reader), IdentifiedGenesisMetadata));
                        break;
                    case 4:
                        reader.readMessage(message.params, () => message.params = dependency_1.ibc.core.client.v1.Params.deserialize(reader));
                        break;
                    case 5:
                        message.create_localhost = reader.readBool();
                        break;
                    case 6:
                        message.next_client_sequence = reader.readUint64();
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
    export class GenesisMetadata extends pb_1.Message {
        constructor(data?: any[] | {
            key?: Uint8Array;
            value?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("key" in data && data.key != undefined) {
                    this.key = data.key;
                }
                if ("value" in data && data.value != undefined) {
                    this.value = data.value;
                }
            }
        }
        get key() {
            return pb_1.Message.getField(this, 1) as Uint8Array;
        }
        set key(value: Uint8Array) {
            pb_1.Message.setField(this, 1, value);
        }
        get value() {
            return pb_1.Message.getField(this, 2) as Uint8Array;
        }
        set value(value: Uint8Array) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            key?: Uint8Array;
            value?: Uint8Array;
        }) {
            const message = new GenesisMetadata({});
            if (data.key != null) {
                message.key = data.key;
            }
            if (data.value != null) {
                message.value = data.value;
            }
            return message;
        }
        toObject() {
            const data: {
                key?: Uint8Array;
                value?: Uint8Array;
            } = {};
            if (this.key != null) {
                data.key = this.key;
            }
            if (this.value != null) {
                data.value = this.value;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.key !== undefined)
                writer.writeBytes(1, this.key);
            if (this.value !== undefined)
                writer.writeBytes(2, this.value);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisMetadata {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisMetadata();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.key = reader.readBytes();
                        break;
                    case 2:
                        message.value = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GenesisMetadata {
            return GenesisMetadata.deserialize(bytes);
        }
    }
    export class IdentifiedGenesisMetadata extends pb_1.Message {
        constructor(data?: any[] | {
            client_id?: string;
            client_metadata?: GenesisMetadata[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("client_id" in data && data.client_id != undefined) {
                    this.client_id = data.client_id;
                }
                if ("client_metadata" in data && data.client_metadata != undefined) {
                    this.client_metadata = data.client_metadata;
                }
            }
        }
        get client_id() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set client_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get client_metadata() {
            return pb_1.Message.getRepeatedWrapperField(this, GenesisMetadata, 2) as GenesisMetadata[];
        }
        set client_metadata(value: GenesisMetadata[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            client_id?: string;
            client_metadata?: ReturnType<typeof GenesisMetadata.prototype.toObject>[];
        }) {
            const message = new IdentifiedGenesisMetadata({});
            if (data.client_id != null) {
                message.client_id = data.client_id;
            }
            if (data.client_metadata != null) {
                message.client_metadata = data.client_metadata.map(item => GenesisMetadata.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                client_id?: string;
                client_metadata?: ReturnType<typeof GenesisMetadata.prototype.toObject>[];
            } = {};
            if (this.client_id != null) {
                data.client_id = this.client_id;
            }
            if (this.client_metadata != null) {
                data.client_metadata = this.client_metadata.map((item: GenesisMetadata) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.client_id === "string" && this.client_id.length)
                writer.writeString(1, this.client_id);
            if (this.client_metadata !== undefined)
                writer.writeRepeatedMessage(2, this.client_metadata, (item: GenesisMetadata) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IdentifiedGenesisMetadata {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new IdentifiedGenesisMetadata();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.client_id = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.client_metadata, () => pb_1.Message.addToRepeatedWrapperField(message, 2, GenesisMetadata.deserialize(reader), GenesisMetadata));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): IdentifiedGenesisMetadata {
            return IdentifiedGenesisMetadata.deserialize(bytes);
        }
    }
}
