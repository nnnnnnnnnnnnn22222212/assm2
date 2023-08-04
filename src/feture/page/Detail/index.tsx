
import { useParams } from "react-router-dom"
import {useEffect} from 'react'
import { getProduct } from "../../../api/Product"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../store/hook"


const ProductsDetail = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const product= useAppSelector((state)=>state.products.products.find((item: any)=> item.id === Number(id)))
    console.log(product);
    
    useEffect(()=>{
        dispatch(getProduct())
    }, [dispatch, id])
    if (!product) {
        return <div>Loading...</div>;
      }
  return (
    <div>
    <h1>Product Detail</h1>
    <p>Name: {product.name}</p>
    <p>Price: ${product.price}</p>
  </div>
  )
}

export default ProductsDetail