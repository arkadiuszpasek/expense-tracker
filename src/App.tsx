import {
  Autocomplete,
  Button,
  InputAdornment,
  Modal,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState } from "react";
import "./App.css";
const scriptURL = process.env.REACT_APP_SHEET_SCRIPT_URL!;

interface Item {
  label: string;
  key: string;
}
const CATEGORIES: Item[] = [
  { label: "Bike", key: "bike" },
  { label: "Bills", key: "bills" },
  { label: "Car", key: "car" },
  { label: "Clothes", key: "clothes" },
  { label: "Cosmetic", key: "cosmetic" },
  { label: "Electronics", key: "electronics" },
  { label: "Flat", key: "flat" },
  { label: "Fun", key: "fun" },
  { label: "Groceries", key: "groceries" },
  { label: "Health", key: "health" },
  { label: "Hobbies", key: "hobbies" },
  { label: "House", key: "house" },
  { label: "Social", key: "social" },
  { label: "Supplements", key: "supplements" },
  { label: "Travel", key: "travel" },
];

const SUBCATEGORIES: Item[] = [
  { label: "Alcohol", key: "alcohol" },
  { label: "Drinks", key: "drinks" },
  { label: "Dentist", key: "dentist" },
  { label: "Food", key: "food" },
  { label: "Gas", key: "gas" },
  { label: "Hair", key: "Hair" },
  { label: "Phone", key: "phone" },
  { label: "Sex", key: "sex" },
  { label: "Snacks", key: "snacks" },
];

console.log("Will fetch to", scriptURL);

function App() {
  const [category, setCategory] = useState<Item | null>(null);
  const [value, setValue] = useState<number | null>(null);
  const [subcategory, setSubcategory] = useState<Item | null>(null);
  const [description, setDesription] = useState<string>();

  const actualDescription = subcategory?.key || description;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSubmit = () => {
    const body = new FormData();
    if (!category || !value) {
      return;
    }
    body.append("Category", category.key);
    body.append("Value", value.toString());
    if (actualDescription) {
      body.append("Description", actualDescription);
    }
    fetch(scriptURL, { method: "POST", body })
      .then((response) => console.log("Success!", response))
      .then(() => setIsModalOpen(true))
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <>
      <Stack sx={{ padding: 2 }} spacing={4}>
        <Autocomplete
          value={category}
          onChange={(_, v) => setCategory(v)}
          id="category"
          options={CATEGORIES}
          renderInput={(params) => <TextField {...params} label="Category" />}
        />
        <OutlinedInput
          type="number"
          id="value"
          value={value}
          onChange={(e) => setValue(+e.target.value)}
          startAdornment={<InputAdornment position="start">PLN</InputAdornment>}
        />
        <Autocomplete
          value={subcategory}
          onChange={(_, v) => setSubcategory(v)}
          id="subcategory"
          options={SUBCATEGORIES}
          renderInput={(params) => (
            <TextField {...params} label="Subcategory" />
          )}
        />

        <OutlinedInput
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDesription(e.target.value)}
          placeholder="Description (optional)"
        />
        <Button
          variant="outlined"
          onClick={handleSubmit}
          sx={{ marginTop: 4, padding: 1 }}
        >
          Submit
        </Button>
      </Stack>
      <Modal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setCategory(null);
          setValue(null);
          setSubcategory(null);
          setDesription(undefined);
        }}
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            bgcolor: "#f3f3f3",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            {category?.label} : {value} PLN
          </Typography>
          <Typography sx={{ mt: 2 }}>{actualDescription}</Typography>
        </Box>
      </Modal>
    </>
  );
}

export default App;
