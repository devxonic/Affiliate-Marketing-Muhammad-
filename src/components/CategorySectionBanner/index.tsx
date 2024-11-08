"use client";
import React, { useRef, useState, useEffect } from "react";
import Container from "../Base/Container";
import Image from "next/image";
import LeftArrow from "@/public/assets/images/left-arrow.png";
import RightArrow from "@/public/assets/images/right-arrow.png";
import { CategoryData } from "../Data";
import CategroySectionCard from "../CategorySectionCard";

export default function CategoriesContainer() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 600;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const updateArrows = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  };
  useEffect(() => {
    updateArrows();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateArrows);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", updateArrows);
      }
    };
  }, []);

  return (
    <div className="relative w-full p-5 bg-[#ECF7EE]">
      {showLeftArrow && (
        <Image
          src={LeftArrow}
          alt="left-arrow"
          width={30}
          height={30}
          onClick={() => scroll("left")}
          className="absolute left-3 md:left-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
        />
      )}
      <Container>
        <div
          ref={scrollContainerRef}
          className="flex flex-row gap-5 items-center overflow-x-auto scrollbar-hide w-full px-10"
          style={{ scrollBehavior: "smooth" }}
        >
          {CategoryData.map((category, index) => (
            <CategroySectionCard
              key={index}
              imagesrc={category.imagesrc}
              cardlabel={category.label}
            />
          ))}
        </div>
      </Container>
      {showRightArrow && (
        <Image
          src={RightArrow}
          alt="right-arrow"
          width={30}
          height={30}
          onClick={() => scroll("right")}
          className="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
        />
      )}
    </div>
  );
}
