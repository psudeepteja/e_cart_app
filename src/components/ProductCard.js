import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, decrement, increment } from '../feature/slices/cartSlice';

const ProductCard = ({ product, categoryId }) => {
  console.log("product", product)

  const { title, image, price, id } = product
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const cartItems = { ...product, quantity: 1 }
  const exstingCartItem = cart.find(i => i.id === id)

  const handleCart = () => {
    if (!exstingCartItem) {
      dispatch(addToCart([cartItems]))
    }
  }

  const handleIncrement = (id) => {
    dispatch(increment({ id, quantity: 1 }));
  };

  const handleDecrement = (id) => {
    dispatch(decrement({ id, quantity: 1 }));
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4 cursor-pointer">
      <div onClick={() => {
        navigate(`/products/category/${categoryId}/${product.id}`,
          { state: product })
      }}>
        <img className="w-80 h-60" src={image} alt={title} />
        <div className=" py-4">
          <div className="font-bold mb-2 truncate">{title}</div>
        </div>
        <p className="text-gray-700 text-base font-semibold">
          ₹ {price}
        </p>
      </div>
      
      {exstingCartItem ? (
        <div className='grid grid-cols-3 gap-4 mt-2 justify-center w-full'>
          <button onClick={() => handleDecrement(exstingCartItem.id)} className="border px-2 text-lg">-</button>
          <div className="border px-2 text-center">{exstingCartItem.quantity}</div>
          <button onClick={() => handleIncrement(exstingCartItem.id)} className="border px-2 text-lg">+</button>
        </div>
      ) : (
        <button className='w-full py-2 rounded mt-2 bg-blue-500 text-white' onClick={handleCart}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductCard;
