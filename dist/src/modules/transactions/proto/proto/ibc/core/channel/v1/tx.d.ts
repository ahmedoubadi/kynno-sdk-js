/// <reference types="node" />
import * as dependency_2 from "./../../client/v1/client";
import * as dependency_3 from "./channel";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace ibc.core.channel.v1 {
    export class MsgChannelOpenInit extends pb_1.Message {
        constructor(data?: any[] | {
            port_id?: string;
            channel?: dependency_3.ibc.core.channel.v1.Channel;
            signer?: string;
        });
        get port_id(): string;
        set port_id(value: string);
        get channel(): dependency_3.ibc.core.channel.v1.Channel;
        set channel(value: dependency_3.ibc.core.channel.v1.Channel);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            port_id?: string;
            channel?: ReturnType<typeof dependency_3.ibc.core.channel.v1.Channel.prototype.toObject>;
            signer?: string;
        }): MsgChannelOpenInit;
        toObject(): {
            port_id?: string | undefined;
            channel?: {
                state?: dependency_3.ibc.core.channel.v1.State | undefined;
                ordering?: dependency_3.ibc.core.channel.v1.Order | undefined;
                counterparty?: {
                    port_id?: string | undefined;
                    channel_id?: string | undefined;
                } | undefined;
                connection_hops?: string[] | undefined;
                version?: string | undefined;
            } | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgChannelOpenInit;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgChannelOpenInit;
    }
    export class MsgChannelOpenInitResponse extends pb_1.Message {
        constructor(data?: any[] | {
            channel_id?: string;
        });
        get channel_id(): string;
        set channel_id(value: string);
        static fromObject(data: {
            channel_id?: string;
        }): MsgChannelOpenInitResponse;
        toObject(): {
            channel_id?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgChannelOpenInitResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgChannelOpenInitResponse;
    }
    export class MsgChannelOpenTry extends pb_1.Message {
        constructor(data?: any[] | {
            port_id?: string;
            previous_channel_id?: string;
            channel?: dependency_3.ibc.core.channel.v1.Channel;
            counterparty_version?: string;
            proof_init?: Uint8Array;
            proof_height?: dependency_2.ibc.core.client.v1.Height;
            signer?: string;
        });
        get port_id(): string;
        set port_id(value: string);
        get previous_channel_id(): string;
        set previous_channel_id(value: string);
        get channel(): dependency_3.ibc.core.channel.v1.Channel;
        set channel(value: dependency_3.ibc.core.channel.v1.Channel);
        get counterparty_version(): string;
        set counterparty_version(value: string);
        get proof_init(): Uint8Array;
        set proof_init(value: Uint8Array);
        get proof_height(): dependency_2.ibc.core.client.v1.Height;
        set proof_height(value: dependency_2.ibc.core.client.v1.Height);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            port_id?: string;
            previous_channel_id?: string;
            channel?: ReturnType<typeof dependency_3.ibc.core.channel.v1.Channel.prototype.toObject>;
            counterparty_version?: string;
            proof_init?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_2.ibc.core.client.v1.Height.prototype.toObject>;
            signer?: string;
        }): MsgChannelOpenTry;
        toObject(): {
            port_id?: string | undefined;
            previous_channel_id?: string | undefined;
            channel?: {
                state?: dependency_3.ibc.core.channel.v1.State | undefined;
                ordering?: dependency_3.ibc.core.channel.v1.Order | undefined;
                counterparty?: {
                    port_id?: string | undefined;
                    channel_id?: string | undefined;
                } | undefined;
                connection_hops?: string[] | undefined;
                version?: string | undefined;
            } | undefined;
            counterparty_version?: string | undefined;
            proof_init?: Uint8Array | undefined;
            proof_height?: {
                revision_number?: number | undefined;
                revision_height?: number | undefined;
            } | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgChannelOpenTry;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgChannelOpenTry;
    }
    export class MsgChannelOpenTryResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgChannelOpenTryResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgChannelOpenTryResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgChannelOpenTryResponse;
    }
    export class MsgChannelOpenAck extends pb_1.Message {
        constructor(data?: any[] | {
            port_id?: string;
            channel_id?: string;
            counterparty_channel_id?: string;
            counterparty_version?: string;
            proof_try?: Uint8Array;
            proof_height?: dependency_2.ibc.core.client.v1.Height;
            signer?: string;
        });
        get port_id(): string;
        set port_id(value: string);
        get channel_id(): string;
        set channel_id(value: string);
        get counterparty_channel_id(): string;
        set counterparty_channel_id(value: string);
        get counterparty_version(): string;
        set counterparty_version(value: string);
        get proof_try(): Uint8Array;
        set proof_try(value: Uint8Array);
        get proof_height(): dependency_2.ibc.core.client.v1.Height;
        set proof_height(value: dependency_2.ibc.core.client.v1.Height);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            port_id?: string;
            channel_id?: string;
            counterparty_channel_id?: string;
            counterparty_version?: string;
            proof_try?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_2.ibc.core.client.v1.Height.prototype.toObject>;
            signer?: string;
        }): MsgChannelOpenAck;
        toObject(): {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            counterparty_channel_id?: string | undefined;
            counterparty_version?: string | undefined;
            proof_try?: Uint8Array | undefined;
            proof_height?: {
                revision_number?: number | undefined;
                revision_height?: number | undefined;
            } | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgChannelOpenAck;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgChannelOpenAck;
    }
    export class MsgChannelOpenAckResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgChannelOpenAckResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgChannelOpenAckResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgChannelOpenAckResponse;
    }
    export class MsgChannelOpenConfirm extends pb_1.Message {
        constructor(data?: any[] | {
            port_id?: string;
            channel_id?: string;
            proof_ack?: Uint8Array;
            proof_height?: dependency_2.ibc.core.client.v1.Height;
            signer?: string;
        });
        get port_id(): string;
        set port_id(value: string);
        get channel_id(): string;
        set channel_id(value: string);
        get proof_ack(): Uint8Array;
        set proof_ack(value: Uint8Array);
        get proof_height(): dependency_2.ibc.core.client.v1.Height;
        set proof_height(value: dependency_2.ibc.core.client.v1.Height);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            port_id?: string;
            channel_id?: string;
            proof_ack?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_2.ibc.core.client.v1.Height.prototype.toObject>;
            signer?: string;
        }): MsgChannelOpenConfirm;
        toObject(): {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            proof_ack?: Uint8Array | undefined;
            proof_height?: {
                revision_number?: number | undefined;
                revision_height?: number | undefined;
            } | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgChannelOpenConfirm;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgChannelOpenConfirm;
    }
    export class MsgChannelOpenConfirmResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgChannelOpenConfirmResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgChannelOpenConfirmResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgChannelOpenConfirmResponse;
    }
    export class MsgChannelCloseInit extends pb_1.Message {
        constructor(data?: any[] | {
            port_id?: string;
            channel_id?: string;
            signer?: string;
        });
        get port_id(): string;
        set port_id(value: string);
        get channel_id(): string;
        set channel_id(value: string);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            port_id?: string;
            channel_id?: string;
            signer?: string;
        }): MsgChannelCloseInit;
        toObject(): {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgChannelCloseInit;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgChannelCloseInit;
    }
    export class MsgChannelCloseInitResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgChannelCloseInitResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgChannelCloseInitResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgChannelCloseInitResponse;
    }
    export class MsgChannelCloseConfirm extends pb_1.Message {
        constructor(data?: any[] | {
            port_id?: string;
            channel_id?: string;
            proof_init?: Uint8Array;
            proof_height?: dependency_2.ibc.core.client.v1.Height;
            signer?: string;
        });
        get port_id(): string;
        set port_id(value: string);
        get channel_id(): string;
        set channel_id(value: string);
        get proof_init(): Uint8Array;
        set proof_init(value: Uint8Array);
        get proof_height(): dependency_2.ibc.core.client.v1.Height;
        set proof_height(value: dependency_2.ibc.core.client.v1.Height);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            port_id?: string;
            channel_id?: string;
            proof_init?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_2.ibc.core.client.v1.Height.prototype.toObject>;
            signer?: string;
        }): MsgChannelCloseConfirm;
        toObject(): {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            proof_init?: Uint8Array | undefined;
            proof_height?: {
                revision_number?: number | undefined;
                revision_height?: number | undefined;
            } | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgChannelCloseConfirm;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgChannelCloseConfirm;
    }
    export class MsgChannelCloseConfirmResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgChannelCloseConfirmResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgChannelCloseConfirmResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgChannelCloseConfirmResponse;
    }
    export class MsgRecvPacket extends pb_1.Message {
        constructor(data?: any[] | {
            packet?: dependency_3.ibc.core.channel.v1.Packet;
            proof_commitment?: Uint8Array;
            proof_height?: dependency_2.ibc.core.client.v1.Height;
            signer?: string;
        });
        get packet(): dependency_3.ibc.core.channel.v1.Packet;
        set packet(value: dependency_3.ibc.core.channel.v1.Packet);
        get proof_commitment(): Uint8Array;
        set proof_commitment(value: Uint8Array);
        get proof_height(): dependency_2.ibc.core.client.v1.Height;
        set proof_height(value: dependency_2.ibc.core.client.v1.Height);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            packet?: ReturnType<typeof dependency_3.ibc.core.channel.v1.Packet.prototype.toObject>;
            proof_commitment?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_2.ibc.core.client.v1.Height.prototype.toObject>;
            signer?: string;
        }): MsgRecvPacket;
        toObject(): {
            packet?: {
                sequence?: number | undefined;
                source_port?: string | undefined;
                source_channel?: string | undefined;
                destination_port?: string | undefined;
                destination_channel?: string | undefined;
                data?: Uint8Array | undefined;
                timeout_height?: {
                    revision_number?: number | undefined;
                    revision_height?: number | undefined;
                } | undefined;
                timeout_timestamp?: number | undefined;
            } | undefined;
            proof_commitment?: Uint8Array | undefined;
            proof_height?: {
                revision_number?: number | undefined;
                revision_height?: number | undefined;
            } | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRecvPacket;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgRecvPacket;
    }
    export class MsgRecvPacketResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgRecvPacketResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRecvPacketResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgRecvPacketResponse;
    }
    export class MsgTimeout extends pb_1.Message {
        constructor(data?: any[] | {
            packet?: dependency_3.ibc.core.channel.v1.Packet;
            proof_unreceived?: Uint8Array;
            proof_height?: dependency_2.ibc.core.client.v1.Height;
            next_sequence_recv?: number;
            signer?: string;
        });
        get packet(): dependency_3.ibc.core.channel.v1.Packet;
        set packet(value: dependency_3.ibc.core.channel.v1.Packet);
        get proof_unreceived(): Uint8Array;
        set proof_unreceived(value: Uint8Array);
        get proof_height(): dependency_2.ibc.core.client.v1.Height;
        set proof_height(value: dependency_2.ibc.core.client.v1.Height);
        get next_sequence_recv(): number;
        set next_sequence_recv(value: number);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            packet?: ReturnType<typeof dependency_3.ibc.core.channel.v1.Packet.prototype.toObject>;
            proof_unreceived?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_2.ibc.core.client.v1.Height.prototype.toObject>;
            next_sequence_recv?: number;
            signer?: string;
        }): MsgTimeout;
        toObject(): {
            packet?: {
                sequence?: number | undefined;
                source_port?: string | undefined;
                source_channel?: string | undefined;
                destination_port?: string | undefined;
                destination_channel?: string | undefined;
                data?: Uint8Array | undefined;
                timeout_height?: {
                    revision_number?: number | undefined;
                    revision_height?: number | undefined;
                } | undefined;
                timeout_timestamp?: number | undefined;
            } | undefined;
            proof_unreceived?: Uint8Array | undefined;
            proof_height?: {
                revision_number?: number | undefined;
                revision_height?: number | undefined;
            } | undefined;
            next_sequence_recv?: number | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgTimeout;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgTimeout;
    }
    export class MsgTimeoutResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgTimeoutResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgTimeoutResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgTimeoutResponse;
    }
    export class MsgTimeoutOnClose extends pb_1.Message {
        constructor(data?: any[] | {
            packet?: dependency_3.ibc.core.channel.v1.Packet;
            proof_unreceived?: Uint8Array;
            proof_close?: Uint8Array;
            proof_height?: dependency_2.ibc.core.client.v1.Height;
            next_sequence_recv?: number;
            signer?: string;
        });
        get packet(): dependency_3.ibc.core.channel.v1.Packet;
        set packet(value: dependency_3.ibc.core.channel.v1.Packet);
        get proof_unreceived(): Uint8Array;
        set proof_unreceived(value: Uint8Array);
        get proof_close(): Uint8Array;
        set proof_close(value: Uint8Array);
        get proof_height(): dependency_2.ibc.core.client.v1.Height;
        set proof_height(value: dependency_2.ibc.core.client.v1.Height);
        get next_sequence_recv(): number;
        set next_sequence_recv(value: number);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            packet?: ReturnType<typeof dependency_3.ibc.core.channel.v1.Packet.prototype.toObject>;
            proof_unreceived?: Uint8Array;
            proof_close?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_2.ibc.core.client.v1.Height.prototype.toObject>;
            next_sequence_recv?: number;
            signer?: string;
        }): MsgTimeoutOnClose;
        toObject(): {
            packet?: {
                sequence?: number | undefined;
                source_port?: string | undefined;
                source_channel?: string | undefined;
                destination_port?: string | undefined;
                destination_channel?: string | undefined;
                data?: Uint8Array | undefined;
                timeout_height?: {
                    revision_number?: number | undefined;
                    revision_height?: number | undefined;
                } | undefined;
                timeout_timestamp?: number | undefined;
            } | undefined;
            proof_unreceived?: Uint8Array | undefined;
            proof_close?: Uint8Array | undefined;
            proof_height?: {
                revision_number?: number | undefined;
                revision_height?: number | undefined;
            } | undefined;
            next_sequence_recv?: number | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgTimeoutOnClose;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgTimeoutOnClose;
    }
    export class MsgTimeoutOnCloseResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgTimeoutOnCloseResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgTimeoutOnCloseResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgTimeoutOnCloseResponse;
    }
    export class MsgAcknowledgement extends pb_1.Message {
        constructor(data?: any[] | {
            packet?: dependency_3.ibc.core.channel.v1.Packet;
            acknowledgement?: Uint8Array;
            proof_acked?: Uint8Array;
            proof_height?: dependency_2.ibc.core.client.v1.Height;
            signer?: string;
        });
        get packet(): dependency_3.ibc.core.channel.v1.Packet;
        set packet(value: dependency_3.ibc.core.channel.v1.Packet);
        get acknowledgement(): Uint8Array;
        set acknowledgement(value: Uint8Array);
        get proof_acked(): Uint8Array;
        set proof_acked(value: Uint8Array);
        get proof_height(): dependency_2.ibc.core.client.v1.Height;
        set proof_height(value: dependency_2.ibc.core.client.v1.Height);
        get signer(): string;
        set signer(value: string);
        static fromObject(data: {
            packet?: ReturnType<typeof dependency_3.ibc.core.channel.v1.Packet.prototype.toObject>;
            acknowledgement?: Uint8Array;
            proof_acked?: Uint8Array;
            proof_height?: ReturnType<typeof dependency_2.ibc.core.client.v1.Height.prototype.toObject>;
            signer?: string;
        }): MsgAcknowledgement;
        toObject(): {
            packet?: {
                sequence?: number | undefined;
                source_port?: string | undefined;
                source_channel?: string | undefined;
                destination_port?: string | undefined;
                destination_channel?: string | undefined;
                data?: Uint8Array | undefined;
                timeout_height?: {
                    revision_number?: number | undefined;
                    revision_height?: number | undefined;
                } | undefined;
                timeout_timestamp?: number | undefined;
            } | undefined;
            acknowledgement?: Uint8Array | undefined;
            proof_acked?: Uint8Array | undefined;
            proof_height?: {
                revision_number?: number | undefined;
                revision_height?: number | undefined;
            } | undefined;
            signer?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgAcknowledgement;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgAcknowledgement;
    }
    export class MsgAcknowledgementResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgAcknowledgementResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgAcknowledgementResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgAcknowledgementResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedMsgService {
        static definition: {
            ChannelOpenInit: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgChannelOpenInit) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgChannelOpenInit;
                responseSerialize: (message: MsgChannelOpenInitResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgChannelOpenInitResponse;
            };
            ChannelOpenTry: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgChannelOpenTry) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgChannelOpenTry;
                responseSerialize: (message: MsgChannelOpenTryResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgChannelOpenTryResponse;
            };
            ChannelOpenAck: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgChannelOpenAck) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgChannelOpenAck;
                responseSerialize: (message: MsgChannelOpenAckResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgChannelOpenAckResponse;
            };
            ChannelOpenConfirm: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgChannelOpenConfirm) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgChannelOpenConfirm;
                responseSerialize: (message: MsgChannelOpenConfirmResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgChannelOpenConfirmResponse;
            };
            ChannelCloseInit: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgChannelCloseInit) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgChannelCloseInit;
                responseSerialize: (message: MsgChannelCloseInitResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgChannelCloseInitResponse;
            };
            ChannelCloseConfirm: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgChannelCloseConfirm) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgChannelCloseConfirm;
                responseSerialize: (message: MsgChannelCloseConfirmResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgChannelCloseConfirmResponse;
            };
            RecvPacket: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgRecvPacket) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgRecvPacket;
                responseSerialize: (message: MsgRecvPacketResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgRecvPacketResponse;
            };
            Timeout: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgTimeout) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgTimeout;
                responseSerialize: (message: MsgTimeoutResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgTimeoutResponse;
            };
            TimeoutOnClose: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgTimeoutOnClose) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgTimeoutOnClose;
                responseSerialize: (message: MsgTimeoutOnCloseResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgTimeoutOnCloseResponse;
            };
            Acknowledgement: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: MsgAcknowledgement) => Buffer;
                requestDeserialize: (bytes: Buffer) => MsgAcknowledgement;
                responseSerialize: (message: MsgAcknowledgementResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => MsgAcknowledgementResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract ChannelOpenInit(call: grpc_1.ServerUnaryCall<MsgChannelOpenInit, MsgChannelOpenInitResponse>, callback: grpc_1.sendUnaryData<MsgChannelOpenInitResponse>): void;
        abstract ChannelOpenTry(call: grpc_1.ServerUnaryCall<MsgChannelOpenTry, MsgChannelOpenTryResponse>, callback: grpc_1.sendUnaryData<MsgChannelOpenTryResponse>): void;
        abstract ChannelOpenAck(call: grpc_1.ServerUnaryCall<MsgChannelOpenAck, MsgChannelOpenAckResponse>, callback: grpc_1.sendUnaryData<MsgChannelOpenAckResponse>): void;
        abstract ChannelOpenConfirm(call: grpc_1.ServerUnaryCall<MsgChannelOpenConfirm, MsgChannelOpenConfirmResponse>, callback: grpc_1.sendUnaryData<MsgChannelOpenConfirmResponse>): void;
        abstract ChannelCloseInit(call: grpc_1.ServerUnaryCall<MsgChannelCloseInit, MsgChannelCloseInitResponse>, callback: grpc_1.sendUnaryData<MsgChannelCloseInitResponse>): void;
        abstract ChannelCloseConfirm(call: grpc_1.ServerUnaryCall<MsgChannelCloseConfirm, MsgChannelCloseConfirmResponse>, callback: grpc_1.sendUnaryData<MsgChannelCloseConfirmResponse>): void;
        abstract RecvPacket(call: grpc_1.ServerUnaryCall<MsgRecvPacket, MsgRecvPacketResponse>, callback: grpc_1.sendUnaryData<MsgRecvPacketResponse>): void;
        abstract Timeout(call: grpc_1.ServerUnaryCall<MsgTimeout, MsgTimeoutResponse>, callback: grpc_1.sendUnaryData<MsgTimeoutResponse>): void;
        abstract TimeoutOnClose(call: grpc_1.ServerUnaryCall<MsgTimeoutOnClose, MsgTimeoutOnCloseResponse>, callback: grpc_1.sendUnaryData<MsgTimeoutOnCloseResponse>): void;
        abstract Acknowledgement(call: grpc_1.ServerUnaryCall<MsgAcknowledgement, MsgAcknowledgementResponse>, callback: grpc_1.sendUnaryData<MsgAcknowledgementResponse>): void;
    }
    const MsgClient_base: grpc_1.ServiceClientConstructor;
    export class MsgClient extends MsgClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        ChannelOpenInit: GrpcUnaryServiceInterface<MsgChannelOpenInit, MsgChannelOpenInitResponse>;
        ChannelOpenTry: GrpcUnaryServiceInterface<MsgChannelOpenTry, MsgChannelOpenTryResponse>;
        ChannelOpenAck: GrpcUnaryServiceInterface<MsgChannelOpenAck, MsgChannelOpenAckResponse>;
        ChannelOpenConfirm: GrpcUnaryServiceInterface<MsgChannelOpenConfirm, MsgChannelOpenConfirmResponse>;
        ChannelCloseInit: GrpcUnaryServiceInterface<MsgChannelCloseInit, MsgChannelCloseInitResponse>;
        ChannelCloseConfirm: GrpcUnaryServiceInterface<MsgChannelCloseConfirm, MsgChannelCloseConfirmResponse>;
        RecvPacket: GrpcUnaryServiceInterface<MsgRecvPacket, MsgRecvPacketResponse>;
        Timeout: GrpcUnaryServiceInterface<MsgTimeout, MsgTimeoutResponse>;
        TimeoutOnClose: GrpcUnaryServiceInterface<MsgTimeoutOnClose, MsgTimeoutOnCloseResponse>;
        Acknowledgement: GrpcUnaryServiceInterface<MsgAcknowledgement, MsgAcknowledgementResponse>;
    }
    export {};
}
