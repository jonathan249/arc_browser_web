import React from "react";

interface Button {
  wide: boolean;
}

export const Button: React.FC<Button> = ({ wide }, children: any) => {
  if (wide === false) {
    return (
      <button className="hover:bg-black/10 flex items-center justify-center p-2 rounded-normal">
        {children}
      </button>
    );
  }

  return (
    <button className="bg-black/10 flex items-center justify-center py-3 px-4 rounded-normal hover:bg-black/25">
      {children}
    </button>
  );
};
