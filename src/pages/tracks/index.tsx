import React from 'react'
import { PageTemplate } from '@layouts/PageTemplate'
import { Box, Button, Card, Grid } from '@material-ui/core'
import { useRouter } from 'next/router'
import { Track } from '@localTypes/track'
import { TrackList } from '@components/TrackList'

interface TracksPage {}

const TracksPage: React.FC<TracksPage> = (): React.ReactElement => {
    const router = useRouter()
    const tracks: Track[] = [
        {
            _id: '1',
            name: 'test track name1',
            artist: 'test artist name1',
            text: 'test track text1',
            listens: 1,
            audio: 'http://localhost:5000/audio/4c8b2178-e5f2-445b-8adf-dd9155559f90.mp3',
            picture: 'http://localhost:5000/image/b14fab3e-26c4-4148-a1b0-dcbae4ef861e.jpg',
            comments: [],
        },
        {
            _id: '2',
            name: 'test track name2',
            artist: 'test artist name2',
            text: 'test track text2',
            listens: 1,
            audio: 'http://localhost:5000/audio/4c8b2178-e5f2-445b-8adf-dd9155559f90.mp3',
            picture: 'http://localhost:5000/image/b14fab3e-26c4-4148-a1b0-dcbae4ef861e.jpg',
            comments: [],
        },
        {
            _id: '3',
            name: 'test track name3',
            artist: 'test artist name3',
            text: 'test track text3',
            listens: 1,
            audio: 'http://localhost:5000/audio/4c8b2178-e5f2-445b-8adf-dd9155559f90.mp3',
            picture: 'http://localhost:5000/image/b14fab3e-26c4-4148-a1b0-dcbae4ef861e.jpg',
            comments: [],
        },
    ]

    return (
        <PageTemplate>
            <Grid container justifyContent={'center'}>
                <Card style={{ width: 900 }}>
                    <Box p={2}>
                        <Grid container justifyContent="space-between">
                            <h1>Track list</h1>
                            <Button onClick={() => router.push('/tracks/create')}>Upload</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </PageTemplate>
    )
}

export default TracksPage
