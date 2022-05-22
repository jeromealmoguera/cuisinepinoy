const steps = [
  {
    content: "1. Saute’ garlic and when browned, add the Luncheon Meat or Ham, and salt to taste.",
  },
  {
    content: "2. Turn to high heat, then add rice and thoroughly mix well for 5 minutes with the other ingredients.",
    counter: {
      until: 60 * 5 + 0,
      size: 20,
      // onFinish={() => alert('Finished')}
      digitStyle: { backgroundColor: "#FFF" },
      digitTxtStyle: { color: "#1CC625" },
      timeToShow: ["M", "S"],
      timeLabels: { m: "Min", s: "Sec" },
    },
  },
  {
    content:
      "3. Add the eggs (optional) and scallions. Continue mixing until all ingredients are well blended.",
  },
  {
    content:
      "4. Salt and pepper in preference to your taste.",
  },
  {
    content:
      "5. Remove from fire and serve.",
  },
];

export default steps;
