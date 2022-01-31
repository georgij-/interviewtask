import { useState } from "react";
import { MdShoppingBag, MdAccountCircle } from "react-icons/md";

function Header() {
  const [chosenLanguage, setChosenLanguage] = useState("FR");

  return (
    <div className="header fixed top-0 left-0 w-full bg-white z-50 shadow-md flex justify-center items-center">
      <div className="w-2/5 p-6">
        <h1 className="font-bold text-2xl">Logo Here</h1>
      </div>
      <div className="w-full h-full">
        <input
          type="text"
          className="block mx-4 px-3 py-2 w-full h-full border rounded-full"
        />
      </div>
      <div className="w-2/5 flex items-center justify-end mr-4">
        <div className="dropdown inline-block relative text-regular">
          <button className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
            <span className="mr-1">{chosenLanguage}</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </button>
          <ul className="dropdown-menu shadow-xl bg-white absolute hidden text-gray-700 pt-1">
            <li onClick={() => setChosenLanguage("FR")} className="">
              <a
                className="hover:bg-gray-100 transition py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                FR
              </a>
            </li>
            <li onClick={() => setChosenLanguage("EN")} className="">
              <a
                className="hover:bg-gray-100 transition py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                EN
              </a>
            </li>
          </ul>
        </div>
        <span className="py-2 px-4 text-[#4A5568] text-xl">
          <MdShoppingBag />
        </span>
        <span className="py-2 px-4 text-[#4A5568] text-xl">
          <MdAccountCircle />
        </span>
      </div>
    </div>
  );
}
export default Header;
