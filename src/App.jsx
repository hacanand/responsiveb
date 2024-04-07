import React from 'react';
import Navigation from './components/Navigation';
import Analytics from './components/Analytics/AnalyticsPage';
import Home from './components/Home/HomePage';
import Activities from './components/Activities';
import Transformation from './components/Transformation';
import Library from './components/Library';
 
 
function App() {
  const [activeTab, setActiveTab] = React.useState("Analytics");
  return (
    <div className="h-full w-full  ">
      <div className="flex p-4">
        <div className="">
          <Navigation setActiveTab={setActiveTab } />
        </div>
        <div className="w-10/12">
          {activeTab === "Home" && <Home />}
          {activeTab === "Analytics" && <Analytics />}
          {activeTab === "Activities" && <Activities />}
          {activeTab === "Transformation" && <Transformation />}
          {activeTab === "Library" && <Library />}
        </div>
      </div>
    </div>
  );
}

export default App
