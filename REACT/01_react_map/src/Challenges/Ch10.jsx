import React, { useEffect, useState } from 'react'

const Ch10 = () => {
    const [songs, setSongs] = useState([
      "Shape of You",
      "Bohemian Rhapsody",
      "Blinding Lights",
      "Stairway to Heaven",
      "Senorita",
      "Let Her Go",
      "Smells Like Teen Spirit",
      "Despacito",
      "Sugar",
      "Thunder",
      "Counting Stars",
      "Shivers",
      "Sucker",
      "Radioactive",
      "Hello",
    ]);
      
    const [newSong, setNewSong] = useState("");

    useEffect(()=>{
        console.log(songs);
    }, [songs]);
  return (
    <div>
      <label htmlFor="add songs">Add new song</label>
      <input
        type="text"
        name="add songs"
        onChange={(e) => {
          setNewSong(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (songs.includes(newSong)) return;
          setSongs([...songs, newSong]);
        }}
      >
        Submit
      </button>
      <br />
      <p>List of all songs*****</p>
      {songs.map((songs, index) => (
        <p>{songs}</p>
      ))}

      <p>List of songs starting with S</p>
      {songs
        .filter((song) => song[0] == "S")
        .map((songs, index) => (
          <p>{songs}</p>
        ))}

      <p>List of songs longer than 10 characters******</p>
      {songs
        .filter((song) => song.length > 10)
        .map((songs, index) => (
          <p>{songs}</p>
        ))}

      <p>Shortest song******</p>
      {songs.reduce((a, b) => (a.length <= b.length ? a : b))}
      <p>Longest song******</p>
      {songs.reduce((a, b) => (a.length >= b.length ? a : b))}
    </div>
  );
}

export default Ch10
