import { useEffect, useState } from "react";
import Categry from "./Category";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res=>res.json())
    .then(d=>setData(d.meals))
  },[])
  return (
    <div className="Home">
      {
      data.map((item)=>{
        return(
          <div className="Cards" key={item.idMeal} style={{display:'flex',justifyContent:"space-around",alignItems:'center'}}>
            <div className="right">
              <h1 className="h11">Today's Special</h1>
              <h1 className="h11" style={{color:'orange'}} >{item.strMeal}</h1>
              <h1 className="h11">{item.strArea}</h1>
            </div>
            <div className="left">
              <img className="img" src={item.strMealThumb} style={{borderRadius:'50%',width:'400px', }}alt="" />
            </div>
          </div>
        )
      })
      }
      <Categry/>
    </div>
  )
}

export default Home
