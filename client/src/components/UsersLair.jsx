/* eslint-disable no-unused-vars */
// import { Link } from 'react-router-dom';
import { useState } from "react";
import { IoSadOutline } from "react-icons/io5";
import { GET_SINGLE_USER, GET_ALL_USER } from "../utils/queries";
import { DELETE_USER, UPDATE_USER } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import Auth from "../utils/auth";

const UserLair = () => {
  const username = Auth.getProfile();
  // const {loading, data} = useQuery(GET_ALL_USER);
  const { loading, data, err } = useQuery(GET_SINGLE_USER, {
    variables: {
      id: username.data._id,
    },
  });

  const [newUsername, setNewUsername] = useState("");
  const [updateUser] = useMutation(UPDATE_USER, {
    refetchQueries: [
      { query: GET_SINGLE_USER, variables: { id: username.data._id } },
    ],
  });

  const handleUpdateUser = async (e) => {
    e.preventDefault();

    try {
      await updateUser({
        variables: {
          username: newUsername,
        },
      });

      // Perform any additional actions after successful update
      setNewUsername(""); // Clear the input field after successful update
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: [
      { query: GET_SINGLE_USER, variables: { id: username.data._id } },
    ],
  });
  // console.log(data);
  if (loading) return <p>Loading...</p>;
  if (err) {
    console.error(err);
    return <p>Error fetching user data</p>;
  }
  const userData = data?.singleUser;
  //   console.log(userData);

  const handleDeleteUser = async () => {
    try {
      // Clear user token and profile data from localStorage

      await deleteUser({
        variables: {
          username: username.data.username,
        },

      });

      // Perform any additional actions after successful deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
    localStorage.removeItem("id_token");
    // this will reload the page and reset the state of the application
    window.location.assign("/");
  };

  return (
    <article className="">
      <div className=" shadow-lg bg-[rgba(97,59,96,0.7)] p-10 rounded-xl my-2 flex flex-row justify-between items-center w-full h-[15rem]">
        <div className="flex flex-col items-center">
        <h2 className="text-white font-bold text-2xl">This you :</h2>
        <button
              onClick={handleDeleteUser}
              className="bg-red-500 flex flex-row text-white px-4 mb py-2 rounded  cursor-pointer hover:scale-125 transition-all ease-in-out"
            >
              delete?
              <div className="text-2xl pl-1">
                <IoSadOutline />
              </div>
            </button>
            </div>

        <div className=" w-[35rem] h-[10rem] rounded-xl shadow-lg bg-slate-300 flex ">
          <div className="flex flex-row justify-between items-center m-2">
          <div className="flex flex-col items-center pr-2">
            <h1 >
              HI,
              {/* {userData.characters[0].image} */}
            </h1>
            <h1> {userData.username}!</h1>
            </div>
            <div>
            <form action="onSubmit={handleFormSubmit}" >
              <label className=" font-bold" htmlFor="update">UPDATE USERNAME</label>
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder="New Name"
                className="px-2 py-1 rounded border border-gray-400"
              />
              <button
                onClick={handleUpdateUser}
                className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer hover:scale-125 transition-all ease-in-out"
              >
                update
              </button>
            </form>


            </div>
          </div>
        </div>

        <h2 className="text-white font-bold text-2xl">Ya Monsters: :</h2>
        <div className=" w-[35rem] h-[10rem] rounded-xl shadow-lg bg-slate-300 ">
        <button className=" w-[15rem] shadow-lg bg-slate-300 cursor-pointer hover:scale-125 transition-all ease-in-out">
                <div className="flex flex-row justify-between">
                  <img src="/gif/monsters/frog.gif" alt="frog" />
                  
                  <ul>
                    <li>HP : 100</li>
                    <li>ATTK : 10</li>
                  </ul>
                </div>
                <p className="font-bold">Fraowg</p>
              </button>
          <div className="flex flex-row justify-between m-2"></div>
        </div>
      </div>
    </article>
  );
};
export default UserLair;

// {userData.map((user) => (
//     <div
//       key={user._id}
//       className=" w-[35rem] h-[10rem] rounded-xl shadow-lg bg-slate-300 "
//     >
//       <div className="flex flex-row justify-between m-2">
//         <h2>{user.username}</h2>
//         {/* Add any other fields you want to display */}
//       </div>
//     </div>
//   ))}
