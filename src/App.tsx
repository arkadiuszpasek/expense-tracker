import {
  Button,
  InputAdornment,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState } from "react";
import "./App.css";
import { CATEGORIES } from "./types/categories";
import { SUBCATEGORIES } from "./types/subcategories";
import { CategoryItem, SubcategoryItem } from "./types/types";

const scriptURL = process.env.REACT_APP_SHEET_SCRIPT_URL!;

console.log("Will fetch to", scriptURL);

function App() {
  const [category, setCategory] = useState<CategoryItem | null>(null);
  const [value, setValue] = useState<number | null>(null);
  const [subcategory, setSubcategory] = useState<SubcategoryItem | null>(null);
  const [description, setDesription] = useState<string>();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSubmit = () => {
    const body = new FormData();
    if (!category || !value) {
      return;
    }
    body.append("Category", category);
    body.append("Value", value.toString());
    if (subcategory) {
      body.append("Subcategory", subcategory.key);
    }
    if (description) {
      body.append("Description", description);
    }
    console.log("Sending result to", scriptURL);
    fetch(scriptURL, { method: "POST", body })
      .then((response) => console.log("Success!", response))
      .then(() => setIsModalOpen(true))
      .catch((error) => {
        console.error("Error!", error.message);
        setModalMessage(error.message);
        setIsModalOpen(true);
      });
  };

  return (
    <>
      <Stack
        sx={{ padding: 2, width: "100%", height: "100vh" }}
        spacing={4}
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Select
          sx={{ width: "70%" }}
          id="category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value as typeof CATEGORIES[number])
          }
        >
          {CATEGORIES.map((category) => (
            <MenuItem
              key={category}
              value={category}
              style={{ textTransform: "capitalize" }}
            >
              {category}
            </MenuItem>
          ))}
        </Select>
        <OutlinedInput
          sx={{ width: "70%" }}
          type="number"
          id="value"
          value={value}
          onChange={(e) => setValue(+e.target.value)}
          startAdornment={<InputAdornment position="start">PLN</InputAdornment>}
        />
        <Select
          sx={{ width: "70%" }}
          labelId="subcategory"
          id="subcategory"
          value={subcategory}
          label="Subcategory"
          onChange={(e) => setSubcategory(e.target.value as SubcategoryItem)}
        >
          {(category ? SUBCATEGORIES[category?.key] : []).map((subcategory) => (
            <MenuItem
              key={subcategory}
              value={subcategory}
              style={{ textTransform: "capitalize" }}
            >
              {subcategory}
            </MenuItem>
          ))}
        </Select>
        <OutlinedInput
          sx={{ width: "70%" }}
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDesription(e.target.value)}
          placeholder="Description (optional)"
        />
        <Button
          variant="outlined"
          onClick={handleSubmit}
          sx={{ width: "70%", marginTop: 4, padding: 1 }}
        >
          Submit
        </Button>
      </Stack>
      <Modal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setCategory(null);
          setValue("");
          setSubcategory(null);
          setDesription(undefined);
          setModalMessage(undefined);
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
            {category?.label}: {value} PLN
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <>
              {subcategory?.label}, {description}
            </>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default App;
