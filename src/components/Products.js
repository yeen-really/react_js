import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Audio } from 'react-loader-spinner'

const Products = (props) => {

    const [goods, setGoods] = useState([])

    useEffect(()=>{
        fetch('https://6579dae11acd268f9afa4460.mockapi.io/api/hw/articles')
        .then((res) => res.json())
        .then((data) => {
            setGoods(() => data)
        })
    }, [])
    return (
        <>
        <h1 className='text-3xl py-16 ml-24'>Users</h1>
        <div className='grid grid-cols-4 gap-5 mx-24'>
        {goods.length > 0 ? (
                goods.map((good) => {
                    return(
                        <ProductCard avatar={good.avatar} name={good.name}/>
                    )
                }) 
            ) : <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />}
        </div>

        </>

    )
}

export default Products