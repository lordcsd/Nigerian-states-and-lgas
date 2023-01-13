"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.states = exports.all = exports.lgas = void 0;
const states_1 = require("./states");
const lgas = (state) => {
    const foundState = Object.values(states_1.states).find((oneState) => oneState.state.match(new RegExp(state, "i")));
    if (foundState && foundState.lgas) {
        return foundState.lgas;
    }
};
exports.lgas = lgas;
const all = () => states_1.states;
exports.all = all;
const states = () => states_1.states.map((state) => state.state);
exports.states = states;
