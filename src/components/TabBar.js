import React, { useState } from 'react'
import { Tabs, SegmentedControl, Center, Box, MediaQuery } from '@mantine/core';

// The TabBar component builds responsive navigation tabs based on passed props using mantine components
// On large displays, Tabs is used exclusively
// On small displays, SegmentedControl is used exclusively
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
        label: (
          <Center>
            {data.icon}
            <Box ml={10}>{data.label}</Box>
          </Center>
        ),
        value: data.value,
        disabled: data.disabled,
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
      {/* Large Display */}
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Tabs grow orientation="horizontal" initialTab={tabInit}>
          {tabElements}
        </Tabs>
      </MediaQuery>

      {/* Mobile Display */}
      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <div>
          <SegmentedControl
            fullWidth
            orientation="vertical"
            value={currentSegment}
            onChange={e => changeSegment(e)}
            data={segmentData}
          />
          {segmentContent}
        </div>
      </MediaQuery>
    </div>
  )
}
