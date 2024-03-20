import {AppThunkDispatchType} from './store'

type NumIncrementActionType = ReturnType<typeof numIncrementAC>
export type numAllActionsType = NumIncrementActionType

//========================================================================================


function getInitialStateFromLocalStore() {
    const stateFromLocalStorage = localStorage.getItem('num')
    if (stateFromLocalStorage === null) {
        return 2
    }
    return JSON.parse(stateFromLocalStorage)
}

const numInitialState = getInitialStateFromLocalStore()

export function numReducer(state = numInitialState, action: numAllActionsType) {
    switch (action.type) {

        case 'NUM-INCREMENT': {
            return state + 1
        }

        default: {
            return state
        }
    }
}

//========================================================================================

export function numIncrementAC() {
    return {type: 'NUM-INCREMENT'} as const
}

//========================================================================================

export function numIncrementTC(num: number) {
    return (dispatch: AppThunkDispatchType) => {
        localStorage.setItem('num', JSON.stringify(num + 1))
        dispatch(numIncrementAC())
    }
}













