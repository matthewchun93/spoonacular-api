import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid, Card } from "./Searched.styled";

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchData(params.search);
  }, [params.search]);

  const fetchData = async (search) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  return (
    <Grid>
      {searchedRecipes.map((recipe) => {
        return (
          <Card key={recipe.id}>
            <Link to={"/recipe/" + recipe.id}>
              <img src={recipe.image} alt={recipe.name} />
              <h4>{recipe.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Searched;
