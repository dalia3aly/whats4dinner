import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Container } from '@mui/material';
import useFetchFullDetails from '../hooks/useFetchFullDetails';

const RecipeDetails = () => {
  const { idMeal } = useParams();
  const { recipeDetails, loading, error } = useFetchFullDetails(idMeal);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!recipeDetails) return <p>No details available.</p>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipeDetails[`strIngredient${i}`];
    const measure = recipeDetails[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  // Extract video ID from YouTube URL
  const videoId = recipeDetails.strYoutube.split('v=')[1];

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h4">{recipeDetails.strMeal}</Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={recipeDetails.strMeal}
            frameborder="0"
            allowfullscreen
          ></iframe>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h4">{recipeDetails.strMeal}</Typography>
          <Typography variant="h6">Category: {recipeDetails.strCategory}</Typography>
          <Typography variant="h6">Area: {recipeDetails.strArea}</Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6">Ingredients:</Typography>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6">Instructions:</Typography>
          <Typography variant="body1">{recipeDetails.strInstructions}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RecipeDetails;
