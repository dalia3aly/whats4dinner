// components/RecipeFilter.jsx
import React from 'react';
import useFetchFilteredRecipes from '../hooks/useFetchFilteredRecipes';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const RecipeFilter = ({ onFilterChange }) => {
  const filters = [
    'Italian',
    'Chinese',
    'Mexican',
    'Egyptian',
    'American',
    'Japanese',
    'British',
    'French',
    'Greek',
    'Moroccan',
    'Spanish',
    'Canadian'
  ];

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ButtonGroup 
      variant="contained" 
      aria-label="filter group" 
      margin-bottom="10px"
      orientation={matches ? 'vertical' : 'horizontal'}
    >
      {filters.map((filter) => (
        <Button key={filter} onClick={() => onFilterChange(filter)}>
          {filter}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default RecipeFilter;
