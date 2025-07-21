import React from 'react'

const Challenge6 = () => {
    const playlist = [
      { title: "Midnight Drive", artist: "Synth Wave", rating: 4.5 },
      { title: "Campfire Whispers", artist: "Folk Tales", rating: 3.7 },
      { title: "Thunder Road", artist: "Rock Blast", rating: 4.8 },
      { title: "Echoes of Silence", artist: "Rock Vibe", rating: 3.2 },
    ];
      
  return (
    <div className="mt-8 flex flex-col">
      <h1 className="text-center p-2 bg-sky-600 rounded-md">
        DJ Booth – 🎶 Curate the Vibe
      </h1>
      <div className="flex flex-col p-3">
        {playlist.map((song, key) => (
          <div
            className="w-[300px] h-[200px] rounded-lg flex flex-col justify-center items-center text-black mb-2"
            style={{ backgroundColor: song.rating>4 ? "green" : "yellow" }}
          >
            <p>Song Title: {song.title}</p>
            <p>Artist: {song.artist}</p>
            <p>rating: {song.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Challenge6
