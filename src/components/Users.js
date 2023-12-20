import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { Audio } from "react-loader-spinner";

const Users = (props) => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    fetch("https://6579dae11acd268f9afa4460.mockapi.io/api/hw/users")
      .then((res) => res.json())
      .then((data) => {
        setGoods(() => data);
      });
  }, []);
  return (
    <>
      <h1 className="text-3xl py-16 ml-24">Users</h1>
      <div className="grid grid-cols-4 gap-5 mx-24">
        {goods.length > 0 ? (
          goods.map((good) => {
            return <UserCard avatar={good.avatar} name={good.name} id={good.id}/>;
          })
        ) : (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        )}
      </div>
    </>
  );
};

export default Users;
