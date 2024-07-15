import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MaterialSymbolsShoppingCart } from '../icons/cart'

export default function Header() {
  const { cart } = useSelector((state) => state.cart);
  const cartQtyItems = cart.map((i) => i.quantity)
  const cartQty = cartQtyItems.reduce((acc, sum) => acc + sum, 0)

  const navigate = useNavigate()

  return (
    <div className='flex justify-between items-center bg-gray-200 px-8 py-2 h-14'>
      <div className='font-bold text-orange-600 text-2xl cursor-pointer' onClick={() => navigate('/')}>E-Cart</div>
      <div className='relative cursor-pointer' onClick={() => navigate('/cart')}>
        <div >
          <MaterialSymbolsShoppingCart />
        </div>
        <div className='absolute top-[-17px] right-[5px] font-bold text-orange-600 text-lg'>{cartQty}</div>
      </div>
    </div>
  )
}
