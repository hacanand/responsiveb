import * as React from "react";

// interface CardProps {
//   title: string;
//   status: "green" | "red";
//   completedCount: number;
//   totalCount: number;
//   percentDone: number;
// }

const Card = ({
  title,
  status,
  completedCount,
  totalCount,
  percentDone,
}) => {
  return (
    <div className="flex flex-col border shadow grow justify-center p-6 mx-auto w-full text-base leading-5 text-black bg-white rounded-xl max-md:px-5 max-md:mt-2.5">
      <div className="flex gap-5 justify-between items-start text-base font-semibold leading-5">
        <div className="mt-3.5">{title}</div>
        <div
          className={`shrink-0 rounded-full h-[15px] w-[15px] ${
            status === "green" ? "bg-green-500" : "bg-red-400"
          }`}
        />
      </div>
      <div className="flex gap-5 justify-between mt-4">
        <div className="font-light">
          {title === "On Time"
            ? "Completed Iterations"
            : title === "On Scope"
            ? "Story Points Done"
            : "Average Velocity"}
        </div>
        <div className="font-semibold  text-right">{completedCount}</div>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="font-light">
          {title === "On Time"
            ? "Total Iterations"
            : title === "On Scope"
            ? "Total Story Points"
            : "Required Velocity"}
        </div>
        <div className="font-semibold text-right">{totalCount}</div>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="font-light">
          {title === "On Time" || title === "On Scope" ? "% Done" : ""}
        </div>
        <div className="font-semibold text-right">
          {title === "On Time" || title === "On Scope" ? `${percentDone}%` : ""}
        </div>
      </div>
    </div>
  );
};

function AnalyticsSummaryCard() {
  const cardData = [
    {
      title: "On Time",
      status: "green",
      completedCount: 7,
      totalCount: 9,
      percentDone: 77.8,
    },
    {
      title: "On Scope",
      status: "green",
      completedCount: 3200,
      totalCount: 4230,
      percentDone: 70.9,
    },
    {
      title: "On Velocity",
      status: "red",
      completedCount: 428.6,
      totalCount: 615.0,
      percentDone: 0,
    },
  ];

  return (
    <div className="w-full">
      <div className="flex gap-5 justify-center max-md:flex-col max-md:gap-0">
        {cardData.map((card, index) => (
          <div
            key={card.title}
            className={`flex flex-col ${
              index === 1 ? "ml-5" : ""
            } w-[33%] max-md:ml-0 max-md:w-full`}
          >
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default AnalyticsSummaryCard;