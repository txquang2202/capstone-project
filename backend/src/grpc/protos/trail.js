"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrailServiceClient = exports.TrailServiceService = exports.ListTrailsResponse = exports.ListTrailsRequest = exports.GetTrailResponse = exports.GetTrailRequest = exports.CreateTrailResponse = exports.CreateTrailRequest = exports.Trail = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "trail";
function createBaseTrail() {
    return { id: "", actor: "", event: "", targetId: "", targetType: "" };
}
exports.Trail = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            actor: isSet(object.actor) ? globalThis.String(object.actor) : "",
            event: isSet(object.event) ? globalThis.String(object.event) : "",
            targetId: isSet(object.targetId) ? globalThis.String(object.targetId) : "",
            targetType: isSet(object.targetType) ? globalThis.String(object.targetType) : "",
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return exports.Trail.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseTrail();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.actor = (_b = object.actor) !== null && _b !== void 0 ? _b : "";
        message.event = (_c = object.event) !== null && _c !== void 0 ? _c : "";
        message.targetId = (_d = object.targetId) !== null && _d !== void 0 ? _d : "";
        message.targetType = (_e = object.targetType) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseCreateTrailRequest() {
    return { actor: "", event: "", targetId: "", targetType: "" };
}
exports.CreateTrailRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(object) {
        return {
            actor: isSet(object.actor) ? globalThis.String(object.actor) : "",
            event: isSet(object.event) ? globalThis.String(object.event) : "",
            targetId: isSet(object.targetId) ? globalThis.String(object.targetId) : "",
            targetType: isSet(object.targetType) ? globalThis.String(object.targetType) : "",
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return exports.CreateTrailRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCreateTrailRequest();
        message.actor = (_a = object.actor) !== null && _a !== void 0 ? _a : "";
        message.event = (_b = object.event) !== null && _b !== void 0 ? _b : "";
        message.targetId = (_c = object.targetId) !== null && _c !== void 0 ? _c : "";
        message.targetType = (_d = object.targetType) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseCreateTrailResponse() {
    return { trail: undefined };
}
exports.CreateTrailResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.trail !== undefined) {
            exports.Trail.encode(message.trail, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateTrailResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.trail = exports.Trail.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { trail: isSet(object.trail) ? exports.Trail.fromJSON(object.trail) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.trail !== undefined) {
            obj.trail = exports.Trail.toJSON(message.trail);
        }
        return obj;
    },
    create(base) {
        return exports.CreateTrailResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateTrailResponse();
        message.trail = (object.trail !== undefined && object.trail !== null) ? exports.Trail.fromPartial(object.trail) : undefined;
        return message;
    },
};
function createBaseGetTrailRequest() {
    return { id: "" };
}
exports.GetTrailRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.GetTrailRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetTrailRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetTrailResponse() {
    return { trail: undefined };
}
exports.GetTrailResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.trail !== undefined) {
            exports.Trail.encode(message.trail, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTrailResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.trail = exports.Trail.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { trail: isSet(object.trail) ? exports.Trail.fromJSON(object.trail) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.trail !== undefined) {
            obj.trail = exports.Trail.toJSON(message.trail);
        }
        return obj;
    },
    create(base) {
        return exports.GetTrailResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetTrailResponse();
        message.trail = (object.trail !== undefined && object.trail !== null) ? exports.Trail.fromPartial(object.trail) : undefined;
        return message;
    },
};
function createBaseListTrailsRequest() {
    return {};
}
exports.ListTrailsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.ListTrailsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseListTrailsRequest();
        return message;
    },
};
function createBaseListTrailsResponse() {
    return { trails: [] };
}
exports.ListTrailsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.trails) {
            exports.Trail.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListTrailsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.trails.push(exports.Trail.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { trails: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.trails) ? object.trails.map((e) => exports.Trail.fromJSON(e)) : [] };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.trails) === null || _a === void 0 ? void 0 : _a.length) {
            obj.trails = message.trails.map((e) => exports.Trail.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ListTrailsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListTrailsResponse();
        message.trails = ((_a = object.trails) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Trail.fromPartial(e))) || [];
        return message;
    },
};
exports.TrailServiceService = {
    createTrail: {
        path: "/trail.TrailService/CreateTrail",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateTrailRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateTrailRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateTrailResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateTrailResponse.decode(value),
    },
    /** rpc GetTrail(GetTrailRequest) returns (GetTrailResponse); */
    listTrails: {
        path: "/trail.TrailService/ListTrails",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.ListTrailsRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.ListTrailsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.ListTrailsResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.ListTrailsResponse.decode(value),
    },
};
exports.TrailServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.TrailServiceService, "trail.TrailService");
function isSet(value) {
    return value !== null && value !== undefined;
}
