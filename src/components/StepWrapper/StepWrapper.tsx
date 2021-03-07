import React, { FC, ReactElement } from 'react'
import { Card, Container, Step, StepLabel, Stepper } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

interface StepWrapperProps {
    activeStep: number
}

const steps = ['Track information', 'Upload picture', 'Upload track']

export const StepWrapper: FC<StepWrapperProps> = ({ activeStep, children }): ReactElement => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, idx) => (
                    <Step key={idx} completed={activeStep > idx}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Grid container justifyContent="center" style={{ margin: '70px 0', height: 270 }}>
                <Card style={{ width: 600 }}>{children}</Card>
            </Grid>
        </Container>
    )
}
