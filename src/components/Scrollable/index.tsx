"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import LeftArrow from "@/public/assets/images/left-arrow.png";
import RightArrow from "@/public/assets/images/right-arrow.png";
import { twMerge } from "tailwind-merge";
import Container from "../Base/Container";

interface ScrollableProps {
  type: "arrow" | "dot";
  children: React.ReactNode;
  containerclassName?: string;
  contentclassName?: string;
}

export default function Scrollable({
  type,
  children,
  containerclassName,
  contentclassName,
}: ScrollableProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeDotRef = useRef(0);
  const itemsPerPage = 3;
  const scrollAmount = 600;

  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, setShowRightArrow] = React.useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;

      let totalScrollAmount = scrollAmount;

      if (direction === "right") {
        if (scrollLeft + clientWidth < scrollWidth) {
          totalScrollAmount = Math.min(
            scrollAmount,
            scrollWidth - (scrollLeft + clientWidth)
          );
        }
      } else if (direction === "left") {
        if (scrollLeft > 0) {
          totalScrollAmount = Math.min(scrollAmount, scrollLeft);
        }
      }

      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -totalScrollAmount : totalScrollAmount,
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

      if (type === "dot") {
        const activeDot = Math.floor(scrollLeft / (clientWidth / itemsPerPage));
        activeDotRef.current = activeDot;
      }
    }
  };

  const goToDot = (index: number) => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollTo = index * clientWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
      activeDotRef.current = index;
    }
  };

  const handleWheel = (event: WheelEvent) => {
    if (event.deltaY !== 0 && scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: event.deltaY,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    updateArrows();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateArrows);
      container.addEventListener("wheel", handleWheel, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", updateArrows);
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [children]);

  const generateDots = () => {
    const totalItems = React.Children.count(children);
    const totalDots = Math.ceil(totalItems / itemsPerPage);
    return [...Array(totalDots)].map((_, index) => (
      <button
        key={index}
        onClick={() => goToDot(index)}
        className={twMerge(
          "w-3 h-3 rounded-full",
          activeDotRef.current === index ? "bg-primary" : "bg-gray-300"
        )}
      />
    ));
  };

  return (
    <div className={twMerge("relative w-full p-5", containerclassName)}>
      {showLeftArrow && type === "arrow" && (
        <Image
          src={LeftArrow}
          alt="left-arrow"
          width={30}
          height={30}
          onClick={() => scroll("left")}
          className={twMerge(
            "absolute left-3 md:left-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
          )}
        />
      )}
      <Container className="mx-w-[140rem]">
        <div className="w-full overflow-x-hidden max-w-[140rem]">
          <div
            ref={scrollContainerRef}
            className={twMerge(
              "flex flex-row gap-5 items-center overflow-x-auto scrollbar-hide w-full px-10",
              contentclassName
            )}
            style={{ scrollBehavior: "smooth" }}
          >
            {children}
          </div>
        </div>
      </Container>
      {showRightArrow && type === "arrow" && (
        <Image
          src={RightArrow}
          alt="right-arrow"
          width={30}
          height={30}
          onClick={() => scroll("right")}
          className="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
        />
      )}

      {type === "dot" && (
        <div className="flex justify-center mt-4 space-x-2">
          {generateDots()}
        </div>
      )}
    </div>
  );
}
