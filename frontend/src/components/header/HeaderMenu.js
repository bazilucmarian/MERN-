import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { logOutAction } from "../../redux/actions/userActions";
const HeaderMenu = () => {
  const dispatch = useDispatch();
  const logout = () => dispatch(logOutAction());
  return (
    <div className="header-menu">
      <AiOutlineMenu />
      <div className="header-menu__expand">
        <div className="header-menu__expand--links">
          <Link className="header-menu__expand--links--text" to="/newpage">
            New Page
          </Link>
          <Link className="header-menu__expand--links--text" to="/newpage">
            New Page
          </Link>
          <Link className="header-menu__expand--links--text" to="/newpage">
            New Page
          </Link>
          <Link
            className="header-menu__expand--links--text"
            onClick={() => logout()}
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
