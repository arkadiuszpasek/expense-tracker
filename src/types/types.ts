export interface Item {
  label: string;
  key: string;
}
export enum CategoryKey {
  Bike = "bike",
  Bills = "bills",
  Car = "car",
  Clothes = "clothes",
  Cosmetic = "cosmetic",
  Electronics = "electronics",
  Fun = "fun",
  Groceries = "groceries",
  Hobbies = "hobbies",
  House = "house",
  Social = "social",
  Supplements = "supplements",
  Travel = "travel",
}

export enum SubcategoryKey {
  Alcohol = "alcohol",
  BikeMaintenance = "bike_maintenance",
  Clothes = "clothes",
  Drinks = "drinks",
  Dentist = "dentist",
  ElectronicsPhone = "electronics_phone",
  ElectronicsEquipment = "electronics_equipment",
  Food = "food",
  Gas = "gas",
  Gift = "gift",
  Hair = "Hair",
  MedTests = "med_tests",
  Phone = "phone",
  Sex = "sex",
  Snacks = "snacks",
}
export interface CategoryItem {
  label: string;
  key: CategoryKey;
}
export interface SubcategoryItem {
  label: string;
  key: SubcategoryKey;
}
