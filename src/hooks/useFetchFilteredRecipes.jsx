// hooks/useFetchFilteredRecipes.jsx
import { useState, useEffect } from 'react';

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

const useFetchFilteredRecipes = (filterType) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let url = `${API_BASE_URL}filter.php?a=${filterType}`;
        
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.meals) {
          setRecipes(data.meals);
        } else {
          setRecipes([]);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filterType]);

  return { recipes, loading, error };
};

export default useFetchFilteredRecipes;