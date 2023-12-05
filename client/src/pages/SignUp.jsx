import React from "react";

function SignUp() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { email, password, confirmPassword } = state;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Perform sign-up logic here with email and password

    alert(`You are signing up with email: ${email} and password: ${password}`);

    // Reset the state after submission
    setState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="form-container sign-up-container h-screen w-screen  text-blue-100 bg-gray-800 flex items-center">
      <form className="flex flex-col items-center" onSubmit={handleOnSubmit}>
        <h1>Sign up</h1>
        <span>Create an account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <div className="relative inline-flex  group m-5">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt "></div>
          <button className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 cursor-pointer hover:scale-125 ease-in-out ">
           
            SIGN UP!
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;



// template pulled from google