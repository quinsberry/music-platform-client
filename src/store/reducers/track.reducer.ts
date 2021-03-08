import { TracksActions } from '@store/action-creators/tracks.action-creator'
import { Track } from '@localTypes/track'

const initialState = {
    items: [] as Track[],
    error: '',
}

type TracksState = typeof initialState

export const tracksReducer = (state = initialState, action: TracksActions): TracksState => {
    switch (action.type) {
        case 'TRACKS::FETCH_TRACKS':
            return { ...state, items: action.payload, error: '' }
        case 'TRACKS::FETCH_TRACKS_ERROR':
            return { ...state, error: action.payload }
        default:
            return state
    }
}
