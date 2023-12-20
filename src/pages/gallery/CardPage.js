import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardPage = () => {
  const [user, setUser] = useState("");
  const {userID} = useParams();
console.log(userID);

  useEffect(() => {
    fetch(
      `https://6579dae11acd268f9afa4460.mockapi.io/api/hw/users/${userID}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <>
    \
      {user !== null && user !== '' && (
        <div className="flex flex-col items-center justify-center">
          <img src={user.avatar} className='rounded-full' alt=''/>
          <p className="text-center">{user.name}</p>
        </div>
      )}
    </>
  );
};

export default CardPage;
