import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {numAllActionsType, numReducer} from './num-reducer'
import {thunk, ThunkDispatch} from 'redux-thunk'
import {useDispatch} from 'react-redux'

//========================================================================================

export type AppRootReducerType = ReturnType<typeof rootReducer>
type AllActionsType = numAllActionsType
export type AppThunkDispatchType = ThunkDispatch<AppRootReducerType, any, AllActionsType>

//========================================================================================

export const useAppDispatch = () => useDispatch<AppThunkDispatchType>()

//========================================================================================

const rootReducer = combineReducers({
    num: numReducer
})

export const store = legacy_createStore(
    rootReducer,
    undefined,
    applyMiddleware(thunk)
)






