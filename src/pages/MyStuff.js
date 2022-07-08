import React from 'react'
import { Photo } from 'tabler-icons-react'
import TabBar from '../components/TabBar'
import NotFound from './NotFound'

const tabs = [
    { label: 'All', value: 'all', color: 'red', content: <NotFound />, },
    { label: 'Functions', value: 'functions', color: 'blue', icon: <Photo size={14} />, content: 'YEET' },
    { label: 'Another Tab', value: 'another tab', color: 'blue', icon: <Photo size={14} />, content: <h1>ANOTHER TAB</h1> },
    { label: 'Tab 3', value: 'tab3', color: 'green', disabled: true },
]

export default function MyStuff() {
    return (
        <div>
            <h1>My Stuff</h1>
            <TabBar tabData={tabs} tabInit={0} />
        </div>
    )
}