import React from 'react'
import {useState, useEffect, useRef} from 'react'

function UseRefExample2() {
  const renders = useRef(1)

  useEffect(() => {
    renders.current = renders.current + 1
  })
  return (
    <div>
      <h1>Renders: {renders.current}</h1>
    </div>
  )
}

export default UseRefExample2
