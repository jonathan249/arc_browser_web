import React from "react";
import { Topbar } from "./sidebar/Topbar";
import { Searchbar } from "./sidebar/Searchbar";
import { Favourites } from "./sidebar/Favourites";

interface Sidebar {}

export const Sidebar: React.FC<Sidebar> = ({}) => {
  return (
    <div className="w-72 h-screen mr-5">
      <Topbar />
      <Searchbar />
      <Favourites />
    </div>
  );
};
