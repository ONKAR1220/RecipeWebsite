import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import ReactPlayer from 'react-player'

const Meal = () => {
    const location = useLocation();

      const data = location.state?.item;
      const[datas, setDatas] =useState([])
      useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.idMeal}`)
        .then(res=>res.json())
        .then(d=>{
            setDatas(d.meals)
           
        })
      },[])
  return (
    <div className="Meal">
        <section className='sec1'>
            <div className="11">
            <img src={data.strMealThumb} />
            </div>
        <div className="12">
        <h1>{data.strMeal}</h1>
        </div>
        </section>
        <br /><br />
        <section className='sec2'>
            {datas.map((item)=>{
                return(
                    <div className="secdiv" key={item.idMeals} >
                       <h1>{item.idMeal}</h1>
                       <h1>{item.strCategory}</h1>
                       <h1>{item.strArea}</h1>
                       <p>{item.strInstructions}</p>
                       <ReactPlayer url={item.strYoutube} />
                    </div>
                )
            })}
        </section>
      
    </div>
  )
}

export default Meal
