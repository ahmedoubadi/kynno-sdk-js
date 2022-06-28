/// <reference types="node" />
import * as dependency_3 from "./../../cosmos/base/query/v1beta1/pagination";
import * as dependency_4 from "./params";
import * as dependency_5 from "./whois";
import * as pb_1 from "google-protobuf";
export declare namespace kynno.nameservice {
    class QueryParamsRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryParamsRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
    }
    class QueryParamsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            params?: dependency_4.kynno.nameservice.Params;
        });
        get params(): dependency_4.kynno.nameservice.Params;
        set params(value: dependency_4.kynno.nameservice.Params);
        static fromObject(data: {
            params?: ReturnType<typeof dependency_4.kynno.nameservice.Params.prototype.toObject>;
        }): QueryParamsResponse;
        toObject(): {
            params?: {} | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
    }
    class QueryGetWhoisRequest extends pb_1.Message {
        constructor(data?: any[] | {
            index?: string;
        });
        get index(): string;
        set index(value: string);
        static fromObject(data: {
            index?: string;
        }): QueryGetWhoisRequest;
        toObject(): {
            index?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGetWhoisRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryGetWhoisRequest;
    }
    class QueryGetWhoisResponse extends pb_1.Message {
        constructor(data?: any[] | {
            whois?: dependency_5.kynno.nameservice.Whois;
        });
        get whois(): dependency_5.kynno.nameservice.Whois;
        set whois(value: dependency_5.kynno.nameservice.Whois);
        static fromObject(data: {
            whois?: ReturnType<typeof dependency_5.kynno.nameservice.Whois.prototype.toObject>;
        }): QueryGetWhoisResponse;
        toObject(): {
            whois?: {
                index?: string | undefined;
                name?: string | undefined;
                value?: string | undefined;
                owner?: string | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryGetWhoisResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryGetWhoisResponse;
    }
    class QueryAllWhoisRequest extends pb_1.Message {
        constructor(data?: any[] | {
            pagination?: dependency_3.cosmos.base.query.v1beta1.PageRequest;
        });
        get pagination(): dependency_3.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_3.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_3.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryAllWhoisRequest;
        toObject(): {
            pagination?: {
                key?: Uint8Array | undefined;
                offset?: number | undefined;
                limit?: number | undefined;
                count_total?: boolean | undefined;
                reverse?: boolean | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAllWhoisRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAllWhoisRequest;
    }
    class QueryAllWhoisResponse extends pb_1.Message {
        constructor(data?: any[] | {
            whois?: dependency_5.kynno.nameservice.Whois[];
            pagination?: dependency_3.cosmos.base.query.v1beta1.PageResponse;
        });
        get whois(): dependency_5.kynno.nameservice.Whois[];
        set whois(value: dependency_5.kynno.nameservice.Whois[]);
        get pagination(): dependency_3.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_3.cosmos.base.query.v1beta1.PageResponse);
        static fromObject(data: {
            whois?: ReturnType<typeof dependency_5.kynno.nameservice.Whois.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_3.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryAllWhoisResponse;
        toObject(): {
            whois?: {
                index?: string | undefined;
                name?: string | undefined;
                value?: string | undefined;
                owner?: string | undefined;
            }[] | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAllWhoisResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAllWhoisResponse;
    }
    abstract class UnimplementedQueryService {
        static definition: {
            Params: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryParamsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryParamsRequest;
                responseSerialize: (message: QueryParamsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryParamsResponse;
            };
            Whois: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryGetWhoisRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryGetWhoisRequest;
                responseSerialize: (message: QueryGetWhoisResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryGetWhoisResponse;
            };
            WhoisAll: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryAllWhoisRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryAllWhoisRequest;
                responseSerialize: (message: QueryAllWhoisResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryAllWhoisResponse;
            };
        };
    }
}
