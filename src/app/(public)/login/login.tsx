"use client";
import React, { useState } from "react";
import Button from "@/components/Base/Button";
import Container from "@/components/Base/Container";
import Heading from "@/components/Base/Heading";
import Input from "@/components/Base/Input";
import CountryDropdown from "@/components/Countrydropdown";
import { pak, usa, brit } from "@/public/assets/icons/index";
import { Country } from "@/components/Types/types";
const countryData = [
  { name: "Pakistan", code: "92", flag: pak },
  { name: "United States", code: "1", flag: usa },
  { name: "United Kingdom", code: "44", flag: brit },
];

function Login() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <Container>
      <div className="mx-auto max-w-96 items-center justify-center h-screen flex flex-col gap-5 text-textcolor">
        <Heading level={1}>LOGIN</Heading>
        <div className="text-start w-full flex flex-col gap-2">
          <Heading level={6}>Enter Phone Number</Heading>
          <CountryDropdown
            countryList={countryData}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
          <Heading level={6}>Password</Heading>
          <Input type="password" className="w-full" />
          <p className="text-[0.9rem] text-end">Forgot Password?</p>
        </div>
        <div className="grid grid-cols-2 gap-2 w-full">
          <Button
            title="Login"
            isPrimary={false}
            className="col-span-1 w-full"
          />
          <Button
            title="Signup"
            isPrimary={true}
            className="col-span-1 w-full"
          />
        </div>
        <label className="text-[0.8rem] text-center">
          By continuing , you agree to OURS Terms of Service and confirm that
          you have read OURS Privacy Policy
        </label>
      </div>
    </Container>
  );
}

export default Login;
