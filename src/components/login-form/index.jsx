import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { login } from "../../store/actions/auth";
import InputField from "./input-field";
import './index.css'

const LoginForm = () => {
 const [loginData, setLoginData] = useState({
    email:"",
    password:"",
 })

 const {isLoading} = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleChange = async (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginData))
  };
  return (
    <>
    <h1 className="text-4xl w-1/2 font-bold text-center my-8 mx-auto text-gray-700">
    Sloovi Task Login
  </h1>
  <div className="grid place-items-center grid place-items-center sm:w-2/3 2xl:w-1/2 bg-gray-100 bg-opacity-50 bg-gray-700 rounded-lg py-20 my-20 sm:mx-auto">
    <form
      onSubmit={handleSubmit}
      className="px-4 sm:px-0 sm:w-2/3 xl:w-1/2"
      action=""
    >
      <div className="my-6 w-full">
        <InputField
          name="email"
          placeholder="enter your email"
          value={loginData.email}
          type="text"
          label="Email"
          handleChange={handleChange}
        />
      </div>

      <div className="my-6 w-full">
        <InputField
          name="password"
          placeholder="enter your password"
          value={loginData.password}
          type="password"
          label="Password"
          handleChange={handleChange}
        />
      </div>
      <div className="my-4 flex w-full">
        <button className="px-4 py-2 rounded-lg bg-gray-700 text-white font-bold 2xl:w-1/3 my-4 mx-auto">
          {isLoading ? "logging in..." :"Login"}
        </button>
      </div>
    </form>
  </div>
</>
  );
};

export default LoginForm;
