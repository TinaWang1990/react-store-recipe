import React, { useEffect, useState } from 'react';
import Recipe from '../component/Recipe'

const SearchRecipe = () => {

    const App_Id = 'd1ae6052';
    const App_keys = '8f3de529d90450884ee6dc2e11996457';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("chicken");
    const [query, setQuery] = useState("chicken");

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${App_keys}`);
        const data = await res.json();
        setRecipes(data.hits);
    }
    const updateSearch = (e) => {
        setSearch(e.target.value)
    }
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    }

    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text"
                placeholder={search}
                    value={search} onChange={updateSearch} />
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="recipes">
                {recipes.map((recipe, index) => (
                    <Recipe key={index} title={recipe.recipe.label} calories={recipe.recipe.calories}
                        image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
                ))}
            </div>
        </div>
    );
}

export default SearchRecipe;
