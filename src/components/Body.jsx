import { useState } from "react";
import { restaurantList } from "./config";
import Items from "./Items";


function filterData(searchtxt,restaurants){
const filterData= restaurants.filter(
  (restaurant)=> restaurant.data.name.toLowerCase().includes(searchtxt.toLowerCase())
);
return filterData;
}

const Body=()=>{

  const [restaurants, setRestuarants]=useState(restaurantList);
  const [searchtxt, setSearchtxt]=useState("");
    return(
        <>
        <input type="text" className="search-input" 
        placeholder="Search" value={searchtxt} 
        onChange={(e)=>{
          setSearchtxt(e.target.value);
        }}
        />

       <button className="searchbtn" onClick={
        ()=>{
        const data = filterData(searchtxt,restaurants);
        setRestuarants(data);
        }
       }>Search</button>


      <div  className="lists">
        {restaurants.map((restaurant)=>{
          return <Items {...restaurant.data} key={restaurant.data.id}/>
        })}
      </div>
      </>
    )
}
export default Body;