import React, { FC, ReactElement } from 'react'
import { floatToTime } from '@utils/floatToTime'

interface TrackProgressProps {
    left: number
    right: number

    onChange: (e) => void
}

export const TrackProgress: FC<TrackProgressProps> = ({ left, right, onChange }): ReactElement => {
    return (
        <div style={{ display: 'flex' }}>
            <input type="range" min={0} max={right} value={left} onChange={onChange} />
            <div>
                {floatToTime(left)} / {floatToTime(right)}
            </div>
        </div>
    )
}
