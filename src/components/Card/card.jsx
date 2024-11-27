import React from "react";

const Card = ({ department }) => {

  const getInitials = (name) => {
    const splitName = name.split(" ");
    const initials =
      splitName.length > 1
        ? splitName[0][0] + splitName[1][0]
        : splitName[0][0]; // Handle cases with a single name
    return initials.toUpperCase();
  };


  return (
    <div className="bg-white hover:shadow-2xl shadow-black transition-all  duration-200  cursor-pointer w-80 md:w-64 h-80 rounded-lg  p-4">
      <div className="w-full h-32 bg-black rounded-lg ">

      </div>
      <div className="font-bold text-blue-gray-800 text-lg mb-2">
        {department.departmentName}
      </div>
     
      <div className="text-sm font-bold text-blue-gray-600 mb-2">
        Team Lead: 
        <div className="flex flex-row align-center items-center">
            <div className="h-10 w-10 mt-2 rounded-full text-white justify-center text-center items-center text-lg py-2 bg-black">{getInitials(department.teamLead)}</div>
            <div className="flex flex-col mt-2">
            <span className="ml-2 font-normal text-md text-gray-500">{department.teamLead}</span>
            <span className="ml-2 text-md font-normal text-gray-500">example@gmail.com</span>
            </div>
        </div>
      </div>
      <div className="flex flex-row w-full mt-10 ml-3">
        <div className="relative flex justify-center items-center">
          <div
            className="absolute h-10 w-10 bg-cover ml-32 bg-center rounded-full border-4 border-white"
            style={{
              backgroundImage:
                "url('https://techcloudltd.com/wp-content/uploads/2024/06/male-professional-headshots-1024x638.webp')",
            }}
          ></div>
          <div
            className="absolute h-10 w-10 bg-cover ml-20 bg-center rounded-full border-4 border-white"
            style={{
              backgroundImage:
                "url('https://techcloudltd.com/wp-content/uploads/2024/06/male-professional-headshots-1024x638.webp')",
            }}
          ></div>
          <div
            className="absolute h-10 w-10 bg-cover ml-12 bg-center rounded-full border-4 border-white"
            style={{
              backgroundImage:
                "url('https://techcloudltd.com/wp-content/uploads/2024/06/male-professional-headshots-1024x638.webp')",
            }}
          ></div>
          <div
            className="absolute h-10 w-10 bg-cover bg-center rounded-full border-4 border-white"
            style={{
              backgroundImage:
                "url('https://techcloudltd.com/wp-content/uploads/2024/06/male-professional-headshots-1024x638.webp')",
            }}
          ></div>
        </div>
        <span className="ml-[90px] text-xs text-gray-400">& 20 Teams</span>
      </div>
    </div>
  );
};

export default Card;
