import React from "react";

interface Layout {}

export const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <div className="LAYOUT w-full h-full bg-gradient-to-br from-bg_start to-bg_end p-4 !overflow-y-hidden flex flex-row">
      {children}
    </div>
  );
};
