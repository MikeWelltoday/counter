import {maxNumNemValueAC, maxNumReducer} from '../reducers/maxNum-reducer'


let startState: number

beforeEach(() => {
    startState = 10
})

test('NEW-VALUE', () => {

    const newNumber = 100

    const endState = maxNumReducer(startState, maxNumNemValueAC(newNumber))

    expect(endState).not.toBe(10)
    expect(endState).toBe(newNumber)
})