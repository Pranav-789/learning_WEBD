import React from 'react'

const Challenge4 = () => {
    const merchSales = [
      { band: "Synth Wave", genre: "Electronic", amount: 1200 },
      { band: "Folk Tales", genre: "Folk", amount: 850 },
      { band: "Rock Blast", genre: "Rock", amount: 1499 },
      { band: "Rock Vibe", genre: "Rock", amount: 999 },
    ];
      
  return (
    <div className="mt-8">
      <h1 className='bg-blue-300 p-2 rounded-md mb-2'>🎟️ Fan Reward Center</h1>
      <div className='flex gap-4'>
        {
            merchSales.filter((band) => band.genre === "Rock").map((band, key)=>(
                <div className='p-2 rounded-md bg-teal-300 flex flex-col'>
                    <h1>Band: {band.band}</h1>

                    <h3>Orignal Price: {band.amount}</h3>
                    <h3>Discounted Price: {band.amount*0.8}</h3>
                </div>
            ))
        }
      </div>
    </div>
  );
}

export default Challenge4
