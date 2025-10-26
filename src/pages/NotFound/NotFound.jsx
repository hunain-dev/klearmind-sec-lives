import React from "react";
import Button from "../../Components/Button";
const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center text-center justify-center">

        <h2 className="fontspring lg:text-5xl md:text-7xl text-4xl pb-10 text-[#4B312A]">Error <br />
        Sorry page not found</h2>
        <Button 
              btn="Back to Home" 
              bgcolor="#FD8124" 
              textcolor="white" 
              fontSize='md:text-[3vw] lg:text-[0.7vw] text-[3.5vw]'
              padding="lg:py-3 py-3 lg:px-7 px-8 md:px-9 md:py-3" 
              border="border" 
              hoverEffect={false}
              to="/"
              
            />
           

    </div>
  );
};

export default NotFound;
