import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { orderItems } from "../../feature/slices/orderSlice";
import { clearCart, decrement, increment } from "../../feature/slices/cartSlice";

const Cart = () => {
    const { cart } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleIncrement = (id) => {
        dispatch(increment({ id, quantity: 1 }));
    };

    const handleDecrement = (id) => {
        dispatch(decrement({ id, quantity: 1 }));
    };

    const placeOrder = () => {
        dispatch(orderItems(cart))
        navigate('/order-confirmation')
        dispatch(clearCart())
    }

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <div className="my-4 mx-8">
            {cart.length > 0 ? (
                <>
                    <div className="text-bold">Cart Items</div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="lg:col-span-2">
                            {cart?.map(item => (
                                <div className="flex justify-between border mb-4 p-4" key={item.id}>
                                    <div className="flex justify-between items-center gap-2">
                                        <div>
                                            <img src={item.image} alt={item.title} className="w-12 h-12" />
                                        </div>
                                        <div>
                                            <div>{item.title}</div>
                                            <div className="font-bold">
                                                ₹ {item.price}

                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <button onClick={() => handleDecrement(item.id)} className="border px-2">-</button>
                                        <div className="border w-8 px-2">{item.quantity}</div>
                                        <button onClick={() => handleIncrement(item.id)} className="border px-2">+</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="border p-2">
                                <div className="font-bold">Summary</div>
                                <div >
                                    {cart.map((item) => (
                                        <div key={item.id} className="grid grid-cols-5 gap-8 justify-between">
                                            <div className="truncate text-sm col-span-3">{item.title}</div>
                                            <div className="col-span-2 text-end">{item.quantity} X {item.price} = {item.quantity * item.price} </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-end pt-2">
                                    <div>Total = </div>
                                    <div>{calculateTotalPrice().toFixed(2)}</div>
                                </div>
                            </div>
                            <button className="bg-blue-500 text-white w-full px-4 py-2 mt-2" onClick={placeOrder}>Place Order</button>
                        </div>
                    </div>
                </>
            ) : (
                <div className="text-center"> No Products in Cart</div>
            )}
        </div>
    );
};

export default Cart;