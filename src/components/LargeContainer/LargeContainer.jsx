import React from 'react'
import "./LargeContainer.css"

const LargeContainer = (props) => {
  return (
    <div className='large-container'>
      <h3>{props.firstTitle}</h3>
      <h3>{props.secondTitle}</h3>
    </div>
  )
}

export default LargeContainer
