import Spag from "../const/Spag";
import BananaQue from "../const/BananaQue";
import Bibingka from "../const/Bibingka";
import BukoPie from "../const/BukoPie";
import Turon from "../const/Turon";


const snack = [
  {
    id: "8",
    name: "Banana Cue",
    category: "Snack",
    description:
      "Banana cue, or also banana Q or banana kyu (Tagalog), is a popular snack food or street food in the Philippines.",
    fullDescription:
      "Banana cue, or also banana Q or banana kyu (Tagalog), is a popular snack food or street food in the Philippines. It refers to skewers of deep-fried bananas, traditionally of the Saba (Cardaba) cultivar.",
    ingredients: [
      " \u2022 16 pcs. semi ripe or ripe Saba banana variety \n",
      " \u2022 1/4 cup brown sugar \n",
      " \u2022 2 cups Vegetable cooking oil",
    ],
    recipe: BananaQue,
    image: require("../assets/recipes/banana-que.jpg"),
  },
  {
    id: "9",
    name: "Bibingka",
    category: "Snack",
    description:
      "a Philippine cake that is made with rice flour, water, and sometimes other ingredients ",
    fullDescription:
      "a Philippine cake that is made with rice flour, water, and sometimes other ingredients (such as butter, sugar, cheese, or coconut) and that is traditionally cooked between banana leaves.",
    ingredients: [
      " \u2022 2 cups all purpose flour \n",
      " \u2022 2 tsp baking powder \n",
      " \u2022 1 tsp salt \n",
      " \u2022 3 eggs \n",
      " \u2022 1 cup sugar \n",
      " \u2022 1 1/3 cup NESTLE Fresh Milk \n",
      " \u2022 Â¼ cup butter \n",
      " \u2022 Â¼ cup sugar \n",
      " \u2022 Â1/2 cup grated cheese \n",
      " \u2022 2 pcs salted eggs, sliced",
    ],
    recipe: Bibingka,
    image: require("../assets/recipes/bibingka.jpg"),
  },
  {
    id: "10",
    name: "Buko Pie",
    category: "Snack",
    description:
      "a Filipino-style coconut pie made of fresh, tender young coconut meat combined with a creamy filling and enclosed in a flaky pie",
    fullDescription:
      "Buko pie is a Filipino-style coconut pie made of fresh, tender young coconut meat combined with a creamy filling and enclosed in a flaky pie crust.Buko Pie is the ultimate baked treat! With tender young coconut meat in a creamy filling and a crisp, buttery pastry crust, this Filipino coconut pie is perfect for a snack or dessert!",
    ingredients: [
      " \u2022 2 cups all-purpose flour \n",
      " \u2022 1/3 cup butter \n",
      " \u2022 1 teaspoon salt \n",
      " \u2022 1 teaspoon salt \n",
      " \u2022 1/3 cup vegetable shortening \n",
      " \u2022 6 to 8 tablespoons cold water \n",
      " \u2022 2 cups young coconut meat \n",
      " \u2022 3/4 cup granulated white sugar \n",
      " \u2022 1/2 cup cornstarch diluted in 1/2 cup young coconut water \n",
      " \u2022 1/2 cup evaporated milk",
    ],
    recipe: BukoPie,
    image: require("../assets/recipes/buko-pie.jpg"),
  },
  {
    id: "15",
    name: "Spaghetti",
    category: "Snack",
    description:
      "Filipino Spaghetti is the Pinoy version of Spaghetti with meat sauce.",
    fullDescription:
      "Filipino spaghetti is a Filipino adaptation of Italian spaghetti with Bolognese sauce. It has a distinctively sweet sauce, usually made from tomato sauce sweetened with brown sugar or banana ketchup. It is typically topped with sliced hot dogs or smoked longganisa sausages, giniling (ground meat), and grated cheese.",
    ingredients: [
      " \u2022 1 kg. spaghetti noodles \n",
      " \u2022 1/2 kg. ground beef \n",
      " \u2022 1/2 kg. ground pork \n",
      " \u2022 1/4 kg. hotdogs, diagonally sliced \n",
      " \u2022 1 kg. tomato sauce \n",
      " \u2022 3 pieces laurel leaves (bay leaves) \n",
      " \u2022 1/4 cup brown or white sugar \n",
      " \u2022 2 green bell peppers, diced \n",
      " \u2022 2 onions, chopped \n",
      " \u2022 1 head garlic, minced \n",
      " \u2022 3 tablespoons of cooking oil \n",
      " \u2022 1 cup of water \n",
      " \u2022 Salt and pepper to taste \n",
      " \u2022 1/2 cup grated cheese",
    ],
    recipe: Spag,
    image: require("../assets/recipes/spag.jpg"),
  },
  {
    id: "17",
    name: "Turon",
    category: "Snack",
    description:
      "Turon is a popular Filipino snack that's sweet, crunchy, and satisfying.",
    fullDescription:
      "Turon is a popular Filipino snack that's sweet, crunchy, and satisfying. Ripe saba banana, jackfruit, and brown sugar are rolled together in a flour lumpia wrapper and fried to a golden crisp.",
    ingredients: [
      " \u2022 6 pcs saba bananas (or plantains), cut in half (lenghtwise) \n",
      " \u2022 1 cup ripe Jackfruit \n",
      " \u2022 1 1/2 cup brown sugar \n",
      " \u2022 12 pcs spring roll wrapper \n",
      " \u2022 2 cups cooking oil",
    ],
    recipe: Turon,
    image: require("../assets/recipes/turon.jpg"),
  },
];

export default snack;
