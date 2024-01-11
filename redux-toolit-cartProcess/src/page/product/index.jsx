import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../../redux/features/cart/cartSlice';

const Product = () => {
    const items = useSelector(state => state.cart.productItem);
    const dispatch = useDispatch();
    return (
        <section>
            <div className='max-w-[1240px] mx-auto px-4'>
                <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
                    {items.map((item) => (
                        <div key={item.id} className="rounded-md border">
                            <img
                                src={item.img}
                                alt="Laptop"
                                className="aspect-[16/9] w-full object-cover rounded-md md:aspect-auto md:h-[260px] lg:h-[220px]"
                            />
                            <div className="p-4">
                                <h1 className="inline-flex items-center text-lg font-semibold">{item.title}</h1>
                                <p className="mt-3 text-sm text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                                </p>
                                <div className="mt-4">
                                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                        #mobile
                                    </span>
                                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                        #apple
                                    </span>
                                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                        #redmi
                                    </span>
                                </div>

                                <div className="mt-5 flex items-center space-x-2">
                                    <span className="block text-sm font-semibold">Price : ${item.price} </span>
                                </div>
                                <button
                                    type="button"
                                    className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    onClick={() => dispatch(addToCart(item))}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Product