import { Dispatch } from 'react'
import axios from 'axios'
import { Track } from '@localTypes/track'
import { TracksActions, tracksActions } from '@store/action-creators/tracks.action-creator'

export const fetchTracks = () => {
    return async (dispatch: Dispatch<TracksActions>) => {
        try {
            const response = await axios.get<FetchTracksResponse>('http://localhost:5000/tracks')
            dispatch(tracksActions.fetchTracks(response.data))
        } catch (e) {
            dispatch(tracksActions.fetchTracksError('Some error occurred with fetching tracks'))
        }
    }
}

export const searchTracks = (query: string) => {
    return async (dispatch: Dispatch<TracksActions>) => {
        try {
            const response = await axios.get<FetchTracksResponse>(`http://localhost:5000/tracks/search?query=${query}`)
            dispatch(tracksActions.fetchTracks(response.data))
        } catch (e) {
            dispatch(tracksActions.fetchTracksError('Some error occurred with fetching tracks'))
        }
    }
}

type FetchTracksResponse = Track[]
