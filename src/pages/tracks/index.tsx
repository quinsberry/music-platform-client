import React, { ChangeEvent, useState } from 'react'
import { PageTemplate } from '@layouts/PageTemplate'
import { Box, Button, Card, Grid, TextField } from '@material-ui/core'
import { useRouter } from 'next/router'
import { TrackList } from '@components/TrackList'
import { useTypedSelector } from '@hooks/useTypedSelector'
import { NextThunkDispatch, wrapper } from '@store/store'
import { fetchTracks, searchTracks } from '@store/operations/tracks.operations'
import { useDispatch } from 'react-redux'

interface TracksPage {}

const TracksPage: React.FC<TracksPage> = (): React.ReactElement => {
    const router = useRouter()
    const dispatch = useDispatch() as NextThunkDispatch

    const { items, error } = useTypedSelector((state) => state.tracks)
    const [query, setQuery] = useState<string>('')
    const [timer, setTimer] = useState(null)

    const search = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        if (timer) {
            clearTimeout(timer)
        }
        setTimer(
            setTimeout(async () => {
                await dispatch(await searchTracks(e.target.value))
            }, 500)
        )
    }

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
                    <TextField fullWidth value={query} onChange={search} />
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
