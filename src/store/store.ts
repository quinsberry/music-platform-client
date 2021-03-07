import { Context, createWrapper, MakeStore } from 'next-redux-wrapper'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { AnyAction, applyMiddleware, createStore, compose } from 'redux'
import { reducer, RootState } from '@store/reducers/root.reducer'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export const wrapper = createWrapper<RootState>(makeStore, { debug: true })

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>
