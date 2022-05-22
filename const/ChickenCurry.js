const steps = [
    {
      content: "1. Cut the chicken into pieces. Leave the chicken bone-in. If you prefer boneless chicken meat, then de-bone the chicken.",
    },
    {
      content: "2. Heat up a deep pot and add the oil.",
    },
    {
      content:
        "3. Fry the potato and carrots for 2 minutes and set aside",
        counter: {
            until: 60 * 2 + 0,
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
        "4. Saute Chicken together with garlic, onion and ginger.",
    },
    {
      content:
        "5.  When garlic is light brown in color add fish sauce, and curry powder",
    },
    {
    content:
        "6.  Stir well then add water then cover the pot and lower the heat to medium and simmer until the chicken is tender.",
    },
    {
    content:
        "7. Once the chicken is cooked add the red bell pepper, celery, carrot and potato then simmer for 5 minutes",
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
        "8. Add the coconut milk and mix well. Simmer for another 5 minutes.",
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
        "9. Serve hot with rice.",
    },
  ];
  
  export default steps;