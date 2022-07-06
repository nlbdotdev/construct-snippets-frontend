import React from 'react'
import TabBar from '../components/TabBar'

const tabs = [
    { link: '/', label: 'All' },
    { link: '/functions', label: 'Functions' },
    { link: '/2', label: 'Tab 3' },
    { link: '/', label: 'Tab 4' },
    { link: '/', label: 'Tab 5' },
]


export default function MyStuff() {
    return (
        <div>
            <TabBar tabs={tabs} />
            <h1>My Stuff</h1>
        </div>
    )
}
