// ++++ Add icons to segmented tabs
import React, { useState } from 'react'
import { Tabs, SegmentedControl, ThemeIcon, Center, Box } from '@mantine/core';

// The TabBar component builds responsive navigation tabs based on passed props using mantine components
// On large displays, Tabs is used
// On small displays, SegmentedControl is used
// Display changing with Tabs is included with the component, so all data can just be passed into the childrens (Tabs.Tab). SegmentedControl is a bit more involved and needs to be controlled
export default function TabBar(props) {

  // Destructure data from props
  const { tabData, tabInit } = props

  // Returns content for the current segment, pulling from tabData
  const getSegmentContent = (value) => {
    const tab = tabData.find(obj => (obj.value === value))
    return tab.content
  }

  // Segment Hooks
  const initSegmentValue = tabData[tabInit].value
  const [currentSegment, setCurrentSegment] = useState(initSegmentValue)
  const [segmentContent, setSegmentContent] = useState(getSegmentContent(initSegmentValue))

  // Controlled segment function, updates segment and content
  const changeSegment = (value) => {
    setCurrentSegment(value)
    setSegmentContent(getSegmentContent(value))
  }

  // Accepts array of tab objects, return SegmentedControl data prop
  const buildSegments = (tabArray) => {

    let elems = tabArray.map(data => (
      {
        label: data.label,
        value: data.value,
        disabled: data.disabled,
        content: 'yeet'
      }
    ))

    return elems
  }

  // Accepts an array of tab objects, keys: label, value, color, icon, disabled, content
  const buildTabs = (tabArray) => {

    let elems = tabArray.map(data => (
      <Tabs.Tab key={data.label} label={data.label} value={data.value} color={data.color} icon={data.icon} disabled={data.disabled}>
        {data.content}
      </Tabs.Tab>
    ))

    return elems
  }

  // Build components
  const tabElements = buildTabs(tabData)
  const segmentData = buildSegments(tabData)

  return (
    <div>
      <h4>Tab Bar</h4>

      {/* Need to make responsivly show one or the other */}

      <Tabs grow orientation="horizontal" initialTab={tabInit}>
        {tabElements}
      </Tabs>

      {/* Mobile */}

      <SegmentedControl
        fullWidth
        orientation="vertical"
        value={currentSegment}
        onChange={e => changeSegment(e)}
        data={segmentData}
      />

      {segmentContent}

    </div>
  )
}
