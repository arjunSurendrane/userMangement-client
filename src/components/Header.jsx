import { useNavigate } from "react-router-dom";
import { logo } from "../contents";
import { useEffect } from "react";

export default function Header({ menuItem }) {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  return (
    <>
      {" "}
      {role && (
        <>
          <div className="w-full md:h-16 h-7   pb-11 px-11 flex justify-between shadow-md">
            <div className=" md:w-20 w-4   md:h-full cursor-pointer">
              <img src={logo} alt="logo" className="md:h-10 h-6" />
            </div>
            <div>
              <ul className="flex justify-between">
                {menuItem?.map((item) => (
                  <li
                    className="font-bold md:text-lg cursor-pointer md:m-4"
                    onClick={() => navigate(item?.link)}
                    key={item.name}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1
                className="font-bold cursor-pointer text-sm md:text-base"
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
              >
                Logout 📤
              </h1>
            </div>
          </div>
        </>
      )}
    </>
  );
}
