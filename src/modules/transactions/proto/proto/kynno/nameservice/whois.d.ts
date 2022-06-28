/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.13.0
 * source: kynno/nameservice/whois.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export declare namespace kynno.nameservice {
    class Whois extends pb_1.Message {
        constructor(data?: any[] | {
            index?: string;
            name?: string;
            value?: string;
            owner?: string;
        });
        get index(): string;
        set index(value: string);
        get name(): string;
        set name(value: string);
        get value(): string;
        set value(value: string);
        get owner(): string;
        set owner(value: string);
        static fromObject(data: {
            index?: string;
            name?: string;
            value?: string;
            owner?: string;
        }): Whois;
        toObject(): {
            index?: string | undefined;
            name?: string | undefined;
            value?: string | undefined;
            owner?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Whois;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Whois;
    }
}
