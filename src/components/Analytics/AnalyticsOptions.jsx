import * as React from "react";
import { FaPlus } from "react-icons/fa6";

function AnalyticsOptions() {
  return (
    <div className="flex gap-2.5 justify-between text-lg font-medium leading-5 text-center text-neutral-500 max-md:flex-wrap">
      <div className="flex flex-col justify-center text-white bg-cyan-800 rounded-full ">
        <div className=" cursor-pointer flex gap-2 justify-between px-4 py-2.5">
          <FaPlus className="shrink-0 self-start aspect-[0.94]  w-[17px]" />
          <div>Create Report</div>
        </div>
      </div>
      <div className="justify-center px-6 py-2.5 text-cyan-800 border border-solid border-neutral-500 rounded-full max-md:px-5 cursor-pointer hover:bg-gray-100">
        Share this dashboard
      </div>
      <div className="justify-center px-6 py-2.5 border border-solid border-neutral-500 rounded-full max-md:px-5 hover:bg-gray-100 cursor-pointer">
        Select Duration
      </div>
      <div className="justify-center px-6 py-2.5 border border-solid border-neutral-500 rounded-full max-md:px-5 hover:bg-gray-100 cursor-pointer">
        Compare with Duration
      </div>
    </div>
  );
}

export default AnalyticsOptions;