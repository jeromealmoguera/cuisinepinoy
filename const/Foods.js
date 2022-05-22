import tinola from "../const/tinola";
import Spag from "../const/Spag";
import Salad from "../const/Salad";
import Ampalaya from "../const/Ampalaya";
import AdobongIsda from "../const/AdobongIsda";
import AdobongSitaw from "../const/AdobongSitaw";
import BananaQue from "../const/BananaQue";
import Bibingka from "../const/Bibingka";
import BukoPie from "../const/BukoPie";
import Longsilog from "../const/Longsilog";
import Pinakbet from "../const/Pinakbet";
import Sinangag from "../const/Sinangag";
import Turon from "../const/Turon";
import Ukoy from "../const/Ukoy";
import TinolangTahong from "../const/TinolangTahong";
import ChickenCurry from "../const/ChickenCurry";
import Alimasag from "../const/Alimasag";
import Goto from "../const/Goto";



const foods = [
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
    id: "2",
    name: "Ginataang Alimasag",
    category: "Lunch",
    description:
      "Ginataang Alimasag (or alimango) are Crabs cooked in Coconut Milk.",
    fullDescription:
      "Ginataang Alimasag (or alimango) are Crabs cooked in Coconut Milk. This ginataang alimasag  recipe features the use of spinach and Thai chili as a replacement for Malunggay. Squash and string beans (kalabasa and sitaw) can also be placed instead of Spinach .",
    ingredients: [
      " \u2022 3 lbs blue crabs (Alimasag) \n",
      " \u2022 2 tbsp shrimp paste \n",
      " \u2022 1 tbsp fish sauce \n",
      " \u2022 1 tsp garlic, minced \n",
      " \u2022 1 medium-sized onion, minced \n",
      " \u2022 1 knob ginger, cut into thin strips \n",
      " \u2022 3 tbsp cooking oil \n",
      " \u2022 4 cups coconut milk \n",
      " \u2022 1/2 tsp ground black pepper \n",
      " \u2022 1 bunch fresh spinach \n",
      " \u2022 6 pieces Thai chili",
    ],
    recipe: Alimasag,
    image: require("../assets/recipes/ginataang-alimasag.jpg"),
  },
  {
    id: "3",
    name: "Tinolang Manok",
    category: "Lunch",
    description:
      "Chicken tinola is a staple in every Filipino household and can be enjoyed as a starter or a hearty main course.",
    fullDescription:
      "Tinolang manok or chicken tinola is a nourishing Filipino chicken soup. It can consist of various chicken cuts and internal organs cooked in a flavorful broth alongside green papaya and chili pepper or malunggay leaves. The broth is usually generously seasoned with ginger, garlic, and fish sauce, and the soup is often served over plain white rice.",
    ingredients: [
      " \u2022 2 lbs. chicken cut into serving pieces \n",
      " \u2022 1 cup malunggay leaves \n",
      " \u2022 1 cup hot pepper leaves \n",
      " \u2022 1/8 teaspoon ground black pepper \n",
      " \u2022 1 piece unripe papaya wedged \n",
      " \u2022 6 cups water \n",
      " \u2022 1 piece Knorr chicken cube \n",
      " \u2022 1 piece onion sliced \n",
      " \u2022 4 cloves garlic crushed and chopped \n",
      " \u2022 3 thumbs ginger julienne \n",
      " \u2022 2 tablespoons fish sauce patis \n",
      " \u2022 3 tablespoons vegetable oil",
    ],
    recipe: tinola,
    image: require("../assets/recipes/tinola-manok.jpg"),
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
    id: "5",
    name: "Adobong Isda",
    category: "Lunch",
    description:
      "Fish Adobo is a Filipino dish wherein fish is cooked using the inadobo style or method of cooking",
    fullDescription:
      "Fish Adobo is a Filipino dish wherein fish is cooked using the inadobo style or method of cooking. Inadobo (sometimes referred to as adobo) is the Filipino way of cooking food by cooking in soy sauce, vinegar, and garlic. Along with these ingredients are pepper or whole pepper corn, and dried bay leaves. This is considered as the signature dish of the Philippines.",
    ingredients: [
      " \u2022 1/2 kilo Sapsap \n",
      " \u2022 1 kilo Tilapia ( Cleaned and sliced) \n",
      " \u2022 1/2 cup soy sauce \n",
      " \u2022 1/2 cup vinegar \n",
      " \u2022 3 cloves garlic \n",
      " \u2022 1 tablespoon ginger strips \n",
      " \u2022 1 small onion \n",
      " \u2022 3 pieces Finger chili (siling haba) \n",
      " \u2022 salt and pepper to taste",
    ],
    recipe: AdobongIsda,
    image: require("../assets/recipes/adobong-isda.jpg"),
  },
  {
    id: "6",
    name: "Adobong Sitaw",
    category: "Lunch",
    description:
      "Adobong Sitaw is a vegetable dish composed of string beans cooked adobo style.",
    fullDescription:
      "Adobong Sitaw is a vegetable dish composed of string beans cooked adobo style. Adobong Sitaw with Pork made of long beans and pork belly is an easy weeknight dinner that packs great flavors! This adobo-style vegetable dish is hearty, tasty, and pairs well with steamed rice.",
    ingredients: [
      " \u2022 1 lb string beans (sitaw), cut in 2 inch length \n",
      " \u2022 1/4 lb pork belly, thinly sliced (optional) \n",
      " \u2022 1/2 cup soy sauce \n",
      " \u2022 1/3 cup vinegar \n",
      " \u2022 1 medium-sized onion, thinly sliced lengthwise \n",
      " \u2022 4 to 6 cloves garlic, crushed \n",
      " \u2022 1/2 teaspoon ground black pepper \n",
      " \u2022 1 cup water",
    ],
    recipe: AdobongSitaw,
    image: require("../assets/recipes/adobong-sitaw.jpg"),
  },
  {
    id: "7",
    name: "Ginisang Ampalaya",
    category: "Lunch",
    description:
      "Ginisang Ampalaya is a stir-fried bitter melon in garlic, onion, tomato, spices, and seasonings. ",
    fullDescription:
      "Ginisang Ampalaya is a stir-fried bitter melon in garlic, onion, tomato, spices, and seasonings. The thought we often associate with “ampalaya” is bitterness and a generally unpleasant taste. And while it is true that this vegetable holds this flavor— after all, it is called a bitter melon— it doesn’t always have to taste unfavorable. Some ampalaya can initially have that overpowering bitterness, but with the right preparations, it can actually taste satisfyingly flavorful and delicious. A classic dish that utilizes this unique flavor is Ginisang Ampalaya.",
    ingredients: [
      " \u2022 1 big size ampalaya, cut in half deseeded and sliced crosswise \n",
      " \u2022 4 pcs. egg, beaten \n",
      " \u2022 1/4 head garlic, minced \n",
      " \u2022 1 medium size onion, chopped \n",
      " \u2022 salt and pepper \n",
      " \u2022 vegetable oil",
    ],
    recipe: Ampalaya,
    image: require("../assets/recipes/ampalaya.jpg"),
  },
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
    id: "11",
    name: "Chicken Curry",
    category: "Lunch",
    description:
      "Filipino Style Chicken Curry cooked with potatoes, carrots and capsicum in coconut milk with mild curry powder",
    fullDescription:
      "Filipino Style Chicken Curry is a type of chicken curry cooked with potatoes, carrots and capsicum in coconut milk with mild curry powder.This Pinoy Chicken Curry recipe is the Filipino version of the popular chicken curry dish. It is delicious and easy to cook. The sauce is rich, creamy, and flavorful. It goes well with warm white rice.",
    ingredients: [
      " \u2022 1 kilo chicken \n",
      " \u2022 2 medium sized potatoes, chopped \n",
      " \u2022 1 big carrot, sliced \n",
      " \u2022 1 tbsp garlic, minced \n",
      " \u2022 3 stalks celery, cut into 2 inches length \n",
      " \u2022 1 medium onion, chopped \n",
      " \u2022 1 small red bell pepper, cut into cubes \n",
      " \u2022 2 tbsp fish sauce \n",
      " \u2022 1 cup coconut milk \n",
      " \u2022 2 tbsp curry powder \n",
      " \u2022 1 thumb ginger, cut into strips \n",
      " \u2022 1 cup water",
    ],
    recipe: ChickenCurry,
    image: require("../assets/recipes/chicken-curry.jpg"),
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
  {
    id: "13",
    name: "Pinakbet",
    category: "Lunch",
    description:
      "Pinakbet is made from mixed vegetables sautéed in fish or shrimp sauce",
    fullDescription:
      "Pinakbet is made from mixed vegetables sautéed in fish or shrimp sauce. The word is the contracted form of the Ilokano word pinakebbet, meaning shrunk or shriveled. The original Ilocano pinakbet uses bagoong of fermented monamon or other fish, for seasoning sauce, while further south, bagoong alamang is used.",
    ingredients: [
      " \u2022 1/2 pound pork (liempo with skin & fat) \n",
      " \u2022 4 Cloves garlic \n",
      " \u2022 1 Onion medium size \n",
      " \u2022 1/4 cup Shrimp Paste (Bagoong Alamang) \n",
      " \u2022 4 Eggplants (Long or round) \n",
      " \u2022 1 handful of Okra \n",
      " \u2022 1/2 cup tomatoes \n",
      " \u2022 2 pieces ampalaya (Bitter Melon) \n",
      " \u2022 Corn Oil \n",
      " \u2022 1 Pork Cube (Maggi or Knorr) \n",
      " \u2022 Salt",
    ],
    recipe: Pinakbet,
    image: require("../assets/recipes/pinakbet.jpg"),
  },
  {
    id: "14",
    name: "Buko Salad",
    category: "Dessert",
    description:
      " Sweet young coconut salad is a dessert dish that makes use of shredded young coconut as the main ingredient",
    fullDescription:
      "Buko Salad or sweet young coconut salad is a dessert dish that makes use of shredded young coconut as the main ingredient. This delicious dessert recipe is a mainstay in every special occasion in the Philippines; it is often served as dessert in town fiestas and birthday parties.",
    ingredients: [
      " \u2022 4 cups young coconut (buko), shredded \n",
      " \u2022 6 ounces sugar palm fruit (kaong), drained \n",
      " \u2022 12 ounces coconut gel (nata de coco), drained \n",
      " \u2022 2 cans (15 ounces each) fruit cocktail, drained \n",
      " \u2022 8 ounces pineapple chunks, drained \n",
      " \u2022 1 (14 ounce) can sweetened condensed milk \n",
      " \u2022 7 ounces table cream",
    ],
    recipe: Salad,
    image: require("../assets/recipes/salad.jpg"),
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
    id: "16",
    name: "Tinolang Tahong",
    category: "Lunch",
    description: "Type of soup with mussels",
    fullDescription:
      "Tinolang Tahong is a type of soup with mussels.  Fresh mussels are cooked in ginger broth. Veggies such as spinach or hot pepper leaves along with long green pepper are also used to make this dish.",
    ingredients: [
      " \u2022 1 lb mussels (tahong), cleaned \n",
      " \u2022 2 cups spinach \n",
      " \u2022 2 tablespoons ginger, julienned \n",
      " \u2022 1 medium yellow onion, sliced \n",
      " \u2022 5 cloves garlic, pounded \n",
      " \u2022 1 1/2 teaspoons salt \n",
      " \u2022 1/2 teaspoon ground black pepper \n",
      " \u2022 3 cups water \n",
      " \u2022 2 tablespoons cooking oil",
    ],
    recipe: TinolangTahong,
    image: require("../assets/recipes/tinolang-tahong.jpg"),
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
  {
    id: "18",
    name: "Ukoy",
    category: "Lunch",
    description:
      "Filipino crispy deep-fried fritters made with glutinous rice batter, unshelled small shrimp, and various vegetables",
    fullDescription:
      "Ukoy are crispy, deep fried shrimp fritters made with a pancake-like batter, unshelled shrimp and various vegetables, including calabasa (squash), sweet potato (camote), yuca, mung bean sprouts (tongue), scallions and julienned carrots, onions and green papaya. Although these shrimp fritters started as an afternoon snack in the Philippines, it has now evolved as a side dish served in many restaurants.",
    ingredients: [
      " \u2022 3 cups silverfish \n",
      " \u2022 1 tsp salt \n",
      " \u2022 1/2 tsp ground pepper \n",
      " \u2022 1 small onion, chopped \n",
      " \u2022 1/2 cup celery, chopped \n",
      " \u2022 2 eggs beaten \n",
      " \u2022 1 cup flour \n",
      " \u2022 cooking oil for frying \n \n",
      " Dipping Sauce: \n",
      " \u2022 1/4 cup vinegar \n",
      " \u2022 3 cloves garlic chopped \n",
      " \u2022 1/4 tsp salt \n",
      " \u2022 1/8 tsp ground pepper",
    ],
    recipe: Ukoy,
    image: require("../assets/recipes/ukoy.jpg"),
  },
];

export default foods;
