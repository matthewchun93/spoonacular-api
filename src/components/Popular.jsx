import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
// styled-components
import { Wrapper, Card } from "./Popular.styled";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    console.log(data);
    setPopular(data.recipes);
  };

  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>

        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular.map((recipe) => {
            return (
              <Card key={recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
              </Card>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

export default Popular;
