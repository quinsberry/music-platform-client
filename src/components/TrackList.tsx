import React, { FC, ReactElement } from 'react'
import { Track } from '@localTypes/track'
import { Box, Grid } from '@material-ui/core'
import { TrackItem } from '@components/TrackItem/TrackItem'

interface TrackListProps {
    tracks: Track[]
}

export const TrackList: FC<TrackListProps> = ({ tracks }): ReactElement => {
    return (
        <Grid container direction="column">
            <Box>
                {tracks.map((track) => (
                    <TrackItem key={track._id} track={track} />
                ))}
            </Box>
        </Grid>
    )
}
