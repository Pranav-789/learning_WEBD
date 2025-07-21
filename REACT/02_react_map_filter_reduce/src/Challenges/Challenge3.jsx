import React from 'react'

const Challenge3 = () => {
    const merchSales = [
      { band: "Synth Wave", amount: 1200 },
      { band: "Folk Tales", amount: 850 },
      { band: "Rock Blast", amount: 1499 },
      { band: "Rock Vibe", amount: 999 },
    ];  
    
    let amount = 0;

  return (
    <div className='mt-8'>
      <h1 className='bg-blue-400 text-lg text-center rounded-md p-4'>Total Sale made: {
        amount = merchSales.reduce((acc, currentAmt) => acc + currentAmt.amount, 0)  
      }</h1>
    </div>
  )
}

export default Challenge3
