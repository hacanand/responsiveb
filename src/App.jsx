import React from 'react';
import Navigation from './components/Navigation';
import Analytics from './components/Analytics/AnalyticsPage';
import Home from './components/Home/HomePage';

 //import Test from './components/Test';
   
 
 
function App() {
  const [activeTab, setActiveTab] = React.useState("Analytics");
  return (
    <div className="h-full w-full  ">
      <div className="flex">
        <div className="p-2">
          <Navigation setActiveTab={setActiveTab } />
        </div>
        <div className="w-10/12 ">
          {activeTab === "Home" && <Home />}
          {activeTab === "Analytics" && <Analytics />}
        </div>
      </div>
    </div>
  );
}

export default App
