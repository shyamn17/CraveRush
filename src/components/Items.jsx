import { IMG_CDN } from "./config";

 const Items=({name,cuisines,lastMileTravelString,cloudinaryImageId})=>{
    return(
        <div className="card">
           <img src={IMG_CDN + cloudinaryImageId }/>
        <h2>{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
} 

export default Items;