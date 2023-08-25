import React from "react";
import { FaRegCopy } from "react-icons/fa";

export default function ContentSection({ PageContent }) {
  let Page = [];

  async function Copy(ID) {
    let CopyText = document.getElementById(ID);
    console.log(CopyText);
    CopyText.select();
    CopyText.setSelectionRange(0, 99999);
    await navigator.clipboard.writeText(CopyText.value);
    alert("Copied the text: " + CopyText.value);
  }

  PageContent.map((items, index) => {
    if (items.Type === "Text") {
      Page.push(
        <div className="w-full p-4" key={index}>
          asdf
        </div>
      );
    } else if (items.Type === "Code") {
      Page.push(
        <>
          <div className="w-full h-auto flex flex-row justify-end bg-gray-500">
            <button onClick={() => Copy(items.Text.toString())}>copy</button>
          </div>
          <div className="w-full p-4 bg-gray-500" key={index}>
            <input type={"text"} className="text-white bg-gray-500" id={items.Text} defaultValue={items.Text} />
          </div>
        </>
      );
    }
    return null;
  });

  return (
    <>
      <div className="flex flex-col ml-8">
        {Page.map((items, index) => {
          return Page[index];
        })}
      </div>
    </>
    // <div className="flex flex-col gap-2 justify-center items-center">
    //   <div className="w-full lg:w-2/3 flex flex-row justify-start pl-8 uppercase font-bold">
    //     <div>&#x26AC; {PageContent.Title}</div>
    //   </div>

    //   <div>{PageContent.Text}</div>
    //   <div className="flex flex-col justify-center items-center w-full h-auto bg-emerald-800 px-4 lg:w-2/3">
    //     <div className="flex flex-col justify-start p-2 m-4 bg-white rounded-md w-full  ">
    //       <div className="w-full flex flex-row justify-end">
    //         <FaRegCopy />
    //       </div>
    //       <div>{PageContent.Code}</div>
    //     </div>
    //   </div>
    // </div>
  );
}
