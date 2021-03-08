import React, { useState } from 'react'
import { PageTemplate } from '@layouts/PageTemplate'
import { StepWrapper } from '@components/StepWrapper/StepWrapper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { useRouter } from 'next/router'
import TextField from '@material-ui/core/TextField'
import { FileType, FileUpload } from '@components/FileUpload/FileUpload'
import { useInput } from '@hooks/useInput'
import axios from 'axios'

interface CreateTrackPage {}

const CreateTrackPage: React.FC<CreateTrackPage> = (): React.ReactElement => {
    const router = useRouter()

    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState(null)
    const [audio, setAudio] = useState(null)
    const name = useInput('')
    const artist = useInput('')
    const lyrics = useInput('')

    const handleOnNext = () => {
        if (activeStep === 2) {
            const formData = new FormData()
            formData.append('name', name.value)
            formData.append('text', lyrics.value)
            formData.append('artist', artist.value)
            formData.append('picture', picture)
            formData.append('audio', audio)

            const createNewTrack = async () => {
                try {
                    await axios.post('http://localhost:5000/tracks', formData)
                    router.push('/tracks')
                } catch (e) {
                    console.log(e)
                }
            }

            createNewTrack()
        }
        setActiveStep((prev) => prev + 1)
    }

    const handleOnBack = () => {
        if (activeStep === 0) return
        setActiveStep((prev) => prev - 1)
    }

    return (
        <PageTemplate>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 && (
                    <Grid container direction="column" style={{ padding: 20 }}>
                        <TextField {...name} style={{ margin: 5 }} label="Track name" />
                        <TextField {...artist} style={{ margin: 5 }} label="Artist name" />
                        <TextField {...lyrics} style={{ margin: 5 }} label="Lyrics" rows={3} multiline />
                    </Grid>
                )}
                {activeStep === 1 && (
                    <FileUpload setFile={setPicture} accept={FileType.IMAGE}>
                        <Button>Upload image</Button>
                    </FileUpload>
                )}
                {activeStep === 2 && (
                    <FileUpload setFile={setAudio} accept={FileType.AUDIO}>
                        <Button>Upload track</Button>
                    </FileUpload>
                )}
            </StepWrapper>
            <Grid container justifyContent="space-between">
                <Button disabled={activeStep === 0} onClick={handleOnBack}>
                    Back
                </Button>
                <Button onClick={handleOnNext}>Next</Button>
            </Grid>
        </PageTemplate>
    )
}

export default CreateTrackPage
