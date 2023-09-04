import React from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'


import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'

const Card = (data) =>{
    const context = useContext(ShoppingCartContext)
    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-1 left-1 bg-white/60 rounded-lg text-black text-sm px-3 py-0.5'>{data.data.category.name}</span>
                <img className='w-full h-full object-cover' src={data.data.images[0]} alt={data.data.title} />
                <div className='absolute top-2 right-2 flex justify-center items-center bg-white w-6 h-6 rounded-full' onClick={()=> context.setCount(context.count + 1)}>
                    <PlusIcon className='h-6 w-6 text-black'/>
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </div>
    )
}

export {Card}