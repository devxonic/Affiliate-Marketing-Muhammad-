import { StaticImageData } from "next/image";

export interface Country {
    name: string;
    code: string;
    flag: StaticImageData;
  }