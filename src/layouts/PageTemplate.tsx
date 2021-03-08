import React from 'react'
import { Navbar } from '@components/Navbar'
import { Container } from '@material-ui/core'
import { Player } from '@components/Player/Player'
import Head from 'next/head'

interface PageTemplate {
    title?: string
    description?: string
    keywords?: string
}

const defaultTitle = 'Music Platform'
const defaultDescription = 'Music Platform. Anybody can upload tracks here and become a star!'
const defaultKeywords = 'Music, tracks, soundtracks, artists, '

export const PageTemplate: React.FC<PageTemplate> = ({
    children,
    title,
    description,
    keywords,
}): React.ReactElement => {
    return (
        <>
            <Head>
                <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
                <meta
                    name="description"
                    content={description ? `${defaultDescription} ${description}` : defaultDescription}
                />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content={keywords || defaultKeywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar />
            <Container style={{ margin: '90px auto' }}>{children}</Container>
            <Player />
        </>
    )
}
