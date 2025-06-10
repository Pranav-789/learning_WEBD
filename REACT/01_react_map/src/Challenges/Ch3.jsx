import React, { useEffect, useState } from "react";

const Ch3 = () => {
  const [dailyWorkoutPlaylist, setDailyWorkoutPlaylist] = useState([
    "Push-Ups Anthem",
    "Jogging Jam",
    "Stretch It Out",
  ]);

  useEffect(() => {
    console.log(dailyWorkoutPlaylist);
  }, [dailyWorkoutPlaylist]);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setDailyWorkoutPlaylist(dailyWorkoutPlaylist.slice(1, 3));
          }}
        >
          Remove first playlist
        </button>

        {dailyWorkoutPlaylist.length == 2 && (
          <button
            onClick={() => {
            //   setDailyWorkoutPlaylist(prev => prev.slice(0, prev.length-1));
              setDailyWorkoutPlaylist(dailyWorkoutPlaylist.slice(0, 1));
            }}
          >
            Remove last playlist
          </button>
        )}

        {dailyWorkoutPlaylist.length == 1 && (
          <button
            onClick={() => {
              setDailyWorkoutPlaylist(["Meditation Mode"]);
            }}
          >
            set remaining song
          </button>
        )}
      </div>
      <div>
        <p>final list of songs: {dailyWorkoutPlaylist.join(", ")}</p>
        <p>Total songs left: {dailyWorkoutPlaylist.length}</p>
      </div>
    </div>
  );
};

export default Ch3;
