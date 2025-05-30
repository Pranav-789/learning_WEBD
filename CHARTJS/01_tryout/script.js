const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 6, 8, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)", // Red
          "rgba(54, 162, 235, 0.5)", // Blue
          "rgba(255, 206, 86, 0.5)", // Yellow
          "rgba(75, 192, 192, 0.5)", // Green
          "rgba(153, 102, 255, 0.5)", // Purple
          "rgba(255, 159, 64, 0.5)", // Orange
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const labels = [
              "Red of Votes",
              "Blue of Votes",
              "Yellow of Votes",
              "Green of Votes",
              "Purple of Votes",
              "Orange of Votes",
            ];
            const value = context.parsed.y;
            return `${labels[context.dataIndex]}: ${value}`;
          },
        },
      },
    },
    
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
