import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { MaterialSymbolsShoppingCart } from '../icons/cart'
import Popover from '../utils/popover';

export default function Header() {
  const userDetails = sessionStorage.getItem("userName")
  const { cart } = useSelector((state) => state.cart);
  const cartQtyItems = cart.map((i) => i.quantity)
  const cartQty = cartQtyItems.reduce((acc, sum) => acc + sum, 0)
  const navigate = useNavigate()
  const location = useLocation()
  const handleLogout = () => {
    sessionStorage.removeItem("userName");
    navigate('/auth')
  }

  return (
    <div className='flex justify-between items-center border-b-2 border-sky-900 py-2 h-14 z-10'>
      {/* <div className='font-bold text-orange-600 text-2xl cursor-pointer' onClick={() => navigate('/')}>E-Cart</div> */}
      <span className="col-span-3 flex gap-2 items-center">
        <svg height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="fill-current text-sky-900"><path d="M112 0C85.5 0 64 21.5 64 48l0 48L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 208 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 160l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 176 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 224l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 288l0 128c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L112 0zM544 237.3l0 18.7-128 0 0-96 50.7 0L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" /></svg>
        <span className="font-bold text-lg text-sky-900">Fast App</span>
      </span>
      <div className='flex gap-4 items-center justify-center'>
        {location.pathname.slice(1) && (
          <div onClick={() => navigate('/')}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22px" height="22px" viewBox="0 0 24 24" className="fill-current text-sky-900">
              <path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"></path>
            </svg>
          </div>
        )}
        <div>
          <Popover
            trigger={<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 448 512" className="fill-current text-sky-900"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg>}
            position="bottom-right"
          >
            <div>
              {/* <p className="text-sm font-medium">You have 3 new notifications</p> */}
              <div className="mt-2 space-y-1 text-sm text-gray-700">
                {userDetails ? (
                  <div>
                    <p>Hello, {userDetails} </p>
                    <button className='px-4 py-2 bg-sky-900 rounded-lg text-white' onClick={handleLogout}>Logout</button>
                  </div>
                ) : (
                  <button className='px-4 py-2 bg-sky-900 rounded-lg text-white' >Login</button>
                )
                }
              </div>
            </div>
          </Popover>
        </div>
        <div className='relative cursor-pointer pt-1' onClick={() => navigate('/cart')}>
          <div >
            <MaterialSymbolsShoppingCart />
          </div>
          <div className='absolute top-[-15px] right-[5px] font-bold text-sky-900 text-lg'>{cartQty}</div>
        </div>
      </div>
    </div>
  )
}
