"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  label?: string;
  className?: string;
  prefixIcon?: string | StaticImageData;
  required?: boolean;
  regex?: RegExp;
  type?: string;
  initialValue?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  className,
  prefixIcon,
  required = false,
  regex,
  type = "text",
  initialValue = "",
  value = "",
  onChange,
}: Props) {
  const [inputValue, setInputValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setInputValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange?.(event);
  };

  const validate = () => {
    if (regex && !regex.test(inputValue)) {
      setError("Invalid format");
      return false;
    }
    setError(null);
    return true;
  };

  return (
    <div className="relative w-full">
      {prefixIcon && (
        <Image
          src={prefixIcon}
          alt="icon"
          width={24}
          height={24}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
        />
      )}
      <input
        type={type}
        value={inputValue}
        onChange={handleChange}
        required={required}
        placeholder={label}
        className={twMerge(
          "block w-full px-2 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary",
          prefixIcon ? "pl-10" : "",
          error ? "border-red-500" : "border-gray-300",
          className
        )}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
