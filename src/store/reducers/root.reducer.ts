import { combineReducers } from 'redux'
import { playerReducer } from '@store/reducers/player.reducer'
import { HYDRATE } from 'next-redux-wrapper'
import { tracksReducer } from '@store/reducers/track.reducer'

const rootReducer = combineReducers({
    player: playerReducer,
    tracks: tracksReducer,
})

export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        }
        if (state.count) nextState.count = state.count
        return nextState
    } else {
        return rootReducer(state, action)
    }
}

export type RootState = ReturnType<typeof rootReducer>
