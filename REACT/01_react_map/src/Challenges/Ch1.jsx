import React from 'react'

const Ch1 = () => {
    const fruits = ["apple", "banana", "pear", "mango", "watermelon"];
  return (
    <div>
      <p>First fruit: {fruits[0]}</p>
      <p>Last fruit: {fruits[fruits.length-1]}</p>
      <p>Total fruits: {fruits.length}</p>
      <p>Third fruit: {fruits[2]}</p>
    </div>
  )
}

export default Ch1
