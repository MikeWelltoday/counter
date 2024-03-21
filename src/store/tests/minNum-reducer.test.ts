import {minNumNemValueAC, minNumReducer} from '../reducers/minNum-reducer'


let startState: number

beforeEach(() => {
    startState = 0
})

test('NEW-VALUE', () => {

    const newNumber = 100

    const endState = minNumReducer(startState, minNumNemValueAC(newNumber))

    expect(endState).not.toBe(0)
    expect(endState).toBe(newNumber)
})