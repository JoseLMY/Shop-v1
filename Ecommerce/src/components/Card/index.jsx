import React from 'react'
import { useContext } from 'react'

import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

import { ShoppingCartContext } from '../../context'

const Card = (data) =>{
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
        context.closeCheckoutSideMenu()
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }

    const renderIcon = (id) => {

        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if (isInCart){
            return (
                <div className='absolute top-2 right-2 flex justify-center items-center bg-black w-6 h-6 rounded-full'>
                    <CheckIcon
                    className='h-6 w-6 text-white'/>
                </div>
            )
        } else {
            return (
                <div className='absolute top-2 right-2 flex justify-center items-center bg-white w-6 h-6 rounded-full' onClick={(event)=> addProductsToCart(event, data.data)}>
                    <PlusIcon
                    className='h-6 w-6 text-black'/>
                </div>
            )
        }

    }

    return (
        <div 
            className='bg-white cursor-pointer w-56 h-60 rounded-lg' 
            onClick={() => showProduct(data.data)}
        >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-1 left-1 bg-white/60 rounded-lg text-black text-sm px-3 py-0.5'>{data.data.category.name}</span>
                <img className='w-full h-full object-cover' src={data.data.images[0]} alt={data.data.title} />
                
                {renderIcon(data.data.id)}

            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </div>
    )
}

export {Card}