import React from 'react'
import { useSelector } from 'react-redux';

export default function OrderConfirmation() {
  const { order } = useSelector((state) => state.order);
  
  const calculateTotalPrice = () => {
    return order?.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className='my-4 mx-8'>
      <div className='bold'>Orders</div>
      <div className='border p-4'>
        <div className='flex justify-between'>
          <div>Order Id #123</div>
          <div> Total Price: ₹ {calculateTotalPrice().toFixed(2)}</div>
        </div>
        <div className='font-bold py-2'>Items</div>
        <div >
          {order.map((item) => (
            <div key={item.id} className="flex justify-between gap-8 border mb-4 p-4">
              <div className='flex gap-4'>
                <img src={item.image} alt={item.title} className='w-12 h-12' />
                <div>
                  <div>{item.title}</div>
                  <div className='font-semibold'> ₹ {item.price}</div>
                </div>
              </div>
              <div>{item.quantity} X {item.price} = {item.quantity * item.price} </div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </div>
  )
}
