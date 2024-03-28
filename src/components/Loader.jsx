import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <div className="w-16 h-16 border-4 border-gray-700 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
