import React from "react";
import ContentSection from "./ContentSection";
import Header from "./Header";

export default function Clone({ data }) {
  return (
    <div className="pl-12 pr-6 lg:pl-0">
      <Header data={data} />
      <ContentSection PageContent={data.PageContent} />
    </div>
  );
}
