const navLinks = [
  {
    id: "cocktails",
    title: "Cocktails",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "art",
    title: "The Art",
  },
  {
    id: "menu",
    title: "Menu",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const cocktailLists = [
  {
    name: "Classic Mojito",
    country: "AU",
    detail: "750 ml",
    price: "$18",
  },
  {
    name: "Raspberry Mojito",
    country: "AU",
    detail: "650 ml",
    price: "$24",
  },
  {
    name: "Violet Breeze",
    country: "CA",
    detail: "750 ml",
    price: "$26",
  },
  {
    name: "Curacao Mojito",
    country: "IE",
    detail: "650 ml",
    price: "$29",
  },
];

const mockTailLists = [
  {
    name: "Mojito Mocktail",
    country: "US",
    detail: "350 ml",
    price: "$18",
  },
  {
    name: "Passion fruit Martini",
    country: "US",
    detail: "550 ml",
    price: "$26",
  },
  {
    name: "Pina colada Mocktail",
    country: "CA",
    detail: "750 ml",
    price: "$29",
  },
  {
    name: "Pineapple Mocktail",
    country: "IE",
    detail: "600 ml",
    price: "$34",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  "Flavors in perfect harmony",
  "Finished with a flawless touch",
  "Chilled to refresh, every time",
  "Shaken and stirred with mastery",
];

const goodLists = [
  "Ingredients chosen with care",
  "Unique methods that define us",
  "The craft of bartending, perfected",
  "Vibrant flavors, freshly muddled",
];

const storeInfo = {
  heading: "Where to Find Us",
  address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
  contact: {
    phone: "(555) 987-6543",
    email: "hello@jsmcocktail.com",
  },
};

const openingHours = [
  { day: "Mon–Thu", time: "11:00am – 12am" },
  { day: "Fri", time: "11:00am – 2am" },
  { day: "Sat", time: "9:00am – 2am" },
  { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
    alt: "Instagram icon",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
    alt: "Twitter icon",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
    alt: "Facebook icon",
  },
];

const allCocktails = [
  {
    id: 1,
    name: "Classic Mojito",
    image: "/images/drink1.png",
    title: "A Classic That Never Fails",
    description:
      "Made with white rum, fresh mint, lime juice, ice cubes, and club soda or sparkling water. Perfect for those who like classics on summer nights.",
  },
  {
    id: 2,
    name: "Raspberry Mojito",
    image: "/images/drink2.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Made with white rum, fresh mint, lime juice, ice cubes, club soda or sparkling water, fresh raspberries and a touch of sweetness. Shaken, frozen, or on the rocks — it’s always crisp & refreshing.",
  },
  {
    id: 3,
    name: "Violet Breeze",
    image: "/images/drink3.png",
    title: "A perfect drink for a warm spring day",
    description:
      "Made with vodka, fresh lemon juice and lime juice, triple sec, ice cubes, and club soda. Add a salted rim for the perfect drink on party nights.",
  },
  {
    id: 4,
    name: "Curacao Mojito",
    image: "/images/drink4.png",
    title: "The cocktail with a citrusy and blue hue twist",
    description:
      "Made with coconut rum, fresh mint, lime juice, blue curacao, ice cubes, soda, and a touch of sweetness. Perfectly refreshing whether you're celebrating or simply relaxing.",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCocktails,
};
