import React from 'react';
import style from '../recipe.module.css';

function Recipe({title, calories, image, ingredients}) {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map((ingredient, index)=>(
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ol>
            <p className={style.calories}>Calories: {calories}</p>
            <img src={image} alt=""/>
        </div>
    )
}

export default Recipe
