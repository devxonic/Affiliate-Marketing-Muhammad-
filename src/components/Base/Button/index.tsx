import React from "react";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  onClick?: () => void;
  className?: string;
  isPrimary?: boolean;
  prefixIcon?: string | StaticImageData;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  title,
  onClick,
  className,
  isPrimary,
  prefixIcon,
  type = "submit",
}: Props) {
  return (
    <button
      type={type}
      className={twMerge(
        "font-medium flex justify-center items-center rounded-md h-fit text-sm px-5 py-3 me-2 mb-2 cursor-pointer",
        isPrimary
          ? "text-white bg-primary bg-[#216E6B] border border-solid border-[#216E6B] hover:bg-[#288582]"
          : "text-primary bg-white hover:bg-[#288582] border border-solid border-[#216E6B] hover:text-white",
        className
      )}
      onClick={onClick}
    >
      {prefixIcon && (
        <Image
          src={prefixIcon}
          alt="icon"
          width={20}
          height={20}
          className="mr-2"
        />
      )}
      {title}
    </button>
  );
}
