import React, {useState, useEffect} from 'react';

export default function Meal({meal}) {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        fetch(
           `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=4c88da87f3fb4ad3ad3c50731912747e&includeNutrition=false` 
        )
        .then((response) => response.json())
        .then((data) => {
            setImageUrl(data.image);
        })
        .catch(() => {
            console.log("error");
        })
    }, [meal.id])

    return (
        <>
        <div className="card-product">
            <img src={imageUrl} alt='recipe' />
            <div className="card-product-infos">
                <h1>{meal.title}</h1>
                <ul className="instructions">
                    <li>Preparation Time: {meal.readyInMinutes} minutes</li>
                    <li>Number of servings: {meal.servings}</li>
                </ul>
                <a href={meal.sourceUrl}>Go to Recipe</a>
            </div>
        </div>
        </>
    )
}
            
