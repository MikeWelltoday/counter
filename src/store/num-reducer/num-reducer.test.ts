import {numNewValueAC, numReducer, numReducerIncrementAC} from './num-reducer'

let startState: number

beforeEach(() => {
    startState = 0
})

test('INCREMENT', () => {

    let endState = numReducer(startState, numReducerIncrementAC())

    expect(endState).toBe(1)

    endState = numReducer(endState, numReducerIncrementAC())

    expect(endState).toBe(2)
})

test('NEW-VALUE', () => {

    const newNumber = 100

    const endState = numReducer(startState, numNewValueAC(newNumber))

    expect(endState).not.toBe(1)
    expect(endState).toBe(newNumber)
})