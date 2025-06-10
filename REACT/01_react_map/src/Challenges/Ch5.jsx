import React, { useState } from 'react'

const Ch5 = () => {
    const [songs, setSongs] = useState([
      "Believer",
      "Chill Vibes",
      "Numb",
      "Rain Sounds",
      "On My Way",
      "Study Beats",
    ]);
    const boringSongs = ["Rain Sounds", "Study Beats"];

  return (
    <div>
      {songs.join(",  ")}
      <br/>
      <br/>
      {boringSongs.join(",  ")}

      <button
      onClick={()=>{
        const result = songs.filter((song) => !boringSongs.includes(song));
        setSongs(result);
      }}
      >Clean Playlist</button>

    </div>
  )
}

export default Ch5
