import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

import { ShoppingCartContext } from '../../context'
import { OrderCart } from '../../components/OrderCard'
import { totalPrice } from '../../utils'

import "./styles.css"

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01/02/2023',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle(null)
    }
    
    return(
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkoutSideMenu  flex-col fixed top-20 bg-white right-0 border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div 
                    className='cursor-pointer'
                    onClick={() => context.closeCheckoutSideMenu()}
                >
                    <XMarkIcon className='h-6 w-6 text-black'/>
                </div>
            </div>
            <div className='px-4 overflow-y-scroll flex-1'>
                {
                    context.cartProducts.map(product=>(
                        <OrderCart 
                            key={product.id}
                            id={product.id}
                            title = {product.title} 
                            imageUrl = {product.images} 
                            price = {product.price} 
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-4 mb-6'>
                <p className='flex justify-between items-center mb-2'> 
                    <span className='font-light'>Total: </span>
                    <span className='font-medium text-2xl'>$ {totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-order/last'>
                    <button className='w-full bg-black py-3 text-white rounded-lg ' onClick={() => handleCheckout()}>Chechout</button>
                </Link>
            </div>
        </aside>
    )
}

export {CheckoutSideMenu}