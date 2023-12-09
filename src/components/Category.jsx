import React,{useEffect,useState} from 'react';
import { useParams,Link } from 'react-router-dom';
import TrendingSlider from './TrendingSlider';
import { cssNumber } from 'jquery';

const Category = () => {
    const {name} = useParams()
    // console.log(useParams())

    const [data, setData] = useState([])

    useEffect(() => {
  
      const fetchData = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`)
        const data = await api.json();
  
        // console.log(data);
        setData(data.meals)
        // console.log("ddddd",data)
      }
  
      fetchData();
       }, [name])
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
              <Link to={`/${d.idMeal}`} className='link'>
              <div style={{textAlign:'center'}}>
                  <div className="img">
                      <img src={d.strMealThumb} alt="" style={{width:'13rem'}} />
                  </div>
                   <h3>{d.strMeal}</h3>
              </div>
              </Link>
            )
        })
    }
    </div>
    </>
  )
}

export default Category