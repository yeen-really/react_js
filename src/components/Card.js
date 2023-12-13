import React, { useState } from 'react'

const Card = (props) => {
    
       const [modalGoods, setModalGoods] = useState(false);

    const toggleModalGoods = () => {
        setModalGoods(!modalGoods);
    };

    return (
        <>
            <div>
                <button onClick={toggleModalGoods} className='bg-gray-300 p-2 rounded hover:bg-gray-400 mr-5'>{props.title}</button>
            </div>
            {modalGoods && (
                <div className='absolute inset-0 bg-black/25 flex items-center justify-center  '>
                    <div className='bg-white w-[250px] rounded h-[250px] flex items-center justify-center  '>
                        <div className='flex content-center  flex-col items-center space-y-5'>
                            <h2 className='text-3xl'>{props.title}</h2>
                            <p className=''>{props.description}</p>
                            <p className=''>{props.price}</p>
                            <button onClick={toggleModalGoods} className=' self-end bg-gray-300 p-2 my-10 rounded hover:bg-gray-400 m-auto'>Закрыть</button>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default Card;