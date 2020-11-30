import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create context
export const ModalContext = createContext();

const ModalProvider = (props) => {
  // Provider State
  const [idRecipe, setIdRecipe] = useState(null);
  const [recipeInfo, setRecipe] = useState({});

  // With IdDrink, call to API

  useEffect(() => {
    const getRecipe = async () => {
      if (idRecipe === null) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;

      const result = await axios.get(url);

      setRecipe(result.data.drinks[0]);
    };
    getRecipe();
  }, [idRecipe]);
  return (
    <ModalContext.Provider
      value={{
        recipeInfo,
        setIdRecipe,
        setRecipe,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
