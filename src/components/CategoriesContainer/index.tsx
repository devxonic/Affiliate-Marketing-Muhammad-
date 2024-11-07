import React from "react";
import Container from "../Base/Container";
import { CiHome } from "react-icons/ci";

export default function CategoriesContainer() {
  return (
    <>
      <div className="w-full p-5 bg-[#ECF7EE]">
        <Container>
          <div className="flex flex-row gap-5 items-center">
            <div className="text-center">
              <div className="rounded-full p-5 bg-white">
                <CiHome size={80} />
              </div>
              <label className="text-center mt-2">Home</label>
            </div>
            <div className="text-center">
              <div className="rounded-full p-5 bg-white">
                <CiHome size={80} />
              </div>
              <label className="text-center mt-2">Home</label>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
