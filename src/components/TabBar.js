import React from 'react'
import { Tabs, SegmentedControl, ThemeIcon, Center, Box } from '@mantine/core';

export default function TabBar(props) {

  // Destructure data from props
  const { tabData } = props

  // Accepts an array of tab objects, keys: label, value, color, icon, disabled, content
  const buildTabs = (tabArray) => {

    let elems = tabArray.map(data => (
      <Tabs.Tab key={data.label} label={data.label} value={data.value} color={data.color} icon={data.icon} disabled={data.disabled}>
        {data.content}
      </Tabs.Tab>
    ))

    return elems
  }

  // Accepts array of tab objects, return SegmentedControl data prop
  const buildSegments = (tabArray) => {

    let elems = tabArray.map(data => (
      {
        label: data.label,
        value: data.value,
        disabled: data.disabled
      }
    ))

    return elems
  }

  // Build components
  const tabElements = buildTabs(tabData)
  const segmentData = buildSegments(tabData)

  return (
    <div>
      <h4>Tab Bar</h4>


      <Tabs grow orientation="horizontal">
        {tabElements}
      </Tabs>

      <SegmentedControl fullWidth orientation="vertical"
        data={segmentData}
      />


    </div>
  )
}
