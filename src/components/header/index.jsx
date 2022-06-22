import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "./../../store/actions/auth";

const Header = () => {
  const { users } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="shadow-lg flex py-1 px-6 items-center justify-between">
      <Link to="/">
        <h1 className="font-bold text-2xl cursor-pointer">Sloovi</h1>
      </Link>
      <div className="px-4">
        {" "}
        <p className="my-2">
          <span className="font-semibold mx-1">Welcome</span>{" "}
          {users[0]?.name ?? "Comrade"}
        </p>
        <p
          onClick={handleLogOut}
          className="text-center text-red-500 font-bold text-right cursor-pointer"
        >
          logout
        </p>
      </div>
    </div>
  );
};

export default Header;
