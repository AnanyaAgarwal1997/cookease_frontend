import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function AddRecipe() {


    let navigate=useNavigate()
const [recipe, setRecipe] = useState({
    name:"",
    cuisine:"",
    spice:"",
    time:"",
    calories:"",
    instructions:"",
    recipeIngredientList:"",
    createdBy:""
})

const{name,cuisine,spice,time,calories,instructions,recipeIngredientList,createdBy} = recipe

const onInputChanges=(e)=>{
    setRecipe({...recipe,[e.target.name]:e.target.value})
}

const onSubmit=async(e)=>{
    e.preventDefault();
    const ings  = recipe.recipeIngredientList.split(",");
      const splitStr = (x) =>{
        return {["ingredientName"]: x}
      }

      const objects = ings.map(splitStr);
      console.log(objects);
    recipe.recipeIngredientList = objects;
    await axios.post("http://localhost:8080/recipes/saveRecipe/",recipe)
    navigate("/");
}

  return (
    <div className='Container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 rounded p-4 mt-2'>
                <h2 className='text-center m-4'>Add Recipe</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='text-left mb-3'>
                        <label htmlFor="Title" > Title </label> 
                            <input
                            type={"text"}
                            className='form-control'
                            placeholder='Enter Title of the Recipe'
                            name="name"
                            value={name}
                            onChange={(e)=>onInputChanges(e)}
                        />
                    </div>
                    <div className='text-left mb-3'>
                        <label htmlFor="Cuisine" > Cuisine </label> 
                            <input
                            type={"text"}
                            className='form-control'
                            placeholder='Enter Cuisine of the Recipe'
                            name="cuisine"
                            value={cuisine}
                            onChange={(e)=>onInputChanges(e)}
                        />
                    </div>
                    <div className='text-left mb-3'>
                        <label htmlFor="Spice" > Spice </label> 
                            <input
                            type={"text"}
                            className='form-control'
                            placeholder='Enter Spice Level- Low, Medium, High'
                            name="spice"
                            value={spice}
                            onChange={(e)=>onInputChanges(e)}
                        />
                    </div>
                    <div className='text-left mb-3'>
                        <label htmlFor="Time" > Cooking Time </label> 
                            <input
                            type={"number"}
                            className='form-control'
                            placeholder='Enter Cooking Time in minutes'
                            name="time"
                            value={time}
                            onChange={(e)=>onInputChanges(e)}
                        />
                    </div>
                    <div className='text-left mb-3'>
                        <label htmlFor="Calories" > Calories </label> 
                            <input
                            type={"number"}
                            className='form-control'
                            placeholder='Enter Calories of the Recipe'
                            name="calories"
                            value={calories}
                            onChange={(e)=>onInputChanges(e)}
                        />
                    </div>
                    <div className='text-left mb-3'>
                        <label htmlFor="Instructions" > Instructions </label> 
                            <input
                            type={"text"}
                            className='form-control'
                            placeholder='Enter Instructions for the Recipe'
                            name="instructions"
                            value={instructions}
                            onChange={(e)=>onInputChanges(e)}
                        />
                    </div>
                    <div className='text-left mb-3'>
                        <label htmlFor="RecipeIngredientList" > Ingredients </label> 
                            <input
                            type={"text"}
                            className='form-control'
                            placeholder='Enter Ingredients(Ex: Onion, Pepper)'
                            name="recipeIngredientList"
                            value={recipeIngredientList}
                            onChange={(e)=>onInputChanges(e)}
                        />
                    </div>
                    <div className='text-left mb-3'>
                        <label htmlFor="CreatedBy" > Created By </label> 
                            <input
                            type={"text"}
                            className='form-control'
                            placeholder='Creator for the Recipe'
                            name="createdBy"
                            value={createdBy}
                            onChange={(e)=>onInputChanges(e)}
                        />
                    </div>
                    <button type="submit" className='btn btn-outline-primary'>
                        Submit
                    </button>
                    <button type="submit" className='btn btn-outline-danger mx-2'>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
