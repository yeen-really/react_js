import React, { useState } from 'react'

const ProductCard = (props) => {
    const {name, avatar} = props;

    return (
        <>
        <div className='flex flex-col items-center justify-center'>
            <img src={avatar} className='rounded-full' alt=''/>
            <p className='text-center'>{name}</p>
        </div>
        </>

    )
}

export default ProductCard