import { InferActions } from '@localTypes/store'
import { Track } from '@localTypes/track'

export const playerActions = {
    playTrack: () => ({ type: 'PLAYER::PLAY' } as const),
    pauseTrack: () => ({ type: 'PLAYER::PAUSE' } as const),
    setDuration: (payload: number) => ({ type: 'PLAYER::SET_DURATION', payload } as const),
    setVolume: (payload: number) => ({ type: 'PLAYER::SET_VOLUME', payload } as const),
    setCurrentTime: (payload: number) => ({ type: 'PLAYER::SET_CURRENT_TIME', payload } as const),
    setActiveTrack: (payload: Track) => ({ type: 'PLAYER::SET_ACTIVE', payload } as const),
}

export type PlayerActions = InferActions<typeof playerActions>
