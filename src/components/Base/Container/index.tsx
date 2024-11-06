import React, { Children } from "react";
import { twMerge } from "tailwind-merge";

interface props {
  children: JSX.Element | string;
  className?: string;
}

export default function Container(prop: props) {
  const { children, className } = prop;

  return (
    <div className="w-full flex justify-center">
      <div className={twMerge("max-w-[120rem] w-full px-5 md:px-10 lg:px-[3.75rem] ", className)}>
        {children}
      </div>
    </div>
  );
}
