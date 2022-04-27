const steps = [
    {
      content: "1. In a large pot at high flame heat cooking oil, when it is smoking hot, drop the bananas ",
    },
    {
      content: "2. Fry for about 2 minutes or until they start to slightly brown. ",
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
      content: "3.Sprinkle the brown sugar and let it stand without stirring. When the sugar starts to caramelize, start stirring the bananas to have it coated with caramelized sugar.",
    },
    {
      content: "4. Continue frying, stirring several times to have the bananas fully coated with caramelized sugar. Turn the heat off once the bananas are cook through, do not overcook.",
    },
    {
      content: "5. Drain in Fry Skimmer Strainer or colander or deep bowl with paper towel to remove excess oil.",
    },
    {
      content: "6. Skewer two bananas in a bamboo stick while they slightly cool down. Do the same for the rest of the bananas. Serve",
    },
  ];
  
  export default steps;