import React from 'react'
import { ChevronRightIcon, CalendarDaysIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
const OrdersCard = props => {

    const { totalPrice, totalProducts } = props

    return(
        <div className='flex justify-between items-center  border border-black w-80 p-4 rounded-lg mb-4'>
            <p className='flex justify-between w-full cursor-pointer'>
                <span className='flex flex-col'>
                    <div className='flex items-center'>
                        <CalendarDaysIcon className='h-4 w-4 text-black '/>
                        <span className='font-light ml-1'>01/02/2023</span>
                    </div>
                    <div className='flex items-center '>
                        <ShoppingBagIcon className='h-4 w-4 text-black'/>
                        <span className='font-light ml-1'>{totalProducts} articles</span>
                    </div>
                </span>
                <div className='flex items-center'>
                    <span className='font-medium text-2xl mr-3'>$ {totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6 text-black'/>
                </div>
            </p>
        </div>
    )
}

export {OrdersCard}