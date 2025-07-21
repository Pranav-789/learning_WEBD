import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e)=>props.setName(e.target.value)} />
      <div>
        {props.name}
      </div>
    </div>
  )
}

export default Card
