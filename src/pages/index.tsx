import React from 'react'

import { PageTemplate } from '@layouts/PageTemplate'

interface MainPage {}

const MainPage: React.FC<MainPage> = (): React.ReactElement => {
    return (
        <>
            <PageTemplate>
                <div className="center">
                    <h1>Welcome!</h1>
                    <h2>Here you can find the best tracks</h2>
                </div>
            </PageTemplate>

            <style jsx>
                {`
                    .center {
                        margin-top: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                `}
            </style>
        </>
    )
}

export default MainPage
