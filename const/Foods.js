// import tinola from "../const/tinola";

import * as Recipe from "../const";

const foods = [
  {
    id: "1",
    name: "Goto",
    description:
      "Goto has been famous in the Philippines because it is affordable and can easily satisfy hunger.",
    fullDescription:
      "Goto is a type of rice porridge with innards of either pig or cow. This Special Goto Recipe uses both ox tripe and pig intestine. Goto has been famous in the Philippines because it is affordable and can easily satisfy hunger. This has also been a breakfast favorite and a rainy day comfort food.",
    ingredients: [
      " 1 cup rice",
      " 200 grams boiled and tender ox tripe ( tuwalya ng baka)",
      " 1/4 cup ginger strips",
      " 3 stalks spring onions",
      " salt and pepper to taste",
      " fish sauce( patis=optional)",
      " 1 litre of water or more",
      " 1/4 cup toasted garlic",
    ],
    recipe: Recipe.tinola,
    image: require("../assets/recipes/goto.jpg"),
  },
  {
    id: "2",
    name: "Ginataang Alimasag",
    description: "Alimasag na may gata",
    ingredients: "Cheese Pizza",
    image: require("../assets/recipes/ginataang-alimasag.jpg"),
  },
  {
    id: "3",
    name: "Tinolang Manok",
    description: "Ito ay isang uri ng chicken soup sa bansang Pilipinas",
    ingredients: "Fried Chicken",
    recipe: Recipe.tinola,
    image: require("../assets/recipes/tinola-manok.jpg"),
  },
  {
    id: "4",
    name: "Sinangag",
    description: "Fried rice sa English",
    ingredients: "Salmon Meat",
    image: require("../assets/recipes/sinangag.jpg"),
  },
];

export default foods;
