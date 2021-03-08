import React, { FC, ReactElement } from 'react'

interface TrackVolumeProps {
    left: number
    right: number

    onChange: (e) => void
}

export const TrackVolume: FC<TrackVolumeProps> = ({ left, right, onChange }): ReactElement => {
    return (
        <div style={{ display: 'flex' }}>
            <input type="range" min={0} max={right} value={left} onChange={onChange} />
            <div>
                {left} / {right}
            </div>
        </div>
    )
}
