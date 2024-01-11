/** @format */

import React, { useEffect } from "react";
import { Heart, Trash } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { decreaseQuantity, getCartTotal, increaseQuantity, removeToCart } from "../../redux/features/cart/cartSlice";

const Cart = () => {
    const { ItemValue, TotalQuantity, TotalPrice } = useSelector(
        (state) => state.cart
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal())
    }, [ItemValue])


    return (
        <div className='cart_page'>
            <div className='max-w-[1240px] mx-auto px-4'>
                <div className='mx-auto max-w-2xl py-8 lg:max-w-7xl'>
                    <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                        Shopping Cart
                    </h1>
                    <form className='mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-5 xl:gap-x-8'>
                        {ItemValue.length > 0 ? (
                            <section
                                aria-labelledby='cart-heading'
                                className='rounded-lg shadow-lg bg-[#fafafa] lg:col-span-8 px-4'>
                                <h2 id='cart-heading' className='sr-only'>
                                    Items in your shopping cart
                                </h2>
                                <ul role='list' className='divide-y divide-gray-200'>
                                    {ItemValue.map((product) => (
                                        <div key={product.id} className=''>
                                            <li className='flex py-6 sm:py-6 '>
                                                <div className='flex-shrink-0'>
                                                    <img
                                                        src={product.img}
                                                        alt={product.title}
                                                        className='sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center'
                                                    />
                                                </div>

                                                <div className='ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
                                                    <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
                                                        <div>
                                                            <div className='flex justify-between'>
                                                                <h3 className='text-sm'>
                                                                    <span
                                                                        href={product.href}
                                                                        className='font-semibold text-black'>
                                                                        {product.title}
                                                                    </span>
                                                                </h3>
                                                            </div>
                                                            <div className='mt-1 flex text-sm'>
                                                                <p className='text-sm text-gray-500'>
                                                                    {product.color}
                                                                </p>
                                                                {product.size ? (
                                                                    <p className='ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500'>
                                                                        {product.size}
                                                                    </p>
                                                                ) : null}
                                                            </div>
                                                            <div className='mt-1 flex items-end'>
                                                                <p className='text-sm font-medium text-gray-900'>
                                                                    &nbsp;&nbsp;{product.price}
                                                                </p>
                                                                &nbsp;&nbsp;
                                                                <p className='text-sm font-medium text-green-500'>
                                                                    {product.discount}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <div className='mb-2 flex'>
                                                <div className='min-w-24 flex'>
                                                    <button type='button' className='h-7 w-7' onClick={() => dispatch(decreaseQuantity(product.id))}>
                                                        -
                                                    </button>
                                                    <input
                                                        type='text'
                                                        className='mx-1 h-7 w-9 rounded-md border text-center'
                                                        defaultValue={product.quantity}
                                                    />
                                                    <button
                                                        type='button'
                                                        className='flex h-7 w-7 items-center justify-center' onClick={() => dispatch(increaseQuantity(product.id))}>
                                                        +
                                                    </button>
                                                </div>
                                                <div className='ml-6 flex text-sm'>
                                                    <button
                                                        type='button' onClick={() => dispatch(removeToCart(product))}
                                                        className='flex items-center space-x-1 px-2 py-1 pl-0'>
                                                        <Trash size={12} className='text-red-500' />
                                                        <span className='text-xs font-medium text-red-500'>
                                                            Remove
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </ul>
                            </section>
                        ) : (
                            <section className='h-[350px] flex items-center justify-center cart-heading" className="rounded-lg shadow-lg bg-[#fafafa] lg:col-span-8 px-4'>
                                <h2 className='text-2xl font-bold'>NO PRODUCTS HERE</h2>
                            </section>
                        )}

                        {/* Order summary */}
                        <section
                            aria-labelledby='summary-heading'
                            className='mt-16 rounded-md bg-[#fafafa] lg:col-span-4 lg:mt-0 lg:p-0 shadow-md'>
                            <h2
                                id='summary-heading'
                                className=' border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4'>
                                Price Details
                            </h2>
                            <div>
                                <dl className=' space-y-1 px-2 py-4'>
                                    <div className='flex items-center justify-between'>
                                        <dt className='text-sm text-gray-800'>
                                            Price ({TotalQuantity} item)
                                        </dt>
                                        <dd className='text-sm font-medium text-gray-900'>
                                            {TotalPrice}
                                        </dd>
                                    </div>
                                    <div className='flex items-center justify-between pt-4'>
                                        <dt className='flex items-center text-sm text-gray-800'>
                                            <span>Discount</span>
                                        </dt>
                                        <dd className='text-sm font-medium text-green-700'>
                                            - ${13 / 100 * TotalPrice}
                                        </dd>
                                    </div>
                                    <div className='flex items-center justify-between py-4'>
                                        <dt className='flex text-sm text-gray-800'>
                                            <span>Delivery Charges</span>
                                        </dt>
                                        <dd className='text-sm font-medium text-green-700'>Free</dd>
                                    </div>
                                    <div className='flex items-center justify-between border-y border-dashed py-4 '>
                                        <dt className='text-base font-medium text-gray-900'>
                                            Total Amount
                                        </dt>
                                        <dd className='text-base font-medium text-gray-900'>
                                            $ {`${TotalPrice - 13 / 100 * TotalPrice}`}
                                        </dd>
                                    </div>
                                </dl>
                                <div className='px-2 pb-4 font-medium text-green-700'>
                                    You will save ₹ 3,431 on this order
                                </div>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Cart;
