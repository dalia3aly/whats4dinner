// pages/HomePage.js
import React, { useState } from 'react';  
import Grid from '@mui/material/Grid';
import RecipeFilter from '../components/RecipeFilter';
import RecipeSearch from '../components/RecipeSearch';
import RecipeCard from '../components/RecipeCard';
import useFetchRecipes from '../hooks/useFetchSearchRecipes';
import useFetchFilteredRecipes from '../hooks/useFetchFilteredRecipes';
import { Card, CardContent, Typography, Container } from '@mui/material';



const HomePage = () => {

  // const [filter, setFilter] = useState('');
  // const [filterCategory, setFilterCategory] = useState('a'); 

  const [searchTerm, setSearchTerm] = useState('');
  const { recipes, loading, error } = useFetchRecipes(searchTerm);
  
  // const handleFilterChange = (newFilter) => {
  //   setFilter(newFilter);
  // };
  const handleSearchChange = (newTerm) => {
    setSearchTerm(newTerm);
  };

  return (
    <div>
   
      <Container>


        <Grid container marginBottom={5}>
        <RecipeSearch onSearchChange={handleSearchChange} />
        </Grid>

        {/* <div>
        <RecipeFilter onFilterChange={handleFilterChange} />
        </div> */}

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        
        <Grid container spacing={4}>
          {recipes.slice(0, 12).map((recipe) => (
            <Grid item xs={12} sm={6} md={3} key={recipe.idMeal}>
              <RecipeCard recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
