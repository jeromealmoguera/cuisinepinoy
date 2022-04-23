const foods = [
  {
    id: "1",
    name: "Goto",
    description: "Ito ay parang lugaw din",
    ingredients: "Mixed Pizza",
    price: "8.30",
    image: require("../assets/recipes/goto.jpg"),
  },
  {
    id: "2",
    name: "Ginataang Alimasag",
    description: "Alimasag na may gata",
    ingredients: "Cheese Pizza",
    price: "7.10",
    image: require("../assets/recipes/ginataang-alimasag.jpg"),
  },
  {
    id: "3",
    name: "Tinolang Manok",
    description: "Ito ay isang uri ng chicken soup sa bansang Pilipinas",
    ingredients: "Fried Chicken",
    price: "5.10",
    recipe: "./recipes/TinolangManok.js",
    image: require("../assets/recipes/tinola-manok.jpg"),
  },
  {
    id: "4",
    name: "Sinangag",
    description: "Fried rice sa English",
    ingredients: "Salmon Meat",
    price: "9.55",
    image: require("../assets/recipes/sinangag.jpg"),
  },
];

export default foods;
