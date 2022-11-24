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
  BikeClothes = "bike_clothes",
  BikeMaintenance = "bike_maintenance",
  Bus = "bus",
  Dentist = "dentist",
  Drinks = "drinks",
  Food = "food",
  Gas = "gas",
  Gift = "gift",
  Hair = "hair",
  MedTests = "med_tests",
  Phone = "phone",
  Scooter = "scooter",
  Snacks = "snacks",
  Sex = "sex",
  Uber = "uber",
}
export interface CategoryItem {
  label: string;
  key: CategoryKey;
}
export interface SubcategoryItem {
  label: string;
  key: SubcategoryKey;
}
