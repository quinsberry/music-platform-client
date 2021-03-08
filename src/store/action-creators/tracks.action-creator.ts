import { InferActions } from '@localTypes/store'
import { Track } from '@localTypes/track'

export const tracksActions = {
    fetchTracks: (payload: Track[]) => ({ type: 'TRACKS::FETCH_TRACKS', payload } as const),
    fetchTracksError: (payload: string) => ({ type: 'TRACKS::FETCH_TRACKS_ERROR', payload } as const),
}

export type TracksActions = InferActions<typeof tracksActions>
