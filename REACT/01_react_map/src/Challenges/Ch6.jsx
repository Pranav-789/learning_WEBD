import React, { useState } from 'react'

const Ch6 = () => {
    const playlist = [
      "Apna Time Aayega",
      "Bones",
      "Mockingbird",
      "Heat Waves",
      "Infinity",
    ];

    const [randomIndex, setRandomIndex] = useState();
    const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <button
      onClick={
        () =>{
            setIsPlaying(true);
            setRandomIndex(Math.floor(Math.random() * playlist.length));
        }
      }
      >Play a song</button>

      {
        isPlaying && (
            <p>Now Playing: {playlist[randomIndex]}</p>
        )
      }
    </div>
  )
}

export default Ch6
