/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: kynno/inflation/v1/inflation.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace kynno.inflation.v1 {
    export class InflationDistribution extends pb_1.Message {
        constructor(data?: any[] | {
            staking_rewards?: string;
            usage_incentives?: string;
            community_pool?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("staking_rewards" in data && data.staking_rewards != undefined) {
                    this.staking_rewards = data.staking_rewards;
                }
                if ("usage_incentives" in data && data.usage_incentives != undefined) {
                    this.usage_incentives = data.usage_incentives;
                }
                if ("community_pool" in data && data.community_pool != undefined) {
                    this.community_pool = data.community_pool;
                }
            }
        }
        get staking_rewards() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set staking_rewards(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get usage_incentives() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set usage_incentives(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get community_pool() {
            return pb_1.Message.getField(this, 3) as string;
        }
        set community_pool(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            staking_rewards?: string;
            usage_incentives?: string;
            community_pool?: string;
        }) {
            const message = new InflationDistribution({});
            if (data.staking_rewards != null) {
                message.staking_rewards = data.staking_rewards;
            }
            if (data.usage_incentives != null) {
                message.usage_incentives = data.usage_incentives;
            }
            if (data.community_pool != null) {
                message.community_pool = data.community_pool;
            }
            return message;
        }
        toObject() {
            const data: {
                staking_rewards?: string;
                usage_incentives?: string;
                community_pool?: string;
            } = {};
            if (this.staking_rewards != null) {
                data.staking_rewards = this.staking_rewards;
            }
            if (this.usage_incentives != null) {
                data.usage_incentives = this.usage_incentives;
            }
            if (this.community_pool != null) {
                data.community_pool = this.community_pool;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.staking_rewards === "string" && this.staking_rewards.length)
                writer.writeString(1, this.staking_rewards);
            if (typeof this.usage_incentives === "string" && this.usage_incentives.length)
                writer.writeString(2, this.usage_incentives);
            if (typeof this.community_pool === "string" && this.community_pool.length)
                writer.writeString(3, this.community_pool);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): InflationDistribution {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new InflationDistribution();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.staking_rewards = reader.readString();
                        break;
                    case 2:
                        message.usage_incentives = reader.readString();
                        break;
                    case 3:
                        message.community_pool = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): InflationDistribution {
            return InflationDistribution.deserialize(bytes);
        }
    }
    export class ExponentialCalculation extends pb_1.Message {
        constructor(data?: any[] | {
            a?: string;
            r?: string;
            c?: string;
            bonding_target?: string;
            max_variance?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("a" in data && data.a != undefined) {
                    this.a = data.a;
                }
                if ("r" in data && data.r != undefined) {
                    this.r = data.r;
                }
                if ("c" in data && data.c != undefined) {
                    this.c = data.c;
                }
                if ("bonding_target" in data && data.bonding_target != undefined) {
                    this.bonding_target = data.bonding_target;
                }
                if ("max_variance" in data && data.max_variance != undefined) {
                    this.max_variance = data.max_variance;
                }
            }
        }
        get a() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set a(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get r() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set r(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get c() {
            return pb_1.Message.getField(this, 3) as string;
        }
        set c(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get bonding_target() {
            return pb_1.Message.getField(this, 4) as string;
        }
        set bonding_target(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get max_variance() {
            return pb_1.Message.getField(this, 5) as string;
        }
        set max_variance(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            a?: string;
            r?: string;
            c?: string;
            bonding_target?: string;
            max_variance?: string;
        }) {
            const message = new ExponentialCalculation({});
            if (data.a != null) {
                message.a = data.a;
            }
            if (data.r != null) {
                message.r = data.r;
            }
            if (data.c != null) {
                message.c = data.c;
            }
            if (data.bonding_target != null) {
                message.bonding_target = data.bonding_target;
            }
            if (data.max_variance != null) {
                message.max_variance = data.max_variance;
            }
            return message;
        }
        toObject() {
            const data: {
                a?: string;
                r?: string;
                c?: string;
                bonding_target?: string;
                max_variance?: string;
            } = {};
            if (this.a != null) {
                data.a = this.a;
            }
            if (this.r != null) {
                data.r = this.r;
            }
            if (this.c != null) {
                data.c = this.c;
            }
            if (this.bonding_target != null) {
                data.bonding_target = this.bonding_target;
            }
            if (this.max_variance != null) {
                data.max_variance = this.max_variance;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.a === "string" && this.a.length)
                writer.writeString(1, this.a);
            if (typeof this.r === "string" && this.r.length)
                writer.writeString(2, this.r);
            if (typeof this.c === "string" && this.c.length)
                writer.writeString(3, this.c);
            if (typeof this.bonding_target === "string" && this.bonding_target.length)
                writer.writeString(4, this.bonding_target);
            if (typeof this.max_variance === "string" && this.max_variance.length)
                writer.writeString(5, this.max_variance);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ExponentialCalculation {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ExponentialCalculation();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.a = reader.readString();
                        break;
                    case 2:
                        message.r = reader.readString();
                        break;
                    case 3:
                        message.c = reader.readString();
                        break;
                    case 4:
                        message.bonding_target = reader.readString();
                        break;
                    case 5:
                        message.max_variance = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ExponentialCalculation {
            return ExponentialCalculation.deserialize(bytes);
        }
    }
}
