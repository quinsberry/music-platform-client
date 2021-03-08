import React from 'react'
import { PageTemplate } from '@layouts/PageTemplate'
import { Box, Button, Card, Grid } from '@material-ui/core'
import { useRouter } from 'next/router'
import { TrackList } from '@components/TrackList'
import { useTypedSelector } from '@hooks/useTypedSelector'
import { NextThunkDispatch, wrapper } from '@store/store'
import { fetchTracks } from '@store/operations/tracks.operations'

interface TracksPage {}

const TracksPage: React.FC<TracksPage> = (): React.ReactElement => {
    const router = useRouter()
    const { items, error } = useTypedSelector((state) => state.tracks)

    if (error) {
        return (
            <PageTemplate>
                <h1>{error}</h1>
            </PageTemplate>
        )
    }

    return (
        <PageTemplate title="Track list">
            <Grid container justifyContent={'center'}>
                <Card style={{ width: 900 }}>
                    <Box p={2}>
                        <Grid container justifyContent="space-between">
                            <h1>Track list</h1>
                            <Button onClick={() => router.push('/tracks/create')}>Upload</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={items} />
                </Card>
            </Grid>
        </PageTemplate>
    )
}

export default TracksPage

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchTracks())
})
