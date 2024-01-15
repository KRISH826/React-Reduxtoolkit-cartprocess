import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from '../redux/features/cart/cartSlice';
import { toggleDarkMode } from '../redux/features/theme/themeSlice';

const Navbar = () => {
    const { ItemValue, TotalQuantity } = useSelector((state) => state.cart);
    const { mode } = useSelector((state) => state.darkMode);
    console.log(mode);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getCartTotal())
    }, [ItemValue])

    const cartRedirect = () => {
        navigate('/cart')
    }

    return (
        <nav className={`shadow-lg py-5 sticky top-0 w-full bg-white dark:bg-zinc-900`}>
            <div className='max-w-[1240px] px-4 mx-auto'>
                <div className='w-full flex items-center justify-between'>
                    <Link to="/"><h2 className='font-bold text-2xl text-sky-800'>E-Commerce</h2></Link>
                    <div className='listing flex items-center gap-1'>
                        <button
                            type="button"
                            onClick={cartRedirect}
                            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Cart ({TotalQuantity})
                        </button>
                        <button className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" onClick={() => dispatch(toggleDarkMode())}>
                            <Moon size={18} strokeWidth={1.75} />
                            {/* <Sun size={20} strokeWidth={1.75} /> */}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar