import React from 'react'
import { Tabs, SegmentedControl, ThemeIcon, Center, Box } from '@mantine/core';
import { Photo, MessageCircle, Settings, } from 'tabler-icons-react';


export default function TabBar(props) {

  // Destructure data from props
  const { tabData } = props

  // Accepts an array of tab objects, keys: label, value, color, icon, disabled, content
  const buildTabs = (tabArray) => {

    let elems = tabArray.map(data => (
      <Tabs.Tab label={data.label} value={data.value} color={data.color} icon={data.icon} disabled={data.disabled}>
        {data.content}
      </Tabs.Tab>
    ))

    return elems
  }


  // Build components
  const tabElements = buildTabs(tabData)



  return (
    <div>
      <h4>Tab Bar</h4>

      {/* {props.tabs[0].label} */}


      <Tabs grow orientation="horizontal">
        {tabElements}
      </Tabs>

      {/* <SegmentedControl fullWidth orientation="vertical"
        data={data}
      /> */}



      <SegmentedControl fullWidth orientation="vertical"
        data={[
          { label: 'React', value: 'react' },
          { label: 'Angular', value: 'ng', disabled: true },
          { label: 'Vue', value: 'vue', backgroundColor: 'green' },
          { label: 'Svelte', value: 'svelte' },

        ]}
      />


    </div>
  )
}
