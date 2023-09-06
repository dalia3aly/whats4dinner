import { useState, useEffect } from 'react';

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching Italian recipes');

    const fetchData = async () => {
      setLoading(true);
      try {
        const url = `${API_BASE_URL}filter.php?a=Italian`; 

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
  }, []); // Empty dependency array

  return { recipes, loading, error };
};

export default useFetchRecipes;
