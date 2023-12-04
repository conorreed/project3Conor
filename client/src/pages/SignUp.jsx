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
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
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
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;



// template pulled from google