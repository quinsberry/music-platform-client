import React, { FC, ReactElement } from 'react'

interface TrackProgressProps {
    left: number
    right: number

    onChange: (e) => void
}

export const TrackProgress: FC<TrackProgressProps> = ({ left, right, onChange }): ReactElement => {
    return (
        <div style={{ display: 'flex' }}>
            <input type="range" min={left} max={right} value={left} onChange={onChange} />
            <div>
                {left} / {right}
            </div>
        </div>
    )
}
