/// <reference types="node" />
import * as dependency_2 from "./../../../cosmos/base/query/v1beta1/pagination";
import * as dependency_4 from "./evm";
import * as dependency_5 from "./tx";
import * as dependency_6 from "./../../../google/protobuf/timestamp";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace ethermint.evm.v1 {
    export class QueryAccountRequest extends pb_1.Message {
        constructor(data?: any[] | {
            address?: string;
        });
        get address(): string;
        set address(value: string);
        static fromObject(data: {
            address?: string;
        }): QueryAccountRequest;
        toObject(): {
            address?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAccountRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAccountRequest;
    }
    export class QueryAccountResponse extends pb_1.Message {
        constructor(data?: any[] | {
            balance?: string;
            code_hash?: string;
            nonce?: number;
        });
        get balance(): string;
        set balance(value: string);
        get code_hash(): string;
        set code_hash(value: string);
        get nonce(): number;
        set nonce(value: number);
        static fromObject(data: {
            balance?: string;
            code_hash?: string;
            nonce?: number;
        }): QueryAccountResponse;
        toObject(): {
            balance?: string | undefined;
            code_hash?: string | undefined;
            nonce?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAccountResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryAccountResponse;
    }
    export class QueryCosmosAccountRequest extends pb_1.Message {
        constructor(data?: any[] | {
            address?: string;
        });
        get address(): string;
        set address(value: string);
        static fromObject(data: {
            address?: string;
        }): QueryCosmosAccountRequest;
        toObject(): {
            address?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryCosmosAccountRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryCosmosAccountRequest;
    }
    export class QueryCosmosAccountResponse extends pb_1.Message {
        constructor(data?: any[] | {
            cosmos_address?: string;
            sequence?: number;
            account_number?: number;
        });
        get cosmos_address(): string;
        set cosmos_address(value: string);
        get sequence(): number;
        set sequence(value: number);
        get account_number(): number;
        set account_number(value: number);
        static fromObject(data: {
            cosmos_address?: string;
            sequence?: number;
            account_number?: number;
        }): QueryCosmosAccountResponse;
        toObject(): {
            cosmos_address?: string | undefined;
            sequence?: number | undefined;
            account_number?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryCosmosAccountResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryCosmosAccountResponse;
    }
    export class QueryValidatorAccountRequest extends pb_1.Message {
        constructor(data?: any[] | {
            cons_address?: string;
        });
        get cons_address(): string;
        set cons_address(value: string);
        static fromObject(data: {
            cons_address?: string;
        }): QueryValidatorAccountRequest;
        toObject(): {
            cons_address?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryValidatorAccountRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryValidatorAccountRequest;
    }
    export class QueryValidatorAccountResponse extends pb_1.Message {
        constructor(data?: any[] | {
            account_address?: string;
            sequence?: number;
            account_number?: number;
        });
        get account_address(): string;
        set account_address(value: string);
        get sequence(): number;
        set sequence(value: number);
        get account_number(): number;
        set account_number(value: number);
        static fromObject(data: {
            account_address?: string;
            sequence?: number;
            account_number?: number;
        }): QueryValidatorAccountResponse;
        toObject(): {
            account_address?: string | undefined;
            sequence?: number | undefined;
            account_number?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryValidatorAccountResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryValidatorAccountResponse;
    }
    export class QueryBalanceRequest extends pb_1.Message {
        constructor(data?: any[] | {
            address?: string;
        });
        get address(): string;
        set address(value: string);
        static fromObject(data: {
            address?: string;
        }): QueryBalanceRequest;
        toObject(): {
            address?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBalanceRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryBalanceRequest;
    }
    export class QueryBalanceResponse extends pb_1.Message {
        constructor(data?: any[] | {
            balance?: string;
        });
        get balance(): string;
        set balance(value: string);
        static fromObject(data: {
            balance?: string;
        }): QueryBalanceResponse;
        toObject(): {
            balance?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBalanceResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryBalanceResponse;
    }
    export class QueryStorageRequest extends pb_1.Message {
        constructor(data?: any[] | {
            address?: string;
            key?: string;
        });
        get address(): string;
        set address(value: string);
        get key(): string;
        set key(value: string);
        static fromObject(data: {
            address?: string;
            key?: string;
        }): QueryStorageRequest;
        toObject(): {
            address?: string | undefined;
            key?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryStorageRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryStorageRequest;
    }
    export class QueryStorageResponse extends pb_1.Message {
        constructor(data?: any[] | {
            value?: string;
        });
        get value(): string;
        set value(value: string);
        static fromObject(data: {
            value?: string;
        }): QueryStorageResponse;
        toObject(): {
            value?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryStorageResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryStorageResponse;
    }
    export class QueryCodeRequest extends pb_1.Message {
        constructor(data?: any[] | {
            address?: string;
        });
        get address(): string;
        set address(value: string);
        static fromObject(data: {
            address?: string;
        }): QueryCodeRequest;
        toObject(): {
            address?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryCodeRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryCodeRequest;
    }
    export class QueryCodeResponse extends pb_1.Message {
        constructor(data?: any[] | {
            code?: Uint8Array;
        });
        get code(): Uint8Array;
        set code(value: Uint8Array);
        static fromObject(data: {
            code?: Uint8Array;
        }): QueryCodeResponse;
        toObject(): {
            code?: Uint8Array | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryCodeResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryCodeResponse;
    }
    export class QueryTxLogsRequest extends pb_1.Message {
        constructor(data?: any[] | {
            hash?: string;
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageRequest;
        });
        get hash(): string;
        set hash(value: string);
        get pagination(): dependency_2.cosmos.base.query.v1beta1.PageRequest;
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageRequest);
        static fromObject(data: {
            hash?: string;
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryTxLogsRequest;
        toObject(): {
            hash?: string | undefined;
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryTxLogsRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryTxLogsRequest;
    }
    export class QueryTxLogsResponse extends pb_1.Message {
        constructor(data?: any[] | {
            logs?: dependency_4.ethermint.evm.v1.Log[];
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageResponse;
        });
        get logs(): dependency_4.ethermint.evm.v1.Log[];
        set logs(value: dependency_4.ethermint.evm.v1.Log[]);
        get pagination(): dependency_2.cosmos.base.query.v1beta1.PageResponse;
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageResponse);
        static fromObject(data: {
            logs?: ReturnType<typeof dependency_4.ethermint.evm.v1.Log.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryTxLogsResponse;
        toObject(): {
            logs?: {
                address?: string | undefined;
                topics?: string[] | undefined;
                data?: Uint8Array | undefined;
                block_number?: number | undefined;
                tx_hash?: string | undefined;
                tx_index?: number | undefined;
                block_hash?: string | undefined;
                index?: number | undefined;
                removed?: boolean | undefined;
            }[] | undefined;
            pagination?: {
                next_key?: Uint8Array | undefined;
                total?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryTxLogsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryTxLogsResponse;
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
            params?: dependency_4.ethermint.evm.v1.Params;
        });
        get params(): dependency_4.ethermint.evm.v1.Params;
        set params(value: dependency_4.ethermint.evm.v1.Params);
        static fromObject(data: {
            params?: ReturnType<typeof dependency_4.ethermint.evm.v1.Params.prototype.toObject>;
        }): QueryParamsResponse;
        toObject(): {
            params?: {
                evm_denom?: string | undefined;
                enable_create?: boolean | undefined;
                enable_call?: boolean | undefined;
                extra_eips?: number[] | undefined;
                chain_config?: {
                    homestead_block?: string | undefined;
                    dao_fork_block?: string | undefined;
                    dao_fork_support?: boolean | undefined;
                    eip150_block?: string | undefined;
                    eip150_hash?: string | undefined;
                    eip155_block?: string | undefined;
                    eip158_block?: string | undefined;
                    byzantium_block?: string | undefined;
                    constantinople_block?: string | undefined;
                    petersburg_block?: string | undefined;
                    istanbul_block?: string | undefined;
                    muir_glacier_block?: string | undefined;
                    berlin_block?: string | undefined;
                    london_block?: string | undefined;
                    arrow_glacier_block?: string | undefined;
                    merge_fork_block?: string | undefined;
                } | undefined;
                allow_unprotected_txs?: boolean | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
    }
    export class EthCallRequest extends pb_1.Message {
        constructor(data?: any[] | {
            args?: Uint8Array;
            gas_cap?: number;
        });
        get args(): Uint8Array;
        set args(value: Uint8Array);
        get gas_cap(): number;
        set gas_cap(value: number);
        static fromObject(data: {
            args?: Uint8Array;
            gas_cap?: number;
        }): EthCallRequest;
        toObject(): {
            args?: Uint8Array | undefined;
            gas_cap?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EthCallRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EthCallRequest;
    }
    export class EstimateGasResponse extends pb_1.Message {
        constructor(data?: any[] | {
            gas?: number;
        });
        get gas(): number;
        set gas(value: number);
        static fromObject(data: {
            gas?: number;
        }): EstimateGasResponse;
        toObject(): {
            gas?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EstimateGasResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): EstimateGasResponse;
    }
    export class QueryTraceTxRequest extends pb_1.Message {
        constructor(data?: any[] | {
            msg?: dependency_5.ethermint.evm.v1.MsgEthereumTx;
            trace_config?: dependency_4.ethermint.evm.v1.TraceConfig;
            predecessors?: dependency_5.ethermint.evm.v1.MsgEthereumTx[];
            block_number?: number;
            block_hash?: string;
            block_time?: dependency_6.google.protobuf.Timestamp;
        });
        get msg(): dependency_5.ethermint.evm.v1.MsgEthereumTx;
        set msg(value: dependency_5.ethermint.evm.v1.MsgEthereumTx);
        get trace_config(): dependency_4.ethermint.evm.v1.TraceConfig;
        set trace_config(value: dependency_4.ethermint.evm.v1.TraceConfig);
        get predecessors(): dependency_5.ethermint.evm.v1.MsgEthereumTx[];
        set predecessors(value: dependency_5.ethermint.evm.v1.MsgEthereumTx[]);
        get block_number(): number;
        set block_number(value: number);
        get block_hash(): string;
        set block_hash(value: string);
        get block_time(): dependency_6.google.protobuf.Timestamp;
        set block_time(value: dependency_6.google.protobuf.Timestamp);
        static fromObject(data: {
            msg?: ReturnType<typeof dependency_5.ethermint.evm.v1.MsgEthereumTx.prototype.toObject>;
            trace_config?: ReturnType<typeof dependency_4.ethermint.evm.v1.TraceConfig.prototype.toObject>;
            predecessors?: ReturnType<typeof dependency_5.ethermint.evm.v1.MsgEthereumTx.prototype.toObject>[];
            block_number?: number;
            block_hash?: string;
            block_time?: ReturnType<typeof dependency_6.google.protobuf.Timestamp.prototype.toObject>;
        }): QueryTraceTxRequest;
        toObject(): {
            msg?: {
                data?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                size?: number | undefined;
                hash?: string | undefined;
                from?: string | undefined;
            } | undefined;
            trace_config?: {
                tracer?: string | undefined;
                timeout?: string | undefined;
                reexec?: number | undefined;
                disable_stack?: boolean | undefined;
                disable_storage?: boolean | undefined;
                debug?: boolean | undefined;
                limit?: number | undefined;
                overrides?: {
                    homestead_block?: string | undefined;
                    dao_fork_block?: string | undefined;
                    dao_fork_support?: boolean | undefined;
                    eip150_block?: string | undefined;
                    eip150_hash?: string | undefined;
                    eip155_block?: string | undefined;
                    eip158_block?: string | undefined;
                    byzantium_block?: string | undefined;
                    constantinople_block?: string | undefined;
                    petersburg_block?: string | undefined;
                    istanbul_block?: string | undefined;
                    muir_glacier_block?: string | undefined;
                    berlin_block?: string | undefined;
                    london_block?: string | undefined;
                    arrow_glacier_block?: string | undefined;
                    merge_fork_block?: string | undefined;
                } | undefined;
                enable_memory?: boolean | undefined;
                enable_return_data?: boolean | undefined;
            } | undefined;
            predecessors?: {
                data?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                size?: number | undefined;
                hash?: string | undefined;
                from?: string | undefined;
            }[] | undefined;
            block_number?: number | undefined;
            block_hash?: string | undefined;
            block_time?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryTraceTxRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryTraceTxRequest;
    }
    export class QueryTraceTxResponse extends pb_1.Message {
        constructor(data?: any[] | {
            data?: Uint8Array;
        });
        get data(): Uint8Array;
        set data(value: Uint8Array);
        static fromObject(data: {
            data?: Uint8Array;
        }): QueryTraceTxResponse;
        toObject(): {
            data?: Uint8Array | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryTraceTxResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryTraceTxResponse;
    }
    export class QueryTraceBlockRequest extends pb_1.Message {
        constructor(data?: any[] | {
            txs?: dependency_5.ethermint.evm.v1.MsgEthereumTx[];
            trace_config?: dependency_4.ethermint.evm.v1.TraceConfig;
            block_number?: number;
            block_hash?: string;
            block_time?: dependency_6.google.protobuf.Timestamp;
        });
        get txs(): dependency_5.ethermint.evm.v1.MsgEthereumTx[];
        set txs(value: dependency_5.ethermint.evm.v1.MsgEthereumTx[]);
        get trace_config(): dependency_4.ethermint.evm.v1.TraceConfig;
        set trace_config(value: dependency_4.ethermint.evm.v1.TraceConfig);
        get block_number(): number;
        set block_number(value: number);
        get block_hash(): string;
        set block_hash(value: string);
        get block_time(): dependency_6.google.protobuf.Timestamp;
        set block_time(value: dependency_6.google.protobuf.Timestamp);
        static fromObject(data: {
            txs?: ReturnType<typeof dependency_5.ethermint.evm.v1.MsgEthereumTx.prototype.toObject>[];
            trace_config?: ReturnType<typeof dependency_4.ethermint.evm.v1.TraceConfig.prototype.toObject>;
            block_number?: number;
            block_hash?: string;
            block_time?: ReturnType<typeof dependency_6.google.protobuf.Timestamp.prototype.toObject>;
        }): QueryTraceBlockRequest;
        toObject(): {
            txs?: {
                data?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                size?: number | undefined;
                hash?: string | undefined;
                from?: string | undefined;
            }[] | undefined;
            trace_config?: {
                tracer?: string | undefined;
                timeout?: string | undefined;
                reexec?: number | undefined;
                disable_stack?: boolean | undefined;
                disable_storage?: boolean | undefined;
                debug?: boolean | undefined;
                limit?: number | undefined;
                overrides?: {
                    homestead_block?: string | undefined;
                    dao_fork_block?: string | undefined;
                    dao_fork_support?: boolean | undefined;
                    eip150_block?: string | undefined;
                    eip150_hash?: string | undefined;
                    eip155_block?: string | undefined;
                    eip158_block?: string | undefined;
                    byzantium_block?: string | undefined;
                    constantinople_block?: string | undefined;
                    petersburg_block?: string | undefined;
                    istanbul_block?: string | undefined;
                    muir_glacier_block?: string | undefined;
                    berlin_block?: string | undefined;
                    london_block?: string | undefined;
                    arrow_glacier_block?: string | undefined;
                    merge_fork_block?: string | undefined;
                } | undefined;
                enable_memory?: boolean | undefined;
                enable_return_data?: boolean | undefined;
            } | undefined;
            block_number?: number | undefined;
            block_hash?: string | undefined;
            block_time?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryTraceBlockRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryTraceBlockRequest;
    }
    export class QueryTraceBlockResponse extends pb_1.Message {
        constructor(data?: any[] | {
            data?: Uint8Array;
        });
        get data(): Uint8Array;
        set data(value: Uint8Array);
        static fromObject(data: {
            data?: Uint8Array;
        }): QueryTraceBlockResponse;
        toObject(): {
            data?: Uint8Array | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryTraceBlockResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryTraceBlockResponse;
    }
    export class QueryBaseFeeRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): QueryBaseFeeRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBaseFeeRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryBaseFeeRequest;
    }
    export class QueryBaseFeeResponse extends pb_1.Message {
        constructor(data?: any[] | {
            base_fee?: string;
        });
        get base_fee(): string;
        set base_fee(value: string);
        static fromObject(data: {
            base_fee?: string;
        }): QueryBaseFeeResponse;
        toObject(): {
            base_fee?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBaseFeeResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryBaseFeeResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedQueryService {
        static definition: {
            Account: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryAccountRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryAccountRequest;
                responseSerialize: (message: QueryAccountResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryAccountResponse;
            };
            CosmosAccount: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryCosmosAccountRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryCosmosAccountRequest;
                responseSerialize: (message: QueryCosmosAccountResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryCosmosAccountResponse;
            };
            ValidatorAccount: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryValidatorAccountRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryValidatorAccountRequest;
                responseSerialize: (message: QueryValidatorAccountResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryValidatorAccountResponse;
            };
            Balance: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryBalanceRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryBalanceRequest;
                responseSerialize: (message: QueryBalanceResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryBalanceResponse;
            };
            Storage: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryStorageRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryStorageRequest;
                responseSerialize: (message: QueryStorageResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryStorageResponse;
            };
            Code: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryCodeRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryCodeRequest;
                responseSerialize: (message: QueryCodeResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryCodeResponse;
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
            EthCall: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: EthCallRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => EthCallRequest;
                responseSerialize: (message: dependency_5.ethermint.evm.v1.MsgEthereumTxResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => dependency_5.ethermint.evm.v1.MsgEthereumTxResponse;
            };
            EstimateGas: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: EthCallRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => EthCallRequest;
                responseSerialize: (message: EstimateGasResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => EstimateGasResponse;
            };
            TraceTx: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryTraceTxRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryTraceTxRequest;
                responseSerialize: (message: QueryTraceTxResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryTraceTxResponse;
            };
            TraceBlock: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryTraceBlockRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryTraceBlockRequest;
                responseSerialize: (message: QueryTraceBlockResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryTraceBlockResponse;
            };
            BaseFee: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryBaseFeeRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryBaseFeeRequest;
                responseSerialize: (message: QueryBaseFeeResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryBaseFeeResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Account(call: grpc_1.ServerUnaryCall<QueryAccountRequest, QueryAccountResponse>, callback: grpc_1.sendUnaryData<QueryAccountResponse>): void;
        abstract CosmosAccount(call: grpc_1.ServerUnaryCall<QueryCosmosAccountRequest, QueryCosmosAccountResponse>, callback: grpc_1.sendUnaryData<QueryCosmosAccountResponse>): void;
        abstract ValidatorAccount(call: grpc_1.ServerUnaryCall<QueryValidatorAccountRequest, QueryValidatorAccountResponse>, callback: grpc_1.sendUnaryData<QueryValidatorAccountResponse>): void;
        abstract Balance(call: grpc_1.ServerUnaryCall<QueryBalanceRequest, QueryBalanceResponse>, callback: grpc_1.sendUnaryData<QueryBalanceResponse>): void;
        abstract Storage(call: grpc_1.ServerUnaryCall<QueryStorageRequest, QueryStorageResponse>, callback: grpc_1.sendUnaryData<QueryStorageResponse>): void;
        abstract Code(call: grpc_1.ServerUnaryCall<QueryCodeRequest, QueryCodeResponse>, callback: grpc_1.sendUnaryData<QueryCodeResponse>): void;
        abstract Params(call: grpc_1.ServerUnaryCall<QueryParamsRequest, QueryParamsResponse>, callback: grpc_1.sendUnaryData<QueryParamsResponse>): void;
        abstract EthCall(call: grpc_1.ServerUnaryCall<EthCallRequest, dependency_5.ethermint.evm.v1.MsgEthereumTxResponse>, callback: grpc_1.sendUnaryData<dependency_5.ethermint.evm.v1.MsgEthereumTxResponse>): void;
        abstract EstimateGas(call: grpc_1.ServerUnaryCall<EthCallRequest, EstimateGasResponse>, callback: grpc_1.sendUnaryData<EstimateGasResponse>): void;
        abstract TraceTx(call: grpc_1.ServerUnaryCall<QueryTraceTxRequest, QueryTraceTxResponse>, callback: grpc_1.sendUnaryData<QueryTraceTxResponse>): void;
        abstract TraceBlock(call: grpc_1.ServerUnaryCall<QueryTraceBlockRequest, QueryTraceBlockResponse>, callback: grpc_1.sendUnaryData<QueryTraceBlockResponse>): void;
        abstract BaseFee(call: grpc_1.ServerUnaryCall<QueryBaseFeeRequest, QueryBaseFeeResponse>, callback: grpc_1.sendUnaryData<QueryBaseFeeResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Account: GrpcUnaryServiceInterface<QueryAccountRequest, QueryAccountResponse>;
        CosmosAccount: GrpcUnaryServiceInterface<QueryCosmosAccountRequest, QueryCosmosAccountResponse>;
        ValidatorAccount: GrpcUnaryServiceInterface<QueryValidatorAccountRequest, QueryValidatorAccountResponse>;
        Balance: GrpcUnaryServiceInterface<QueryBalanceRequest, QueryBalanceResponse>;
        Storage: GrpcUnaryServiceInterface<QueryStorageRequest, QueryStorageResponse>;
        Code: GrpcUnaryServiceInterface<QueryCodeRequest, QueryCodeResponse>;
        Params: GrpcUnaryServiceInterface<QueryParamsRequest, QueryParamsResponse>;
        EthCall: GrpcUnaryServiceInterface<EthCallRequest, dependency_5.ethermint.evm.v1.MsgEthereumTxResponse>;
        EstimateGas: GrpcUnaryServiceInterface<EthCallRequest, EstimateGasResponse>;
        TraceTx: GrpcUnaryServiceInterface<QueryTraceTxRequest, QueryTraceTxResponse>;
        TraceBlock: GrpcUnaryServiceInterface<QueryTraceBlockRequest, QueryTraceBlockResponse>;
        BaseFee: GrpcUnaryServiceInterface<QueryBaseFeeRequest, QueryBaseFeeResponse>;
    }
    export {};
}
