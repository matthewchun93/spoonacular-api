import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// styled-components
import { DetailWrapper, Button, Info } from "./Recipes.styled";

const Recipes = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const params = useParams();

  useEffect(() => {
    fetchData();
  }, [params.id]);

  const fetchData = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const jsonData = await data.json();
    setDetails(jsonData);
  };
  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" ? (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        ) : (
          <ul>
            {details.extendedIngredients.map((ingredients) => {
              return <li key={ingredients.id}>{ingredients.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

export default Recipes;
