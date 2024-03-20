import {numIncrementAC, numReducer} from './num-reducer'

//========================================================================================

let startState: number

beforeEach(() => {
    startState = 0
})

test('NUM-INCREMENT', () => {
    const endState = numReducer(startState, numIncrementAC())
    expect(endState).toBe(1)
})

