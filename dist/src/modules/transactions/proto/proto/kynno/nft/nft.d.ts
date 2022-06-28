import * as pb_1 from "google-protobuf";
export declare namespace kynno.nft {
    class BaseNFT extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
            name?: string;
            uri?: string;
            data?: string;
            owner?: string;
            uri_hash?: string;
        });
        get id(): string;
        set id(value: string);
        get name(): string;
        set name(value: string);
        get uri(): string;
        set uri(value: string);
        get data(): string;
        set data(value: string);
        get owner(): string;
        set owner(value: string);
        get uri_hash(): string;
        set uri_hash(value: string);
        static fromObject(data: {
            id?: string;
            name?: string;
            uri?: string;
            data?: string;
            owner?: string;
            uri_hash?: string;
        }): BaseNFT;
        toObject(): {
            id?: string | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            data?: string | undefined;
            owner?: string | undefined;
            uri_hash?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BaseNFT;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): BaseNFT;
    }
    class Denom extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
            name?: string;
            schema?: string;
            creator?: string;
            symbol?: string;
            mint_restricted?: boolean;
            update_restricted?: boolean;
            description?: string;
            uri?: string;
            uri_hash?: string;
            data?: string;
        });
        get id(): string;
        set id(value: string);
        get name(): string;
        set name(value: string);
        get schema(): string;
        set schema(value: string);
        get creator(): string;
        set creator(value: string);
        get symbol(): string;
        set symbol(value: string);
        get mint_restricted(): boolean;
        set mint_restricted(value: boolean);
        get update_restricted(): boolean;
        set update_restricted(value: boolean);
        get description(): string;
        set description(value: string);
        get uri(): string;
        set uri(value: string);
        get uri_hash(): string;
        set uri_hash(value: string);
        get data(): string;
        set data(value: string);
        static fromObject(data: {
            id?: string;
            name?: string;
            schema?: string;
            creator?: string;
            symbol?: string;
            mint_restricted?: boolean;
            update_restricted?: boolean;
            description?: string;
            uri?: string;
            uri_hash?: string;
            data?: string;
        }): Denom;
        toObject(): {
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
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Denom;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Denom;
    }
    class IDCollection extends pb_1.Message {
        constructor(data?: any[] | {
            denom_id?: string;
            token_ids?: string[];
        });
        get denom_id(): string;
        set denom_id(value: string);
        get token_ids(): string[];
        set token_ids(value: string[]);
        static fromObject(data: {
            denom_id?: string;
            token_ids?: string[];
        }): IDCollection;
        toObject(): {
            denom_id?: string | undefined;
            token_ids?: string[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IDCollection;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): IDCollection;
    }
    class Owner extends pb_1.Message {
        constructor(data?: any[] | {
            address?: string;
            id_collections?: IDCollection[];
        });
        get address(): string;
        set address(value: string);
        get id_collections(): IDCollection[];
        set id_collections(value: IDCollection[]);
        static fromObject(data: {
            address?: string;
            id_collections?: ReturnType<typeof IDCollection.prototype.toObject>[];
        }): Owner;
        toObject(): {
            address?: string | undefined;
            id_collections?: {
                denom_id?: string | undefined;
                token_ids?: string[] | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Owner;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Owner;
    }
    class Collection extends pb_1.Message {
        constructor(data?: any[] | {
            denom?: Denom;
            nfts?: BaseNFT[];
        });
        get denom(): Denom;
        set denom(value: Denom);
        get nfts(): BaseNFT[];
        set nfts(value: BaseNFT[]);
        static fromObject(data: {
            denom?: ReturnType<typeof Denom.prototype.toObject>;
            nfts?: ReturnType<typeof BaseNFT.prototype.toObject>[];
        }): Collection;
        toObject(): {
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
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Collection;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Collection;
    }
}
