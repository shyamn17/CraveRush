import {INSTAMART} from "../Services/Endpoints"
import { useEffect, useState } from "react";

const useInstamart =()=>{

    const[Items,setItems]=useState(null);

    useEffect(()=>{
        getMart();
    },[])

async function getMart(){
    const data=await fetch("/api/instamart");
    const json=await data.json();
    console.log(json);
    setItems(json);

}
return Items;
}

export default useInstamart;