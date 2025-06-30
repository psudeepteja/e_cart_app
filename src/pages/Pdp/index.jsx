import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCart, decrement, increment } from "../../feature/slices/cartSlice";
import { useCallback } from "react";
import { closeSnackbar, useSnackbar } from "notistack";

function Pdp() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { title, description, image, price, id } = location.state
  const { cart } = useSelector((state) => state.cart)

  const cartItems = { ...location.state, quantity: 1 }
  const exstingCartItem = cart.find(i => i.id === id)

  const handleIncrement = (id) => {
    dispatch(increment({ id, quantity: 1 }));
  };

  const handleDecrement = (id) => {
    dispatch(decrement({ id, quantity: 1 }));
  };

  const handleCart = useCallback(() => {
    if (!exstingCartItem) {
      dispatch(addToCart([cartItems]))
      enqueueSnackbar('Item added to the cart', {
        variant: 'default',
        style: { backgroundColor: "#0c4a6e" },
        action: (key) => (
          <div className='flex gap-2 items-center justify-center'>
            <button className='font-bold' onClick={() => navigate(`/cart`)}>
              View cart
            </button>
            <button className='font-bold text-lg pb-1' onClick={() => closeSnackbar(key)}>
              x
            </button>
          </div>
        )
      });
    }
  }, [enqueueSnackbar, closeSnackbar]);

  const handleGoToCart = () => {
    navigate('/cart')
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 m-4 lg:m-16">
      <div>
        <img src={image} alt={title} className="w-full h-full" />
      </div>
      <div>
        <div className="font-bold text-lg py-2">{title}</div>
        <div className="py-2" >{description}</div>
        <div className="text-2xl font-bold py-2"> ₹ {price}</div>
        <div className="flex gap-4">
          {exstingCartItem ? (
            <div className='grid grid-cols-3 gap-2 mt-2 justify-center items-center'>
              <button onClick={() => handleDecrement(exstingCartItem.id)} className="border px-2 text-lg">-</button>
              <div className="border px-4 text-lg">{exstingCartItem.quantity}</div>
              <button onClick={() => handleIncrement(exstingCartItem.id)} className="border px-2 text-lg">+</button>
            </div>
          ) : (
            <button className='px-4 py-2 rounded bg-sky-900 text-white font-bold' onClick={handleCart}>Add to Cart</button>
          )}
          {cart.length > 0 &&
            <button className="px-4 py-2 bg-sky-900 text-white font-medium rounded-md" onClick={() => { handleGoToCart(id) }}>
              Go to Cart
            </button>
          }
        </div>
      </div>
    </div>
  );
}

export default Pdp;