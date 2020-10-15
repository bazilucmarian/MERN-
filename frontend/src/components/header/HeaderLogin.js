import React from "react";
import { withRouter } from "react-router-dom";
const HeaderLogin = (props) => {
  const navLogin = () => {
    props.history.push("/auth");
  };
  return (
    <input
      type="submit"
      className="header__right--login"
      value="Login"
      onClick={() => navLogin()}
    />
  );
};
export default withRouter(HeaderLogin);
