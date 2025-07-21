import React from 'react'

const Challenge8 = () => {
    const bandData = [
      { band: "Synth Wave", rating: 4.5, amount: 1200 },
      { band: "Folk Tales", rating: 3.7, amount: 850 },
      { band: "Rock Blast", rating: 4.8, amount: 1499 },
      { band: "Rock Vibe", rating: 3.2, amount: 999 },
    ];
      
    const eligibleSale = bandData.filter((band) => band.rating > 4).reduce(
      (acc, current) => acc + current.amount,
      0
    );

  return (
    <div className="mt-8 flex flex-col">
      <h1>🎖️ High-Rated Bands Eligible for Bonus</h1>
      <div className="flex gap-6">
        {
            bandData.filter((band)=> band.rating > 4).map((band, key)=>(
                <div className='flex flex-col gap-2 rounded bg-green-500 justify-center items-center my-1 p-2'>
                    <h1>Band: {band.band}</h1>
                    <h1>Rating: {band.rating}</h1>
                </div>
            ))
        }
      </div>
      <div className='p-2 rounded-lg bg-sky-800'>
        <p>Total eligible sale: {eligibleSale}</p>
      </div>
    </div>
  );
}

export default Challenge8
