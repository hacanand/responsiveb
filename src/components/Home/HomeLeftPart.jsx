import * as React from "react";
import { Carousel } from "flowbite-react";

function ProgressIndicator({ value, total }) {
  return (
    <button className="justify-center px-6 py-2.5 whitespace-nowrap bg-cyan-600 rounded-[100px] max-md:px-5">
      {value}/{total}
    </button>
  );
}

function Card({ title, buttonText, onClick ,index}) {
  return (
    <section className="flex flex-col items-center px-10 py-8 mt-7 w-full text-lg font-medium leading-5 text-center text-white border bg-gray-200 rounded-3xl shadow-sm max-md:px-5 max-md:max-w-full">
      <ProgressIndicator value={index} total={6} />
      <h2 className="self-stretch mt-10 text-2xl leading-8  text-black max-md:max-w-full">
        {title}
      </h2>
      <button
        className="justify-center px-6 py-2.5 mt-10 mb-4 bg-cyan-800 rounded-[100px] max-md:px-5"
        onClick={onClick}
      >
        {buttonText}
      </button>
    </section>
  );
}

function HomeLeftPart() {
  const handleStartBuildingClick = () => {
    console.log("Start Building clicked");
  };

  return (
    <main className="flex flex-col py-20 w-full">
      <h1 className=" w-full text-2xl leading-8 text-black max-md:max-w-full font-bold">
        Set-up Catalix for Success
      </h1>
      <p className="mt-3 w-full text-base font-base leading-7 text-neutral-600 max-md:max-w-full">
        Get Catalix up to date or start your transformation by following the
        guide below.
      </p>
      <div className="grid grid-cols-1 ">
        <Carousel leftControl=" " rightControl=" "  className=" ">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card
              title="Build your development value stream map"
                buttonText="Start Building"
                index={index+1}
              onClick={handleStartBuildingClick}
            />
          ))}
           
        </Carousel>
      </div>
    </main>
  );
}

export default HomeLeftPart;
