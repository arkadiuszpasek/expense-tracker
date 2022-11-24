import { CategoryKey, SubcategoryItem, SubcategoryKey } from "./types";

export const SUBCATEGORIES = {
  [CategoryKey.Bike]: [
    {
      label: "Clothes",
      key: SubcategoryKey.Clothes,
    },
    {
      label: "Maintenance",
      key: SubcategoryKey.BikeMaintenance,
    },
  ],
  [CategoryKey.Bills]: [
    {
      label: "Dentist",
      key: SubcategoryKey.Dentist,
    },
    {
      label: "Hair",
      key: SubcategoryKey.Hair,
    },
    {
      label: "Med Tests",
      key: SubcategoryKey.MedTests,
    },
    {
      label: "Phone",
      key: SubcategoryKey.Phone,
    },
  ],
  [CategoryKey.Car]: [
    {
      label: "Gas",
      key: SubcategoryKey.Gas,
    },
  ],
  [CategoryKey.Clothes]: [],
  [CategoryKey.Cosmetic]: [],
  [CategoryKey.Electronics]: [],
  [CategoryKey.Fun]: [
    {
      label: "Alcohol",
      key: SubcategoryKey.Alcohol,
    },
    {
      label: "Drinks",
      key: SubcategoryKey.Drinks,
    },
    {
      label: "Food",
      key: SubcategoryKey.Food,
    },
    {
      label: "Snacks",
      key: SubcategoryKey.Snacks,
    },
    {
      label: "Stolarka okienno-drzwiowa",
      key: SubcategoryKey.Sex,
    },
  ],
  [CategoryKey.Groceries]: [],
  [CategoryKey.Hobbies]: [],
  [CategoryKey.House]: [],
  [CategoryKey.Social]: [
    {
      label: "Gift",
      key: SubcategoryKey.Gift,
    },
  ],
  [CategoryKey.Supplements]: [],
  [CategoryKey.Travel]: [],
} as const;
