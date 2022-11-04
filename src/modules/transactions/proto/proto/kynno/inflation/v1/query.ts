/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: kynno/inflation/v1/query.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./../../../google/api/annotations";
import * as dependency_3 from "./../../../cosmos/base/v1beta1/coin";
import * as dependency_4 from "./genesis";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace kynno.inflation.v1 {
    export class QueryPeriodRequest extends pb_1.Message {
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new QueryPeriodRequest({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryPeriodRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryPeriodRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryPeriodRequest {
            return QueryPeriodRequest.deserialize(bytes);
        }
    }
    export class QueryPeriodResponse extends pb_1.Message {
        constructor(data?: any[] | {
            period?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("period" in data && data.period != undefined) {
                    this.period = data.period;
                }
            }
        }
        get period() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set period(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            period?: number;
        }) {
            const message = new QueryPeriodResponse({});
            if (data.period != null) {
                message.period = data.period;
            }
            return message;
        }
        toObject() {
            const data: {
                period?: number;
            } = {};
            if (this.period != null) {
                data.period = this.period;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.period !== undefined)
                writer.writeUint64(1, this.period);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryPeriodResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryPeriodResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.period = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryPeriodResponse {
            return QueryPeriodResponse.deserialize(bytes);
        }
    }
    export class QueryEpochMintProvisionRequest extends pb_1.Message {
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new QueryEpochMintProvisionRequest({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryEpochMintProvisionRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryEpochMintProvisionRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryEpochMintProvisionRequest {
            return QueryEpochMintProvisionRequest.deserialize(bytes);
        }
    }
    export class QueryEpochMintProvisionResponse extends pb_1.Message {
        constructor(data?: any[] | {
            epoch_mint_provision?: dependency_3.cosmos.base.v1beta1.DecCoin;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("epoch_mint_provision" in data && data.epoch_mint_provision != undefined) {
                    this.epoch_mint_provision = data.epoch_mint_provision;
                }
            }
        }
        get epoch_mint_provision() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.v1beta1.DecCoin, 1) as dependency_3.cosmos.base.v1beta1.DecCoin;
        }
        set epoch_mint_provision(value: dependency_3.cosmos.base.v1beta1.DecCoin) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        static fromObject(data: {
            epoch_mint_provision?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.DecCoin.prototype.toObject>;
        }) {
            const message = new QueryEpochMintProvisionResponse({});
            if (data.epoch_mint_provision != null) {
                message.epoch_mint_provision = dependency_3.cosmos.base.v1beta1.DecCoin.fromObject(data.epoch_mint_provision);
            }
            return message;
        }
        toObject() {
            const data: {
                epoch_mint_provision?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.DecCoin.prototype.toObject>;
            } = {};
            if (this.epoch_mint_provision != null) {
                data.epoch_mint_provision = this.epoch_mint_provision.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.epoch_mint_provision !== undefined)
                writer.writeMessage(1, this.epoch_mint_provision, () => this.epoch_mint_provision.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryEpochMintProvisionResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryEpochMintProvisionResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.epoch_mint_provision, () => message.epoch_mint_provision = dependency_3.cosmos.base.v1beta1.DecCoin.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryEpochMintProvisionResponse {
            return QueryEpochMintProvisionResponse.deserialize(bytes);
        }
    }
    export class QuerySkippedEpochsRequest extends pb_1.Message {
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new QuerySkippedEpochsRequest({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuerySkippedEpochsRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuerySkippedEpochsRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QuerySkippedEpochsRequest {
            return QuerySkippedEpochsRequest.deserialize(bytes);
        }
    }
    export class QuerySkippedEpochsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            skipped_epochs?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("skipped_epochs" in data && data.skipped_epochs != undefined) {
                    this.skipped_epochs = data.skipped_epochs;
                }
            }
        }
        get skipped_epochs() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set skipped_epochs(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            skipped_epochs?: number;
        }) {
            const message = new QuerySkippedEpochsResponse({});
            if (data.skipped_epochs != null) {
                message.skipped_epochs = data.skipped_epochs;
            }
            return message;
        }
        toObject() {
            const data: {
                skipped_epochs?: number;
            } = {};
            if (this.skipped_epochs != null) {
                data.skipped_epochs = this.skipped_epochs;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.skipped_epochs !== undefined)
                writer.writeUint64(1, this.skipped_epochs);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuerySkippedEpochsResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuerySkippedEpochsResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.skipped_epochs = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QuerySkippedEpochsResponse {
            return QuerySkippedEpochsResponse.deserialize(bytes);
        }
    }
    export class QueryCirculatingSupplyRequest extends pb_1.Message {
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new QueryCirculatingSupplyRequest({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryCirculatingSupplyRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryCirculatingSupplyRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryCirculatingSupplyRequest {
            return QueryCirculatingSupplyRequest.deserialize(bytes);
        }
    }
    export class QueryCirculatingSupplyResponse extends pb_1.Message {
        constructor(data?: any[] | {
            circulating_supply?: dependency_3.cosmos.base.v1beta1.DecCoin;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("circulating_supply" in data && data.circulating_supply != undefined) {
                    this.circulating_supply = data.circulating_supply;
                }
            }
        }
        get circulating_supply() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.base.v1beta1.DecCoin, 1) as dependency_3.cosmos.base.v1beta1.DecCoin;
        }
        set circulating_supply(value: dependency_3.cosmos.base.v1beta1.DecCoin) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        static fromObject(data: {
            circulating_supply?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.DecCoin.prototype.toObject>;
        }) {
            const message = new QueryCirculatingSupplyResponse({});
            if (data.circulating_supply != null) {
                message.circulating_supply = dependency_3.cosmos.base.v1beta1.DecCoin.fromObject(data.circulating_supply);
            }
            return message;
        }
        toObject() {
            const data: {
                circulating_supply?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.DecCoin.prototype.toObject>;
            } = {};
            if (this.circulating_supply != null) {
                data.circulating_supply = this.circulating_supply.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.circulating_supply !== undefined)
                writer.writeMessage(1, this.circulating_supply, () => this.circulating_supply.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryCirculatingSupplyResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryCirculatingSupplyResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.circulating_supply, () => message.circulating_supply = dependency_3.cosmos.base.v1beta1.DecCoin.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryCirculatingSupplyResponse {
            return QueryCirculatingSupplyResponse.deserialize(bytes);
        }
    }
    export class QueryInflationRateRequest extends pb_1.Message {
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new QueryInflationRateRequest({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryInflationRateRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryInflationRateRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryInflationRateRequest {
            return QueryInflationRateRequest.deserialize(bytes);
        }
    }
    export class QueryInflationRateResponse extends pb_1.Message {
        constructor(data?: any[] | {
            inflation_rate?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("inflation_rate" in data && data.inflation_rate != undefined) {
                    this.inflation_rate = data.inflation_rate;
                }
            }
        }
        get inflation_rate() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set inflation_rate(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            inflation_rate?: string;
        }) {
            const message = new QueryInflationRateResponse({});
            if (data.inflation_rate != null) {
                message.inflation_rate = data.inflation_rate;
            }
            return message;
        }
        toObject() {
            const data: {
                inflation_rate?: string;
            } = {};
            if (this.inflation_rate != null) {
                data.inflation_rate = this.inflation_rate;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.inflation_rate === "string" && this.inflation_rate.length)
                writer.writeString(1, this.inflation_rate);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryInflationRateResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryInflationRateResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.inflation_rate = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryInflationRateResponse {
            return QueryInflationRateResponse.deserialize(bytes);
        }
    }
    export class QueryParamsRequest extends pb_1.Message {
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new QueryParamsRequest({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryParamsRequest {
            return QueryParamsRequest.deserialize(bytes);
        }
    }
    export class QueryParamsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            params?: dependency_4.kynno.inflation.v1.Params;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
            }
        }
        get params() {
            return pb_1.Message.getWrapperField(this, dependency_4.kynno.inflation.v1.Params, 1) as dependency_4.kynno.inflation.v1.Params;
        }
        set params(value: dependency_4.kynno.inflation.v1.Params) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        static fromObject(data: {
            params?: ReturnType<typeof dependency_4.kynno.inflation.v1.Params.prototype.toObject>;
        }) {
            const message = new QueryParamsResponse({});
            if (data.params != null) {
                message.params = dependency_4.kynno.inflation.v1.Params.fromObject(data.params);
            }
            return message;
        }
        toObject() {
            const data: {
                params?: ReturnType<typeof dependency_4.kynno.inflation.v1.Params.prototype.toObject>;
            } = {};
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.params !== undefined)
                writer.writeMessage(1, this.params, () => this.params.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.params, () => message.params = dependency_4.kynno.inflation.v1.Params.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse {
            return QueryParamsResponse.deserialize(bytes);
        }
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    interface GrpcStreamServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
        (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    }
    interface GrpWritableServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    }
    interface GrpcChunkServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
        (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    }
    interface GrpcPromiseServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
        (message: P, options?: grpc_1.CallOptions): Promise<R>;
    }
    export abstract class UnimplementedQueryService {
        static definition = {
            Period: {
                path: "/kynno.inflation.v1.Query/Period",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryPeriodRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryPeriodRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryPeriodResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryPeriodResponse.deserialize(new Uint8Array(bytes))
            },
            EpochMintProvision: {
                path: "/kynno.inflation.v1.Query/EpochMintProvision",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryEpochMintProvisionRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryEpochMintProvisionRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryEpochMintProvisionResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryEpochMintProvisionResponse.deserialize(new Uint8Array(bytes))
            },
            SkippedEpochs: {
                path: "/kynno.inflation.v1.Query/SkippedEpochs",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QuerySkippedEpochsRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QuerySkippedEpochsRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QuerySkippedEpochsResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QuerySkippedEpochsResponse.deserialize(new Uint8Array(bytes))
            },
            CirculatingSupply: {
                path: "/kynno.inflation.v1.Query/CirculatingSupply",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryCirculatingSupplyRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryCirculatingSupplyRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryCirculatingSupplyResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryCirculatingSupplyResponse.deserialize(new Uint8Array(bytes))
            },
            InflationRate: {
                path: "/kynno.inflation.v1.Query/InflationRate",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryInflationRateRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryInflationRateRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryInflationRateResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryInflationRateResponse.deserialize(new Uint8Array(bytes))
            },
            Params: {
                path: "/kynno.inflation.v1.Query/Params",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryParamsRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryParamsRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryParamsResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryParamsResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Period(call: grpc_1.ServerUnaryCall<QueryPeriodRequest, QueryPeriodResponse>, callback: grpc_1.sendUnaryData<QueryPeriodResponse>): void;
        abstract EpochMintProvision(call: grpc_1.ServerUnaryCall<QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse>, callback: grpc_1.sendUnaryData<QueryEpochMintProvisionResponse>): void;
        abstract SkippedEpochs(call: grpc_1.ServerUnaryCall<QuerySkippedEpochsRequest, QuerySkippedEpochsResponse>, callback: grpc_1.sendUnaryData<QuerySkippedEpochsResponse>): void;
        abstract CirculatingSupply(call: grpc_1.ServerUnaryCall<QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse>, callback: grpc_1.sendUnaryData<QueryCirculatingSupplyResponse>): void;
        abstract InflationRate(call: grpc_1.ServerUnaryCall<QueryInflationRateRequest, QueryInflationRateResponse>, callback: grpc_1.sendUnaryData<QueryInflationRateResponse>): void;
        abstract Params(call: grpc_1.ServerUnaryCall<QueryParamsRequest, QueryParamsResponse>, callback: grpc_1.sendUnaryData<QueryParamsResponse>): void;
    }
    export class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        Period: GrpcUnaryServiceInterface<QueryPeriodRequest, QueryPeriodResponse> = (message: QueryPeriodRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryPeriodResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryPeriodResponse>, callback?: grpc_1.requestCallback<QueryPeriodResponse>): grpc_1.ClientUnaryCall => {
            return super.Period(message, metadata, options, callback);
        };
        EpochMintProvision: GrpcUnaryServiceInterface<QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse> = (message: QueryEpochMintProvisionRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryEpochMintProvisionResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryEpochMintProvisionResponse>, callback?: grpc_1.requestCallback<QueryEpochMintProvisionResponse>): grpc_1.ClientUnaryCall => {
            return super.EpochMintProvision(message, metadata, options, callback);
        };
        SkippedEpochs: GrpcUnaryServiceInterface<QuerySkippedEpochsRequest, QuerySkippedEpochsResponse> = (message: QuerySkippedEpochsRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QuerySkippedEpochsResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QuerySkippedEpochsResponse>, callback?: grpc_1.requestCallback<QuerySkippedEpochsResponse>): grpc_1.ClientUnaryCall => {
            return super.SkippedEpochs(message, metadata, options, callback);
        };
        CirculatingSupply: GrpcUnaryServiceInterface<QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse> = (message: QueryCirculatingSupplyRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryCirculatingSupplyResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryCirculatingSupplyResponse>, callback?: grpc_1.requestCallback<QueryCirculatingSupplyResponse>): grpc_1.ClientUnaryCall => {
            return super.CirculatingSupply(message, metadata, options, callback);
        };
        InflationRate: GrpcUnaryServiceInterface<QueryInflationRateRequest, QueryInflationRateResponse> = (message: QueryInflationRateRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryInflationRateResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryInflationRateResponse>, callback?: grpc_1.requestCallback<QueryInflationRateResponse>): grpc_1.ClientUnaryCall => {
            return super.InflationRate(message, metadata, options, callback);
        };
        Params: GrpcUnaryServiceInterface<QueryParamsRequest, QueryParamsResponse> = (message: QueryParamsRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryParamsResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryParamsResponse>, callback?: grpc_1.requestCallback<QueryParamsResponse>): grpc_1.ClientUnaryCall => {
            return super.Params(message, metadata, options, callback);
        };
    }
}
