import { useEffect } from "react";
import users from "../../users.json";
import { addUsers, deleteExactUser } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/usersSelectors";

export const MainPage = () => {
  // console.log(products)

  const storeUsers = useSelector(getUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addUsers(users));
  }, [dispatch]);

  const deleteExactUserHandler = (id) => () => {
    dispatch(deleteExactUser({ id }));
  };

  return (
    <div>
      {storeUsers.length > 0 &&
        storeUsers.map((user) => {
          return (
            <div key={`${user.id} + ${user.title}`}>
              <h2>{user.name}</h2>
              <div>{user.age}</div>
              <button onClick={deleteExactUserHandler(user.id)}>delete</button>
            </div>
          );
        })}
    </div>
  );
};
