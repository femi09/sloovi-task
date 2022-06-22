import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux/es/exports";

const UserDropdown = ({ handleUser, assignedUser }) => {
  const [show, setShow] = useState(false);
  const { users } = useSelector((state) => state.auth);
  console.log('assign user', assignedUser)

  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [show]);

  return (
    <div ref={ref} className="relative w-full">
      <div className="flex bg-white justify-between leading-5 py-3 px-4 border-2 border-gray-400 rounded-md text-gray-700 items-center">
        <div className="w-2/3 flex px-2 text-gray-900">
          {assignedUser ? assignedUser : "Add User"}
        </div>
        <div
          className="w-1/3 flex items-center justify-end cursor-pointer rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue-500  active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <svg
            className="ml-1 mr-1 w-4 h-4 lg:h-5 lg:w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={() => setShow(!show)}
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div
        className={`${
          show
            ? "z-40 absolute w-full mt-3 px-2 bg-white font-medium shadow-lg"
            : "hidden z-40 mt-2 rounded-md shadow-lg"
        }`}
      >
        <div
          className="bg-white py-4 h-32 sm:h-48 shadow-xs overflow-scroll scrollbar-hidden"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {users.map((user, index) => (
            <div
              key={index}
              onClick={() => {
                setShow(!show);
                handleUser(user.name);
              }}
              className="flex cursor-pointer px-2 py-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              <span>{user.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
