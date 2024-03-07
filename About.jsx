import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './About.css'


const About = () => {
    

      const location = useLocation();

      const data = location.state.data;

      const navigate = useNavigate()
    
      

      const[datas, setDatas] =useState([])
      useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${data.strCategory}`)
        .then(res=>res.json())
        .then(d=>{
            setDatas(d.meals)
            console.log(d.meals);
           
        })
      },[])

     
          
  return (
    <div className='about' >
        <section className='sec1'>
      <img  src={data.strCategoryThumb} alt=""style={{height:'40vh', marginTop:'20px', marginBottom:'20px',borderRadius:'50%', boxShadow:"10px 10px 10px 10px rgb(10,10,10) " }} />
      <h1>{data.strCategory}</h1>
      <p>{data.strCategoryDescription}</p>
        </section>
      <br /><br />
        <section className='sec2'>
            {datas.map((item)=>{
                return(
                    <div className="secdiv" key={item.idMeals} >
                        <div>
                        <img src={item.strMealThumb} onClick={()=>navigate('/meal', { state: { data } })} alt=""  height={"200px"} width={"200px"} />
                        <p>{item.strMeal}</p>
                        </div>
                    </div>
                )
            })}
        </section>
     
    </div>
  )
}

export default About
