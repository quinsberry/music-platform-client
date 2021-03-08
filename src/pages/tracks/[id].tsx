import React, { FC, ReactElement, useState } from 'react'
import { PageTemplate } from '@layouts/PageTemplate'
import { Track } from '@localTypes/track'
import { useRouter } from 'next/router'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { TextField } from '@material-ui/core'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { useInput } from '@hooks/useInput'

interface TrackPageProps {
    serverTrack: Track
}

const TrackPage: FC<TrackPageProps> = ({ serverTrack }): ReactElement => {
    const router = useRouter()

    const [track, setTrack] = useState<Track>(serverTrack)
    const username = useInput('')
    const commentText = useInput('')

    const handleBackToList = () => router.push('/tracks')

    const handleSendComment = async () => {
        try {
            const response = await axios.post('http://localhost:5000/tracks/comment', {
                username: username.value,
                text: commentText.value,
                trackId: track._id,
            })
            setTrack({ ...track, comments: [...track.comments, response.data] })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <PageTemplate>
            <Button variant="outlined" onClick={handleBackToList}>
                Back to track list
            </Button>
            <Grid container style={{ margin: '20px 0' }}>
                <img src={`http://localhost:5000/${track.picture}`} width={200} height={200} alt="Track picture" />
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
                <TextField {...username} label="Your name" fullWidth />
                <TextField {...commentText} label="Comments" fullWidth multiline rows={4} />
            </Grid>
            <Button onClick={handleSendComment}>Send</Button>
            <div>
                {track.comments.map((comment) => (
                    <div key={comment._id}>
                        <div>Author: {comment.username}</div>
                        <div>Comment: {comment.text}</div>
                    </div>
                ))}
            </div>
        </PageTemplate>
    )
}

export default TrackPage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const response = await axios.get('http://localhost:5000/tracks/' + params.id)
    return {
        props: {
            serverTrack: response.data,
        },
    }
}
