export const timeEnd = (timeStart, playMinTotal) => {
    const [startHours, startMinutes] = timeStart.split(":").map(Number)

    const endMinutes = startMinutes + playMinTotal
    const endHours = startHours + Math.floor(endMinutes / 60)

    const finalEndMinutes = endMinutes % 60
    const finalEndHours = String(endHours).padStart(2, "0")
    const finalEndTime = `${finalEndHours}:${finalEndMinutes.toString().padStart(2, "0")}`

    return finalEndTime
}