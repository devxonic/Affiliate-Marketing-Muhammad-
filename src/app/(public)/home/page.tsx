import React from "react";
import Home from "./home";
import Header from "@/components/Base/Header";
import CategoriesContainer from "@/components/CategorySectionBanner";

export default async function page() {
  return (
    <div className="min-h-screen text-textcolor justify-center">
      <Header />
      <Home />
      <CategoriesContainer />
    </div>
  );
}
