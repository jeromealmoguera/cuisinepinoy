const steps = [
    {
      content: "1. Create the crust. Combine flour and salt then mix using a balloon whisk. Add butter and shortening then mix using a pastry mixer. Gradually add cold water a tablespoon at a time while mixing the ingredients. ",
    },
    {
      content: "2. When everything is completely mixed, gather the mixture and divide into two equal parts. In a flat surface flatten each of the dough and roll using a rolling pin until wide enough to fit an eight or nine inch cake pan. Note: Sprinkle flour over the flat surface to prevent the dough from sticking or use a silicon mat. Arrange the first dough over the cake pan. This will be the base. Set the second flattened dough aside. This will be needed after arranging the filling in the cake pan.",
    },
    {
      content: "3. Make the filling by heating a saucepan and pour-in the milk. Let boil.",
    },
    {
      content: "4. Add the granulated white sugar and stir.",
    },
    {
      content: "5. Put-in the young coconut meat and cook for 3 minutes. ",
      counter: {
        until: 60 * 3 + 0,
        size: 20,
        // onFinish={() => alert('Finished')}
        digitStyle: { backgroundColor: "#FFF" },
        digitTxtStyle: { color: "#1CC625" },
        timeToShow: ["M", "S"],
        timeLabels: { m: "Min", s: "Sec" },
      },
    },
    {
      content: "6. Pour-in the cornstarch diluted in young coconut water and stir thoroughly while cooking. Cook until the texture thickens.",
    },
    {
      content: "7. Turn-off the heat and allow the mixture to cool down.",
    },
    {
      content: "8. Preheat oven to 375 degrees Fahrenheit. ",
    },
    {
      content: "9. Arrange the cooked filling in the cake pan.",
    },
    {
      content: "10. Put the second crust over the filling and seal the sides.",
    },
    {
      content: "11. Create holes on the secondary crust using a fork. This will serve as exhaust vents that will prevent the crust from deforming. ",
    },
    {
      content: "12. Bake for 45 to 55 minutes or until the color turns golden brown. Note: Baking time may vary; make sure to check the color of the crust to determine if baking is complete.",
      counter: {
        until: 60 * 55 + 0,
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