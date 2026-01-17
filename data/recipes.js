const recipes = [
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f1",
    title: "Spaghetti Carbonara",
    instructions: [
      { order: 1, title: "Boil pasta in salted water." },
      { order: 2, title: "Cook pancetta until crispy." },
      { order: 3, title: "Mix eggs and cheese in a bowl." },
      { order: 4, title: "Combine pasta, pancetta, and egg mixture." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f1", "61e6f7f7e7b5f7a7f7e7b7f2"],
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    prepTime: "10 minutes",
    cookTime: "20 minutes",
    servings: "4",
    tags: "Italian, Pasta, Quick",
    photos: [
      { title: "Carbonara Step 1", url: "https://example.com/images/carbonara1.jpg" },
      { title: "Carbonara Step 2", url: "https://example.com/images/carbonara2.jpg" },
      { title: "Carbonara Step 3", url: "https://example.com/images/carbonara3.jpg" }
    ],
    notes: "Use freshly grated Parmesan for the best flavor.",
    article: "Carbonara is a traditional Roman dish that is simple yet delicious."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f2",
    title: "Chicken Curry",
    instructions: [
      { order: 1, title: "Marinate chicken with spices." },
      { order: 2, title: "Sauté onions, garlic, and ginger." },
      { order: 3, title: "Add chicken and cook until browned." },
      { order: 4, title: "Simmer with coconut milk and tomatoes." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f3", "61e6f7f7e7b5f7a7f7e7b7f4"],
    description: "A flavorful and aromatic chicken curry with a creamy coconut base.",
    prepTime: "15 minutes",
    cookTime: "40 minutes",
    servings: "6",
    tags: "Indian, Curry, Spicy",
    photos: [
      { title: "Curry Step 1", url: "https://example.com/images/curry1.jpg" },
      { title: "Curry Step 2", url: "https://example.com/images/curry2.jpg" },
      { title: "Curry Step 3", url: "https://example.com/images/curry3.jpg" }
    ],
    notes: "Serve with steamed rice or naan bread.",
    article: "Chicken curry is a versatile dish that can be adapted to various regional styles."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f3",
    title: "Beef Stroganoff",
    instructions: [
      { order: 1, title: "Cook beef strips in a skillet." },
      { order: 2, title: "Sauté onions and mushrooms." },
      { order: 3, title: "Add sour cream and beef broth." },
      { order: 4, title: "Combine with cooked noodles." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f5", "61e6f7f7e7b5f7a7f7e7b7f6"],
    description: "A creamy and savory beef dish served over noodles.",
    prepTime: "15 minutes",
    cookTime: "30 minutes",
    servings: "4",
    tags: "Russian, Beef, Comfort Food",
    photos: [
      { title: "Stroganoff Step 1", url: "https://example.com/images/stroganoff1.jpg" },
      { title: "Stroganoff Step 2", url: "https://example.com/images/stroganoff2.jpg" },
      { title: "Stroganoff Step 3", url: "https://example.com/images/stroganoff3.jpg" }
    ],
    notes: "Use tender cuts of beef for the best results.",
    article: "Beef Stroganoff is a classic Russian dish that has become popular worldwide."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f4",
    title: "Vegetable Stir Fry",
    instructions: [
      { order: 1, title: "Chop vegetables into bite-sized pieces." },
      { order: 2, title: "Heat oil in a wok." },
      { order: 3, title: "Stir fry vegetables until tender-crisp." },
      { order: 4, title: "Add soy sauce and seasonings." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f7", "61e6f7f7e7b5f7a7f7e7b7f8"],
    description: "A quick and healthy vegetable stir fry with a savory sauce.",
    prepTime: "10 minutes",
    cookTime: "15 minutes",
    servings: "2",
    tags: "Asian, Vegetarian, Quick",
    photos: [
      { title: "Stir Fry Step 1", url: "https://example.com/images/stirfry1.jpg" },
      { title: "Stir Fry Step 2", url: "https://example.com/images/stirfry2.jpg" },
      { title: "Stir Fry Step 3", url: "https://example.com/images/stirfry3.jpg" }
    ],
    notes: "Use a variety of colorful vegetables for the best presentation.",
    article: "Stir frying is a versatile cooking technique that works well with many ingredients."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f5",
    title: "Tacos",
    instructions: [
      { order: 1, title: "Cook ground beef with taco seasoning." },
      { order: 2, title: "Prepare taco shells or tortillas." },
      { order: 3, title: "Fill with beef, lettuce, cheese, and salsa." },
      { order: 4, title: "Serve with sour cream and guacamole." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f9", "61e6f7f7e7b5f7a7f7e7b7f0"],
    description: "A popular Mexican dish consisting of a folded or rolled tortilla filled with various ingredients.",
    prepTime: "10 minutes",
    cookTime: "15 minutes",
    servings: "4",
    tags: "Mexican, Quick, Street Food",
    photos: [
      { title: "Taco Step 1", url: "https://example.com/images/taco1.jpg" },
      { title: "Taco Step 2", url: "https://example.com/images/taco2.jpg" },
      { title: "Taco Step 3", url: "https://example.com/images/taco3.jpg" }
    ],
    notes: "Add your favorite toppings and salsas.",
    article: "Tacos are a traditional Mexican dish that has gained popularity worldwide."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f6",
    title: "Caesar Salad",
    instructions: [
      { order: 1, title: "Chop romaine lettuce and place in a bowl." },
      { order: 2, title: "Add Caesar dressing and toss well." },
      { order: 3, title: "Top with croutons and Parmesan cheese." },
      { order: 4, title: "Serve immediately." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f2", "61e6f7f7e7b5f7a7f7e7b7f3"],
    description: "A classic salad with romaine lettuce, croutons, and Parmesan cheese, dressed with Caesar dressing.",
    prepTime: "10 minutes",
    cookTime: "0 minutes",
    servings: "4",
    tags: "Salad, Quick, Appetizer",
    photos: [
      { title: "Salad Step 1", url: "https://example.com/images/salad1.jpg" },
      { title: "Salad Step 2", url: "https://example.com/images/salad2.jpg" },
      { title: "Salad Step 3", url: "https://example.com/images/salad3.jpg" }
    ],
    notes: "For a classic touch, add anchovies to the dressing.",
    article: "Caesar salad is a popular salad that originated in Mexico and is named after its creator, Caesar Cardini."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f7",
    title: "Pancakes",
    instructions: [
      { order: 1, title: "Mix flour, milk, eggs, and sugar to make batter." },
      { order: 2, title: "Heat a skillet and pour in batter to form pancakes." },
      { order: 3, title: "Cook until bubbles form, then flip to cook the other side." },
      { order: 4, title: "Serve with syrup, butter, and fruits." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f8", "61e6f7f7e7b5f7a7f7e7b7f9"],
    description: "Fluffy pancakes served with syrup and butter, perfect for breakfast or brunch.",
    prepTime: "10 minutes",
    cookTime: "20 minutes",
    servings: "4",
    tags: "Breakfast, Quick, Sweet",
    photos: [
      { title: "Pancake Step 1", url: "https://example.com/images/pancake1.jpg" },
      { title: "Pancake Step 2", url: "https://example.com/images/pancake2.jpg" },
      { title: "Pancake Step 3", url: "https://example.com/images/pancake3.jpg" }
    ],
    notes: "Add blueberries or chocolate chips to the batter for extra flavor.",
    article: "Pancakes are a popular breakfast dish made from a batter that is fried in a skillet or griddle."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f8",
    title: "Chocolate Chip Cookies",
    instructions: [
      { order: 1, title: "Preheat oven and prepare a baking sheet." },
      { order: 2, title: "Mix butter, sugar, eggs, and vanilla in a bowl." },
      { order: 3, title: "Add flour, baking soda, and salt; mix well." },
      { order: 4, title: "Stir in chocolate chips and drop dough onto baking sheet." },
      { order: 5, title: "Bake until golden brown, then cool on a wire rack." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f0", "61e6f7f7e7b5f7a7f7e7b7f1"],
    description: "Classic cookies with chocolate chips, crispy on the outside and chewy on the inside.",
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    servings: "24 cookies",
    tags: "Dessert, Sweet, Baked Goods",
    photos: [
      { title: "Cookie Step 1", url: "https://example.com/images/cookie1.jpg" },
      { title: "Cookie Step 2", url: "https://example.com/images/cookie2.jpg" },
      { title: "Cookie Step 3", url: "https://example.com/images/cookie3.jpg" }
    ],
    notes: "For softer cookies, do not overbake.",
    article: "Chocolate chip cookies are a beloved American cookie featuring chocolate chips as the primary ingredient."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f9",
    title: "Caprese Salad",
    instructions: [
      { order: 1, title: "Slice fresh mozzarella and tomatoes." },
      { order: 2, title: "Layer mozzarella, tomatoes, and basil leaves." },
      { order: 3, title: "Drizzle with olive oil and balsamic vinegar." },
      { order: 4, title: "Season with salt and pepper to taste." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f2", "61e6f7f7e7b5f7a7f7e7b7f3"],
    description: "A fresh and light Italian salad with mozzarella, tomatoes, and basil.",
    prepTime: "10 minutes",
    cookTime: "0 minutes",
    servings: "4",
    tags: "Italian, Salad, Appetizer",
    photos: [
      { title: "Caprese Step 1", url: "https://example.com/images/caprese1.jpg" },
      { title: "Caprese Step 2", url: "https://example.com/images/caprese2.jpg" },
      { title: "Caprese Step 3", url: "https://example.com/images/caprese3.jpg" }
    ],
    notes: "Use fresh, high-quality ingredients for the best flavor.",
    article: "Caprese salad is a simple Italian salad made with fresh mozzarella, tomatoes, and basil."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f0",
    title: "Margarita Pizza",
    instructions: [
      { order: 1, title: "Preheat the oven and pizza stone." },
      { order: 2, title: "Roll out pizza dough on a floured surface." },
      { order: 3, title: "Spread tomato sauce and add mozzarella cheese." },
      { order: 4, title: "Bake pizza until the crust is golden and cheese is bubbly." },
      { order: 5, title: "Garnish with fresh basil and slice to serve." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f1", "61e6f7f7e7b5f7a7f7e7b7f2"],
    description: "A simple yet delicious pizza topped with tomato sauce, mozzarella cheese, and fresh basil.",
    prepTime: "20 minutes",
    cookTime: "15 minutes",
    servings: "8 slices",
    tags: "Italian, Pizza, Main Course",
    photos: [
      { title: "Pizza Step 1", url: "https://example.com/images/pizza1.jpg" },
      { title: "Pizza Step 2", url: "https://example.com/images/pizza2.jpg" },
      { title: "Pizza Step 3", url: "https://example.com/images/pizza3.jpg" }
    ],
    notes: "For a crispy crust, bake on a preheated pizza stone.",
    article: "Margarita pizza is a classic Italian pizza that originated in Naples, featuring a simple topping of tomato, mozzarella, and basil."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f1",
    title: "Pasta Primavera",
    instructions: [
      { order: 1, title: "Cook pasta according to package instructions." },
      { order: 2, title: "Sauté a mix of seasonal vegetables." },
      { order: 3, title: "Toss pasta with vegetables and olive oil." },
      { order: 4, title: "Serve with grated Parmesan cheese." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f2", "61e6f7f7e7b5f7a7f7e7b7f3"],
    description: "A light and colorful pasta dish with a variety of fresh vegetables.",
    prepTime: "10 minutes",
    cookTime: "20 minutes",
    servings: "4",
    tags: "Italian, Pasta, Vegetarian",
    photos: [
      { title: "Primavera Step 1", url: "https://example.com/images/primavera1.jpg" },
      { title: "Primavera Step 2", url: "https://example.com/images/primavera2.jpg" },
      { title: "Primavera Step 3", url: "https://example.com/images/primavera3.jpg" }
    ],
    notes: "Use a variety of colorful vegetables for the best presentation.",
    article: "Pasta primavera is an Italian-American dish that originated in the 1970s, featuring pasta and fresh vegetables."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f2",
    title: "Shrimp Scampi",
    instructions: [
      { order: 1, title: "Sauté garlic in butter and olive oil." },
      { order: 2, title: "Add shrimp and cook until pink." },
      { order: 3, title: "Stir in lemon juice, parsley, and red pepper flakes." },
      { order: 4, title: "Serve over cooked pasta or rice." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f3", "61e6f7f7e7b5f7a7f7e7b7f4"],
    description: "A quick and flavorful dish with shrimp, garlic, and a hint of lemon.",
    prepTime: "10 minutes",
    cookTime: "10 minutes",
    servings: "4",
    tags: "Seafood, Italian, Quick",
    photos: [
      { title: "Scampi Step 1", url: "https://example.com/images/scampi1.jpg" },
      { title: "Scampi Step 2", url: "https://example.com/images/scampi2.jpg" },
      { title: "Scampi Step 3", url: "https://example.com/images/scampi3.jpg" }
    ],
    notes: "Do not overcook the shrimp to keep them tender.",
    article: "Shrimp scampi is a dish of Italian origin, made with shrimp, garlic, and olive oil, often served with pasta."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f3",
    title: "Lemon Tart",
    instructions: [
      { order: 1, title: "Preheat oven and prepare tart pan." },
      { order: 2, title: "Mix flour, butter, and sugar to form crust." },
      { order: 3, title: "Bake crust until golden brown." },
      { order: 4, title: "Prepare lemon filling with eggs, sugar, lemon juice, and zest." },
      { order: 5, title: "Pour filling into crust and bake until set." },
      { order: 6, title: "Cool and serve with whipped cream." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f4", "61e6f7f7e7b5f7a7f7e7b7f5"],
    description: "A tangy and sweet tart with a buttery crust and creamy lemon filling.",
    prepTime: "20 minutes",
    cookTime: "40 minutes",
    servings: "8",
    tags: "Dessert, Tart, Sweet",
    photos: [
      { title: "Tart Step 1", url: "https://example.com/images/tart1.jpg" },
      { title: "Tart Step 2", url: "https://example.com/images/tart2.jpg" },
      { title: "Tart Step 3", url: "https://example.com/images/tart3.jpg" }
    ],
    notes: "For a decorative touch, add candied lemon slices on top.",
    article: "Lemon tart is a dessert consisting of a lemon-flavored filling in a pastry crust, often topped with whipped cream."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f4",
    title: "Chocolate Mousse",
    instructions: [
      { order: 1, title: "Melt chocolate and let cool slightly." },
      { order: 2, title: "Whip cream until soft peaks form." },
      { order: 3, title: "Fold melted chocolate into whipped cream." },
      { order: 4, title: "Spoon into serving dishes and refrigerate until set." },
      { order: 5, title: "Garnish with chocolate shavings and serve." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f5", "61e6f7f7e7b5f7a7f7e7b7f6"],
    description: "A rich and creamy chocolate dessert that is light and airy.",
    prepTime: "15 minutes",
    cookTime: "0 minutes",
    servings: "4",
    tags: "Dessert, Chocolate, No-Bake",
    photos: [
      { title: "Mousse Step 1", url: "https://example.com/images/mousse1.jpg" },
      { title: "Mousse Step 2", url: "https://example.com/images/mousse2.jpg" },
      { title: "Mousse Step 3", url: "https://example.com/images/mousse3.jpg" }
    ],
    notes: "For best results, use high-quality chocolate.",
    article: "Chocolate mousse is a dessert made with whipped cream, sugar, and chocolate, known for its airy and fluffy texture."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f5",
    title: "Pavlova",
    instructions: [
      { order: 1, title: "Preheat oven and line a baking sheet with parchment." },
      { order: 2, title: "Beat egg whites until stiff peaks form." },
      { order: 3, title: "Gradually add sugar, beating until glossy." },
      { order: 4, title: "Spread meringue onto the prepared baking sheet." },
      { order: 5, title: "Bake until crisp, then cool in the oven." },
      { order: 6, title: "Top with whipped cream and fresh fruits before serving." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f6", "61e6f7f7e7b5f7a7f7e7b7f7"],
    description: "A light and airy dessert with a crisp meringue shell and soft, marshmallow-like interior, topped with whipped cream and fruits.",
    prepTime: "20 minutes",
    cookTime: "1 hour",
    servings: "8",
    tags: "Dessert, Pavlova, Sweet",
    photos: [
      { title: "Pavlova Step 1", url: "https://example.com/images/pavlova1.jpg" },
      { title: "Pavlova Step 2", url: "https://example.com/images/pavlova2.jpg" },
      { title: "Pavlova Step 3", url: "https://example.com/images/pavlova3.jpg" }
    ],
    notes: "For a colorful presentation, use a variety of fresh fruits.",
    article: "Pavlova is a meringue-based dessert named after the Russian ballerina Anna Pavlova, featuring a crisp crust and soft, light inside."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f6",
    title: "Crème Brûlée",
    instructions: [
      { order: 1, title: "Preheat oven and prepare ramekins." },
      { order: 2, title: "Heat cream and vanilla in a saucepan." },
      { order: 3, title: "Whisk egg yolks and sugar in a bowl." },
      { order: 4, title: "Gradually add cream to egg mixture, whisking constantly." },
      { order: 5, title: "Pour mixture into ramekins and bake in a water bath." },
      { order: 6, title: "Chill, then sprinkle sugar on top and caramelize with a torch." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f7", "61e6f7f7e7b5f7a7f7e7b7f8"],
    description: "A rich and creamy custard dessert topped with a layer of hardened caramelized sugar.",
    prepTime: "20 minutes",
    cookTime: "40 minutes",
    servings: "4",
    tags: "Dessert, French, Custard",
    photos: [
      { title: "Brûlée Step 1", url: "https://example.com/images/brulee1.jpg" },
      { title: "Brûlée Step 2", url: "https://example.com/images/brulee2.jpg" },
      { title: "Brûlée Step 3", url: "https://example.com/images/brulee3.jpg" }
    ],
    notes: "Use a kitchen torch to caramelize the sugar for a professional finish.",
    article: "Crème brûlée is a French dessert consisting of a rich custard base topped with a layer of hardened caramelized sugar."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f7",
    title: "Baklava",
    instructions: [
      { order: 1, title: "Preheat oven and prepare a baking dish." },
      { order: 2, title: "Layer phyllo dough and brush with melted butter." },
      { order: 3, title: "Sprinkle nuts and spices between layers." },
      { order: 4, title: "Cut into diamond shapes and bake until golden." },
      { order: 5, title: "Prepare syrup and pour over baked baklava." },
      { order: 6, title: "Cool and serve." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f8", "61e6f7f7e7b5f7a7f7e7b7f9"],
    description: "A rich and sweet pastry made of layers of phyllo dough filled with nuts and honey syrup.",
    prepTime: "30 minutes",
    cookTime: "45 minutes",
    servings: "20 pieces",
    tags: "Dessert, Middle Eastern, Pastry",
    photos: [
      { title: "Baklava Step 1", url: "https://example.com/images/baklava1.jpg" },
      { title: "Baklava Step 2", url: "https://example.com/images/baklava2.jpg" },
      { title: "Baklava Step 3", url: "https://example.com/images/baklava3.jpg" }
    ],
    notes: "Allow baklava to cool completely before serving to let the syrup soak in.",
    article: "Baklava is a rich, sweet pastry popular in Middle Eastern and Mediterranean cuisines, made of layers of phyllo dough filled with chopped nuts and sweetened with honey or syrup."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f8",
    title: "Panna Cotta",
    instructions: [
      { order: 1, title: "Soak gelatin in cold water." },
      { order: 2, title: "Heat cream, sugar, and vanilla in a saucepan." },
      { order: 3, title: "Dissolve gelatin in the warm cream mixture." },
      { order: 4, title: "Pour into molds and refrigerate until set." },
      { order: 5, title: "Unmold and serve with berry sauce." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f9", "61e6f7f7e7b5f7a7f7e7b7f0"],
    description: "A creamy and smooth Italian dessert made with sweetened cream and gelatin, often served with a berry sauce.",
    prepTime: "15 minutes",
    cookTime: "0 minutes",
    servings: "4",
    tags: "Dessert, Italian, No-Bake",
    photos: [
      { title: "Panna Cotta Step 1", url: "https://example.com/images/pannacotta1.jpg" },
      { title: "Panna Cotta Step 2", url: "https://example.com/images/pannacotta2.jpg" },
      { title: "Panna Cotta Step 3", url: "https://example.com/images/pannacotta3.jpg" }
    ],
    notes: "For a fruitier flavor, add pureed fruits to the cream mixture.",
    article: "Panna cotta is an Italian dessert made of sweetened cream thickened with gelatin and molded, often served with a berry sauce."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f9",
    title: "Churros",
    instructions: [
      { order: 1, title: "Mix flour, water, sugar, and salt to form a dough." },
      { order: 2, title: "Pipe dough into hot oil in desired shapes." },
      { order: 3, title: "Fry until golden brown and drain on paper towels." },
      { order: 4, title: "Roll in cinnamon sugar and serve with chocolate sauce." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f0", "61e6f7f7e7b5f7a7f7e7b7f1"],
    description: "A popular Spanish and Latin American dessert, churros are fried dough pastries rolled in cinnamon sugar, often served with a chocolate dipping sauce.",
    prepTime: "15 minutes",
    cookTime: "30 minutes",
    servings: "4",
    tags: "Dessert, Spanish, Fried",
    photos: [
      { title: "Churro Step 1", url: "https://example.com/images/churro1.jpg" },
      { title: "Churro Step 2", url: "https://example.com/images/churro2.jpg" },
      { title: "Churro Step 3", url: "https://example.com/images/churro3.jpg" }
    ],
    notes: "For extra flavor, add vanilla or almond extract to the dough.",
    article: "Churros are a fried-dough pastry, typically sprinkled with sugar and cinnamon, and are popular in Spain and Latin America."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f0",
    title: "Rice Pudding",
    instructions: [
      { order: 1, title: "Cook rice with milk, sugar, and salt." },
      { order: 2, title: "Stir in vanilla and cinnamon." },
      { order: 3, title: "Serve warm or chilled, garnished with raisins or nuts." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f1", "61e6f7f7e7b5f7a7f7e7b7f2"],
    description: "A creamy and comforting dessert made with rice, milk, sugar, and spices, often garnished with raisins or nuts.",
    prepTime: "10 minutes",
    cookTime: "30 minutes",
    servings: "4",
    tags: "Dessert, Comfort Food, Quick",
    photos: [
      { title: "Pudding Step 1", url: "https://example.com/images/pudding1.jpg" },
      { title: "Pudding Step 2", url: "https://example.com/images/pudding2.jpg" },
      { title: "Pudding Step 3", url: "https://example.com/images/pudding3.jpg" }
    ],
    notes: "For a creamier texture, use arborio rice.",
    article: "Rice pudding is a dish made from rice mixed with water or milk and other ingredients, such as cinnamon, vanilla, and raisins, popular in many cultures."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f1",
    title: "Bread Pudding",
    instructions: [
      { order: 1, title: "Preheat oven and grease a baking dish." },
      { order: 2, title: "Tear bread into pieces and place in the dish." },
      { order: 3, title: "Whisk eggs, milk, sugar, and spices; pour over bread." },
      { order: 4, title: "Bake until set and golden brown." },
      { order: 5, title: "Serve warm with sauce or ice cream." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f2", "61e6f7f7e7b5f7a7f7e7b7f3"],
    description: "A classic dessert made with stale bread, milk, eggs, sugar, and spices, baked until golden and set.",
    prepTime: "15 minutes",
    cookTime: "45 minutes",
    servings: "6",
    tags: "Dessert, Comfort Food, Baked",
    photos: [
      { title: "Pudding Step 1", url: "https://example.com/images/breadpudding1.jpg" },
      { title: "Pudding Step 2", url: "https://example.com/images/breadpudding2.jpg" },
      { title: "Pudding Step 3", url: "https://example.com/images/breadpudding3.jpg" }
    ],
    notes: "For added flavor, soak the bread in the milk mixture for a few hours or overnight.",
    article: "Bread pudding is a dessert dish made from bread and other ingredients, such as milk, eggs, sugar, and spices, popular in many cultures."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f3",
    title: "Peach Cobbler",
    instructions: [
      { order: 1, title: "Preheat oven and grease a baking dish." },
      { order: 2, title: "Mix sliced peaches with sugar, flour, and cinnamon." },
      { order: 3, title: "Pour peach mixture into the baking dish." },
      { order: 4, title: "Top with a batter made of flour, sugar, milk, and butter." },
      { order: 5, title: "Bake until the topping is golden and the peaches are bubbly." },
      { order: 6, title: "Serve warm with ice cream." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f4", "61e6f7f7e7b5f7a7f7e7b7f5"],
    description: "A warm and comforting dessert with a sweet peach filling and a buttery, flaky topping.",
    prepTime: "15 minutes",
    cookTime: "45 minutes",
    servings: "6",
    tags: "Dessert, Comfort Food, Baked",
    photos: [
      { title: "Cobbler Step 1", url: "https://example.com/images/cobbler1.jpg" },
      { title: "Cobbler Step 2", url: "https://example.com/images/cobbler2.jpg" },
      { title: "Cobbler Step 3", url: "https://example.com/images/cobbler3.jpg" }
    ],
    notes: "Serve with vanilla ice cream for a delicious contrast.",
    article: "Peach cobbler is a dessert consisting of a fruit filling, typically made with peaches, and a biscuit or cake-like topping, popular in the Southern United States."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f4",
    title: "Apple Crisp",
    instructions: [
      { order: 1, title: "Preheat oven and grease a baking dish." },
      { order: 2, title: "Slice apples and toss with sugar, flour, and cinnamon." },
      { order: 3, title: "Pour apple mixture into the baking dish." },
      { order: 4, title: "Top with a mixture of oats, flour, brown sugar, and butter." },
      { order: 5, title: "Bake until the apples are tender and the topping is golden." },
      { order: 6, title: "Serve warm with ice cream." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f5", "61e6f7f7e7b5f7a7f7e7b7f6"],
    description: "A classic dessert with a spiced apple filling and a crispy oat topping.",
    prepTime: "15 minutes",
    cookTime: "45 minutes",
    servings: "6",
    tags: "Dessert, Comfort Food, Baked",
    photos: [
      { title: "Crisp Step 1", url: "https://example.com/images/crisp1.jpg" },
      { title: "Crisp Step 2", url: "https://example.com/images/crisp2.jpg" },
      { title: "Crisp Step 3", url: "https://example.com/images/crisp3.jpg" }
    ],
    notes: "For a caramel flavor, add caramel sauce to the apple mixture before baking.",
    article: "Apple crisp is a dessert consisting of baked apples topped with a crumbly mixture of flour, sugar, and butter, often served with ice cream."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f5",
    title: "Banana Bread",
    instructions: [
      { order: 1, title: "Preheat oven and grease a loaf pan." },
      { order: 2, title: "Mash ripe bananas in a bowl." },
      { order: 3, title: "Mix in sugar, egg, and melted butter." },
      { order: 4, title: "Add flour, baking soda, and salt; mix until just combined." },
      { order: 5, title: "Pour batter into the prepared loaf pan." },
      { order: 6, title: "Bake until a toothpick comes out clean." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f6", "61e6f7f7e7b5f7a7f7e7b7f7"],
    description: "A moist and sweet bread made with ripe bananas, perfect for breakfast or as a snack.",
    prepTime: "10 minutes",
    cookTime: "60 minutes",
    servings: "1 loaf",
    tags: "Bread, Quick, Snack",
    photos: [
      { title: "Bread Step 1", url: "https://example.com/images/bananabread1.jpg" },
      { title: "Bread Step 2", url: "https://example.com/images/bananabread2.jpg" },
      { title: "Bread Step 3", url: "https://example.com/images/bananabread3.jpg" }
    ],
    notes: "For added flavor, mix in nuts or chocolate chips.",
    article: "Banana bread is a type of bread made from mashed bananas, flour, sugar, eggs, and butter, popular as a snack or breakfast item."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f6",
    title: "Zucchini Bread",
    instructions: [
      { order: 1, title: "Preheat oven and grease a loaf pan." },
      { order: 2, title: "Grate zucchini and squeeze out excess moisture." },
      { order: 3, title: "Mix zucchini with sugar, egg, and melted butter." },
      { order: 4, title: "Add flour, baking soda, baking powder, and salt; mix until just combined." },
      { order: 5, title: "Pour batter into the prepared loaf pan." },
      { order: 6, title: "Bake until a toothpick comes out clean." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f7", "61e6f7f7e7b5f7a7f7e7b7f8"],
    description: "A moist and flavorful bread made with grated zucchini, perfect for using up summer squash.",
    prepTime: "15 minutes",
    cookTime: "60 minutes",
    servings: "1 loaf",
    tags: "Bread, Quick, Snack",
    photos: [
      { title: "Bread Step 1", url: "https://example.com/images/zucchinibread1.jpg" },
      { title: "Bread Step 2", url: "https://example.com/images/zucchinibread2.jpg" },
      { title: "Bread Step 3", url: "https://example.com/images/zucchinibread3.jpg" }
    ],
    notes: "For added texture, mix in nuts or seeds.",
    article: "Zucchini bread is a type of quick bread made with grated zucchini, flour, sugar, eggs, and butter, popular in the summer months."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f7",
    title: "Pumpkin Bread",
    instructions: [
      { order: 1, title: "Preheat oven and grease a loaf pan." },
      { order: 2, title: "Mix pumpkin puree, sugar, and eggs in a bowl." },
      { order: 3, title: "Add flour, baking soda, cinnamon, and salt; mix until just combined." },
      { order: 4, title: "Pour batter into the prepared loaf pan." },
      { order: 5, title: "Bake until a toothpick comes out clean." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f8", "61e6f7f7e7b5f7a7f7e7b7f9"],
    description: "A moist and spiced bread made with pumpkin puree, perfect for fall baking.",
    prepTime: "10 minutes",
    cookTime: "60 minutes",
    servings: "1 loaf",
    tags: "Bread, Quick, Snack",
    photos: [
      { title: "Bread Step 1", url: "https://example.com/images/pumpkinbread1.jpg" },
      { title: "Bread Step 2", url: "https://example.com/images/pumpkinbread2.jpg" },
      { title: "Bread Step 3", url: "https://example.com/images/pumpkinbread3.jpg" }
    ],
    notes: "For a richer flavor, add nuts or chocolate chips to the batter.",
    article: "Pumpkin bread is a type of quick bread made with pumpkin puree, flour, sugar, eggs, and spices, popular in the fall."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f8",
    title: "Chocolate Cake",
    instructions: [
      { order: 1, title: "Preheat oven and grease cake pans." },
      { order: 2, title: "Mix flour, cocoa powder, sugar, baking soda, and salt." },
      { order: 3, title: "Add eggs, milk, oil, and vanilla; mix until smooth." },
      { order: 4, title: "Pour batter into prepared pans." },
      { order: 5, title: "Bake until a toothpick comes out clean." },
      { order: 6, title: "Cool and frost with chocolate frosting." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f9", "61e6f7f7e7b5f7a7f7e7b7f0"],
    description: "A rich and moist chocolate cake, perfect for celebrations.",
    prepTime: "20 minutes",
    cookTime: "30 minutes",
    servings: "12",
    tags: "Dessert, Cake, Chocolate",
    photos: [
      { title: "Cake Step 1", url: "https://example.com/images/chocolatecake1.jpg" },
      { title: "Cake Step 2", url: "https://example.com/images/chocolatecake2.jpg" },
      { title: "Cake Step 3", url: "https://example.com/images/chocolatecake3.jpg" }
    ],
    notes: "For a richer chocolate flavor, use dark cocoa powder.",
    article: "Chocolate cake is a cake flavored with melted chocolate, cocoa powder, or both, and is one of the most popular cake flavors."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f9",
    title: "Vanilla Cake",
    instructions: [
      { order: 1, title: "Preheat oven and grease cake pans." },
      { order: 2, title: "Mix flour, sugar, baking powder, and salt." },
      { order: 3, title: "Add eggs, milk, oil, and vanilla; mix until smooth." },
      { order: 4, title: "Pour batter into prepared pans." },
      { order: 5, title: "Bake until a toothpick comes out clean." },
      { order: 6, title: "Cool and frost with vanilla frosting." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f0", "61e6f7f7e7b5f7a7f7e7b7f1"],
    description: "A light and fluffy vanilla cake, perfect for any occasion.",
    prepTime: "20 minutes",
    cookTime: "30 minutes",
    servings: "12",
    tags: "Dessert, Cake, Vanilla",
    photos: [
      { title: "Cake Step 1", url: "https://example.com/images/vanillacake1.jpg" },
      { title: "Cake Step 2", url: "https://example.com/images/vanillacake2.jpg" },
      { title: "Cake Step 3", url: "https://example.com/images/vanillacake3.jpg" }
    ],
    notes: "For a richer flavor, use vanilla bean paste instead of extract.",
    article: "Vanilla cake is a cake flavored with vanilla, one of the most popular and versatile cake flavors."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f0",
    title: "Red Velvet Cake",
    instructions: [
      { order: 1, title: "Preheat oven and grease cake pans." },
      { order: 2, title: "Mix flour, cocoa powder, sugar, baking soda, and salt." },
      { order: 3, title: "Add eggs, buttermilk, oil, and vanilla; mix until smooth." },
      { order: 4, title: "Pour batter into prepared pans." },
      { order: 5, title: "Bake until a toothpick comes out clean." },
      { order: 6, title: "Cool and frost with cream cheese frosting." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f1", "61e6f7f7e7b5f7a7f7e7b7f2"],
    description: "A moist and fluffy red velvet cake with a hint of cocoa, topped with cream cheese frosting.",
    prepTime: "20 minutes",
    cookTime: "30 minutes",
    servings: "12",
    tags: "Dessert, Cake, Red Velvet",
    photos: [
      { title: "Cake Step 1", url: "https://example.com/images/redvelvetcake1.jpg" },
      { title: "Cake Step 2", url: "https://example.com/images/redvelvetcake2.jpg" },
      { title: "Cake Step 3", url: "https://example.com/images/redvelvetcake3.jpg" }
    ],
    notes: "For a deeper red color, use gel food coloring.",
    article: "Red velvet cake is a red-colored chocolate layer cake, topped with cream cheese or buttercream frosting, popular in the Southern United States."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f1",
    title: "Carrot Cake",
    instructions: [
      { order: 1, title: "Preheat oven and grease cake pans." },
      { order: 2, title: "Mix flour, sugar, baking powder, baking soda, and spices." },
      { order: 3, title: "Add eggs, oil, and vanilla; mix until smooth." },
      { order: 4, title: "Fold in grated carrots and nuts." },
      { order: 5, title: "Pour batter into prepared pans." },
      { order: 6, title: "Bake until a toothpick comes out clean." },
      { order: 7, title: "Cool and frost with cream cheese frosting." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f2", "61e6f7f7e7b5f7a7f7e7b7f3"],
    description: "A moist and spiced cake made with grated carrots, topped with cream cheese frosting.",
    prepTime: "20 minutes",
    cookTime: "30 minutes",
    servings: "12",
    tags: "Dessert, Cake, Carrot",
    photos: [
      { title: "Cake Step 1", url: "https://example.com/images/carrotcake1.jpg" },
      { title: "Cake Step 2", url: "https://example.com/images/carrotcake2.jpg" },
      { title: "Cake Step 3", url: "https://example.com/images/carrotcake3.jpg" }
    ],
    notes: "For added moisture, use crushed pineapple in the batter.",
    article: "Carrot cake is a cake that contains carrots in the batter, which add sweetness and moisture, popular in many countries."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f3",
    title: "Gingerbread Cookies",
    instructions: [
      { order: 1, title: "Preheat oven and line a baking sheet with parchment." },
      { order: 2, title: "Mix flour, ginger, cinnamon, baking soda, and salt." },
      { order: 3, title: "Beat in butter, brown sugar, egg, and molasses." },
      { order: 4, title: "Roll out dough and cut into shapes." },
      { order: 5, title: "Bake until firm, then cool and decorate." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f4", "61e6f7f7e7b5f7a7f7e7b7f5"],
    description: "Spicy and sweet cookies made with ginger, cinnamon, and molasses, perfect for the holidays.",
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    servings: "24 cookies",
    tags: "Dessert, Cookies, Holiday",
    photos: [
      { title: "Cookie Step 1", url: "https://example.com/images/gingerbread1.jpg" },
      { title: "Cookie Step 2", url: "https://example.com/images/gingerbread2.jpg" },
      { title: "Cookie Step 3", url: "https://example.com/images/gingerbread3.jpg" }
    ],
    notes: "For softer cookies, do not overbake.",
    article: "Gingerbread cookies are a type of cookie made with ginger, cinnamon, and molasses, popular during the holiday season."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f5",
    title: "Fruitcake",
    instructions: [
      { order: 1, title: "Preheat oven and grease a loaf pan." },
      { order: 2, title: "Mix dried fruits, nuts, flour, sugar, and spices." },
      { order: 3, title: "Add eggs and mix until well combined." },
      { order: 4, title: "Pour batter into the prepared pan." },
      { order: 5, title: "Bake until a toothpick comes out clean." },
      { order: 6, title: "Cool and store in an airtight container." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f6", "61e6f7f7e7b5f7a7f7e7b7f7"],
    description: "A rich and dense cake made with a variety of dried fruits and nuts, often enjoyed during the holidays.",
    prepTime: "20 minutes",
    cookTime: "60 minutes",
    servings: "1 loaf",
    tags: "Dessert, Cake, Holiday",
    photos: [
      { title: "Fruitcake Step 1", url: "https://example.com/images/fruitcake1.jpg" },
      { title: "Fruitcake Step 2", url: "https://example.com/images/fruitcake2.jpg" },
      { title: "Fruitcake Step 3", url: "https://example.com/images/fruitcake3.jpg" }
    ],
    notes: "For best flavor, soak the dried fruits in rum or brandy before mixing into the batter.",
    article: "Fruitcake is a cake made with candied or dried fruits, nuts, and spices, and optionally soaked in spirits, popular during the holiday season."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f6",
    title: "Baklava",
    instructions: [
      { order: 1, title: "Preheat oven and prepare a baking dish." },
      { order: 2, title: "Layer phyllo dough and brush with melted butter." },
      { order: 3, title: "Sprinkle nuts and spices between layers." },
      { order: 4, title: "Cut into diamond shapes and bake until golden." },
      { order: 5, title: "Prepare syrup and pour over baked baklava." },
      { order: 6, title: "Cool and serve." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f8", "61e6f7f7e7b5f7a7f7e7b7f9"],
    description: "A rich and sweet pastry made of layers of phyllo dough filled with nuts and honey syrup.",
    prepTime: "30 minutes",
    cookTime: "45 minutes",
    servings: "20 pieces",
    tags: "Dessert, Middle Eastern, Pastry",
    photos: [
      { title: "Baklava Step 1", url: "https://example.com/images/baklava1.jpg" },
      { title: "Baklava Step 2", url: "https://example.com/images/baklava2.jpg" },
      { title: "Baklava Step 3", url: "https://example.com/images/baklava3.jpg" }
    ],
    notes: "Allow baklava to cool completely before serving to let the syrup soak in.",
    article: "Baklava is a rich, sweet pastry popular in Middle Eastern and Mediterranean cuisines, made of layers of phyllo dough filled with chopped nuts and sweetened with honey or syrup."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f8",
    title: "Panna Cotta",
    instructions: [
      { order: 1, title: "Soak gelatin in cold water." },
      { order: 2, title: "Heat cream, sugar, and vanilla in a saucepan." },
      { order: 3, title: "Dissolve gelatin in the warm cream mixture." },
      { order: 4, title: "Pour into molds and refrigerate until set." },
      { order: 5, title: "Unmold and serve with berry sauce." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f9", "61e6f7f7e7b5f7a7f7e7b7f0"],
    description: "A creamy and smooth Italian dessert made with sweetened cream and gelatin, often served with a berry sauce.",
    prepTime: "15 minutes",
    cookTime: "0 minutes",
    servings: "4",
    tags: "Dessert, Italian, No-Bake",
    photos: [
      { title: "Panna Cotta Step 1", url: "https://example.com/images/pannacotta1.jpg" },
      { title: "Panna Cotta Step 2", url: "https://example.com/images/pannacotta2.jpg" },
      { title: "Panna Cotta Step 3", url: "https://example.com/images/pannacotta3.jpg" }
    ],
    notes: "For a fruitier flavor, add pureed fruits to the cream mixture.",
    article: "Panna cotta is an Italian dessert made of sweetened cream thickened with gelatin and molded, often served with a berry sauce."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f9",
    title: "Churros",
    instructions: [
      { order: 1, title: "Mix flour, water, sugar, and salt to form a dough." },
      { order: 2, title: "Pipe dough into hot oil in desired shapes." },
      { order: 3, title: "Fry until golden brown and drain on paper towels." },
      { order: 4, title: "Roll in cinnamon sugar and serve with chocolate sauce." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f0", "61e6f7f7e7b5f7a7f7e7b7f1"],
    description: "A popular Spanish and Latin American dessert, churros are fried dough pastries rolled in cinnamon sugar, often served with a chocolate dipping sauce.",
    prepTime: "15 minutes",
    cookTime: "30 minutes",
    servings: "4",
    tags: "Dessert, Spanish, Fried",
    photos: [
      { title: "Churro Step 1", url: "https://example.com/images/churro1.jpg" },
      { title: "Churro Step 2", url: "https://example.com/images/churro2.jpg" },
      { title: "Churro Step 3", url: "https://example.com/images/churro3.jpg" }
    ],
    notes: "For extra flavor, add vanilla or almond extract to the dough.",
    article: "Churros are a fried-dough pastry, typically sprinkled with sugar and cinnamon, and are popular in Spain and Latin America."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f0",
    title: "Rice Pudding",
    instructions: [
      { order: 1, title: "Cook rice with milk, sugar, and salt." },
      { order: 2, title: "Stir in vanilla and cinnamon." },
      { order: 3, title: "Serve warm or chilled, garnished with raisins or nuts." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f1", "61e6f7f7e7b5f7a7f7e7b7f2"],
    description: "A creamy and comforting dessert made with rice, milk, sugar, and spices, often garnished with raisins or nuts.",
    prepTime: "10 minutes",
    cookTime: "30 minutes",
    servings: "4",
    tags: "Dessert, Comfort Food, Quick",
    photos: [
      { title: "Pudding Step 1", url: "https://example.com/images/pudding1.jpg" },
      { title: "Pudding Step 2", url: "https://example.com/images/pudding2.jpg" },
      { title: "Pudding Step 3", url: "https://example.com/images/pudding3.jpg" }
    ],
    notes: "For a creamier texture, use arborio rice.",
    article: "Rice pudding is a dish made from rice mixed with water or milk and other ingredients, such as cinnamon, vanilla, and raisins, popular in many cultures."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f1",
    title: "Bread Pudding",
    instructions: [
      { order: 1, title: "Preheat oven and grease a baking dish." },
      { order: 2, title: "Tear bread into pieces and place in the dish." },
      { order: 3, title: "Whisk eggs, milk, sugar, and spices; pour over bread." },
      { order: 4, title: "Bake until set and golden brown." },
      { order: 5, title: "Serve warm with sauce or ice cream." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f2", "61e6f7f7e7b5f7a7f7e7b7f3"],
    description: "A classic dessert made with stale bread, milk, eggs, sugar, and spices, baked until golden and set.",
    prepTime: "15 minutes",
    cookTime: "45 minutes",
    servings: "6",
    tags: "Dessert, Comfort Food, Baked",
    photos: [
      { title: "Pudding Step 1", url: "https://example.com/images/breadpudding1.jpg" },
      { title: "Pudding Step 2", url: "https://example.com/images/breadpudding2.jpg" },
      { title: "Pudding Step 3", url: "https://example.com/images/breadpudding3.jpg" }
    ],
    notes: "For added flavor, soak the bread in the milk mixture for a few hours or overnight.",
    article: "Bread pudding is a dessert dish made from bread and other ingredients, such as milk, eggs, sugar, and spices, popular in many cultures."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f3",
    title: "Peach Cobbler",
    instructions: [
      { order: 1, title: "Preheat oven and grease a baking dish." },
      { order: 2, title: "Mix sliced peaches with sugar, flour, and cinnamon." },
      { order: 3, title: "Pour peach mixture into the baking dish." },
      { order: 4, title: "Top with a batter made of flour, sugar, milk, and butter." },
      { order: 5, title: "Bake until the topping is golden and the peaches are bubbly." },
      { order: 6, title: "Serve warm with ice cream." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f4", "61e6f7f7e7b5f7a7f7e7b7f5"],
    description: "A warm and comforting dessert with a sweet peach filling and a buttery, flaky topping.",
    prepTime: "15 minutes",
    cookTime: "45 minutes",
    servings: "6",
    tags: "Dessert, Comfort Food, Baked",
    photos: [
      { title: "Cobbler Step 1", url: "https://example.com/images/cobbler1.jpg" },
      { title: "Cobbler Step 2", url: "https://example.com/images/cobbler2.jpg" },
      { title: "Cobbler Step 3", url: "https://example.com/images/cobbler3.jpg" }
    ],
    notes: "Serve with vanilla ice cream for a delicious contrast.",
    article: "Peach cobbler is a dessert consisting of a fruit filling, typically made with peaches, and a biscuit or cake-like topping, popular in the Southern United States."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f4",
    title: "Apple Crisp",
    instructions: [
      { order: 1, title: "Preheat oven and grease a baking dish." },
      { order: 2, title: "Slice apples and toss with sugar, flour, and cinnamon." },
      { order: 3, title: "Pour apple mixture into the baking dish." },
      { order: 4, title: "Top with a mixture of oats, flour, brown sugar, and butter." },
      { order: 5, title: "Bake until the apples are tender and the topping is golden." },
      { order: 6, title: "Serve warm with ice cream." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f5", "61e6f7f7e7b5f7a7f7e7b7f6"],
    description: "A classic dessert with a spiced apple filling and a crispy oat topping.",
    prepTime: "15 minutes",
    cookTime: "45 minutes",
    servings: "6",
    tags: "Dessert, Comfort Food, Baked",
    photos: [
      { title: "Crisp Step 1", url: "https://example.com/images/crisp1.jpg" },
      { title: "Crisp Step 2", url: "https://example.com/images/crisp2.jpg" },
      { title: "Crisp Step 3", url: "https://example.com/images/crisp3.jpg" }
    ],
    notes: "For a caramel flavor, add caramel sauce to the apple mixture before baking.",
    article: "Apple crisp is a dessert consisting of baked apples topped with a crumbly mixture of flour, sugar, and butter, often served with ice cream."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f5",
    title: "Banana Bread",
    instructions: [
      { order: 1, title: "Preheat oven and grease a loaf pan." },
      { order: 2, title: "Mash ripe bananas in a bowl." },
      { order: 3, title: "Mix in sugar, egg, and melted butter." },
      { order: 4, title: "Add flour, baking soda, and salt; mix until just combined." },
      { order: 5, title: "Pour batter into the prepared loaf pan." },
      { order: 6, title: "Bake until a toothpick comes out clean." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f6", "61e6f7f7e7b5f7a7f7e7b7f7"],
    description: "A moist and sweet bread made with ripe bananas, perfect for breakfast or as a snack.",
    prepTime: "10 minutes",
    cookTime: "60 minutes",
    servings: "1 loaf",
    tags: "Bread, Quick, Snack",
    photos: [
      { title: "Bread Step 1", url: "https://example.com/images/bananabread1.jpg" },
      { title: "Bread Step 2", url: "https://example.com/images/bananabread2.jpg" },
      { title: "Bread Step 3", url: "https://example.com/images/bananabread3.jpg" }
    ],
    notes: "For added flavor, mix in nuts or chocolate chips.",
    article: "Banana bread is a type of bread made from mashed bananas, flour, sugar, eggs, and butter, popular as a snack or breakfast item."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f6",
    title: "Zucchini Bread",
    instructions: [
      { order: 1, title: "Preheat oven and grease a loaf pan." },
      { order: 2, title: "Grate zucchini and squeeze out excess moisture." },
      { order: 3, title: "Mix zucchini with sugar, egg, and melted butter." },
      { order: 4, title: "Add flour, baking soda, baking powder, and salt; mix until just combined." },
      { order: 5, title: "Pour batter into the prepared loaf pan." },
      { order: 6, title: "Bake until a toothpick comes out clean." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f7", "61e6f7f7e7b5f7a7f7e7b7f8"],
    description: "A moist and flavorful bread made with grated zucchini, perfect for using up summer squash.",
    prepTime: "15 minutes",
    cookTime: "60 minutes",
    servings: "1 loaf",
    tags: "Bread, Quick, Snack",
    photos: [
      { title: "Bread Step 1", url: "https://example.com/images/zucchinibread1.jpg" },
      { title: "Bread Step 2", url: "https://example.com/images/zucchinibread2.jpg" },
      { title: "Bread Step 3", url: "https://example.com/images/zucchinibread3.jpg" }
    ],
    notes: "For added texture, mix in nuts or seeds.",
    article: "Zucchini bread is a type of quick bread made with grated zucchini, flour, sugar, eggs, and butter, popular in the summer months."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f7",
    title: "Pumpkin Bread",
    instructions: [
      { order: 1, title: "Preheat oven and grease a loaf pan." },
      { order: 2, title: "Mix pumpkin puree, sugar, and eggs in a bowl." },
      { order: 3, title: "Add flour, baking soda, cinnamon, and salt; mix until just combined." },
      { order: 4, title: "Pour batter into the prepared loaf pan." },
      { order: 5, title: "Bake until a toothpick comes out clean." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f8", "61e6f7f7e7b5f7a7f7e7b7f9"],
    description: "A moist and spiced bread made with pumpkin puree, perfect for fall baking.",
    prepTime: "10 minutes",
    cookTime: "60 minutes",
    servings: "1 loaf",
    tags: "Bread, Quick, Snack",
    photos: [
      { title: "Bread Step 1", url: "https://example.com/images/pumpkinbread1.jpg" },
      { title: "Bread Step 2", url: "https://example.com/images/pumpkinbread2.jpg" },
      { title: "Bread Step 3", url: "https://example.com/images/pumpkinbread3.jpg" }
    ],
    notes: "For a richer flavor, add nuts or chocolate chips to the batter.",
    article: "Pumpkin bread is a type of quick bread made with pumpkin puree, flour, sugar, eggs, and spices, popular in the fall."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f8",
    title: "Chocolate Cake",
    instructions: [
      { order: 1, title: "Preheat oven and grease cake pans." },
      { order: 2, title: "Mix flour, cocoa powder, sugar, baking soda, and salt." },
      { order: 3, title: "Add eggs, milk, oil, and vanilla; mix until smooth." },
      { order: 4, title: "Pour batter into prepared pans." },
      { order: 5, title: "Bake until a toothpick comes out clean." },
      { order: 6, title: "Cool and frost with chocolate frosting." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f9", "61e6f7f7e7b5f7a7f7e7b7f0"],
    description: "A rich and moist chocolate cake, perfect for celebrations.",
    prepTime: "20 minutes",
    cookTime: "30 minutes",
    servings: "12",
    tags: "Dessert, Cake, Chocolate",
    photos: [
      { title: "Cake Step 1", url: "https://example.com/images/chocolatecake1.jpg" },
      { title: "Cake Step 2", url: "https://example.com/images/chocolatecake2.jpg" },
      { title: "Cake Step 3", url: "https://example.com/images/chocolatecake3.jpg" }
    ],
    notes: "For a richer chocolate flavor, use dark cocoa powder.",
    article: "Chocolate cake is a cake flavored with melted chocolate, cocoa powder, or both, and is one of the most popular cake flavors."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f9",
    title: "Vanilla Cake",
    instructions: [
      { order: 1, title: "Preheat oven and grease cake pans." },
      { order: 2, title: "Mix flour, sugar, baking powder, and salt." },
      { order: 3, title: "Add eggs, milk, oil, and vanilla; mix until smooth." },
      { order: 4, title: "Pour batter into prepared pans." },
      { order: 5, title: "Bake until a toothpick comes out clean." },
      { order: 6, title: "Cool and frost with vanilla frosting." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f0", "61e6f7f7e7b5f7a7f7e7b7f1"],
    description: "A light and fluffy vanilla cake, perfect for any occasion.",
    prepTime: "20 minutes",
    cookTime: "30 minutes",
    servings: "12",
    tags: "Dessert, Cake, Vanilla",
    photos: [
      { title: "Cake Step 1", url: "https://example.com/images/vanillacake1.jpg" },
      { title: "Cake Step 2", url: "https://example.com/images/vanillacake2.jpg" },
      { title: "Cake Step 3", url: "https://example.com/images/vanillacake3.jpg" }
    ],
    notes: "For a richer flavor, use vanilla bean paste instead of extract.",
    article: "Vanilla cake is a cake flavored with vanilla, one of the most popular and versatile cake flavors."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f0",
    title: "Red Velvet Cake",
    instructions: [
      { order: 1, title: "Preheat oven and grease cake pans." },
      { order: 2, title: "Mix flour, cocoa powder, sugar, baking soda, and salt." },
      { order: 3, title: "Add eggs, buttermilk, oil, and vanilla; mix until smooth." },
      { order: 4, title: "Pour batter into prepared pans." },
      { order: 5, title: "Bake until a toothpick comes out clean." },
      { order: 6, title: "Cool and frost with cream cheese frosting." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f1", "61e6f7f7e7b5f7a7f7e7b7f2"],
    description: "A moist and fluffy red velvet cake with a hint of cocoa, topped with cream cheese frosting.",
    prepTime: "20 minutes",
    cookTime: "30 minutes",
    servings: "12",
    tags: "Dessert, Cake, Red Velvet",
    photos: [
      { title: "Cake Step 1", url: "https://example.com/images/redvelvetcake1.jpg" },
      { title: "Cake Step 2", url: "https://example.com/images/redvelvetcake2.jpg" },
      { title: "Cake Step 3", url: "https://example.com/images/redvelvetcake3.jpg" }
    ],
    notes: "For a deeper red color, use gel food coloring.",
    article: "Red velvet cake is a red-colored chocolate layer cake, topped with cream cheese or buttercream frosting, popular in the Southern United States."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f1",
    title: "Carrot Cake",
    instructions: [
      { order: 1, title: "Preheat oven and grease cake pans." },
      { order: 2, title: "Mix flour, sugar, baking powder, baking soda, and spices." },
      { order: 3, title: "Add eggs, oil, and vanilla; mix until smooth." },
      { order: 4, title: "Fold in grated carrots and nuts." },
      { order: 5, title: "Pour batter into prepared pans." },
      { order: 6, title: "Bake until a toothpick comes out clean." },
      { order: 7, title: "Cool and frost with cream cheese frosting." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f2", "61e6f7f7e7b5f7a7f7e7b7f3"],
    description: "A moist and spiced cake made with grated carrots, topped with cream cheese frosting.",
    prepTime: "20 minutes",
    cookTime: "30 minutes",
    servings: "12",
    tags: "Dessert, Cake, Carrot",
    photos: [
      { title: "Cake Step 1", url: "https://example.com/images/carrotcake1.jpg" },
      { title: "Cake Step 2", url: "https://example.com/images/carrotcake2.jpg" },
      { title: "Cake Step 3", url: "https://example.com/images/carrotcake3.jpg" }
    ],
    notes: "For added moisture, use crushed pineapple in the batter.",
    article: "Carrot cake is a cake that contains carrots in the batter, which add sweetness and moisture, popular in many countries."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f3",
    title: "Gingerbread Cookies",
    instructions: [
      { order: 1, title: "Preheat oven and line a baking sheet with parchment." },
      { order: 2, title: "Mix flour, ginger, cinnamon, baking soda, and salt." },
      { order: 3, title: "Beat in butter, brown sugar, egg, and molasses." },
      { order: 4, title: "Roll out dough and cut into shapes." },
      { order: 5, title: "Bake until firm, then cool and decorate." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f4", "61e6f7f7e7b5f7a7f7e7b7f5"],
    description: "Spicy and sweet cookies made with ginger, cinnamon, and molasses, perfect for the holidays.",
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    servings: "24 cookies",
    tags: "Dessert, Cookies, Holiday",
    photos: [
      { title: "Cookie Step 1", url: "https://example.com/images/gingerbread1.jpg" },
      { title: "Cookie Step 2", url: "https://example.com/images/gingerbread2.jpg" },
      { title: "Cookie Step 3", url: "https://example.com/images/gingerbread3.jpg" }
    ],
    notes: "For softer cookies, do not overbake.",
    article: "Gingerbread cookies are a type of cookie made with ginger, cinnamon, and molasses, popular during the holiday season."
  },
  {
    owner: "61e6f7f7e7b5f7a7f7e7b7f5",
    title: "Fruitcake",
    instructions: [
      { order: 1, title: "Preheat oven and grease a loaf pan." },
      { order: 2, title: "Mix dried fruits, nuts, flour, sugar, and spices." },
      { order: 3, title: "Add eggs and mix until well combined." },
      { order: 4, title: "Pour batter into the prepared pan." },
      { order: 5, title: "Bake until a toothpick comes out clean." },
      { order: 6, title: "Cool and store in an airtight container." }
    ],
    ingredients: ["61e6f7f7e7b5f7a7f7e7b7f6", "61e6f7f7e7b5f7a7f7e7b7f7"],
    description: "A rich and dense cake made with a variety of dried fruits and nuts, often enjoyed during the holidays.",
    prepTime: "20 minutes",
    cookTime: "60 minutes",
    servings: "1 loaf",
    tags: "Dessert, Cake, Holiday",
    photos: [
      { title: "Fruitcake Step 1", url: "https://example.com/images/fruitcake1.jpg" },
      { title: "Fruitcake Step 2", url: "https://example.com/images/fruitcake2.jpg" },
      { title: "Fruitcake Step 3", url: "https://example.com/images/fruitcake3.jpg" }
    ],
    notes: "For best flavor, soak the dried fruits in rum or brandy before mixing into the batter.",
    article: "Fruitcake is a cake made with candied or dried fruits, nuts, and spices, and optionally soaked in spirits, popular during the holiday season."
  }
];

module.exports = recipes;