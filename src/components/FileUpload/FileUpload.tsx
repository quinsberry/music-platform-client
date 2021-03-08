import React, { FC, ReactElement, useRef } from 'react'

interface FileUploadProps {
    setFile: (file: unknown) => void
    accept: FileType
}

export enum FileType {
    IMAGE = 'image/*',
    AUDIO = 'audio/*',
}

export const FileUpload: FC<FileUploadProps> = ({ setFile, accept, children }): ReactElement => {
    const ref = useRef<HTMLInputElement>()

    const handleOnClick = () => ref.current.click()

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files[0])
    }

    return (
        <div onClick={handleOnClick}>
            <input type="file" accept={accept} style={{ display: 'none' }} ref={ref} onChange={handleOnChange} />
            {children}
        </div>
    )
}
