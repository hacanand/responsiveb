import * as React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { RxCrossCircled } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
 
 

const IconButton = ({ src }) => {
  return (
    <div className="flex justify-center items-center self-stretch p-1.5 my-auto w-8 h-8 bg-white rounded-xl shadow-lg text-cyan-800">
    {src}
    </div>
  );
};

function SearchAndProfile() {
  const iconButtons = [
    {
      src: <FaRegBell className="aspect-square w-[21px]" />,
      alt: "Icon 1",
    },
    {
      src: <AiOutlineMessage className="aspect-square w-[21px]" />,
      alt: "Icon 2",
    },
    {
      src: <IoSettingsOutline className="aspect-square w-[21px]" />,
      alt: "Icon 3",
    },
  ];

  return (
    <div className="flex gap-5 justify-between self-center w-full max-md:flex-wrap  ">
      <div className="relative flex flex-col justify-center self-start mt-1.5 font-light rounded-sm border border-solid border-zinc-500  min-w-[480px] ">
        <div className="flex gap-2 items-center px-2 py-0.5 rounded-sm ">
          <CiSearch className="text-cyan-600 shrink-0 self-stretch my-auto aspect-square w-[18px] text-xl " />
          <div className="flex flex-col flex-1 justify-center self-stretch py-0.5">
            <div className="absolute justify-center text-xs leading-3 whitespace-nowrap text-cyan-600 -top-2 bg-white  ">
              Search
            </div>
            <label htmlFor="search" className="sr-only">
              Search by profile, setting, artifact etc...
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search by profile, setting, artifact etc..."
              className=" font-semibold leading-3 p-2  w-full bg-transparent border-none focus:outline-none focus:ring-0"
            />
          </div>
          <RxCrossCircled className="shrink-0 self-stretch my-auto aspect-square w-[15px] text-cyan-600" />
        </div>
      </div>
      <div className="flex gap-3.5 items-center ">
        {iconButtons.map((button, index) => (
          <IconButton key={index} src={button.src} alt={button.alt} />
        ))}
        <RxAvatar
          className="shrink-0 self-stretch rounded-full 
         flex justify-center items-center p-1.5 my-auto w-10 h-10 shadow-md  text-cyan-800"
        />
      </div>
    </div>
  );
}
export default SearchAndProfile;
