import { useEffect, useState } from "react"

import './Category.css'
import { useNavigate } from "react-router-dom"
import About from "./About"


const Category = () => {
  const[cat,setCat]=useState([])
  const[data,setData]=useState()
  useEffect(()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res=>res.json())
    .then(d=>setCat(d.categories))
    
  },[])
  const navigate = useNavigate()
  function Click(data){
    setData(data)
    console.log(data);
    navigate('/about', { state: { data } })
    
  }
  
  return (
    <div className="Category">
      <h1>Categories</h1>
      <section className="sec">
        {
          cat.map((item)=>{
            return(
              <div className="cards" key={item.idCategory}>
                <img className="img1" onClick={()=>Click(item)} src={item.strCategoryThumb} height={'250px'} width={'250px'}  alt="" />
                <h3>{item.strCategory}</h3>
              </div>
            )
          })
        }
      </section>
      
      
    </div>
  )
}

export default Category
