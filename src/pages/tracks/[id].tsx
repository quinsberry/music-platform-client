import React, { FC, ReactElement } from 'react'
import { PageTemplate } from '@layouts/PageTemplate'
import { Track } from '@localTypes/track'
import { useRouter } from 'next/router'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { TextField } from '@material-ui/core'

interface TrackPageProps {}

const TrackPage: FC<TrackPageProps> = (): ReactElement => {
    const router = useRouter()
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
    const handleBackToList = () => router.push('/tracks')

    const handleSendComment = () => {}

    return (
        <PageTemplate>
            <Button variant="outlined" onClick={handleBackToList}>
                Back to track list
            </Button>
            <Grid container style={{ margin: '20px 0' }}>
                <img src={track.picture} width={200} height={200} alt="Track picture" />
                <div style={{ marginLeft: 30 }}>
                    <h1>Track name: {track.name}</h1>
                    <h1>Author: {track.artist}</h1>
                    <h1>Number of listens: {track.listens}</h1>
                </div>
            </Grid>
            <h1>Lyrics:</h1>
            <p>{track.text}</p>
            <h1>Comments</h1>
            <Grid container>
                <TextField label="Your name" fullWidth />
                <TextField label="Comments" fullWidth multiline rows={4} />
            </Grid>
            <div>
                {track.comments.map((comment) => (
                    <div key={comment._id}>
                        <div>Author: {comment.username}</div>
                        <div>Comment: {comment.text}</div>
                    </div>
                ))}
            </div>

            <Button onClick={handleSendComment}>Send</Button>
        </PageTemplate>
    )
}

export default TrackPage
