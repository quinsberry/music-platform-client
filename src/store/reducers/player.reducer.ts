import { PlayerActions } from '@store/action-creators/player.action-creator'
import { Track } from '@localTypes/track'

const initialState = {
    currentTime: 0,
    duration: 0,
    active: null as Track,
    volume: 50,
    pause: true,
}

type PlayerState = typeof initialState

export const playerReducer = (state = initialState, action: PlayerActions): PlayerState => {
    switch (action.type) {
        case 'PLAYER::PAUSE':
            return { ...state, pause: true }
        case 'PLAYER::PLAY':
            return { ...state, pause: false }
        case 'PLAYER::SET_CURRENT_TIME':
            return { ...state, currentTime: action.payload }
        case 'PLAYER::SET_VOLUME':
            return { ...state, volume: action.payload }
        case 'PLAYER::SET_DURATION':
            return { ...state, duration: action.payload }
        case 'PLAYER::SET_ACTIVE':
            return { ...state, active: action.payload, duration: 0, currentTime: 0 }
        default:
            return state
    }
}
