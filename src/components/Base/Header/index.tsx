"use client";
import React, { useState } from "react";
import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import Logo from "@/public/assets/icons/logo.png";
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const isDisabled = true;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsActive(false);
    //Enter Search Logic here
  };
  return (
    <Container>
      {/*Desktop */}
      <div>
        <div className="hidden md:flex flex-row p-5 w-full gap-2 text-textcolor">
          {/*Logo*/}
          <div className="inline-flex justify-start flex-1">
            <Link href="/">
              <Image src={Logo} alt="Logo" width={100} height={100} />
            </Link>
          </div>
          {/*Links */}
          <div className="inline-flex justify-center items-center space-x-7 flex-1">
            <Link
              href="/Deals"
              className="text-sm font-semibold"
              onClick={(e) => isDisabled && e.preventDefault()}
            >
              Deals
            </Link>
            <Link
              href="/Groups"
              className="text-sm font-semibold"
              onClick={(e) => isDisabled && e.preventDefault()}
            >
              Groups
            </Link>
            <Link
              href="/Explore"
              className="text-sm font-semibold"
              onClick={(e) => isDisabled && e.preventDefault()}
            >
              Explore
            </Link>
            <Link
              href="/Categories"
              className="text-sm font-semibold"
              onClick={(e) => isDisabled && e.preventDefault()}
            >
              Categories
            </Link>
            <Link
              href="/Earnings"
              className="text-sm font-semibold"
              onClick={(e) => isDisabled && e.preventDefault()}
            >
              Earnings
            </Link>
          </div>
          {/*For Mobile */}
          <div className="flex md:hidden w-full space-x-2">
            <Link
              href="/Deals"
              className="text-sm font-semibold"
              onClick={(e) => isDisabled && e.preventDefault()}
            >
              Deals
            </Link>
            <Link
              href="/Groups"
              className="text-sm font-semibold"
              onClick={(e) => isDisabled && e.preventDefault()}
            >
              Groups
            </Link>
            <Link
              href="/Explore"
              className="text-sm font-semibold"
              onClick={(e) => isDisabled && e.preventDefault()}
            >
              Explore
            </Link>
            <Link
              href="/Categories"
              className="text-sm font-semibold"
              onClick={(e) => isDisabled && e.preventDefault()}
            >
              Categories
            </Link>
            <Link
              href="/Earnings"
              className="text-sm font-semibold"
              onClick={(e) => isDisabled && e.preventDefault()}
            >
              Earnings
            </Link>
          </div>
          {/*Icons */}
          <div className="inline-flex justify-end items-center space-x-5 flex-1">
            {isActive ? (
              <div className="relative">
                <form
                  onSubmit={handleSubmit}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="text"
                    placeholder="Type here to search..."
                    className="block w-full px-2 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-primary focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-primary text-white rounded-full"
                  >
                    <CiSearch size={20} />
                  </button>
                </form>
              </div>
            ) : (
              <CiSearch
                size={24}
                onClick={() => setIsActive(true)}
                className="cursor-pointer"
              />
            )}
            <CiHeart size={24} />
            <CiShoppingCart size={24} />
            <CiUser size={24} />
          </div>
        </div>

        {/*Mobile */}
        <div className="flex flex-col md:hidden p-5 w-full text-textcolor">
          {/*Logo and Icons */}
          <div className="flex gap-5 justify-between items-center">
            <div className="flex justify-start">
              <Link href="/">
                <Image src={Logo} alt="Logo" width={80} height={80} />
              </Link>
            </div>
            <div className="flex space-x-5">
              {isActive ? (
                // Search Bar with Submit Button
                <div className="relative flex-1 max-w-xs sm:max-w-sm">
                  <form
                    onSubmit={handleSubmit}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="text"
                      placeholder="Type here to search..."
                      className="w-full px-2 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-primary focus:border-primary"
                    />
                    <button
                      type="submit"
                      className="px-3 py-2 bg-primary text-white rounded-full"
                    >
                      <CiSearch size={20} />
                    </button>
                  </form>
                </div>
              ) : (
                // Icons when Search is not Active
                <div className="flex space-x-5">
                  <CiSearch
                    size={24}
                    onClick={() => setIsActive(true)}
                    className="cursor-pointer"
                  />
                  <CiHeart size={24} />
                  <CiShoppingCart size={24} />
                  <CiUser size={24} />
                </div>
              )}
            </div>
          </div>

          {/*Links Row*/}
          <div className="flex mt-3 p-3 overflow-x-auto justify-between items-center space-x-2">
            <Link
              href="/Deals"
              className="text-sm font-semibold"
              onClick={(e) => isDisabled && e.preventDefault()}
            >
              Deals
            </Link>
            <Link
              href="/Groups"
              className="text-sm font-semibold"
              onClick={(e) => isDisabled && e.preventDefault()}
            >
              Groups
            </Link>
            <Link
              href="/Explore"
              className="text-sm font-semibold"
              onClick={(e) => isDisabled && e.preventDefault()}
            >
              Explore
            </Link>
            <Link
              href="/Categories"
              className="text-sm font-semibold"
              onClick={(e) => isDisabled && e.preventDefault()}
            >
              Categories
            </Link>
            <Link
              href="/Earnings"
              className="text-sm font-semibold"
              onClick={(e) => isDisabled && e.preventDefault()}
            >
              Earnings
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
