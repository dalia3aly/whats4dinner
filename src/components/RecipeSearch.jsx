import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const RecipeSearch = ({ onSearchChange }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState("");

  const handleSubmit = () => {
    onSearchChange(localSearchTerm);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <TextField
        id="search"
        label="Search by Main Ingredient"
        variant="outlined"
        color="primary"
        value={localSearchTerm}
        onChange={(e) => {
          setLocalSearchTerm(e.target.value);
        }}
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSubmit}>
        Search
      </Button>
    </div>
  );
};

export default RecipeSearch;
