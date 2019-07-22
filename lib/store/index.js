"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk");
const redux_logger_1 = require("redux-logger");
const rootReducer_1 = require("../redux/rootReducer");
const store = redux_1.createStore(rootReducer_1.default, redux_1.applyMiddleware(redux_logger_1.default, redux_thunk_1.default));
exports.default = store;
//# sourceMappingURL=index.js.map