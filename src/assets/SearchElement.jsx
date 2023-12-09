import React,{useState,useEffect} from 'react';
import Navbar from '../components/Navbar';
import TrendingSlider from '../components/TrendingSlider';
import { useParams,Link } from 'react-router-dom';

const SearchElement = () => {
    const {searchTerm} = useParams();

    
    const [data, setData] = useState([])

    useEffect(() => {
  
      const fetchData = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        const data = await api.json();
  
        // console.log(data.meals);
        setData(data.meals)
        // console.log(data)
      }
  
      fetchData();
    }, [searchTerm])
  return (
<>
<div style={{
        width:"90%",
        margin:"auto",
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit, minmax(15rem, 1fr))",
        gridGap:'1rem',
        marginTop:'10px'
    }}>
    {
        data.map((d)=>{
            return(
              <Link to={`/${d.idMeal}`} key={d.idMeal} className ='link'>
                <div style={{textAlign:"center"}}>
                    <div className="img">
                    <img src={d.strMealThumb} alt="" style={{width:"10rem"}} />
                    </div>
                    <h2>{d.strMeal}</h2>
                </div>
              </Link>
            )
        })
    }
    </div>
</>  
)
}

export default SearchElement