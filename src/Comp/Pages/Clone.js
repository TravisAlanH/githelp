import React from "react";
import ContentSection from "./ContentSection";
import Header from "./Header";

export default function Clone({ data }) {
  return (
    <div className="pl-12 lg:pl-0">
      <Header data={data} />
      {data.PageContent.map((item, index) => {
        return (
          <div key={index}>
            <ContentSection PageContent={item} />
          </div>
        );
      })}
    </div>
  );
}
