import React, { useContext, useState } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { RecipesContext } from "../context/RecipesContext";

const Form = () => {
  const [search, setSearch] = useState({
    name: "",
    category: "",
  });

  const { categories } = useContext(CategoriesContext);
  const { setSearchRecipes, setConsult } = useContext(RecipesContext);

  // Function to get contents
  const getRecipeData = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        setSearchRecipes(search);
        setConsult(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Busca bebidas por Categoría o Ingredientes</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="name"
            className="form-control"
            type="text"
            placeholder="Buscar por Ingredientes"
            onChange={getRecipeData}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="category"
            onChange={getRecipeData}
          >
            <option value="">-- Selecciona Categoría --</option>
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value=" Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
