import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

// Context create
export const CategoriesContext = createContext();

//Provider: es donde se encuetran las funciones y state
const CategoriesProvider = (props) => {
  // Create Context State
  const [categories, setCategories] = useState([]);

  //Call to api
  useEffect(() => {
    const getCategories = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const categories = await axios.get(url);
      setCategories(categories.data.drinks);
    };
    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {props.children}
    </CategoriesContext.Provider>
  );
};
export default CategoriesProvider;
