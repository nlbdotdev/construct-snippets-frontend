import React from 'react'
import { Photo } from 'tabler-icons-react'
import SnippetsFilter from '../components/Snippets/SnippetsFilter'
import SnippetsGrid from '../components/Snippets/SnippetsGrid'
import TabBar from '../components/TabBar'
import TabPage from '../components/TabPage'
import NotFound from './NotFound'

const pageAll = <TabPage main={<SnippetsGrid />} aside={<SnippetsFilter />} />

const pageOther = <TabPage main="main page" aside={<SnippetsFilter />} />

const tabs = [
    { label: 'All', value: 'all', color: 'red', content: pageAll },
    { label: 'Functions', value: 'functions', color: 'blue', icon: <Photo size={14} />, content: <NotFound /> },
    { label: 'Another Tab', value: 'another tab', color: 'blue', icon: <Photo size={14} />, content: <h1>ANOTHER TAB</h1> },
    { label: 'Tab 3', value: 'tab3', color: 'green', disabled: true },
    { label: 'new', value: 'new', content: <TabPage/> },
    { label: 'other', value: 'value', content: pageOther }
]

export default function MyStuff() {
    return (
        <div>
            <h1>My Stuff</h1>
            <TabBar tabData={tabs} tabInit={0} />
        </div>
    )
}