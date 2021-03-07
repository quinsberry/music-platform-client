import React, { FC, ReactElement } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Pause from '@material-ui/icons/Pause'
import PlayArrow from '@material-ui/icons/PlayArrow'

import styles from './Player.module.scss'
import { Track } from '@localTypes/track'
import Grid from '@material-ui/core/Grid'
import { TrackProgress } from '@components/TrackProgress/TrackProgress'
import { VolumeUp } from '@material-ui/icons'
import { useTypedSelector } from '@hooks/useTypedSelector'
import { useActions } from '@hooks/useActions'

interface PlayerProps {}

export const Player: FC<PlayerProps> = (): ReactElement => {
    const track: Track = {
        _id: '1',
        name: 'test track name1',
        artist: 'test artist name1',
        text: 'test track text1',
        listens: 1,
        audio: 'http://localhost:5000/audio/4c8b2178-e5f2-445b-8adf-dd9155559f90.mp3',
        picture: 'http://localhost:5000/image/b14fab3e-26c4-4148-a1b0-dcbae4ef861e.jpg',
        comments: [],
    }

    const { pause, volume, duration, currentTime, active } = useTypedSelector((state) => state.player)
    const { playTrack, pauseTrack } = useActions()
    const handleOnPlay = () => {
        if (pause) {
            playTrack()
        } else {
            pauseTrack()
        }
    }

    return (
        <div className={styles.player}>
            <IconButton onClick={handleOnPlay}>{!pause ? <Pause /> : <PlayArrow />}</IconButton>
            <Grid container direction="column" style={{ width: 200, margin: '0 20px' }}>
                <div>{track.name}</div>
                <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => {}} />
            <VolumeUp style={{ marginLeft: 'auto' }} />
            <TrackProgress left={0} right={100} onChange={() => {}} />
        </div>
    )
}
