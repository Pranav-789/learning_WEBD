import React from 'react'

const Challenge5 = () => {
    const merchSales = [
      { band: "Synth Wave", amount: 1200 },
      { band: "Folk Tales", amount: 850 },
      { band: "Rock Blast", amount: 1499 },
      { band: "Rock Vibe", amount: 999 },
    ];
    
    const totalSale = merchSales.reduce((acc, currentAmt) => acc+currentAmt.amount, 0);
    const averageSale = merchSales.reduce((avg, currentAmt, _, {length}) => avg+currentAmt.amount/length, 0);
    const highestSale = merchSales.reduce((highest, currentAmt) => highest = (highest>currentAmt.amount)? highest:currentAmt.amount, 0);
  return (
    <div className='flex flex-col mt-8'>
      <h1 className='text-center text-lg bg-purple-400 rounded'>🧾 Finance Control Room</h1>
      <div className='flex flex-col p-2 mt-3 bg-amber-600 rounded-md'>
        <h1 className='text-center'>Sale Stats</h1>
        <h1>Total Sale: {totalSale}</h1>
        <h1>Avergae Sale: {averageSale}</h1>
        <h1>Highest Sale: {highestSale}</h1>
      </div>
    </div>
  );
}

export default Challenge5
