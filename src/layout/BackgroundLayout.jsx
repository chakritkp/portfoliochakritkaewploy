import React from 'react';
import '../App.css'

const BackgroundLayout = ({ children }) => {
  return (
    <div className='bg h-max'>
      <div className="container max-w-[978px] mx-auto px-4 ">
            {children}
      </div>
    </div>
  );
}

export default BackgroundLayout;