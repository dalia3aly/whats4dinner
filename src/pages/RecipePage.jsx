import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import useFetchFilteredRecipes from '../hooks/useFetchFilteredRecipes';
import RecipeFilter from "../components/RecipeFilter";

import ComplexCard from '../ui/ComplexCard';
import ResponsiveDrawer from '../components/LeftDrawer';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const RecipePage = () => {
  const [selectedFilter, setSelectedFilter] = useState('Italian'); // Set default to 'Italian'

  const { recipes, loading, error } = useFetchFilteredRecipes(selectedFilter);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <>
      
      <Container>
        <Grid container spacing={4}>

          <Grid container marginBottom={10}>
            <RecipeFilter onFilterChange={handleFilterChange} />
          </Grid>

            {loading && <p>Loading...</p>}
            {error && <p>Error fetching recipes.</p>}
            <Grid container spacing={4}>
              { recipes.map((recipe) => (
                <Grid item xs={12} sm={6} md={4} key={recipe.idMeal}>
                  <RecipeCard recipe={recipe} />
                </Grid>
              ))}
            </Grid>
        
        </Grid>
      </Container>
    </>
  );
};

export default RecipePage;
