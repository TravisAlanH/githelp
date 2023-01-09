import React from "react";

export default function Header({ data }) {
  return (
    <div>
      <div className="w-full h-20 text-3xl font-extrabold uppercase pt-8">{data.Name}</div>
      <div className="w-full h-auto text-base py-3">{data.Description}</div>
    </div>
  );
}
