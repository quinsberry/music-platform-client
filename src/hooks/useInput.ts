import { ChangeEvent, useState } from 'react'

interface useInputOutput {
    value: any
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const useInput = (initialValue): useInputOutput => {
    const [value, setValue] = useState(initialValue)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

    return { value, onChange }
}
