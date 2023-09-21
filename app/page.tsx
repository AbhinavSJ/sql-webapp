"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const onboardedValue = sessionStorage.getItem("isOnboarded");
    if (onboardedValue !== null && onboardedValue == JSON.stringify(true)) {
      router.push("/mainpage");
    } else {
      router.push("/onboarding");
    }
  });

  return (
    <div>
      <h3>Redirecting...</h3>
    </div>
  );
}
