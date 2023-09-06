
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import React from 'react';
import ComplexCard from '../ui/ComplexCard';     // Import the ComplexCard component

const RecipeCard = ({ recipe }) => {

  // see if 'recipe' exists before attempting to access its properties
  if (!recipe) {
    return (
      <Card style={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h5">Loading...</Typography>
        </CardContent>
      </Card>
    );
  }

  const methodSteps = recipe.strInstructions ? recipe.strInstructions.split('. ') : [];

  return (
    <Link to={`/recipe/${recipe.idMeal}`} style={{ textDecoration: 'none' }}>
      <ComplexCard 
        avatarLabel={recipe.strMeal.charAt(0)}
        title={recipe.strMeal}
        subheader={recipe.strCategory}
        imgSrc={recipe.strMealThumb}
        description={recipe.strInstructions ? recipe.strInstructions.substring(0, 100) + '...' : 'Click for Recipe Details'}
        methodSteps={methodSteps}
      />
    </Link>
  );
};

export default RecipeCard;
