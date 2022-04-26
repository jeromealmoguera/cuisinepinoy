const steps = [
    {
      content: "1. Heat a frying pan or wok then sear the pork.",
    },
    {
      content: "2. When oil and juice comes out of the pork, add garlic and onions then cook for 2 minutes.",
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
      content: "3. Pour-in the soy sauce, vinegar, and water then bring to a boil.",
    },
    {
      content: "4. Shake-in the ground black pepper and stir.",
    },
    {
      content: "5. Cover and simmer for 15 minutes or until the pork is tender.",
      counter: {
        until: 60 * 15 + 0,
        size: 20,
        // onFinish={() => alert('Finished')}
        digitStyle: { backgroundColor: "#FFF" },
        digitTxtStyle: { color: "#1CC625" },
        timeToShow: ["M", "S"],
        timeLabels: { m: "Min", s: "Sec" },
      },
    },
    {
        content:"6. Add the string beans and cook for 3 to 5 minutes.",
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
        content: "7. Turn off the heat and transfer to a serving bowl.",
      },
      {
        content: "8. Serve hot with steamed rice.",
      },
    
  ];
  
  export default steps;
  