import React from "react";
import Home from "./home";
import Header from "@/components/Base/Header";

export default async function page() {
  return (
    <div className="min-h-screen text-textcolor justify-center">
      <Header />
      <Home />
    </div>
  );
}
