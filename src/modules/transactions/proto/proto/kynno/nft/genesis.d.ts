import * as dependency_2 from "./nft";
import * as pb_1 from "google-protobuf";
export declare namespace kynno.nft {
    class GenesisState extends pb_1.Message {
        constructor(data?: any[] | {
            collections?: dependency_2.kynno.nft.Collection[];
        });
        get collections(): dependency_2.kynno.nft.Collection[];
        set collections(value: dependency_2.kynno.nft.Collection[]);
        static fromObject(data: {
            collections?: ReturnType<typeof dependency_2.kynno.nft.Collection.prototype.toObject>[];
        }): GenesisState;
        toObject(): {
            collections?: {
                denom?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    schema?: string | undefined;
                    creator?: string | undefined;
                    symbol?: string | undefined;
                    mint_restricted?: boolean | undefined;
                    update_restricted?: boolean | undefined;
                    description?: string | undefined;
                    uri?: string | undefined;
                    uri_hash?: string | undefined;
                    data?: string | undefined;
                } | undefined;
                nfts?: {
                    id?: string | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    data?: string | undefined;
                    owner?: string | undefined;
                    uri_hash?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GenesisState;
    }
}
