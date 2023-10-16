import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl text-red-500 font-bold">Page Not Found</h2>
      <p className="text-lg text-gray-600">The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
