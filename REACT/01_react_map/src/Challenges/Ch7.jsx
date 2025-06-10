import React, { useState } from 'react'

const Ch7 = () => {
    const [songs, setSongs] = useState([
      "Closer",
      "Zinda",
      "Agar Tum Saath Ho",
      "Blinding Lights",
      "Despacito",
    ]);
      
  return (
    <div>
      <button
        onClick={() => {
          setSongs([...songs].sort());
          console.log(songs);
        }}
      >
        Sort A-Z 🅰️ ➡️ 🧞‍♂️
      </button>
      <button
        onClick={() => {

            // setSongs(songs.sort());
            // This mutates the original songs array (React doesn't like that—it may not re-render reliably).

          //Wrap the array in a spread operator to create a new copy, like this:
          setSongs([...songs].sort().reverse());
          console.log(songs);
        }}
      >
        Sort Z-A 🔁 🧞‍♂️ ➡️ 🅰️
      </button>

      {<p>Songs: {songs.join(",  ")}</p>}
    </div>
  );
}

export default Ch7
