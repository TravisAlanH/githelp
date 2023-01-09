import React from "react";
import { Link } from "react-router-dom";
import data from "../PageData";

export default function Nav() {
  return (
    <div className="fixed w-12 h-screen flex flex-col gap-8 justify-between items-center py-20 bg-teal-800 lg:flex-row lg:gap-4 lg:h-12 lg:w-screen lg:px-20 lg:py-0">
      {data.NavLinks.map((item, index) => {
        return (
          <div className="-rotate-90 lg:rotate-0 w-24" key={index}>
            <Link to={item.Link} className="NavListItemLink">
              {item.Name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
