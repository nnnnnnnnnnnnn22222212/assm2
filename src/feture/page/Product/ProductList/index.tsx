import Skeleton from "react-loading-skeleton";
import { useEffect} from "react"

import { addProduct, getProduct } from "../../../../api/Product";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
const List = () => {
   const dispatch  = useAppDispatch();
   const { products, loading, error} = useAppSelector((state: any) => state.products)
    console.log(products);
    
   useEffect(() => {
         dispatch(getProduct());
    }, [dispatch]);
   
    if(loading) return <Skeleton count={3}/>
    if(error) return  <div>{error}</div>
    return (
       <div>
         <h1>Products List</h1>
         <ul>
        {products?.map((item : any)=>(
           <li key={item.id} className="mb-3">
            <Link to={`/products/${item.id}`}>{item.name}</Link>
            
            </li>
        ))}
        </ul>
        
       </div>
    );
};

export default List;
