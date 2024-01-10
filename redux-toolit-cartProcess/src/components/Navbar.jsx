import React from 'react'

const Navbar = () => {
    return (
        <nav className='shadow-lg py-5'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='w-full flex items-center justify-between'>
                    <h2 className='font-bold text-2xl text-sky-800'>E-Commerce</h2>
                    <div className='listing'>
                        <button
                            type="button"
                            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Cart (0)
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar