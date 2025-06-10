import React, { useState } from 'react'

const Ch8 = () => {
    const songs = ["Perfect", "Photograph", "Shape of You", "Galway Girl"]
    const [search, setSearch] = useState("");
  return (
    <div>
        <label htmlFor="search">Search songs </label>
        <input type="text" name="search" id=""
        onChange={(e)=>{
            setSearch(e.target.value);
        }}
        />

        {
            songs.map(song => {
                const isMatch = song.toLowerCase().includes(search.toLowerCase());
                return (
                  <p key={song} style={{
                    backgroundColor: isMatch ? "yellow" : "transparent",
                    fontWeight: isMatch ? "bold" : "normal",
                    color: 'black'
                  }}>
                    {song}
                  </p>
                );
              })
        }
        
    </div>
  )
}

export default Ch8
