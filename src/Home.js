import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Home() {
    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        loadRecipes();
    },[]);

    const loadRecipes=async()=>{
        const result=await axios.get("http://localhost:8080/recipes/fetchRecipes/")
        setRecipes(result.data)
    }

    return (
        <div className='container'>
            <div className='py-4'>
            <table className="table border">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Cuisine</th>
                    <th scope="col">Spice</th>
                    <th scope="col">Time</th>
                    <th scope="col">Calories</th>
                    <th scope="col">Instructions</th>
                    <th scope="col">CreatedBy</th>
                    <th scope="col">Ingredients</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recipes.map((recipe,index)=>(
                            <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{recipe.name}</td>
                                <td>{recipe.cuisine}</td>
                                <td>{recipe.spiceLevel}</td>
                                <td>{recipe.cookingTime}</td>
                                <td>{recipe.calories}</td>
                                <td>{recipe.instructions}</td>
                                <td>{recipe.createdBy}</td>
                                <td>{recipe.recipeIngredientList.map(ingredient => <div>{ingredient.ingredientName}</div>)}</td>
                                <td>
                                    <button className='btn btn-primary mx-2'>View</button>
                                    <button className='btn btn-outline-primary mx-2'>Edit</button>
                                    <button className='btn btn-danger mx-2'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        </div>
  )
}
