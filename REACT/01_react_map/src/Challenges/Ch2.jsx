import React, { useEffect, useState } from 'react'

const Ch2 = () => {
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [favSongs, setFavSongs] = useState(["Peaches", "My Ordinary Life", "Phir se ud chala"]);
    useEffect(()=>{
        console.log(favSongs);
    }, [favSongs])
  return (
    <div>
      <div>
        <label htmlFor="End Song">
          Enter the song to push at end of array
        </label>
        <input
          type="text"
          name="End song"
          id=""
          onChange={(e) => {
            setEnd(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (end !== "") {
              setFavSongs([...favSongs, end]);
            }
          }}
        >
          Submit
        </button>
      </div>
      <div>
        <label htmlFor="first Song">
          Enter the song to push at front of array
        </label>
        <input
          type="text"
          name="first song"
          id=""
          onChange={(e) => {
            setStart(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (start !== "") {
              setFavSongs([start, ...favSongs]);
            }
          }}
        >
          Submit
        </button>
      </div>

      <div>
        <p>First song: {favSongs[0]}</p>
        <p>Last song: {favSongs[favSongs.length-1]}</p>
      </div>
    </div>
  );
}

export default Ch2
