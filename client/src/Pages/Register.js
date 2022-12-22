import React from "react";
import "./Register.css";

export default function Register() {
  const [firstname, setFirstname] = React.useState();
  const [lastname, setLastname] = React.useState();
  const [email, setEmail] = React.useState();
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [confirmPassword, setConfirmPassword] = React.useState();
  const [error, setError] = React.useState(false);

  let passwordsMatch = true;
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (password !== confirmPassword) {
        passwordsMatch = false;
      } else {
        //add user
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname,
            lastname,
            email,
            username,
            password,
          }),
          Cache: "default",
        });
        const data = await res.json();
        data._id ? window.location.replace("/login") : setError(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="registerWrapper">
      <div className="registerContainer">
        <h1 className="registerTitle">CREATE AND ACCOUNT</h1>
        <form className="registerForm" onSubmit={handleSubmit}>
          <input
            type="text"
            className="registerFormInput"
            placeholder="First Name"
            onChange={(event) => setFirstname(event.target.value)}
          />
          <input
            type="text"
            className="registerFormInput"
            placeholder="Last Name"
            onChange={(event) => setLastname(event.target.value)}
          />
          <input
            type="text"
            className="registerFormInput"
            placeholder="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="text"
            className="registerFormInput"
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="text"
            className="registerFormInput"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="text"
            className="registerFormInput"
            placeholder="Confirm Password"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <span className="registerAgreement">
            By creating an account, I consent to processing of my personal data
            in accordance with the <strong>PRIVACY POLICY</strong>
          </span>

          <button className="registerCreateButton" type="submit">
            CREATE
          </button>
        </form>
        <a className="alreadyHaveAccount" href="/login">
          Already Have an Account?
        </a>
        {!passwordsMatch && (
          <h4 style={{ "margin-top": "20px", color: "red" }}>
            Password and confirm password do not match...Please tey again...
          </h4>
        )}
        {error && (
          <h4 style={{ "margin-top": "20px", color: "red" }}>
            Something Went Wrong!
          </h4>
        )}
      </div>
    </div>
  );
}
