import React from "react";
import "./CommingSoonSearch.css";
import SubNavigation from "../../NavigationBar/SubNavigation/SubNavigation";
import ParentHeader from "../../NavigationBar/ParentHeader/ParentHeader";
import PrimaryNavigation from "../../NavigationBar/PrimaryNavigation/PrimaryNavigation";

const CommingSoonSearch = () => {
  return (
    <div className="CoomingSoonSearchComponenet_Parent">
      <PrimaryNavigation />
      <ParentHeader />
      <SubNavigation />
      <div className="CoomingSoonSearchComponenet_Child">
        <h1>CommingSoon....</h1>
      </div>
    </div>
  );
};
export default CommingSoonSearch;
