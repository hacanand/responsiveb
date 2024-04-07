import * as React from "react";
import SearchAndProfile from "../Analytics/SearchAndProfile";
import { RiTimer2Line } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import pentagon from "../../assets/pentagon.svg";

const ContentCard = ({ imageSrc, title }) => (
  <div className="overflow-hidden relative flex-col justify-center items-start px-5 py-5 aspect-[1.62] w-[136px] max-md:pr-5">
    <img src={imageSrc} className="object-cover absolute inset-0 size-full" />

    <div className="absolute my-auto">{title}</div>
  </div>
);

// const ArrowImage = ({ imageSrc, altText }) => (
//   <img
//     src={imageSrc}
//     alt={altText}
//     className="shrink-0 self-stretch my-auto border-solid aspect-[1.89] border-[3px] border-zinc-400 stroke-[3.259px] stroke-zinc-400 w-[45px]"
//   />
// );

const WaitTimeCard = ({ title }) => (
  <div className="grow justify-center items-start px-5 py-8 max-w-48 max-h-56 text-sm font-medium leading-5 bg-emerald-50 text-neutral-500 max-md:mt-10">
    {title}
  </div>
);

function StartBuilding() {
  const contentCardData = [
    {
      imageSrc: pentagon,
      title: "Approve Content",
    },
    {
      imageSrc: pentagon,
      title: "Create Content",
    },
    {
      imageSrc: pentagon,
      title: "Approve Content",
    },
    {
      imageSrc: pentagon,
      title: "Create Content",
    },
  ];

  const waitTimeCardData = [
    { title: "2 Weeks (wait for availability)" },
    { title: "1 Week (wait for approval authority)" },
    { title: "2 Weeks (wait for IT support)" },
  ];

  return (
    <div className="flex flex-col  w-full">
      <SearchAndProfile />
      <div className="flex flex-col mt-32 ml-48 max-w-full text-base font-medium leading-5 text-white ">
        <div className="flex max-md:flex-wrap max-md:pr-5   ">
          {contentCardData.map((card, index) => (
            <>
              <ContentCard imageSrc={card.imageSrc} title={card.title} />
              {index < contentCardData.length - 1 && (
                <>
                  <FaArrowRightLong className="shrink-0 self-stretch my-auto  text-5xl  text-zinc-400 stroke-zinc-400 w-[45px]" />
                  <RiTimer2Line className="shrink-0 self-stretch my-auto aspect-square w-[53px] text-5xl text-cyan-700" />
                  <FaArrowRightLong className="shrink-0 self-stretch my-auto  text-5xl  text-zinc-400 stroke-zinc-400 w-[45px]" />
                </>
              )}
            </>
          ))}
        </div>
      </div>
      <div className="w-full h-full" />
      <div className="flex  pt-6 self-stat font-medium leading-loose text-neutral-600  max-md:flex-wrap">
        <div className="flex px-12 gap-10 ">
          <div className="my-auto">Active Time</div>
          <div className="leading-10  flex border-b border-t px-6 border-gray-400 self-end gap-56 justify-between">
            <div>1 Day</div>
            <div>2 Days</div>
            <div>4 Hours</div>
            <div>4 Hours</div>
          </div>
        </div>
      </div>
      
        <div className="flex   self-stat font-medium leading-loose text-neutral-600  max-md:flex-wrap">
          <div className="flex px-12 gap-12 ">
            <div className="my-auto">Wait Time</div>
            <div className="leading-10  flex  px-12 self-end gap-32  border-cyan-500 border-b-2 ">
              {waitTimeCardData.map((card, index) => (
                <div
                  key={index}
                  className=" "
                >
                  <WaitTimeCard title={card.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex  justify-between self-center mt-12 w-full text-xl font-semibold leading-5 max-w-[950px] text-zinc-600 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div>Flow time = 47 Days</div>
        <div >Total Active time = 5 Days</div>
        <div>Flow Efficiency=11%</div>
          </div>
          <button className=" mt-16 py-2 px-8 rounded-full text-white self-center bg-cyan-900">Save</button>
      </div>
  
  );
}

export default StartBuilding;
