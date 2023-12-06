import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const [login, { error }] = useMutation(LOGIN);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const mutationResponse = await login({
        variables: { username: state.username, password: state.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
      setIsLoggedIn(true); 
    } catch (e) {
      console.log(e);
    }

    setState({
      username: '',
      password: '',
    });
  };

  const handleLogout = () => {
    Auth.logout();
    setIsLoggedIn(false); 
  };

  return (
    <div className="form-container login-container h-screen w-screen text-blue-100 bg-gray-800 flex items-center">
      <form className="flex flex-col items-center" onSubmit={handleOnSubmit}>
        <h1>Login</h1>
        <span>Enter your credentials</span>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={state.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <div className="relative inline-flex group m-5">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt "></div>
          <button className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer hover:scale-125 ease-in-out ">
            {isLoggedIn ? 'LOG OUT!' : 'LOG IN!'}
          </button>
        </div>
      </form>
      {error && <p>{error.message}</p>}
      {isLoggedIn && (
        <div>
          <p>Welcome, you are logged in!</p>
          <button onClick={handleLogout}>Log out</button>
        </div>
      )}
    </div>
  );
};

export default Login;
