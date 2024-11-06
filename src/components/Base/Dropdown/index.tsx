import React, { useState, useEffect, useRef } from "react";

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: string[];
  selectedOption: Option | null;
  setSelectedOption: (option: Option) => void;
};

const Dropdown: React.FC<Props> = ({
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full text-left px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
      >
        {selectedOption ? selectedOption.label : "Select an option"}
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <span className="inline-block w-2.5 h-2.5 border-b-2 border-r-2 border-gray-600 rotate-45" />
        </span>
      </button>
      {isOpen && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto z-1">
          {options.map((optionLabel) => {
            const option = { label: optionLabel, value: optionLabel };
            return (
              <li
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className="px-4 py-3 cursor-pointer hover:bg-primary hover:text-white transition duration-200 ease-in-out"
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
