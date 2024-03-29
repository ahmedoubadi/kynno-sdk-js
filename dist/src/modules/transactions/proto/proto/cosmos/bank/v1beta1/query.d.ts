/// <reference types="node" />
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: cosmos/bank/v1beta1/query.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../base/query/v1beta1/pagination";
import * as dependency_4 from "./../../base/v1beta1/coin";
import * as dependency_5 from "./bank";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.bank.v1beta1 {
    export class QueryBalanceRequest extends pb_1.Message {
        constructor(data?: any[] | {
            address?: string;
            denom?: string;
        });
        get address(): string;
        set address(value: string);
        get denom(): string;
        set denom(value: string);
        static fromObject(data: {
            address?: string;
            denom?: string;
        }): QueryBalanceRequest;
        toObject(): {
            address?: string | undefined;
            denom?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBalanceRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryBalanceRequest;
    }
    export class QueryBalanceResponse extends pb_1.Message {
        constructor(data?: any[] | {
            balance?: dependency_4.cosmos.base.v1beta1.Coin;
        });
        get balance(): dependency_4.cosmos.base.v1beta1.Coin;
        set balance(value: dependency_4.cosmos.base.v1beta1.Coin);
        static fromObject(data: {
            balance?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>;
        }): QueryBalanceResponse;
        toObject(): {
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBalanceResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryBalanceResponse;
    }
    export class QueryAllBalancesRequest extends pb_1.Message {
        constructor(data?: any[] | {
            address?: string;
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get address(): string;
        set address(value: string);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            address?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryAllBalancesRequest;
        toObject(): {
            address?: string | undefined;
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAllBalancesRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAllBalancesRequest;
    }
    export class QueryAllBalancesResponse extends pb_1.Message {
        constructor(data?: any[] | {
            balances?: dependency_4.cosmos.base.v1beta1.Coin[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get balances(): dependency_4.cosmos.base.v1beta1.Coin[];
        set balances(value: dependency_4.cosmos.base.v1beta1.Coin[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        static fromObject(data: {
            balances?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryAllBalancesResponse;
        toObject(): {
            balances?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAllBalancesResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAllBalancesResponse;
    }
    export class QuerySpendableBalancesRequest extends pb_1.Message {
        constructor(data?: any[] | {
            address?: string;
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get address(): string;
        set address(value: string);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            address?: string;
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QuerySpendableBalancesRequest;
        toObject(): {
            address?: string | undefined;
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuerySpendableBalancesRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QuerySpendableBalancesRequest;
    }
    export class QuerySpendableBalancesResponse extends pb_1.Message {
        constructor(data?: any[] | {
            balances?: dependency_4.cosmos.base.v1beta1.Coin[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get balances(): dependency_4.cosmos.base.v1beta1.Coin[];
        set balances(value: dependency_4.cosmos.base.v1beta1.Coin[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        static fromObject(data: {
            balances?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QuerySpendableBalancesResponse;
        toObject(): {
            balances?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuerySpendableBalancesResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QuerySpendableBalancesResponse;
    }
    export class QueryTotalSupplyRequest extends pb_1.Message {
        constructor(data?: any[] | {
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryTotalSupplyRequest;
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryTotalSupplyRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryTotalSupplyRequest;
    }
    export class QueryTotalSupplyResponse extends pb_1.Message {
        constructor(data?: any[] | {
            supply?: dependency_4.cosmos.base.v1beta1.Coin[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get supply(): dependency_4.cosmos.base.v1beta1.Coin[];
        set supply(value: dependency_4.cosmos.base.v1beta1.Coin[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        static fromObject(data: {
            supply?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryTotalSupplyResponse;
        toObject(): {
            supply?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryTotalSupplyResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryTotalSupplyResponse;
    }
    export class QuerySupplyOfRequest extends pb_1.Message {
        constructor(data?: any[] | {
            denom?: string;
        });
        get denom(): string;
        set denom(value: string);
        static fromObject(data: {
            denom?: string;
        }): QuerySupplyOfRequest;
        toObject(): {
            denom?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuerySupplyOfRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QuerySupplyOfRequest;
    }
    export class QuerySupplyOfResponse extends pb_1.Message {
        constructor(data?: any[] | {
            amount?: dependency_4.cosmos.base.v1beta1.Coin;
        });
        get amount(): dependency_4.cosmos.base.v1beta1.Coin;
        set amount(value: dependency_4.cosmos.base.v1beta1.Coin);
        static fromObject(data: {
            amount?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>;
        }): QuerySupplyOfResponse;
        toObject(): {
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuerySupplyOfResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QuerySupplyOfResponse;
    }
    export class QueryParamsRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryParamsRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
    }
    export class QueryParamsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            params?: dependency_5.cosmos.bank.v1beta1.Params;
        });
        get params(): dependency_5.cosmos.bank.v1beta1.Params;
        set params(value: dependency_5.cosmos.bank.v1beta1.Params);
        static fromObject(data: {
            params?: ReturnType<typeof dependency_5.cosmos.bank.v1beta1.Params.prototype.toObject>;
        }): QueryParamsResponse;
        toObject(): {
            params?: {
                send_enabled?: {
                    denom?: string | undefined;
                    enabled?: boolean | undefined;
                }[] | undefined;
                default_send_enabled?: boolean | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
    }
    export class QueryDenomsMetadataRequest extends pb_1.Message {
        constructor(data?: any[] | {
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        });
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryDenomsMetadataRequest;
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDenomsMetadataRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDenomsMetadataRequest;
    }
    export class QueryDenomsMetadataResponse extends pb_1.Message {
        constructor(data?: any[] | {
            metadatas?: dependency_5.cosmos.bank.v1beta1.Metadata[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        });
        get metadatas(): dependency_5.cosmos.bank.v1beta1.Metadata[];
        set metadatas(value: dependency_5.cosmos.bank.v1beta1.Metadata[]);
        get pagination(): dependency_1.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse);
        static fromObject(data: {
            metadatas?: ReturnType<typeof dependency_5.cosmos.bank.v1beta1.Metadata.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryDenomsMetadataResponse;
        toObject(): {
            metadatas?: {
                description?: string | undefined;
                denom_units?: {
                    denom?: string | undefined;
                    exponent?: number | undefined;
                    aliases?: string[] | undefined;
                }[] | undefined;
                base?: string | undefined;
                display?: string | undefined;
                name?: string | undefined;
                symbol?: string | undefined;
            }[] | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDenomsMetadataResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDenomsMetadataResponse;
    }
    export class QueryDenomMetadataRequest extends pb_1.Message {
        constructor(data?: any[] | {
            denom?: string;
        });
        get denom(): string;
        set denom(value: string);
        static fromObject(data: {
            denom?: string;
        }): QueryDenomMetadataRequest;
        toObject(): {
            denom?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDenomMetadataRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDenomMetadataRequest;
    }
    export class QueryDenomMetadataResponse extends pb_1.Message {
        constructor(data?: any[] | {
            metadata?: dependency_5.cosmos.bank.v1beta1.Metadata;
        });
        get metadata(): dependency_5.cosmos.bank.v1beta1.Metadata;
        set metadata(value: dependency_5.cosmos.bank.v1beta1.Metadata);
        static fromObject(data: {
            metadata?: ReturnType<typeof dependency_5.cosmos.bank.v1beta1.Metadata.prototype.toObject>;
        }): QueryDenomMetadataResponse;
        toObject(): {
            metadata?: {
                description?: string | undefined;
                denom_units?: {
                    denom?: string | undefined;
                    exponent?: number | undefined;
                    aliases?: string[] | undefined;
                }[] | undefined;
                base?: string | undefined;
                display?: string | undefined;
                name?: string | undefined;
                symbol?: string | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryDenomMetadataResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryDenomMetadataResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedQueryService {
        static definition: {
            Balance: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryBalanceRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryBalanceRequest;
                responseSerialize: (message: QueryBalanceResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryBalanceResponse;
            };
            AllBalances: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryAllBalancesRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryAllBalancesRequest;
                responseSerialize: (message: QueryAllBalancesResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryAllBalancesResponse;
            };
            SpendableBalances: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QuerySpendableBalancesRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QuerySpendableBalancesRequest;
                responseSerialize: (message: QuerySpendableBalancesResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QuerySpendableBalancesResponse;
            };
            TotalSupply: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryTotalSupplyRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryTotalSupplyRequest;
                responseSerialize: (message: QueryTotalSupplyResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryTotalSupplyResponse;
            };
            SupplyOf: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QuerySupplyOfRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QuerySupplyOfRequest;
                responseSerialize: (message: QuerySupplyOfResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QuerySupplyOfResponse;
            };
            Params: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryParamsRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryParamsRequest;
                responseSerialize: (message: QueryParamsResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryParamsResponse;
            };
            DenomMetadata: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryDenomMetadataRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryDenomMetadataRequest;
                responseSerialize: (message: QueryDenomMetadataResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryDenomMetadataResponse;
            };
            DenomsMetadata: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryDenomsMetadataRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryDenomsMetadataRequest;
                responseSerialize: (message: QueryDenomsMetadataResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryDenomsMetadataResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Balance(call: grpc_1.ServerUnaryCall<QueryBalanceRequest, QueryBalanceResponse>, callback: grpc_1.sendUnaryData<QueryBalanceResponse>): void;
        abstract AllBalances(call: grpc_1.ServerUnaryCall<QueryAllBalancesRequest, QueryAllBalancesResponse>, callback: grpc_1.sendUnaryData<QueryAllBalancesResponse>): void;
        abstract SpendableBalances(call: grpc_1.ServerUnaryCall<QuerySpendableBalancesRequest, QuerySpendableBalancesResponse>, callback: grpc_1.sendUnaryData<QuerySpendableBalancesResponse>): void;
        abstract TotalSupply(call: grpc_1.ServerUnaryCall<QueryTotalSupplyRequest, QueryTotalSupplyResponse>, callback: grpc_1.sendUnaryData<QueryTotalSupplyResponse>): void;
        abstract SupplyOf(call: grpc_1.ServerUnaryCall<QuerySupplyOfRequest, QuerySupplyOfResponse>, callback: grpc_1.sendUnaryData<QuerySupplyOfResponse>): void;
        abstract Params(call: grpc_1.ServerUnaryCall<QueryParamsRequest, QueryParamsResponse>, callback: grpc_1.sendUnaryData<QueryParamsResponse>): void;
        abstract DenomMetadata(call: grpc_1.ServerUnaryCall<QueryDenomMetadataRequest, QueryDenomMetadataResponse>, callback: grpc_1.sendUnaryData<QueryDenomMetadataResponse>): void;
        abstract DenomsMetadata(call: grpc_1.ServerUnaryCall<QueryDenomsMetadataRequest, QueryDenomsMetadataResponse>, callback: grpc_1.sendUnaryData<QueryDenomsMetadataResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Balance: GrpcUnaryServiceInterface<QueryBalanceRequest, QueryBalanceResponse>;
        AllBalances: GrpcUnaryServiceInterface<QueryAllBalancesRequest, QueryAllBalancesResponse>;
        SpendableBalances: GrpcUnaryServiceInterface<QuerySpendableBalancesRequest, QuerySpendableBalancesResponse>;
        TotalSupply: GrpcUnaryServiceInterface<QueryTotalSupplyRequest, QueryTotalSupplyResponse>;
        SupplyOf: GrpcUnaryServiceInterface<QuerySupplyOfRequest, QuerySupplyOfResponse>;
        Params: GrpcUnaryServiceInterface<QueryParamsRequest, QueryParamsResponse>;
        DenomMetadata: GrpcUnaryServiceInterface<QueryDenomMetadataRequest, QueryDenomMetadataResponse>;
        DenomsMetadata: GrpcUnaryServiceInterface<QueryDenomsMetadataRequest, QueryDenomsMetadataResponse>;
    }
    export {};
}
