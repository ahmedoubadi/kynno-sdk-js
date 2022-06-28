import * as pb_1 from "google-protobuf";
export declare namespace kynno.nameservice {
    class Params extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): Params;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Params;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Params;
    }
}
