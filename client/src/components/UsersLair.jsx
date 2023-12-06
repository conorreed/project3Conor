/* eslint-disable no-unused-vars */
// import { Link } from 'react-router-dom';
import { IoSadOutline } from "react-icons/io5";
import { GET_SINGLE_USER, GET_ALL_USER } from "../utils/queries";
import { DELETE_USER } from "../utils/mutations";
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
      await deleteUser({
        variables: {
          username: username.data.username,
        },
      });

      // Perform any additional actions after successful deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <article className="">
      <div className=" shadow-lg bg-[rgba(97,59,96,0.7)] p-10 rounded-xl my-2 flex flex-row justify-between items-center w-full h-[15rem]">
        <h2 className="text-white font-bold text-2xl">This you :</h2>

        <div className=" w-[35rem] h-[10rem] rounded-xl shadow-lg bg-slate-300 ">
          <div className="flex flex-row justify-between m-2">
            <h2>
              WELCOME {userData.username} {userData.characters[0].image}
            </h2>
            <button className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer hover:scale-125 transition-all ease-in-out">
              update
            </button>
            <button
              onClick={handleDeleteUser}
              className="bg-red-500 flex flex-row text-white px-4 py-2 rounded cursor-pointer hover:scale-125 transition-all ease-in-out"
            >
              delete
              <div className="text-2xl pl-1">
                <IoSadOutline />
              </div>
            </button>
          </div>
        </div>

        <h2 className="text-white font-bold text-2xl">This them :</h2>
        <div className=" w-[35rem] h-[10rem] rounded-xl shadow-lg bg-slate-300 ">
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
