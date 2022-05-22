const steps = [
    {
      content: "1. In a large pot, saute the garlic, onion, and ginger",
    },
    {
      content: "2. Add the ground black pepper and coconut milk then bring to a boil",
    },
    {
      content:
        "3. Put-in the shrimp paste and fish sauce and cook until the coconut milks texture is thick and natural oil comes out of it (approximately 20 minutes)",
        counter: {
            until: 60 * 20 + 0,
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
        "4. Add the Thai chili and simmer for 5 minutes",
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
        "5. Put the crabs in the pot and mix until evenly covered with coconut milk. Simmer for 5 to 20 minutes.",
        counter: {
            until: 60 * 20 + 0,
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
        "6. Add the spinach and simmer for 5 minutes",
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
        "7. Serve hot.",
    },
  ];
  
  export default steps;
