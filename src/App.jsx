import React from 'react';
import Navbar from './components/component/Navbar';
import Card from './components/component/Card';
import Picture from './Data/Picture/vlogger.gif';

function App() {
  return (
    <>
      <div className='max-w-5xl mx-auto px-2 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 flex flex-col gap-4 sm:gap-6 lg:gap-8'>
        <Navbar item={Picture}/>
        <div className='grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1'>
          <Card/>
        </div>
      </div>
    </>
  );
}

export default App;
