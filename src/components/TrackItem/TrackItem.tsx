import React, { FC, ReactElement } from 'react'
import { Track } from '@localTypes/track'

import Card from '@material-ui/core/Card'
import IconButton from '@material-ui/core/IconButton'
import Pause from '@material-ui/icons/Pause'
import PlayArrow from '@material-ui/icons/PlayArrow'
import Grid from '@material-ui/core/Grid'
import Delete from '@material-ui/icons/Delete'

import styles from './TrackItem.module.scss'
import { useRouter } from 'next/router'
import { useActions } from '@hooks/useActions'

interface TrackItemProps {
    track: Track
    active?: boolean
}

export const TrackItem: FC<TrackItemProps> = ({ track, active = false }): ReactElement => {
    const router = useRouter()
    const { playTrack, setActiveTrack } = useActions()

    const handleCardClick = () => router.push(`/tracks/${track._id}`)
    const handlePlayClick = (e) => {
        e.stopPropagation()

        setActiveTrack(track)
        playTrack()
    }
    const handleDeleteClick = (e) => {
        e.stopPropagation()
    }

    return (
        <Card className={styles.track} onClick={handleCardClick}>
            <IconButton onClick={handlePlayClick}>{active ? <Pause /> : <PlayArrow />}</IconButton>
            <img width={70} height={70} src={`http://localhost:5000/${track.picture}`} alt={'Track image'} />
            <Grid container direction="column" style={{ width: 200, margin: '0 20px' }}>
                <div>{track.name}</div>
                <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
            </Grid>
            <IconButton style={{ marginLeft: 'auto' }} onClick={handleDeleteClick}>
                <Delete />
            </IconButton>
        </Card>
    )
}
