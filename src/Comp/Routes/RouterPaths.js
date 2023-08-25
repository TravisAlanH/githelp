import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Clone from "../Pages/Clone";
import data from "../../PageData";

export default function RouterPath() {
  let location = useLocation();
  return (
    <div className="lg:pt-12">
      <Routes location={location} key={location.pathname}>
        {/* <Route path="/" element={<Navigate replace to="/" />} /> */}

        {data.NavLinks.map((items, index) => {
          return <Route exact path={items.Link} element={<Clone data={items} />} key={index}></Route>;
        })}
      </Routes>
    </div>
  );
}
