import React from "react";
import Image from "next/image";

interface Searchbar {}

export const Searchbar: React.FC<Searchbar> = ({}) => {
  return (
    <div className="bg-black/10 rounded-normal flex flex-row px-5 py-2 space-x-2 mb-3">
      <div className="w-fit">
        <Image src={"/assets/icons/Lock.png"} width={12} height={12} />
      </div>
      <input
        type="text"
        className="bg-transparent w-full outline-none rounded-normal text-sm font-semibold placeholder:text-black"
        placeholder={"github.com"}
      />
    </div>
  );
};
