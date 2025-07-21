import React from 'react'

const Challenge1 = () => {
    const artists = [
      { name: "Synth Wave", genre: "Electronic" },
      { name: "Folk Tales", genre: "Folk" },
      { name: "Rock Blast", genre: "Rock" },
    ];
      
  return (
    <div className='flex gap-4'>
      {
        artists.map((artist, index)=>(
            <div className='bg-sky-400 text-white flex h-[100px] w-[300px] rounded-md gap-4 justify-center items-center flex-col border-2 border-white'>
                <h1 className='text-center text-xl'>{artist.name}</h1>
                <h3 className='text-center text-lg'>Genre: {artist.genre}</h3>
            </div>
        ))
      }
    </div>
  )
}

export default Challenge1
