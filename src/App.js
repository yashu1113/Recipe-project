import React from 'react';
import Meal from './Components/Meal';
import style from './Components/style.css';
import {Routes, Route} from "react-router-dom";
import ReacipeInfo from './Components/RecipeInfo';




function App() {
  return (
    <>
       <Routes>
       <Route path='/' element = {<Meal/>} />
       <Route path = "/:MealId" element={<ReacipeInfo/>}/>
       </Routes>
      
    </>
  )
}

export default App;


