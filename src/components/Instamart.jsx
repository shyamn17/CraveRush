import useInstamart from "../Hooks/useInstamart"
import { IMG_CDN } from "../Services/Endpoints";
import Shimmer from "./Shimmer";

const Instamart=()=>{
    const items=useInstamart();

    const martinfo=items?.data?.widgets[1]?.data;

    if (!items) {
        return <Shimmer />;
      }

    return(
         <div className="martitems">
         <h1>Menu Items</h1>
         <ul>
          {martinfo && martinfo.length > 0 ? (
            martinfo.map((data) => (
                <li key={data.nodeId}>
                <h3>{data.displayName}</h3>
                <img src={IMG_CDN + data.imageId} alt={data.displayName} />
              </li>
            ))
          ) : (
            <li>No menu items available</li>
          )}
        </ul>
       </div>
    )
}

export default Instamart;