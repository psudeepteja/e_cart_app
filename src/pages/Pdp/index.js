import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCart } from "../../feature/slices/cartSlice";

function Pdp() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, description, image, price, id } = location.state
  const { cart } = useSelector((state) => state.cart)

  const cartItems = { ...location.state, quantity: 1 }

  const handleCart = () => {
    const exstingItem = cart.find(i => i.id === id)
    if (!exstingItem) {
      dispatch(addToCart([cartItems]))
    }
  }
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
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleCart}>
            Add to Cart
          </button>
          {cart.length > 0 &&
            <button className="px-4 py-2 bg-orange-500 text-white rounded-md" onClick={() => { handleGoToCart(id) }}>
              Go to Cart
            </button>
          }
        </div>
      </div>
    </div>
  );
}

export default Pdp;