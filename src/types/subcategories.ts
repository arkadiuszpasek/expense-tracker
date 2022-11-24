import { CategoryKey, SubcategoryKey } from "./types";

export const SUBCATEGORIES_ITEMS = {
  [SubcategoryKey.Alcohol]: "Alcohol",
  [SubcategoryKey.BikeClothes]: "Clothes",
  [SubcategoryKey.BikeMaintenance]: "Maintenance",
  [SubcategoryKey.Dentist]: "Dentist",
  [SubcategoryKey.Drinks]: "Drinks",
  [SubcategoryKey.Food]: "Food",
  [SubcategoryKey.Gas]: "Gas",
  [SubcategoryKey.Gift]: "Gift",
  [SubcategoryKey.Hair]: "Hair",
  [SubcategoryKey.MedTests]: "Med tests",
  [SubcategoryKey.Phone]: "Phone",
  [SubcategoryKey.Snacks]: "Snacks",
  [SubcategoryKey.Sex]: "Stolarka okienno drzwiowa",
} as const;

export const SUBCATEGORIES = {
  [CategoryKey.Bike]: [
    {
      label: SUBCATEGORIES_ITEMS[SubcategoryKey.BikeClothes],
      key: SubcategoryKey.BikeClothes,
    },
    {
      label: SUBCATEGORIES_ITEMS[SubcategoryKey.BikeMaintenance],
      key: SubcategoryKey.BikeMaintenance,
    },
  ],
  [CategoryKey.Bills]: [
    {
      label: SUBCATEGORIES_ITEMS[SubcategoryKey.Dentist],
      key: SubcategoryKey.Dentist,
    },
    {
      label: SUBCATEGORIES_ITEMS[SubcategoryKey.Hair],
      key: SubcategoryKey.Hair,
    },
    {
      label: SUBCATEGORIES_ITEMS[SubcategoryKey.MedTests],
      key: SubcategoryKey.MedTests,
    },
    {
      label: SUBCATEGORIES_ITEMS[SubcategoryKey.Phone],
      key: SubcategoryKey.Phone,
    },
  ],
  [CategoryKey.Car]: [
    {
      label: SUBCATEGORIES_ITEMS[SubcategoryKey.Gas],
      key: SubcategoryKey.Gas,
    },
  ],
  [CategoryKey.Clothes]: [],
  [CategoryKey.Cosmetic]: [],
  [CategoryKey.Electronics]: [],
  [CategoryKey.Fun]: [
    {
      label: SUBCATEGORIES_ITEMS[SubcategoryKey.Alcohol],
      key: SubcategoryKey.Alcohol,
    },
    {
      label: SUBCATEGORIES_ITEMS[SubcategoryKey.Drinks],
      key: SubcategoryKey.Drinks,
    },
    {
      label: SUBCATEGORIES_ITEMS[SubcategoryKey.Food],
      key: SubcategoryKey.Food,
    },
    {
      label: SUBCATEGORIES_ITEMS[SubcategoryKey.Snacks],
      key: SubcategoryKey.Snacks,
    },
    {
      label: SUBCATEGORIES_ITEMS[SubcategoryKey.Sex],
      key: SubcategoryKey.Sex,
    },
  ],
  [CategoryKey.Groceries]: [],
  [CategoryKey.Hobbies]: [],
  [CategoryKey.House]: [],
  [CategoryKey.Social]: [
    {
      label: SUBCATEGORIES_ITEMS[SubcategoryKey.Gift],
      key: SubcategoryKey.Gift,
    },
  ],
  [CategoryKey.Supplements]: [],
  [CategoryKey.Travel]: [],
} as const;
