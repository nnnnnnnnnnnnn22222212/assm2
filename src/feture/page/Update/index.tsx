import { useEffect, useState } from 'react';

import {  useParams } from 'react-router-dom';
import { getProduct, updateProduct } from '../../../api/Product';
import { useAppDispatch, useAppSelector } from '../../../store/hook';

const ProductUpdate = () => {
 const {id} = useParams()
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.products.products.find((item: any) => item.id === Number(id)) )
  console.log(product);
  

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
    }
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const update = { id: id, name, price: Number(price) };
    await dispatch(updateProduct(update));
    
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default ProductUpdate;