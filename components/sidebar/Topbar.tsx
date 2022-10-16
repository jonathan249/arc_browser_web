import React from "react";
import { Button } from "../UI/Button";
import Image from "next/image";

interface Topbar {}

export const Topbar: React.FC<Topbar> = ({}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="left">
        <Button wide={false}>
          <Image src={"/assets/icons/Sidebar.png"} width={20} height={20} />
        </Button>
      </div>
      <div className="right flex flex-row space-x-1">
        <Button wide={false}>
          <Image src={"/assets/icons/Arrow_Left.png"} width={20} height={20} />
        </Button>
        <Button wide={false}>
          <Image src={"/assets/icons/Arrow_Right.png"} width={20} height={20} />
        </Button>
        <Button wide={false}>
          <Image src={"/assets/icons/Reload.png"} width={20} height={20} />
        </Button>
      </div>
    </div>
  );
};
