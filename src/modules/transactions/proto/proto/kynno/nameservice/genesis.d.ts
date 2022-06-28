import * as dependency_2 from "./params";
import * as dependency_3 from "./whois";
import * as pb_1 from "google-protobuf";
export declare namespace kynno.nameservice {
    class GenesisState extends pb_1.Message {
        constructor(data?: any[] | {
            params?: dependency_2.kynno.nameservice.Params;
            whoisList?: dependency_3.kynno.nameservice.Whois[];
        });
        get params(): dependency_2.kynno.nameservice.Params;
        set params(value: dependency_2.kynno.nameservice.Params);
        get whoisList(): dependency_3.kynno.nameservice.Whois[];
        set whoisList(value: dependency_3.kynno.nameservice.Whois[]);
        static fromObject(data: {
            params?: ReturnType<typeof dependency_2.kynno.nameservice.Params.prototype.toObject>;
            whoisList?: ReturnType<typeof dependency_3.kynno.nameservice.Whois.prototype.toObject>[];
        }): GenesisState;
        toObject(): {
            params?: {} | undefined;
            whoisList?: {
                index?: string | undefined;
                name?: string | undefined;
                value?: string | undefined;
                owner?: string | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisState;
    }
}
