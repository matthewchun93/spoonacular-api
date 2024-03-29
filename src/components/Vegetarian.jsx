import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
// styled-components
import { Wrapper, Card, Gradient } from "./Vegetarian.styled";
const Vegetarian = () => {
  const [vegetarian, setVegetarian] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // localstorage is only used because free api max = 150 calls/day
    const check = localStorage.getItem("vegetarian");
    if (check) {
      setVegetarian(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      ).catch((err) => {
        console.log(err);
      });
      const data = await api.json();
      localStorage.setItem("vegetarian", JSON.stringify(data.recipes));
      console.log(data);
      setVegetarian(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Vegetarian Picks</h3>

        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {vegetarian.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card key={recipe.id}>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

export default Vegetarian;
