import * as React from "react";

import { LiaHomeSolid } from "react-icons/lia";
import { BsBoxSeam } from "react-icons/bs";
import { PiTimer } from "react-icons/pi";
import { MdOutlineAnalytics } from "react-icons/md";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
 

// function Icon({ src, alt, className }) {
//   return (
//     <img
//       src={src}
//       alt={alt}
//       className={`shrink-0 aspect-[1.05] w-[22px] ${className}`}
//     />
//   );
// }

function NavItem({ icon, children, active, onClick }) {
  return (
    <button
      className={`flex gap-4 px-6 py-5 hover:text-gray-300 text-center font-semibold rounded-2xl leading-[100%] ${
        active ? "bg-slate-500" : ""
      }`}
      onClick={onClick}
    >
      {icon}
      <div>{children}</div>
    </button>
  );
}

const navItems = [
  {
    icon: (
      <LiaHomeSolid className="shrink-0 my-auto aspect-square size-5 w-[30px]" />
    ),
    label: "Home",
  },
  {
    icon: (
      <PiTimer className="shrink-0 my-auto aspect-square size-5 w-[30px]" />
    ),
    label: "Activities",
  },
  {
    icon: (
      <MdOutlineAnalytics className=" shrink-0 my-auto aspect-square size-5 w-[30px]" />
    ),
    label: "Analytics",
    active: true,
  },
  {
    icon: (
      <HiOutlineRocketLaunch className=" shrink-0 my-auto aspect-square size-5 w-[30px]" />
    ),
    label: "Transformation",
  },
  {
    icon: (
      <HiOutlineSquare3Stack3D className=" shrink-0 my-auto aspect-square size-5 w-[30px]" />
    ),
    label: "Library",
  },
];

function Navigation({ setActiveTab}) {
  const [activeItem, setActiveItem] = React.useState("Analytics");

  const handleNavItemClick = (label) => {
    setActiveItem(label);
    setActiveTab(label);

  };
  const handleBackClick = () => {
    console.log("Back clicked");
  };
  const handleSettingsClick = () => {
    console.log("Settings clicked");
  };

  const handleLogoutClick = () => {
    console.log("Logout clicked");
  };

  return (
    <nav className="flex flex-col px-6 pt-9 pb-5 text-lg text-white whitespace-nowrap bg-cyan-800 shadow-sm min-w-[300px] rounded-[35.556px]">
      <IoArrowBackCircleOutline
        className="self-end cursor-pointer hover:text-gray-300 size-10 w-10 aspect-square"
        onClick={handleBackClick}
      />
      <div className="flex gap-3 justify-between self-center mt-7 text-5xl font-semibold">
        <BsBoxSeam className="shrink-0 my-auto aspect-square w-[43px]" />
        <h1>Catalix</h1>
      </div>
      <ul className="mt-12 space-y-2.5">
        {navItems.map(({ icon, label }) => (
          <li key={label}>
            <NavItem
              icon={icon}
              active={activeItem === label}
              onClick={() => handleNavItemClick(label)}
            >
              {label}
            </NavItem>
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-end py-3 mt-20 text-center border-t border-white border-solid leading-[100%]">
        <NavItem icon={<IoSettingsOutline />} onClick={handleSettingsClick}>
          <div className="my-auto">Settings</div>
        </NavItem>
        <NavItem icon={<IoLogOutOutline />} onClick={handleLogoutClick}>
          <div className="my-auto">Logout</div>
        </NavItem>
      </div>
    </nav>
  );
}
export default Navigation;
