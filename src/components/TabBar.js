import React from 'react'

export default function TabBar(props) {


  console.log(props.tabs)


  return (
    <div>
      <h4>Tab Bar</h4>
      {props.tabs[0].label}
    </div>
  )
}
