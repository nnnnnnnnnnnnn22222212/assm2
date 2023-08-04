import { addProduct } from "../../../api/Product";
import { useState } from 'react';
import { useAppDispatch } from "../../../store/hook";

const ADDProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { name, price: Number(price) };
    console.log(newProduct);
    dispatch(addProduct(newProduct));
  };

  return (
    <div>
      <h1>Add New Product</h1>
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
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ADDProduct;