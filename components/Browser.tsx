import React from "react";

interface Browser {
  url: string;
}

export const Browser: React.FC<Browser> = ({ url }) => {
  return (
    <div className="w-full h-full rounded-normal">
      <iframe
        src={url}
        className="w-full h-full rounded-normal overflow-hidden !scrollbar-thin scrollbar-track-black/20"
        frameBorder={0}
      />
    </div>
  );
};
