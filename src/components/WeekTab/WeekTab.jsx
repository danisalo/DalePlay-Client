import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview'

import FieldDetail from '../FieldDetail/FieldDetail'

const WeekTab = ({ field, loadField }) => {

    let currentDate = new Date()
    let daysOfWeek = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"]
    let weekDays = []

    for (let i = 0; i < 7; i++) {
        let dayT = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + i)
        let dayOfWeek = daysOfWeek[dayT.getDay()]
        let dateType = dayT.getDate()
        let month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(dayT)
        weekDays.push(dayOfWeek + " | " + dateType + " | " + month)
    }

    const scrollableTabs = Array.from({ length: 7 }, (_, i) => ({ title: weekDays[i], content: `Tab ${i + 1} Content` }))

    return (
        <div className="card">
            <TabView scrollableTabs>
                {scrollableTabs.map((tab, index) => {

                    const date = new Date()
                    date.setDate(currentDate.getDate() + index)

                    return (
                        <TabPanel key={tab.title} header={tab.title}>
                            <FieldDetail field={field} day={tab.title} date={date} loadField={loadField} />
                        </TabPanel>
                    )
                })}
            </TabView>
        </div>
    )
}


export default WeekTab
