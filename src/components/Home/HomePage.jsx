import React from 'react'
import HomeLeftPart from './HomeLeftPart'
import HomeRightPart from './HomeRightPart';
import StartBuilding from './StartBuilding';
 

function HomePage() {
 const [startBuilding,setStartBuilding] = React.useState(false);
  return (
    <div className="h-full w-full">
      <div className="flex gap-8 p-4">
        {startBuilding && <StartBuilding />}
        {!startBuilding && <HomeLeftPart setStartBuilding={setStartBuilding} />}
        {!startBuilding && <vr className="border-r-2 border-gray-200" />}
        {!startBuilding && <HomeRightPart />}
      </div>
    </div>
  );
}

export default HomePage