import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { getCartTotal } from '../redux/features/cart/cartSlice';

const Navbar = () => {
    const { ItemValue, TotalQuantity } = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal())
    }, [ItemValue])

    const cartRedirect = () => {
        navigate('/cart')
    }

    return (
        <nav className='shadow-lg py-5 sticky top-0 w-full bg-white '>
            <div className='max-w-[1240px] px-4 mx-auto'>
                <div className='w-full flex items-center justify-between'>
                    <Link to="/"><h2 className='font-bold text-2xl text-sky-800'>E-Commerce</h2></Link>
                    <div className='listing'>
                        <button
                            type="button"
                            onClick={cartRedirect}
                            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Cart ({TotalQuantity})
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar