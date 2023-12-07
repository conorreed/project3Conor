import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup() {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
      },
      // onCompleted: (data) => {
      //   console.log("You Signed Up!!!:", data);
      // },
 
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
// how to get link working to go to login page
  return (
    <div className="form-container my-1 h-screen w-screen text-blue-100 bg-gray-800 flex items-center">
      <Link to="/login">← Go to Login</Link>

      <h1>Signup</h1>
      <form className="flex flex-col items-center shadow-lg bg-[rgba(97,59,96,0.7)] p-10 rounded-xl my-5" onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="username">Username:</label>
          <input
            placeholder="YourUsername"
            name="username"
            type="text"
            id="username"
            onChange={handleChange}
            className='text-black font-bold'
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            className='text-black font-bold'
          />
          </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="password">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="password"
            onChange={handleChange}
            className='text-black font-bold'
          />
        </div>
        <div className="relative inline-flex group m-5">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt "></div>
          <button className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer hover:scale-125 ease-in-out ">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
