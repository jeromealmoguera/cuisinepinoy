import Longsilog from "../const/Longsilog";
import Sinangag from "../const/Sinangag";
import Goto from "../const/Goto";


const breakfast = [
  {
    id: "1",
    name: "Goto",
    category: "Breakfast",
    description:
      "Goto has been famous in the Philippines because it is affordable and can easily satisfy hunger.",
    fullDescription:
      "Goto is a type of rice porridge with innards of either pig or cow. This Special Goto Recipe uses both ox tripe and pig intestine. Goto has been famous in the Philippines because it is affordable and can easily satisfy hunger. This has also been a breakfast favorite and a rainy day comfort food.",
    ingredients: [
      " \u2022 1 cup rice \n",
      " \u2022 200 grams boiled and tender ox tripe ( tuwalya ng baka) \n",
      " \u2022 1/4 cup ginger strips \n",
      " \u2022 3 stalks spring onions \n",
      " \u2022 salt and pepper to taste \n",
      " \u2022 fish sauce( patis=optional) \n",
      " \u2022 1 litre of water or more \n",
      " \u2022 1/4 cup toasted garlic",
    ],
    recipe: Goto,
    image: require("../assets/recipes/goto.jpg"),
  },
    {
    id: "4",
    name: "Sinangag",
    category: "Breakfast",
    description:
      "Sinangag is pronounced see-na-nag. Filipino garlic fried rice is typically made using day old rice.",
    fullDescription:
      "Sinangag is Filipino garlic fried rice. It is a popular side to almost all Filipino breakfast dishes. It often made using leftover or day old rice. Sinangag is pronounced see-na-nag.",
    ingredients: [
      " \u2022 4 cups of leftover rice; cold and well preserved \n",
      " \u2022 1 small Carrot chopped \n",
      " \u2022 1/4 cup Cabbage chopped \n",
      " \u2022 6 cloves garlic; minced \n",
      " \u2022 Olive oil or Cooking Oil \n",
      " \u2022 Salt and pepper to taste \n",
      " \u2022 1 tablespoon stems of scallions; chopped \n \n",
      " Optional: \n",
      " \u2022 2 well beaten eggs; fried and sliced in pieces \n",
      " \u2022 1/4 cup leftover Luncheon Meat or Ham",
    ],
    recipe: Sinangag,
    image: require("../assets/recipes/sinangag.jpg"),
  },
    {
    id: "12",
    name: "Longsilog",
    category: "Breakfast",
    description:
      "Longsilog is a traditional Filipino dish that's served for breakfast.",
    fullDescription:
      "Longsilog is a traditional Filipino dish that's served for breakfast. The dish and its name consist of a combination of longganisa sausage, sinangag (garlic rice), and itlog (fried eggs). The Filipino-style sausages (pork, garlic, vinegar, salt, sugar) are boiled and fried in their own fat until crispy, while the garlic rice and the eggs are fried in oil.",
    ingredients: [
      " \u2022 4 Cups of left over rice from the previous night \n",
      " \u2022 5 Links of longanisa sausage \n",
      " \u2022 1 Cup of water for cooking longanisa \n",
      " \u2022 3 Eggs \n",
      " \u2022 2 Cloves of garlic \n",
      " \u2022 1/2 Tbs. Salt \n",
      " \u2022 ¼ Tbs. Ground black pepper \n",
      " \u2022 ¼ Tbs. MSG \n",
      " \u2022 Oil for frying",
    ],
    recipe: Longsilog,
    image: require("../assets/recipes/longsilog.jpg"),
  },
];

export default breakfast;
