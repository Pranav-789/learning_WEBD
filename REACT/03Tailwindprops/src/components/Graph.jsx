import React, { useEffect, useRef } from "react";
import { Chart as ChartJS } from "chart.js/auto"; // Use alias to avoid naming conflict

const Graph = ({ data }) => {
  const canvasRef = useRef(null); // Reference to <canvas> element

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    const chartInstance = new ChartJS(ctx, {
      type: "bar",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "Acquisitions by year",
            data: data.map((row) => row.count),
            backgroundColor: "#4CAF50",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    });

    // 🔁 Cleanup on unmount
    return () => {
      chartInstance.destroy();
    };
  }, [data]); // Runs again only when data changes

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Graph;
