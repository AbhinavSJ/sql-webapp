"use client";
import { useEffect } from "react";

export default function Onboarded() {
  useEffect(() => {
    sessionStorage.setItem("isOnboarded", JSON.stringify(true));
  }, []);

  return <div>this is the onboarding</div>;
}
