import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../feature/slices/cartSlice';

const ProductCard = ({ product, categoryId }) => {
  const { title, image, price, id } = product
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const cartItems = { ...product, quantity: 1 }

  const handleCart = () => {
    const exstingItem = cart.find(i => i.id === id)
    if (!exstingItem) {
      dispatch(addToCart([cartItems]))
    }
  }

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
      <button className='w-full py-2 rounded mt-2 bg-blue-500 text-white' onClick={handleCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
