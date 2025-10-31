import React from 'react'

function Button({name}) {
  return (
    <button onClick={() => {location.href = `/${name}`}}>{name}</button>
  )
}

export default Button