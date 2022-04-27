const steps = [
    {
      content: "1. In a sauce pan, saute garlic and onion.",
    },
    {
      content: "2. Add ampalaya stir cook for 3-5 minutes or until ampalaya is just cooked. ",
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
      content: "3.Add egg and stir cook until egg starts to solidify, season with salt and pepper to taste, remove from pan.",
    },
  ];
  
  export default steps;
  