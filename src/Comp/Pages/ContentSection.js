import React from "react";
import { FaRegCopy } from "react-icons/fa";

export default function ContentSection({ PageContent }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-start pl-8 uppercase font-bold">&#x26AC; {PageContent.Title}</div>

      <div>{PageContent.Text}</div>
      <div className="flex flex-col justify-center items-center w-full h-auto bg-emerald-800 px-4">
        <div className="flex flex-col justify-start p-2 m-4 bg-white rounded-md w-full">
          <div className="w-full flex flex-row justify-end">
            <FaRegCopy />
          </div>
          <div>{PageContent.Code}</div>
        </div>
      </div>
    </div>
  );
}
