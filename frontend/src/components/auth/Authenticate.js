import React, { useState } from "react";
import logo from "../../imgs/logo.svg";
import { loginAction, signUpAction } from "../../redux/actions/userActions";
import { setAlert } from "../../redux/actions/alertActions";
import { useDispatch } from "react-redux";
const Authenticate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitVal, setSubmitVal] = useState("Login");
  console.log(email, password);

  const dispatch = useDispatch();

  const submit = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      return dispatch(setAlert("Password must be 8 characters or more"));
    }
    submitVal === "Login"
      ? dispatch(loginAction(email, password))
      : dispatch(signUpAction(email, password));
  };

  const optionsClick = (e) => {
    setSubmitVal(e.target.id);
  };
  //classes
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  let loginClass =
    submitVal === "Login"
      ? "auth__options--login auth__options--clicked"
      : "auth__options--login";
  let signupClass =
    submitVal === "Signup"
      ? "auth__options--login auth__options--clicked"
      : "auth__options--login";

  return (
    <div className="auth__container">
      <div className="auth__options">
        <div className={loginClass} id="Login" onClick={(e) => optionsClick(e)}>
          Login
        </div>
        <div
          className={signupClass}
          id="Signup"
          onClick={(e) => optionsClick(e)}
        >
          SignUp
        </div>
      </div>
      <div className="auth">
        <img className="auth__header" src={logo} alt="logo" />
        <form className="auth__form" onSubmit={(e) => submit(e)}>
          <input
            className="auth__form--input"
            type="email"
            placeholder="email"
            onChange={(e) => updateEmail(e)}
          />
          <input
            className="auth__form--input"
            type="password"
            placeholder="password"
            onChange={(e) => updatePassword(e)}
          />
          <input className="auth__form--submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};
export default Authenticate;
