const { states: allStates } = require("./states")

const stateNames = allStates.map(state => state.state)

const all = () => allStates;
const states = () => stateNames
const lgas = (state) => {
    const joinedStates = stateNames.map(each=>each.toLowerCase())
    if (!joinedStates.includes(state.toLowerCase())) {
        throw new Error(`${state} is not a valid state, Valid states include, ${stateNames.join(', ')}`)
    }
    return allStates.find(oneState => oneState.state.match(new RegExp(state,"i"))).lgas
}

module.exports = {
    nigerianStates: {
        all: all,
        states: states,
        lgas: lgas
    }
}