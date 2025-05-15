import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="absoulte bottom-0 pb-2">
      <div className="flex justify-center items-center p-4">
        <h1 className="text-[#14091f] dark:text-[#afafff]">
          All Rights Reserved - <span className="font-semibold">Achraf Daimallah</span> &copy; {year}
        </h1>
      </div>
    </div>
  );
};
