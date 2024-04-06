import React from 'react'
 
 
import Navigation from './components/Navigation';
import AnalyticPage from './components/Analytics/AnalyticsPage';
// import MyComponent from './components/Test';
   
 
 
function App() {
  return (
 
      <div className='h-full w-full  '>
        <div className='flex'>
          <div className='p-2'>
          <Navigation />

          </div>
         <div className='w-10/12 '>
          <AnalyticPage />
          {/* <MyComponent/> */}
          </div>  
        </div>
       </div>
     
  );
}

export default App
