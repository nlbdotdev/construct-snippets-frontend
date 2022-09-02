import React from 'react'
import { Photo } from 'tabler-icons-react'
import AuthWrapper from '../components/AuthWrapper'
import SnippetsFilter from '../components/Snippets/SnippetsFilter'
import SnippetsGrid from '../components/Snippets/SnippetsGrid'
import TabBar from '../components/TabBar'
import TabPage from '../components/TabPage'
import NotFound from './NotFound'

const pageAll = <TabPage main={<SnippetsGrid view="all" />} aside={<SnippetsFilter />} />

const pageOther = <TabPage main="main page" aside={<SnippetsFilter />} />

const tabs = [
    { label: (<h1>All</h1>), value: 'all', color: 'red', content: pageAll, icon: <Photo size={24} /> },
    { label: 'Functions', value: 'functions', color: 'blue', icon: <Photo size={14} />, content: <NotFound /> },
    { label: 'Another Tab', value: 'another tab', color: 'blue', icon: <Photo size={14} />, content: <h1>ANOTHER TAB</h1> },
    { label: 'Tab 3', value: 'tab3', color: 'green', disabled: true },
    { label: 'new', value: 'new', content: <TabPage /> },
    { label: 'other', value: 'value', content: pageOther }
]

export default function MyStuff() {
    return (

        <AuthWrapper content={
            <TabBar tabData={tabs} tabInit={0} />
        }
        />

    )
}