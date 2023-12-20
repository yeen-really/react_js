import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const UserCard = (props) => {
    const {name,id,  avatar} = props;

    return (
        <>
        <div key={id} className='flex flex-col items-center justify-center'>
            <img src={avatar} className='rounded-full' alt=''/>
            <p className='text-center font-bold'>{name}</p>
            <h3>
                <Link to={`/users/${id}`}>Подробнее</Link>
            </h3>
        </div>
        </>

    )
}

export default UserCard