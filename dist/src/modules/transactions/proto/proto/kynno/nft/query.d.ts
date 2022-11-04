/// <reference types="node" />
import * as dependency_3 from "./nft";
import * as dependency_4 from "./../../cosmos/base/query/v1beta1/pagination";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace kynno.nft {
    export class QuerySupplyRequest extends pb_1.Message {
        constructor(data?: any[] | {
            denom_id?: string;
            owner?: string;
        });
        get denom_id(): string;
        set denom_id(value: string);
        get owner(): string;
        set owner(value: string);
        static fromObject(data: {
            denom_id?: string;
            owner?: string;
        }): QuerySupplyRequest;
        toObject(): {
            denom_id?: string | undefined;
            owner?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuerySupplyRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QuerySupplyRequest;
    }
    export class QuerySupplyResponse extends pb_1.Message {
        constructor(data?: any[] | {
            amount?: number;
        });
        get amount(): number;
        set amount(value: number);
        static fromObject(data: {
            amount?: number;
        }): QuerySupplyResponse;
        toObject(): {
            amount?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuerySupplyResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QuerySupplyResponse;
    }
    export class QueryOwnerRequest extends pb_1.Message {
        constructor(data?: any[] | {
            denom_id?: string;
            owner?: string;
            pagination?: dependency_4.cosmos.base.query.v1beta1.PageRequest;
        });
        get denom_id(): string;
        set denom_id(value: string);
        get owner(): string;
        set owner(value: string);
        get pagination(): dependency_4.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_4.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            denom_id?: string;
            owner?: string;
            pagination?: ReturnType<typeof dependency_4.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryOwnerRequest;
        toObject(): {
            denom_id?: string | undefined;
            owner?: string | undefined;
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryOwnerRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryOwnerRequest;
    }
    export class QueryOwnerResponse extends pb_1.Message {
        constructor(data?: any[] | {
            owner?: dependency_3.kynno.nft.Owner;
            pagination?: dependency_4.cosmos.base.query.v1beta1.PageResponse;
        });
        get owner(): dependency_3.kynno.nft.Owner;
        set owner(value: dependency_3.kynno.nft.Owner);
        get pagination(): dependency_4.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_4.cosmos.base.query.v1beta1.PageResponse);
        static fromObject(data: {
            owner?: ReturnType<typeof dependency_3.kynno.nft.Owner.prototype.toObject>;
            pagination?: ReturnType<typeof dependency_4.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryOwnerResponse;
        toObject(): {
            owner?: {
                address?: string | undefined;
                id_collections?: {
                    denom_id?: string | undefined;
                    token_ids?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryOwnerResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryOwnerResponse;
    }
    export class QueryCollectionRequest extends pb_1.Message {
        constructor(data?: any[] | {
            denom_id?: string;
            pagination?: dependency_4.cosmos.base.query.v1beta1.PageRequest;
        });
        get denom_id(): string;
        set denom_id(value: string);
        get pagination(): dependency_4.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_4.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            denom_id?: string;
            pagination?: ReturnType<typeof dependency_4.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryCollectionRequest;
        toObject(): {
            denom_id?: string | undefined;
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryCollectionRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryCollectionRequest;
    }
    export class QueryCollectionResponse extends pb_1.Message {
        constructor(data?: any[] | {
            collection?: dependency_3.kynno.nft.Collection;
            pagination?: dependency_4.cosmos.base.query.v1beta1.PageResponse;
        });
        get collection(): dependency_3.kynno.nft.Collection;
        set collection(value: dependency_3.kynno.nft.Collection);
        get pagination(): dependency_4.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_4.cosmos.base.query.v1beta1.PageResponse);
        static fromObject(data: {
            collection?: ReturnType<typeof dependency_3.kynno.nft.Collection.prototype.toObject>;
            pagination?: ReturnType<typeof dependency_4.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryCollectionResponse;
        toObject(): {
            collection?: {
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
            } | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryCollectionResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryCollectionResponse;
    }
    export class QueryDenomRequest extends pb_1.Message {
        constructor(data?: any[] | {
            denom_id?: string;
        });
        get denom_id(): string;
        set denom_id(value: string);
        static fromObject(data: {
            denom_id?: string;
        }): QueryDenomRequest;
        toObject(): {
            denom_id?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDenomRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDenomRequest;
    }
    export class QueryDenomResponse extends pb_1.Message {
        constructor(data?: any[] | {
            denom?: dependency_3.kynno.nft.Denom;
        });
        get denom(): dependency_3.kynno.nft.Denom;
        set denom(value: dependency_3.kynno.nft.Denom);
        static fromObject(data: {
            denom?: ReturnType<typeof dependency_3.kynno.nft.Denom.prototype.toObject>;
        }): QueryDenomResponse;
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
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDenomResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDenomResponse;
    }
    export class QueryDenomsRequest extends pb_1.Message {
        constructor(data?: any[] | {
            pagination?: dependency_4.cosmos.base.query.v1beta1.PageRequest;
        });
        get pagination(): dependency_4.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_4.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_4.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryDenomsRequest;
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDenomsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDenomsRequest;
    }
    export class QueryDenomsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            denoms?: dependency_3.kynno.nft.Denom[];
            pagination?: dependency_4.cosmos.base.query.v1beta1.PageResponse;
        });
        get denoms(): dependency_3.kynno.nft.Denom[];
        set denoms(value: dependency_3.kynno.nft.Denom[]);
        get pagination(): dependency_4.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_4.cosmos.base.query.v1beta1.PageResponse);
        static fromObject(data: {
            denoms?: ReturnType<typeof dependency_3.kynno.nft.Denom.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_4.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryDenomsResponse;
        toObject(): {
            denoms?: {
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
            }[] | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDenomsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDenomsResponse;
    }
    export class QueryNFTRequest extends pb_1.Message {
        constructor(data?: any[] | {
            denom_id?: string;
            token_id?: string;
        });
        get denom_id(): string;
        set denom_id(value: string);
        get token_id(): string;
        set token_id(value: string);
        static fromObject(data: {
            denom_id?: string;
            token_id?: string;
        }): QueryNFTRequest;
        toObject(): {
            denom_id?: string | undefined;
            token_id?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryNFTRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryNFTRequest;
    }
    export class QueryNFTResponse extends pb_1.Message {
        constructor(data?: any[] | {
            nft?: dependency_3.kynno.nft.BaseNFT;
        });
        get nft(): dependency_3.kynno.nft.BaseNFT;
        set nft(value: dependency_3.kynno.nft.BaseNFT);
        static fromObject(data: {
            nft?: ReturnType<typeof dependency_3.kynno.nft.BaseNFT.prototype.toObject>;
        }): QueryNFTResponse;
        toObject(): {
            nft?: {
                id?: string | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                data?: string | undefined;
                owner?: string | undefined;
                uri_hash?: string | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryNFTResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryNFTResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedQueryService {
        static definition: {
            Supply: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QuerySupplyRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QuerySupplyRequest;
                responseSerialize: (message: QuerySupplyResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QuerySupplyResponse;
            };
            Owner: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryOwnerRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryOwnerRequest;
                responseSerialize: (message: QueryOwnerResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryOwnerResponse;
            };
            Collection: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryCollectionRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryCollectionRequest;
                responseSerialize: (message: QueryCollectionResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryCollectionResponse;
            };
            Denom: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryDenomRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryDenomRequest;
                responseSerialize: (message: QueryDenomResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryDenomResponse;
            };
            Denoms: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryDenomsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryDenomsRequest;
                responseSerialize: (message: QueryDenomsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryDenomsResponse;
            };
            NFT: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryNFTRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryNFTRequest;
                responseSerialize: (message: QueryNFTResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryNFTResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Supply(call: grpc_1.ServerUnaryCall<QuerySupplyRequest, QuerySupplyResponse>, callback: grpc_1.sendUnaryData<QuerySupplyResponse>): void;
        abstract Owner(call: grpc_1.ServerUnaryCall<QueryOwnerRequest, QueryOwnerResponse>, callback: grpc_1.sendUnaryData<QueryOwnerResponse>): void;
        abstract Collection(call: grpc_1.ServerUnaryCall<QueryCollectionRequest, QueryCollectionResponse>, callback: grpc_1.sendUnaryData<QueryCollectionResponse>): void;
        abstract Denom(call: grpc_1.ServerUnaryCall<QueryDenomRequest, QueryDenomResponse>, callback: grpc_1.sendUnaryData<QueryDenomResponse>): void;
        abstract Denoms(call: grpc_1.ServerUnaryCall<QueryDenomsRequest, QueryDenomsResponse>, callback: grpc_1.sendUnaryData<QueryDenomsResponse>): void;
        abstract NFT(call: grpc_1.ServerUnaryCall<QueryNFTRequest, QueryNFTResponse>, callback: grpc_1.sendUnaryData<QueryNFTResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Supply: GrpcUnaryServiceInterface<QuerySupplyRequest, QuerySupplyResponse>;
        Owner: GrpcUnaryServiceInterface<QueryOwnerRequest, QueryOwnerResponse>;
        Collection: GrpcUnaryServiceInterface<QueryCollectionRequest, QueryCollectionResponse>;
        Denom: GrpcUnaryServiceInterface<QueryDenomRequest, QueryDenomResponse>;
        Denoms: GrpcUnaryServiceInterface<QueryDenomsRequest, QueryDenomsResponse>;
        NFT: GrpcUnaryServiceInterface<QueryNFTRequest, QueryNFTResponse>;
    }
    export {};
}
