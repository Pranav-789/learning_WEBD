import React from 'react'

const Challenge2 = () => {
    const artists = [
      { name: "Synth Wave", genre: "Electronic" },
      { name: "Folk Tales", genre: "Folk" },
      { name: "Rock Blast", genre: "Rock" },
      { name: "Rock Vibe", genre: "Rock" },
    ];
      
  return (
    <div className="mt-10">
      <h1 className="text-2xl bg-amber-600 rounded mb-3 text-center">
        Rock Genre
      </h1>
      <div className="flex gap-4">
        {artists
          .filter((artist) => artist.genre === "Rock")
          .map((artist, key) => (
            <div
              className="bg-violet-400 text-white flex h-[100px] w-[300px] rounded-md gap-4 justify-center items-center flex-col border-2 border-white"
              key={key}
            >
              <h1 className="text-center text-xl">{artist.name}</h1>
              <h3 className="text-center text-lg">Genre: {artist.genre}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Challenge2
