export const floatToTime = (float: number): string => {
    const current_minute = parseInt(String(float / 60)) % 60 || 0
    const current_seconds_long = float % 60 || 0
    const current_seconds = current_seconds_long.toFixed()

    return (
        (current_minute < 10 ? '0' + current_minute : current_minute) +
        ':' +
        (parseInt(current_seconds) < 10 ? '0' + current_seconds : current_seconds)
    )
}
