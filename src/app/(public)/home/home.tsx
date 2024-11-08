import Header from "@/components/Base/Header";
import CategroySectionCard from "@/components/CategorySectionCard";
import { CategoryData } from "@/components/Data";
import Scrollable from "@/components/Scrollable";
import React from "react";

export default function Home() {
  return (
    <div>
      Home
      <Scrollable type="arrow" containerclassName="bg-[#ECF7EE]">
        {CategoryData.map((category, index) => (
          <CategroySectionCard
            key={index}
            imagesrc={category.imagesrc}
            cardlabel={category.label}
          />
        ))}
      </Scrollable>
      DIVISION POINT
    </div>
  );
}
