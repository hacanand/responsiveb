import * as React from "react";
import img1 from "../../assets/Path 2.png";
import img2 from "../../assets/Path 2 (1).png";
import img3 from "../../assets/Path2.3.png";
import img4 from "../../assets/Path4.png";

function ImageCard({title, description, changePrice, changeSymbol, dayChangePrice, dayChangePercentage, currentPrice, changeBgGraphIcon, CardBgcolor}) {
  return (
    <div className="flex flex-col max-md:ml-0">
      <div className=" relative grow shrink-0 min-w-56 w-full shadow-sm aspect-[1.56] max-md:mt-6  ">
        <img
          src={changeBgGraphIcon}
          alt="Graph Icon"
          className="absolute bottom-0 ,min-w-56 w-full rounded-lg"
        />
        <div className={`flex flex-col h-full rounded-lg   ${CardBgcolor} `}>
          <div className="flex flex-col  px-5 p-2 z-10">
            <div className="flex flex-col text-xl ">
              <div className="text-white  text-md font-semibold">
                {title.toUpperCase()}
              </div>
              <div className="text-white text-sm">{description}</div>
              <div className="text-white  font-semibold text-3xl">
                {changePrice}
                <span className="text-sm ml-2">{changeSymbol}</span>
              </div>
              <div className="text-white">
                {dayChangePrice} ({dayChangePercentage})
              </div>
              <div className="text-white mt-2">{currentPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsCard() {
  const datas = [
    {
      title: "Efficiency",
      description: "Lorem ",
      changePrice: "1.1921",
      //changeSymbol: "▲",
      changeSymbol: "▼",
      dayChangePrice: "+0.0001",
      dayChangePercentage: "+0.01%",
      currentPrice: "0.00 USD",
      changeBgGraphIcon: img1,
      CardBgcolor: "bg-blue-300",
    },
    {
      title: "time to market",
      description: "Lorem ",
      changePrice: "1.1921",
      changeSymbol: "▲",
      dayChangePrice: "+0.0001",
      dayChangePercentage: "+0.01%",
      currentPrice: "0.00 USD",
      changeBgGraphIcon: img2,
      CardBgcolor: "bg-green-900",
    },
    {
      title: "tech debt",
      description: "Lorem ",
      changePrice: "1.1921",
      changeSymbol: "▲",
      dayChangePrice: "+0.0001",
      dayChangePercentage: "+0.01%",
      currentPrice: "0.00 USD",
      changeBgGraphIcon: img3,
      CardBgcolor: "bg-gray-600",
    },
    {
      title: "Predictability",
      description: "Lorem ",
      changePrice: "1.1921",
      changeSymbol: "▼",
      dayChangePrice: "+0.0001",
      dayChangePercentage: "+0.01%",
      currentPrice: "1,566 BTC",
      changeBgGraphIcon: img4,
      CardBgcolor: "bg-red-400",
    },
  ];

  return (
    <section className="h-full w-full">
      <div className="flex flex-wrap gap-4 justify-between max-md:flex-col max-md:gap-0">
        {datas.map((data, index) => (
          <ImageCard key={index} title={data.title} {...data}  />
        ))}
      </div>
    </section>
  );
}

export default AnalyticsCard;
