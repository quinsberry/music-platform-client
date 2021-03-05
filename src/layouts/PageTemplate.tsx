import React from 'react'
import { Navbar } from '@components/Navbar'
import { Container } from '@material-ui/core'

interface PageTemplate {
    children: React.ReactNode
}

export const PageTemplate: React.FC<PageTemplate> = ({ children }): React.ReactElement => {
    return (
        <>
            <Navbar />
            <Container style={{ margin: '90px auto' }}>{children}</Container>
        </>
    )
}
