import { useState, useEffect } from 'react';

const useFetchFullDetails = (idMeal) => {
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        const data = await res.json();
        setRecipeDetails(data.meals[0]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [idMeal]);

  console.log("From custom hook", recipeDetails, loading, error);
  
  return { recipeDetails, loading, error };
};

export default useFetchFullDetails;
