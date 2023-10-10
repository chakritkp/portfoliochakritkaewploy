import React from 'react';
import '../App.css'

const BackgroundLayout = ({ children }) => {
  return (
    <div className='bg h-max pb-10'>
      <div className="container max-w-[978px] mx-auto px-4 pt-5">
            {children}
      </div>
    </div>
  );
}

export default BackgroundLayout;