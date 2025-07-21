import React from 'react'

const Challenge7 = () => {
    const bandData = [
      { band: "Synth Wave", amount: 1200 },
      { band: "Folk Tales", amount: 850 },
      { band: "Rock Blast", amount: 1499 },
      { band: "Rock Vibe", amount: 999 },
    ];
    const newband = bandData.sort((band1, band2) => band2.amount - band1.amount);
      
  return (
    <div>
      {
        newband.map((band, key)=>(
            <div>
                <p>band: {band.band}</p>
                <p>amount: {band.amount}</p>
            </div>
        ))
      }
    </div>
  )
}

export default Challenge7
