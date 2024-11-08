import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
interface Prop {
  imagesrc?: string | StaticImageData;
  icon?: any;
  cardlabel: string;
}

export default function CategroySectionCard(prop: Prop) {
  let { imagesrc, cardlabel, icon } = prop;
  return (
    <div className="text-center flex-shrink-0">
      <div className="rounded-full p-8 bg-white cursor-pointer mb-2">
        {imagesrc ? (
          <Image src={imagesrc} alt={cardlabel} width={40} height={40} />
        ) : (
          icon
        )}
      </div>
      <label>{cardlabel}</label>
    </div>
  );
}
