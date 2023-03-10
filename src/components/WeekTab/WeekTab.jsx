import React from 'react'
import { useState } from "react"
import { TabView, TabPanel } from 'primereact/tabview'
import FieldDetail from '../FieldDetail/FieldDetail'

const WeekTab = ({ field }) => {



    let currentDate = new Date()
    let daysOfWeek = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"]
    let weekDays = []

    for (let i = 0; i < 7; i++) {
        let day = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + i)
        let dayOfWeek = daysOfWeek[day.getDay()]
        let date = day.getDate()
        let month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(day)
        weekDays.push(dayOfWeek + " | " + date + " | " + month)
    }

    const scrollableTabs = Array.from({ length: 7 }, (_, i) => ({ title: weekDays[i], content: `Tab ${i + 1} Content` }))

    return (
        <div className="card">
            <TabView scrollableTabs>
                {scrollableTabs.map((tab) => {
                    return (
                        <TabPanel key={tab.title} header={tab.title}>

                            <FieldDetail field={field} day={tab.title} />
                        </TabPanel>
                    );
                })}
            </TabView>
        </div>

    )
}


export default WeekTab
