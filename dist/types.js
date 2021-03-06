"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Body = void 0;
var t = require("ts-interface-checker");
var BodyInterface = t.iface([], {
    username: 'string',
    password: 'string',
    post: 'string',
    reaction: t.opt(t.union(t.lit('like'), t.lit('love'), t.lit('care'), t.lit('haha'), t.lit('wow'), t.lit('sad'), t.lit('angry'))),
});
exports.Body = t.createCheckers({ BodyType: BodyInterface }).BodyType;
