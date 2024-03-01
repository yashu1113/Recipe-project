import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";


const Meal = () =>{
    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item,setItem] =useState();
    const [show, setShow] = useState(false);
    const [search, setSearch] =useState("")
    useEffect(()=>{
      fetch(url).then(res=>res.json()).then(data=>{
        console.log(data.meals);
        setItem(data.meals);
        setShow(true);
    })
    },[url])
      const setIndex =(alpha) =>{
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
      }

      const searchRecipes=(evt)=>{

        if (evt.key === "Enter"){
            setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }

      }
    return(
        <>
        <div className="main">
           <div className="heading">
            <h1> Dish Delights!!!</h1>
            <h4>Delight in a world of dishes. Explore, cook, and savor delightful recipes.</h4>
           </div>
           <div className="searchbox">
            <input type="search" placeholder="search your recipes" className="search-bar" onChange={e=> setSearch(e.target.value)} 
            onKeyPress = {searchRecipes} />
           </div>
           <div className="container">
                
                 
                    {show ? <MealItem data={item}/>:"Not Found"}
                    </div>
                 
             <div className="indexContainer">
                     <RecipeIndex alphaIndex={(alpha)=> setIndex(alpha)}/>
             </div>

        </div>

        </>
    

)

};

    

export default Meal;

