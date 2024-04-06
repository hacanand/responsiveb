import React from "react";
import img1 from "../../assets/Path 2.png";

const tableHead = [
  {
    title: "Pageviews",
    no: "356,928",
    img: img1,
  },
  {
    title: "Unique pageviews",
    no: "1,234",
    img: img1,
  },
  {
    title: "Avg. time on page",
    no: "2m 34s",
    img: img1,
  },
  {
    title: "Entrances",
    no: "1,234",
    img: img1,
  },
  {
    title: "Bounce rate",
    no: "34.5%",
    img: img1,
  },
  {
    title: "Exit rate",
    no: "34.5%",
    img: img1,
  },
];
const TableRow = [
  {
    path: "/Defect Arrival Rate",
    pageViews: "872,337",
    uniquePageViews: "574,332",
    avgTimeOnPage: "00:05:43",
    percentageChange: "15.33%",
    entrances: "802,873",
    exitPercentage: "25.96%",
    pageValue: "$1,093",
  },
  {
    path: "/Fixed Rate",
    pageViews: "803,792",
    uniquePageViews: "456,792",
    avgTimeOnPage: "00:05:24",
    percentageChange: "15.33%",
    entrances: "793,982",
    exitPercentage: "76.13%",
    pageValue: "$6,792",
  },
  {
    path: "/cycle time",
    pageViews: "740,702",
    uniquePageViews: "405,860",
    avgTimeOnPage: "00:04:36",
    percentageChange: "15.33%",
    entrances: "684,873",
    exitPercentage: "41.54%",
    pageValue: "$702",
  },
  {
    path: "/lead time",
    pageViews: "676,659",
    uniquePageViews: "340,765",
    avgTimeOnPage: "00:04:12",
    percentageChange: "15.33%",
    entrances: "638,982",
    exitPercentage: "46.42%",
    pageValue: "$2,659",
  },
  {
    path: "/new features",
    pageViews: "508,837",
    uniquePageViews: "317,543",
    avgTimeOnPage: "00:04:11",
    percentageChange: "15.33%",
    entrances: "555,982",
    exitPercentage: "27.40%",
    pageValue: "$4,508",
  },
  {
    path: "/ready features",
    pageViews: "495,938",
    uniquePageViews: "310,554",
    avgTimeOnPage: "00:02:56",
    percentageChange: "15.33%",
    entrances: "297,303",
    exitPercentage: "28.89%",
    pageValue: "$495",
  },
];
const TableHeadData = ({ title, no, img }) => (
  <div className="flex flex-col text-right">
    <div className="self-end text-xs ">{title}</div>
    <div className="mt-2.5 text-sm ">{no}</div>
    <img
      loading="lazy"
      src={img}
      alt=""
      className={` mt-1.5 h-[17px] self-end w-[74px]`}
    />
  </div>
);
const TableRowData = ({
  path,
  pageViews,
  uniquePageViews,
  percentageChange,
  avgTimeOnPage,
  entrances,
  exitPercentage,
  pageValue,
}) => (
  <tr class=" border-b  bg-gray-50 text-gray-700 border-gray-300">
    <th
      scope="row"
      class="px-2 py-3 text-gray-700 font-medium   whitespace-nowrap"
    >
      {path}
    </th>
    <td class="px-2 py-4">
      <div className="flex justify-end">
        <div> {pageViews}</div>
        <div className="ml-2 text-gray-400">({percentageChange})</div>
      </div>
    </td>
    <td class="px-2 py-4">
      <div className="flex justify-end">
        <div>{uniquePageViews}</div>
        <div className="ml-2 text-gray-400">({percentageChange})</div>
      </div>
    </td>
    <td class="px-2 py-4">
      <div className="flex justify-end">
        <div>{avgTimeOnPage}</div>
        <div className="ml-2 text-gray-400">({percentageChange})</div>
      </div>
    </td>
    <td class="px-2 py-4">
      <div className="flex justify-end">
        <div> {entrances}</div>
        <div className="ml-2 text-gray-400">({percentageChange})</div>
      </div>
    </td>
    <td class="px-2 py-4">
      <div className="flex justify-end">
        <div> {exitPercentage}</div>
        <div className="ml-2 text-gray-400">({percentageChange})</div>
      </div>
    </td>
    <td class="px-2 py-4">
      <div className="flex justify-end">
        <div> {pageValue}</div>
        <div className="ml-2 text-gray-400">({percentageChange})</div>
      </div>
    </td>
  </tr>
);
const TableCaptionPeriodTabs = () => {
  return (
    <table className="">
      <thead className="text-xs text-gray-700 ">
        <tr className="">
          <th className="border border-gray-300 p-2 cursor-pointer">Today</th>
          <th className="border  border-gray-300 p-2 cursor-pointer">
            Yesterday
          </th>
          <th className="border border-gray-300  p-2 cursor-pointer">Week</th>
          <th className="border border-gray-300 p-2 cursor-pointer bg-blue-400">
            Month
          </th>
          <th className="border border-gray-300 p-2 cursor-pointer">Quarter</th>
          <th className="border border-gray-300 p-2 cursor-pointer">Year</th>
        </tr>
      </thead>
    </table>
  );
};
const TablePeriodSelector = ({title}) => {
  return (
    <div
      className={`flex gap-2 px-3 py-1.5  rounded  ${
        title == "PAGEVIEWS"
          ? "text-neutral-700"
          : "text-neutral-400 border border-solid bg-white border-zinc-300"
      }`}
    >
      <select
        name="pets"
        id="pet-select"
        className="font-semibold leading-3   w-full bg-transparent border-none focus:outline-none focus:ring-0"
      >
        <option value="select period">{title}</option>
        <option value="5 min">5 min</option>
        <option value="5 min">5 min </option>
        <option value="5 min">5 min </option>
        <option value="5 min">5 min </option>
        <option value="5 min">5 min</option>
        <option value="5 min">5 min</option>
      </select>
    </div>
  );
};
const TableCaption = () => {
  return (
    <caption class="p-5 text-lg font-semibold text-left   text-gray-900 bg-gray-50">
      <div className="flex justify-between">
              <TablePeriodSelector title={"PAGEVIEWS"} />
        <div className="flex gap-4 justify-end">
          <TableCaptionPeriodTabs />
          <TablePeriodSelector title={"Select Period"} />
        </div>
      </div>
    </caption>
  );
};

function AnalyticsTable() {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg px-6 bg-gray-50">
      <table class="w-full  table-auto text-sm text-left text-gray-500 dark:text-gray-400">
        <TableCaption />
        <thead class="text-xs text-gray-700  bg-gray-50 border-b border-t border-gray-300 ">
          <tr>
            <th scope="col" class="px-6 py-3">
              Page
            </th>
            {tableHead.map((item, index) => (
              <th scope="col" class="px-2 py-3">
                <TableHeadData title={item.title} no={item.no} img={item.img} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="px-6 py-4  text-gray-700 font-medium   whitespace-nowrap bg-gray-50">
          {TableRow.map((item, index) => (
            <TableRowData key={index} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AnalyticsTable;
