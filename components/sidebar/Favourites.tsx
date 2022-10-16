import React from "react";
import { Button } from "../UI/Button";
import Image from "next/image";

interface Favourites {}

export const Favourites: React.FC<Favourites> = ({}) => {
  return (
    <div className="flex flex-row w-full justify-between">
      <Button wide={true}>
        <Image src={"/assets/logos/Figma.png"} width={20} height={20} />
      </Button>
      <Button wide={true}>
        <Image src={"/assets/logos/Twitter.png"} width={20} height={20} />
      </Button>
      <Button wide={true}>
        <Image src={"/assets/logos/Notion.png"} width={20} height={20} />
      </Button>
      <Button wide={true}>
        <Image src={"/assets/logos/GMail.png"} width={20} height={20} />
      </Button>
    </div>
  );
};
