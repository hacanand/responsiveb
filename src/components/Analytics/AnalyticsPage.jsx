import React from "react";
  import SearchAndProfile from "./SearchAndProfile";
import AnalyticsOptions from "./AnalyticsOptions";
import AnalyticsCard from "./AnalyticsCard";
import AnalyticsSummaryCard from "./AnalyticsSummaryCard";
import AnalyticsTable from "./AnalyticsTable";

function AnalyticPage() {
  return (
    <div>
      <div className="h-full w-full">
        <div className="flex flex-col gap-8 p-4">
        <SearchAndProfile />    
        <AnalyticsOptions />  
          <AnalyticsCard />  
          <AnalyticsSummaryCard />
          <AnalyticsTable/>
        </div>
      </div>
    </div>
  );
}

export default AnalyticPage;
