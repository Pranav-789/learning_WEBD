import React, { useState } from 'react'

const Ch4 = () => {
    const [favSongs, setFavSongs] = useState([
      "Believer",
      "Lose Yourself",
      "Numb",
      "On My Way",
      "Counting Stars",
    ]);

    const [inPlaylist, setInPlaylist] = useState(false);
    const [search, setSearch] = useState("");
    const [htoggle, setHToggle] = useState(true);
    const [isPresent, setIsPresent] = useState(true);
  return (
    <div>
      <div>
        <label htmlFor="song">Enter a song to check in list</label>
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (favSongs.includes(search)) {
              setHToggle(false);
              setIsPresent(true);
              console.log("Yes, it's in the playlist");
            }
            else{
                console.log("Nope, it's not in the playlist");
                setIsPresent(false);
                setHToggle(false)
            }
          }}
        >
          check
        </button>
      </div>
      {!htoggle && isPresent && <p>Yes, it's in the playlist</p>}

      {!htoggle && !isPresent && <p>Nope, it's not in the playlist</p>}
    </div>
  );
}

export default Ch4
