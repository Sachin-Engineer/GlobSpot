import React from 'react'

function Button({name, cca3}) {
  return (
    <button onClick={() => {location.href = `/Country?cca3=${cca3}`}}>{name}</button>
  )
}

export default Button