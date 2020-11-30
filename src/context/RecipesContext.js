import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearchRecipes] = useState({
    name: "",
    category: "",
  });

  const [consult, setConsult] = useState(false);

  useEffect(() => {
    if (consult) {
      const getRecipes = async () => {
        const { name, category } = search;
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
        const result = await axios.get(url);
        setRecipes(result.data.drinks);
        //console.log(result.data.drinks);
      };
      getRecipes();
    }
  }, [search]);
  return (
    <RecipesContext.Provider
      value={{
        recipes,
        setSearchRecipes,
        setConsult,
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
