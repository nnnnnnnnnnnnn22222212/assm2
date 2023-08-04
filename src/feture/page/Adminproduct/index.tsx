import Skeleton from "react-loading-skeleton";
import { useEffect} from "react"

import { addProduct, getProduct, removeProduct } from "../../../api/Product";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
const AdminProduct = () => {
   
   const dispatch  = useAppDispatch();
   const { products, loading, error} = useAppSelector((state: any) => state.products)
    console.log(products);
    
   useEffect(() => {
         dispatch(getProduct());
    }, [dispatch]);
    const handleDelete = async (id:any) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            
         await dispatch(removeProduct(id));
        }
      };
   
    if(loading) return <Skeleton count={3}/>
    if(error) return  <div>{error}</div>
    return (
       <div>
         <h1>Products List</h1>
         
        {products?.map((item : any)=>(
           <div key={item.id} className="mb-3">
            
            <table>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>ACTION</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{item.id}</td>
                        <td><Link to={`/products/${item.id}`}>{item.name}</Link></td>
                        <td>{item.price}</td>
                        <td>
                        <button onClick={ ()=>handleDelete(item.id)}>Delete Product</button>
                        <Link to={`/admin/products/${item.id}/update`}><button>Sua</button></Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        ))}
        
       
        <Link to="/admin/add">Add New Product</Link>
       </div>
    );
};

export default AdminProduct;
