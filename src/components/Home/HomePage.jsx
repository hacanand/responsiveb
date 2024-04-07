import React from 'react'
import HomeLeftPart from './HomeLeftPart'
import HomeRightPart from './HomeRightPart';
import StartBuilding from './StartBuilding';
 

function HomePage() {
  return (
    <div className="h-full w-full">
      <div className="flex gap-8 p-4">
        <StartBuilding/>
        {/* <HomeLeftPart />
        <vr className="border-r-2 border-gray-200" />
        <HomeRightPart/> */}
      </div>
    </div>
  );
}

export default HomePage