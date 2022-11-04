/// <reference types="node" />
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace cosmos.base.reflection.v2alpha1 {
    export class AppDescriptor extends pb_1.Message {
        constructor(data?: any[] | {
            authn?: AuthnDescriptor;
            chain?: ChainDescriptor;
            codec?: CodecDescriptor;
            configuration?: ConfigurationDescriptor;
            query_services?: QueryServicesDescriptor;
            tx?: TxDescriptor;
        });
        get authn(): AuthnDescriptor;
        set authn(value: AuthnDescriptor);
        get chain(): ChainDescriptor;
        set chain(value: ChainDescriptor);
        get codec(): CodecDescriptor;
        set codec(value: CodecDescriptor);
        get configuration(): ConfigurationDescriptor;
        set configuration(value: ConfigurationDescriptor);
        get query_services(): QueryServicesDescriptor;
        set query_services(value: QueryServicesDescriptor);
        get tx(): TxDescriptor;
        set tx(value: TxDescriptor);
        static fromObject(data: {
            authn?: ReturnType<typeof AuthnDescriptor.prototype.toObject>;
            chain?: ReturnType<typeof ChainDescriptor.prototype.toObject>;
            codec?: ReturnType<typeof CodecDescriptor.prototype.toObject>;
            configuration?: ReturnType<typeof ConfigurationDescriptor.prototype.toObject>;
            query_services?: ReturnType<typeof QueryServicesDescriptor.prototype.toObject>;
            tx?: ReturnType<typeof TxDescriptor.prototype.toObject>;
        }): AppDescriptor;
        toObject(): {
            authn?: {
                sign_modes?: {
                    name?: string | undefined;
                    number?: number | undefined;
                    authn_info_provider_method_fullname?: string | undefined;
                }[] | undefined;
            } | undefined;
            chain?: {
                id?: string | undefined;
            } | undefined;
            codec?: {
                interfaces?: {
                    fullname?: string | undefined;
                    interface_accepting_messages?: {
                        fullname?: string | undefined;
                        field_descriptor_names?: string[] | undefined;
                    }[] | undefined;
                    interface_implementers?: {
                        fullname?: string | undefined;
                        type_url?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            configuration?: {
                bech32_account_address_prefix?: string | undefined;
            } | undefined;
            query_services?: {
                query_services?: {
                    fullname?: string | undefined;
                    is_module?: boolean | undefined;
                    methods?: {
                        name?: string | undefined;
                        full_query_path?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
            tx?: {
                fullname?: string | undefined;
                msgs?: {
                    msg_type_url?: string | undefined;
                }[] | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AppDescriptor;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): AppDescriptor;
    }
    export class TxDescriptor extends pb_1.Message {
        constructor(data?: any[] | {
            fullname?: string;
            msgs?: MsgDescriptor[];
        });
        get fullname(): string;
        set fullname(value: string);
        get msgs(): MsgDescriptor[];
        set msgs(value: MsgDescriptor[]);
        static fromObject(data: {
            fullname?: string;
            msgs?: ReturnType<typeof MsgDescriptor.prototype.toObject>[];
        }): TxDescriptor;
        toObject(): {
            fullname?: string | undefined;
            msgs?: {
                msg_type_url?: string | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TxDescriptor;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): TxDescriptor;
    }
    export class AuthnDescriptor extends pb_1.Message {
        constructor(data?: any[] | {
            sign_modes?: SigningModeDescriptor[];
        });
        get sign_modes(): SigningModeDescriptor[];
        set sign_modes(value: SigningModeDescriptor[]);
        static fromObject(data: {
            sign_modes?: ReturnType<typeof SigningModeDescriptor.prototype.toObject>[];
        }): AuthnDescriptor;
        toObject(): {
            sign_modes?: {
                name?: string | undefined;
                number?: number | undefined;
                authn_info_provider_method_fullname?: string | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AuthnDescriptor;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): AuthnDescriptor;
    }
    export class SigningModeDescriptor extends pb_1.Message {
        constructor(data?: any[] | {
            name?: string;
            number?: number;
            authn_info_provider_method_fullname?: string;
        });
        get name(): string;
        set name(value: string);
        get number(): number;
        set number(value: number);
        get authn_info_provider_method_fullname(): string;
        set authn_info_provider_method_fullname(value: string);
        static fromObject(data: {
            name?: string;
            number?: number;
            authn_info_provider_method_fullname?: string;
        }): SigningModeDescriptor;
        toObject(): {
            name?: string | undefined;
            number?: number | undefined;
            authn_info_provider_method_fullname?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SigningModeDescriptor;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): SigningModeDescriptor;
    }
    export class ChainDescriptor extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
        });
        get id(): string;
        set id(value: string);
        static fromObject(data: {
            id?: string;
        }): ChainDescriptor;
        toObject(): {
            id?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ChainDescriptor;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ChainDescriptor;
    }
    export class CodecDescriptor extends pb_1.Message {
        constructor(data?: any[] | {
            interfaces?: InterfaceDescriptor[];
        });
        get interfaces(): InterfaceDescriptor[];
        set interfaces(value: InterfaceDescriptor[]);
        static fromObject(data: {
            interfaces?: ReturnType<typeof InterfaceDescriptor.prototype.toObject>[];
        }): CodecDescriptor;
        toObject(): {
            interfaces?: {
                fullname?: string | undefined;
                interface_accepting_messages?: {
                    fullname?: string | undefined;
                    field_descriptor_names?: string[] | undefined;
                }[] | undefined;
                interface_implementers?: {
                    fullname?: string | undefined;
                    type_url?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CodecDescriptor;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): CodecDescriptor;
    }
    export class InterfaceDescriptor extends pb_1.Message {
        constructor(data?: any[] | {
            fullname?: string;
            interface_accepting_messages?: InterfaceAcceptingMessageDescriptor[];
            interface_implementers?: InterfaceImplementerDescriptor[];
        });
        get fullname(): string;
        set fullname(value: string);
        get interface_accepting_messages(): InterfaceAcceptingMessageDescriptor[];
        set interface_accepting_messages(value: InterfaceAcceptingMessageDescriptor[]);
        get interface_implementers(): InterfaceImplementerDescriptor[];
        set interface_implementers(value: InterfaceImplementerDescriptor[]);
        static fromObject(data: {
            fullname?: string;
            interface_accepting_messages?: ReturnType<typeof InterfaceAcceptingMessageDescriptor.prototype.toObject>[];
            interface_implementers?: ReturnType<typeof InterfaceImplementerDescriptor.prototype.toObject>[];
        }): InterfaceDescriptor;
        toObject(): {
            fullname?: string | undefined;
            interface_accepting_messages?: {
                fullname?: string | undefined;
                field_descriptor_names?: string[] | undefined;
            }[] | undefined;
            interface_implementers?: {
                fullname?: string | undefined;
                type_url?: string | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): InterfaceDescriptor;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): InterfaceDescriptor;
    }
    export class InterfaceImplementerDescriptor extends pb_1.Message {
        constructor(data?: any[] | {
            fullname?: string;
            type_url?: string;
        });
        get fullname(): string;
        set fullname(value: string);
        get type_url(): string;
        set type_url(value: string);
        static fromObject(data: {
            fullname?: string;
            type_url?: string;
        }): InterfaceImplementerDescriptor;
        toObject(): {
            fullname?: string | undefined;
            type_url?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): InterfaceImplementerDescriptor;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): InterfaceImplementerDescriptor;
    }
    export class InterfaceAcceptingMessageDescriptor extends pb_1.Message {
        constructor(data?: any[] | {
            fullname?: string;
            field_descriptor_names?: string[];
        });
        get fullname(): string;
        set fullname(value: string);
        get field_descriptor_names(): string[];
        set field_descriptor_names(value: string[]);
        static fromObject(data: {
            fullname?: string;
            field_descriptor_names?: string[];
        }): InterfaceAcceptingMessageDescriptor;
        toObject(): {
            fullname?: string | undefined;
            field_descriptor_names?: string[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): InterfaceAcceptingMessageDescriptor;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): InterfaceAcceptingMessageDescriptor;
    }
    export class ConfigurationDescriptor extends pb_1.Message {
        constructor(data?: any[] | {
            bech32_account_address_prefix?: string;
        });
        get bech32_account_address_prefix(): string;
        set bech32_account_address_prefix(value: string);
        static fromObject(data: {
            bech32_account_address_prefix?: string;
        }): ConfigurationDescriptor;
        toObject(): {
            bech32_account_address_prefix?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ConfigurationDescriptor;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): ConfigurationDescriptor;
    }
    export class MsgDescriptor extends pb_1.Message {
        constructor(data?: any[] | {
            msg_type_url?: string;
        });
        get msg_type_url(): string;
        set msg_type_url(value: string);
        static fromObject(data: {
            msg_type_url?: string;
        }): MsgDescriptor;
        toObject(): {
            msg_type_url?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgDescriptor;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgDescriptor;
    }
    export class GetAuthnDescriptorRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): GetAuthnDescriptorRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetAuthnDescriptorRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetAuthnDescriptorRequest;
    }
    export class GetAuthnDescriptorResponse extends pb_1.Message {
        constructor(data?: any[] | {
            authn?: AuthnDescriptor;
        });
        get authn(): AuthnDescriptor;
        set authn(value: AuthnDescriptor);
        static fromObject(data: {
            authn?: ReturnType<typeof AuthnDescriptor.prototype.toObject>;
        }): GetAuthnDescriptorResponse;
        toObject(): {
            authn?: {
                sign_modes?: {
                    name?: string | undefined;
                    number?: number | undefined;
                    authn_info_provider_method_fullname?: string | undefined;
                }[] | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetAuthnDescriptorResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetAuthnDescriptorResponse;
    }
    export class GetChainDescriptorRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): GetChainDescriptorRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetChainDescriptorRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetChainDescriptorRequest;
    }
    export class GetChainDescriptorResponse extends pb_1.Message {
        constructor(data?: any[] | {
            chain?: ChainDescriptor;
        });
        get chain(): ChainDescriptor;
        set chain(value: ChainDescriptor);
        static fromObject(data: {
            chain?: ReturnType<typeof ChainDescriptor.prototype.toObject>;
        }): GetChainDescriptorResponse;
        toObject(): {
            chain?: {
                id?: string | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetChainDescriptorResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetChainDescriptorResponse;
    }
    export class GetCodecDescriptorRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): GetCodecDescriptorRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetCodecDescriptorRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetCodecDescriptorRequest;
    }
    export class GetCodecDescriptorResponse extends pb_1.Message {
        constructor(data?: any[] | {
            codec?: CodecDescriptor;
        });
        get codec(): CodecDescriptor;
        set codec(value: CodecDescriptor);
        static fromObject(data: {
            codec?: ReturnType<typeof CodecDescriptor.prototype.toObject>;
        }): GetCodecDescriptorResponse;
        toObject(): {
            codec?: {
                interfaces?: {
                    fullname?: string | undefined;
                    interface_accepting_messages?: {
                        fullname?: string | undefined;
                        field_descriptor_names?: string[] | undefined;
                    }[] | undefined;
                    interface_implementers?: {
                        fullname?: string | undefined;
                        type_url?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetCodecDescriptorResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetCodecDescriptorResponse;
    }
    export class GetConfigurationDescriptorRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): GetConfigurationDescriptorRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetConfigurationDescriptorRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetConfigurationDescriptorRequest;
    }
    export class GetConfigurationDescriptorResponse extends pb_1.Message {
        constructor(data?: any[] | {
            config?: ConfigurationDescriptor;
        });
        get config(): ConfigurationDescriptor;
        set config(value: ConfigurationDescriptor);
        static fromObject(data: {
            config?: ReturnType<typeof ConfigurationDescriptor.prototype.toObject>;
        }): GetConfigurationDescriptorResponse;
        toObject(): {
            config?: {
                bech32_account_address_prefix?: string | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetConfigurationDescriptorResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetConfigurationDescriptorResponse;
    }
    export class GetQueryServicesDescriptorRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): GetQueryServicesDescriptorRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetQueryServicesDescriptorRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetQueryServicesDescriptorRequest;
    }
    export class GetQueryServicesDescriptorResponse extends pb_1.Message {
        constructor(data?: any[] | {
            queries?: QueryServicesDescriptor;
        });
        get queries(): QueryServicesDescriptor;
        set queries(value: QueryServicesDescriptor);
        static fromObject(data: {
            queries?: ReturnType<typeof QueryServicesDescriptor.prototype.toObject>;
        }): GetQueryServicesDescriptorResponse;
        toObject(): {
            queries?: {
                query_services?: {
                    fullname?: string | undefined;
                    is_module?: boolean | undefined;
                    methods?: {
                        name?: string | undefined;
                        full_query_path?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetQueryServicesDescriptorResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetQueryServicesDescriptorResponse;
    }
    export class GetTxDescriptorRequest extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): GetTxDescriptorRequest;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetTxDescriptorRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetTxDescriptorRequest;
    }
    export class GetTxDescriptorResponse extends pb_1.Message {
        constructor(data?: any[] | {
            tx?: TxDescriptor;
        });
        get tx(): TxDescriptor;
        set tx(value: TxDescriptor);
        static fromObject(data: {
            tx?: ReturnType<typeof TxDescriptor.prototype.toObject>;
        }): GetTxDescriptorResponse;
        toObject(): {
            tx?: {
                fullname?: string | undefined;
                msgs?: {
                    msg_type_url?: string | undefined;
                }[] | undefined;
            } | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetTxDescriptorResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): GetTxDescriptorResponse;
    }
    export class QueryServicesDescriptor extends pb_1.Message {
        constructor(data?: any[] | {
            query_services?: QueryServiceDescriptor[];
        });
        get query_services(): QueryServiceDescriptor[];
        set query_services(value: QueryServiceDescriptor[]);
        static fromObject(data: {
            query_services?: ReturnType<typeof QueryServiceDescriptor.prototype.toObject>[];
        }): QueryServicesDescriptor;
        toObject(): {
            query_services?: {
                fullname?: string | undefined;
                is_module?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    full_query_path?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryServicesDescriptor;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryServicesDescriptor;
    }
    export class QueryServiceDescriptor extends pb_1.Message {
        constructor(data?: any[] | {
            fullname?: string;
            is_module?: boolean;
            methods?: QueryMethodDescriptor[];
        });
        get fullname(): string;
        set fullname(value: string);
        get is_module(): boolean;
        set is_module(value: boolean);
        get methods(): QueryMethodDescriptor[];
        set methods(value: QueryMethodDescriptor[]);
        static fromObject(data: {
            fullname?: string;
            is_module?: boolean;
            methods?: ReturnType<typeof QueryMethodDescriptor.prototype.toObject>[];
        }): QueryServiceDescriptor;
        toObject(): {
            fullname?: string | undefined;
            is_module?: boolean | undefined;
            methods?: {
                name?: string | undefined;
                full_query_path?: string | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryServiceDescriptor;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryServiceDescriptor;
    }
    export class QueryMethodDescriptor extends pb_1.Message {
        constructor(data?: any[] | {
            name?: string;
            full_query_path?: string;
        });
        get name(): string;
        set name(value: string);
        get full_query_path(): string;
        set full_query_path(value: string);
        static fromObject(data: {
            name?: string;
            full_query_path?: string;
        }): QueryMethodDescriptor;
        toObject(): {
            name?: string | undefined;
            full_query_path?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryMethodDescriptor;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryMethodDescriptor;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedReflectionServiceService {
        static definition: {
            GetAuthnDescriptor: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: GetAuthnDescriptorRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => GetAuthnDescriptorRequest;
                responseSerialize: (message: GetAuthnDescriptorResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => GetAuthnDescriptorResponse;
            };
            GetChainDescriptor: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: GetChainDescriptorRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => GetChainDescriptorRequest;
                responseSerialize: (message: GetChainDescriptorResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => GetChainDescriptorResponse;
            };
            GetCodecDescriptor: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: GetCodecDescriptorRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => GetCodecDescriptorRequest;
                responseSerialize: (message: GetCodecDescriptorResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => GetCodecDescriptorResponse;
            };
            GetConfigurationDescriptor: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: GetConfigurationDescriptorRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => GetConfigurationDescriptorRequest;
                responseSerialize: (message: GetConfigurationDescriptorResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => GetConfigurationDescriptorResponse;
            };
            GetQueryServicesDescriptor: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: GetQueryServicesDescriptorRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => GetQueryServicesDescriptorRequest;
                responseSerialize: (message: GetQueryServicesDescriptorResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => GetQueryServicesDescriptorResponse;
            };
            GetTxDescriptor: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: GetTxDescriptorRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => GetTxDescriptorRequest;
                responseSerialize: (message: GetTxDescriptorResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => GetTxDescriptorResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract GetAuthnDescriptor(call: grpc_1.ServerUnaryCall<GetAuthnDescriptorRequest, GetAuthnDescriptorResponse>, callback: grpc_1.sendUnaryData<GetAuthnDescriptorResponse>): void;
        abstract GetChainDescriptor(call: grpc_1.ServerUnaryCall<GetChainDescriptorRequest, GetChainDescriptorResponse>, callback: grpc_1.sendUnaryData<GetChainDescriptorResponse>): void;
        abstract GetCodecDescriptor(call: grpc_1.ServerUnaryCall<GetCodecDescriptorRequest, GetCodecDescriptorResponse>, callback: grpc_1.sendUnaryData<GetCodecDescriptorResponse>): void;
        abstract GetConfigurationDescriptor(call: grpc_1.ServerUnaryCall<GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse>, callback: grpc_1.sendUnaryData<GetConfigurationDescriptorResponse>): void;
        abstract GetQueryServicesDescriptor(call: grpc_1.ServerUnaryCall<GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse>, callback: grpc_1.sendUnaryData<GetQueryServicesDescriptorResponse>): void;
        abstract GetTxDescriptor(call: grpc_1.ServerUnaryCall<GetTxDescriptorRequest, GetTxDescriptorResponse>, callback: grpc_1.sendUnaryData<GetTxDescriptorResponse>): void;
    }
    const ReflectionServiceClient_base: grpc_1.ServiceClientConstructor;
    export class ReflectionServiceClient extends ReflectionServiceClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        GetAuthnDescriptor: GrpcUnaryServiceInterface<GetAuthnDescriptorRequest, GetAuthnDescriptorResponse>;
        GetChainDescriptor: GrpcUnaryServiceInterface<GetChainDescriptorRequest, GetChainDescriptorResponse>;
        GetCodecDescriptor: GrpcUnaryServiceInterface<GetCodecDescriptorRequest, GetCodecDescriptorResponse>;
        GetConfigurationDescriptor: GrpcUnaryServiceInterface<GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse>;
        GetQueryServicesDescriptor: GrpcUnaryServiceInterface<GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse>;
        GetTxDescriptor: GrpcUnaryServiceInterface<GetTxDescriptorRequest, GetTxDescriptorResponse>;
    }
    export {};
}
