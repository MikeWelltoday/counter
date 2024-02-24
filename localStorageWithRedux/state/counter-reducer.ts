import {StateType} from '../App'

//========================================================================================
// 🎲 .T.Y.P.E.S.

type CounterReducerActionType = ReturnType<typeof counterIncrementAC> | ReturnType<typeof counterDecrementAC>

//========================================================================================
// 🍌 .A.C.

export function counterIncrementAC() {
    return {type: 'INCREMENT'}
}

export function counterDecrementAC() {
    return {type: 'DECREMENT'}
}


//========================================================================================
// 🧰 .R.E.D.U.C.E.R.

const initialState: StateType = {
    count: 0
}

export function CounterReducer(state: StateType = initialState, {type}: CounterReducerActionType): StateType {

    switch (type) {

        case 'INCREMENT': {
            return {...state, count: state.count + 1}
        }

        case 'DECREMENT': {
            return {...state, count: state.count - 1}
        }

        default: {
            return state
        }

    }
}

