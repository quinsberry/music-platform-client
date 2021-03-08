import React, { ChangeEvent, FC, ReactElement, useEffect } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Pause from '@material-ui/icons/Pause'
import PlayArrow from '@material-ui/icons/PlayArrow'

import styles from './Player.module.scss'
import Grid from '@material-ui/core/Grid'
import { TrackProgress } from '@components/TrackProgress/TrackProgress'
import { VolumeUp } from '@material-ui/icons'
import { useTypedSelector } from '@hooks/useTypedSelector'
import { useActions } from '@hooks/useActions'
import { TrackVolume } from '@components/TrackVolume/TrackVolume'

interface PlayerProps {}

let audio

export const Player: FC<PlayerProps> = (): ReactElement => {
    const { pause, volume, duration, currentTime, active } = useTypedSelector((state) => state.player)
    const { playTrack, pauseTrack, setVolume, setCurrentTime, setDuration } = useActions()

    useEffect(() => {
        if (!audio) {
            audio = new Audio()
        } else {
            setAudio()
            handleOnPlay()
        }
    }, [active])

    const setAudio = () => {
        if (active) {
            audio.src = `http://localhost:5000/${active.audio}`
            audio.volume = volume / 100
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration))
            }
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime))
            }
        }
    }

    const handleOnPlay = () => {
        if (pause) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }

    const handleChangeVolume = (e: ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100
        setVolume(Number(e.target.value))
    }

    const handleChangeCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value)
        setCurrentTime(Number(e.target.value))
    }

    if (!active) return null

    return (
        <div className={styles.player}>
            <IconButton onClick={handleOnPlay}>{!pause ? <Pause /> : <PlayArrow />}</IconButton>
            <Grid container direction="column" style={{ width: 200, margin: '0 20px' }}>
                <div>{active?.name}</div>
                <div style={{ fontSize: 12, color: 'gray' }}>{active?.artist}</div>
            </Grid>
            <TrackProgress left={currentTime} right={duration} onChange={handleChangeCurrentTime} />
            <VolumeUp style={{ marginLeft: 'auto' }} />
            <TrackVolume left={volume} right={100} onChange={handleChangeVolume} />
        </div>
    )
}
