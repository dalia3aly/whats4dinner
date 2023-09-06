import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RecipePage from "../pages/RecipePage";
import RecipeDetails from '../components/RecipeDetails';
// import  SubscribeForm  from "../components/SubscribeForm";

// Import other components here

const AppRoutes = () => {
  return (
    < Routes >
      <Route path="/" element={<HomePage />} />
      <Route path="/recipes" element={<RecipePage />} />
      <Route path="/recipe/:idMeal" element={<RecipeDetails />} />
      {/* <Route path="/Subscribe" element={<SubscribeForm />} /> */}
    </ Routes >
  );
};

export default AppRoutes;
