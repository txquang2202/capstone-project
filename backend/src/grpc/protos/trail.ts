/* eslint-disable */
import { ChannelCredentials, Client, makeGenericClientConstructor, Metadata } from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "trail";

export interface Trail {
  id: string;
  actor: string;
  event: string;
  targetId: string;
  targetType: string;
}

export interface CreateTrailRequest {
  actor: string;
  event: string;
  targetId: string;
  targetType: string;
}

export interface CreateTrailResponse {
  trail: Trail | undefined;
}

export interface GetTrailRequest {
  id: string;
}

export interface GetTrailResponse {
  trail: Trail | undefined;
}

export interface ListTrailsRequest {
}

export interface ListTrailsResponse {
  trails: Trail[];
}

function createBaseTrail(): Trail {
  return { id: "", actor: "", event: "", targetId: "", targetType: "" };
}

export const Trail = {
  encode(message: Trail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.actor !== "") {
      writer.uint32(18).string(message.actor);
    }
    if (message.event !== "") {
      writer.uint32(26).string(message.event);
    }
    if (message.targetId !== "") {
      writer.uint32(34).string(message.targetId);
    }
    if (message.targetType !== "") {
      writer.uint32(42).string(message.targetType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.actor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.event = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.targetId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.targetType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Trail {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      actor: isSet(object.actor) ? globalThis.String(object.actor) : "",
      event: isSet(object.event) ? globalThis.String(object.event) : "",
      targetId: isSet(object.targetId) ? globalThis.String(object.targetId) : "",
      targetType: isSet(object.targetType) ? globalThis.String(object.targetType) : "",
    };
  },

  toJSON(message: Trail): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.actor !== "") {
      obj.actor = message.actor;
    }
    if (message.event !== "") {
      obj.event = message.event;
    }
    if (message.targetId !== "") {
      obj.targetId = message.targetId;
    }
    if (message.targetType !== "") {
      obj.targetType = message.targetType;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Trail>, I>>(base?: I): Trail {
    return Trail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Trail>, I>>(object: I): Trail {
    const message = createBaseTrail();
    message.id = object.id ?? "";
    message.actor = object.actor ?? "";
    message.event = object.event ?? "";
    message.targetId = object.targetId ?? "";
    message.targetType = object.targetType ?? "";
    return message;
  },
};

function createBaseCreateTrailRequest(): CreateTrailRequest {
  return { actor: "", event: "", targetId: "", targetType: "" };
}

export const CreateTrailRequest = {
  encode(message: CreateTrailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.actor !== "") {
      writer.uint32(10).string(message.actor);
    }
    if (message.event !== "") {
      writer.uint32(18).string(message.event);
    }
    if (message.targetId !== "") {
      writer.uint32(26).string(message.targetId);
    }
    if (message.targetType !== "") {
      writer.uint32(34).string(message.targetType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTrailRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTrailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.actor = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.event = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.targetId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.targetType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTrailRequest {
    return {
      actor: isSet(object.actor) ? globalThis.String(object.actor) : "",
      event: isSet(object.event) ? globalThis.String(object.event) : "",
      targetId: isSet(object.targetId) ? globalThis.String(object.targetId) : "",
      targetType: isSet(object.targetType) ? globalThis.String(object.targetType) : "",
    };
  },

  toJSON(message: CreateTrailRequest): unknown {
    const obj: any = {};
    if (message.actor !== "") {
      obj.actor = message.actor;
    }
    if (message.event !== "") {
      obj.event = message.event;
    }
    if (message.targetId !== "") {
      obj.targetId = message.targetId;
    }
    if (message.targetType !== "") {
      obj.targetType = message.targetType;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTrailRequest>, I>>(base?: I): CreateTrailRequest {
    return CreateTrailRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTrailRequest>, I>>(object: I): CreateTrailRequest {
    const message = createBaseCreateTrailRequest();
    message.actor = object.actor ?? "";
    message.event = object.event ?? "";
    message.targetId = object.targetId ?? "";
    message.targetType = object.targetType ?? "";
    return message;
  },
};

function createBaseCreateTrailResponse(): CreateTrailResponse {
  return { trail: undefined };
}

export const CreateTrailResponse = {
  encode(message: CreateTrailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trail !== undefined) {
      Trail.encode(message.trail, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTrailResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTrailResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trail = Trail.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateTrailResponse {
    return { trail: isSet(object.trail) ? Trail.fromJSON(object.trail) : undefined };
  },

  toJSON(message: CreateTrailResponse): unknown {
    const obj: any = {};
    if (message.trail !== undefined) {
      obj.trail = Trail.toJSON(message.trail);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateTrailResponse>, I>>(base?: I): CreateTrailResponse {
    return CreateTrailResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateTrailResponse>, I>>(object: I): CreateTrailResponse {
    const message = createBaseCreateTrailResponse();
    message.trail = (object.trail !== undefined && object.trail !== null) ? Trail.fromPartial(object.trail) : undefined;
    return message;
  },
};

function createBaseGetTrailRequest(): GetTrailRequest {
  return { id: "" };
}

export const GetTrailRequest = {
  encode(message: GetTrailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTrailRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTrailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTrailRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: GetTrailRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetTrailRequest>, I>>(base?: I): GetTrailRequest {
    return GetTrailRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTrailRequest>, I>>(object: I): GetTrailRequest {
    const message = createBaseGetTrailRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetTrailResponse(): GetTrailResponse {
  return { trail: undefined };
}

export const GetTrailResponse = {
  encode(message: GetTrailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trail !== undefined) {
      Trail.encode(message.trail, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTrailResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTrailResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trail = Trail.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTrailResponse {
    return { trail: isSet(object.trail) ? Trail.fromJSON(object.trail) : undefined };
  },

  toJSON(message: GetTrailResponse): unknown {
    const obj: any = {};
    if (message.trail !== undefined) {
      obj.trail = Trail.toJSON(message.trail);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetTrailResponse>, I>>(base?: I): GetTrailResponse {
    return GetTrailResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTrailResponse>, I>>(object: I): GetTrailResponse {
    const message = createBaseGetTrailResponse();
    message.trail = (object.trail !== undefined && object.trail !== null) ? Trail.fromPartial(object.trail) : undefined;
    return message;
  },
};

function createBaseListTrailsRequest(): ListTrailsRequest {
  return {};
}

export const ListTrailsRequest = {
  encode(_: ListTrailsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTrailsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTrailsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ListTrailsRequest {
    return {};
  },

  toJSON(_: ListTrailsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ListTrailsRequest>, I>>(base?: I): ListTrailsRequest {
    return ListTrailsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTrailsRequest>, I>>(_: I): ListTrailsRequest {
    const message = createBaseListTrailsRequest();
    return message;
  },
};

function createBaseListTrailsResponse(): ListTrailsResponse {
  return { trails: [] };
}

export const ListTrailsResponse = {
  encode(message: ListTrailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.trails) {
      Trail.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListTrailsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListTrailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trails.push(Trail.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListTrailsResponse {
    return { trails: globalThis.Array.isArray(object?.trails) ? object.trails.map((e: any) => Trail.fromJSON(e)) : [] };
  },

  toJSON(message: ListTrailsResponse): unknown {
    const obj: any = {};
    if (message.trails?.length) {
      obj.trails = message.trails.map((e) => Trail.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListTrailsResponse>, I>>(base?: I): ListTrailsResponse {
    return ListTrailsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListTrailsResponse>, I>>(object: I): ListTrailsResponse {
    const message = createBaseListTrailsResponse();
    message.trails = object.trails?.map((e) => Trail.fromPartial(e)) || [];
    return message;
  },
};

export type TrailServiceService = typeof TrailServiceService;
export const TrailServiceService = {
  createTrail: {
    path: "/trail.TrailService/CreateTrail",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateTrailRequest) => Buffer.from(CreateTrailRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateTrailRequest.decode(value),
    responseSerialize: (value: CreateTrailResponse) => Buffer.from(CreateTrailResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateTrailResponse.decode(value),
  },
  /** rpc GetTrail(GetTrailRequest) returns (GetTrailResponse); */
  listTrails: {
    path: "/trail.TrailService/ListTrails",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ListTrailsRequest) => Buffer.from(ListTrailsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ListTrailsRequest.decode(value),
    responseSerialize: (value: ListTrailsResponse) => Buffer.from(ListTrailsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ListTrailsResponse.decode(value),
  },
} as const;

export interface TrailServiceServer extends UntypedServiceImplementation {
  createTrail: handleUnaryCall<CreateTrailRequest, CreateTrailResponse>;
  /** rpc GetTrail(GetTrailRequest) returns (GetTrailResponse); */
  listTrails: handleUnaryCall<ListTrailsRequest, ListTrailsResponse>;
}

export interface TrailServiceClient extends Client {
  createTrail(
    request: CreateTrailRequest,
    callback: (error: ServiceError | null, response: CreateTrailResponse) => void,
  ): ClientUnaryCall;
  createTrail(
    request: CreateTrailRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateTrailResponse) => void,
  ): ClientUnaryCall;
  createTrail(
    request: CreateTrailRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateTrailResponse) => void,
  ): ClientUnaryCall;
  /** rpc GetTrail(GetTrailRequest) returns (GetTrailResponse); */
  listTrails(
    request: ListTrailsRequest,
    callback: (error: ServiceError | null, response: ListTrailsResponse) => void,
  ): ClientUnaryCall;
  listTrails(
    request: ListTrailsRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ListTrailsResponse) => void,
  ): ClientUnaryCall;
  listTrails(
    request: ListTrailsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ListTrailsResponse) => void,
  ): ClientUnaryCall;
}

export const TrailServiceClient = makeGenericClientConstructor(
  TrailServiceService,
  "trail.TrailService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): TrailServiceClient;
  service: typeof TrailServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
