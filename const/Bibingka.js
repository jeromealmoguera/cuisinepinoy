const steps = [
    {
      content: "1. Preheat oven to 350ÂºF. Grease and line bottom of 2 8-inch layer baking pan with banana leaves or wax paper. Set aside. ",
    },
    {
      content: "2. Sift flour, baking powder and salt together. Set aside. ",
    },
    {
      content: "3.Beat the eggs until light and creamy. Gradually add sugar, beating well after each addition.",
    },
    {
      content: "4. Add flour mixture alternately with NESTLE Fresh Milk into the egg. Beat to blend thoroughly.",
    },
    {
      content: "5. Pour mixture in lined pans.",
    },
    {
      content: "6. Bake for 10 minutes, then remove from the oven.",
      counter: {
        until: 60 * 10 + 0,
        size: 20,
        // onFinish={() => alert('Finished')}
        digitStyle: { backgroundColor: "#FFF" },
        digitTxtStyle: { color: "#1CC625" },
        timeToShow: ["M", "S"],
        timeLabels: { m: "Min", s: "Sec" },
      },
    },
    {
      content: "7. Spread butter on top then sprinkle with sugar and grated cheese.",
    },
    {
      content: "8. Decorate with salted egg slices ",
    },
    {
      content: "9. Bake for 10 to 15 minutes more.",
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

  ];
  
  export default steps;