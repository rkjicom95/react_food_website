import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import TrendingSlider from "./TrendingSlider";
import { useParams } from "react-router-dom";

const RecipeId = () => {
  const [data, setData] = useState([]);
  const [active, setActive] = useState('ingredient');
  const { idMeal } = useParams();
  // console.log(useParams());

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await api.json();

      // console.log(data.meals);
      setData(data.meals[0]);
      //   console.log(data)
    };

    fetchData();
  }, [idMeal]);
  return (
    <>
      <Navbar />
      <div style={{
        width:"90%",
        margin:"auto",
        textAlign:"center"
      }}>
      <h1>{data.strMeal}</h1>
      <div style={{
        display:"flex"
      }} >
        <div className="img" style={{
            width:"30%",
            marginTop:"1.5rem"
        }}>
        <img src={data.strMealThumb} alt="" style={{width:"17rem"}}/>
        </div>
        <div className="content" style={{width:"30%"}}>
          <button className="btn" onClick={()=>setActive('ingredient')}>Ingredient</button>
          <button className="btn" onClick={()=>setActive('instruction')}>Instruction</button>
       
    {
      active === 'ingredient' ? (
        <div>
        <div style={{fontSize:'1.5rem', fontWeight:'bold'}}>{data.strIngredient1} - {data.strMeasure1}</div>
        <div style={{fontSize:'1.5rem', fontWeight:'bold'}}>{data.strIngredient2} - {data.strMeasure2}</div>
        <div style={{fontSize:'1.5rem', fontWeight:'bold'}}>{data.strIngredient3} - {data.strMeasure3}</div>
        <div style={{fontSize:'1.5rem', fontWeight:'bold'}}>{data.strIngredient4} - {data.strMeasure4}</div>
        <div style={{fontSize:'1.5rem', fontWeight:'bold'}}>{data.strIngredient5} - {data.strMeasure5}</div>
        <div style={{fontSize:'1.5rem', fontWeight:'bold'}}>{data.strIngredient6} - {data.strMeasure6}</div>
      </div>
      ):(
        <p>{data.strInstructions} </p>

      )
    }

        </div>
        </div>
      </div>
      <TrendingSlider />
    </>
  );
};

export default RecipeId;
