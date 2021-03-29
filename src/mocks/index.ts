import { MENU_BREAKFAST, MENU_COFFEE, MENU_DRINK, MENU_FRIES, MENU_LUNCH, MENU_MUNCHIES } from "../assets";

const category = [
  {
    id: 1,
    name: 'Coffee',
    image: MENU_COFFEE,
    desc: 'Freshly brewed coffee',
    destination: 'CategoryCoffeeScreen'
  },
  {
    id: 2,
    name: 'Breakfast',
    image: MENU_BREAKFAST,
    desc: 'Hearty, hot & Fresh',
    destination: 'CategoryBreakfastStack'
  },
  {
    id: 3,
    name: 'Munchies',
    image: MENU_MUNCHIES,
    desc: 'Perfectly Baked Goodies',
    destination: 'CategoryMunchiesScreen'
  },
  {
    id: 4,
    name: 'Lunch',
    image: MENU_LUNCH,
    desc: 'Hearty, hot & Fresh',
    destination: 'CategoryLunchScreen'
  },
  {
    id: 5,
    name: 'Fries',
    image: MENU_FRIES,
    desc: 'Fresh & Crispy',
    destination: 'CategoryFriesScreen'
  },
  {
    id: 6,
    name: 'Drinks',
    image: MENU_DRINK,
    desc: 'Heathy & Fresh',
    destination: 'CategoryDrinkScreen'
  },
];

export { category }