export const timeEnd = (timeStart, playMinTotal) => {
    const [startHours, startMinutes] = timeStart.split(":").map(Number)

    const endMinutes = startMinutes + playMinTotal
    const endHours = startHours + Math.floor(endMinutes / 60)

    const finalEndMinutes = endMinutes % 60
    const finalEndHours = String(endHours).padStart(2, "0")
    const finalEndTime = `${finalEndHours}:${finalEndMinutes.toString().padStart(2, "0")}`

    return finalEndTime
}

export const totalPrice = (playMinTotal, hourlyPrice) => {

    const playMinReal = Number(playMinTotal)
    console.log('playMinReal1111', playMinReal)

    if (!isNaN(playMinReal)) {
        const hours = playMinReal / 60
        const result = hourlyPrice * hours
        console.log('hourlyPrice----', hourlyPrice)
        console.log("playMinReal----", playMinReal)
        console.log('hours----', hours)
        console.log('result----', result)
        return result
    }
}

export const parsedDate = (day) => {
    if (day) {
        const date = new Date(day)
        const finalDay = date.getDate()
        const finalMonth = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(date)
        const finalYear = date.getFullYear()
        let finalDate = `${finalDay} de ${finalMonth} de ${finalYear}`
        return finalDate
    }
    return ''
}