// hooks/useFetchSearchRecipes.jsx
import { useState, useEffect } from 'react';

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

const useFetchSearchRecipes = (searchTerm) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching recipes');

    const fetchData = async () => {
      setLoading(true);
      try {
        let url = API_BASE_URL;

        if (searchTerm) {
          url += `search.php?s=${searchTerm}`;  // Assuming the API accepts 's' as the search parameter
        } else {
          url += 'search.php?f=c'; // Default to fetching all recipes that starts with 'c' (I can use it for home page Recipe Cards too)
        }

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
  }, [searchTerm]);  // Dependency array includes searchTerm

  return { recipes, loading, error };
};

export default useFetchSearchRecipes;
