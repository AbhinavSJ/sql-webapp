"use client";

import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { GlobalContext } from "@/app/context/store";

export default function Home() {
  const { state, dispatch } = useContext(GlobalContext);

  const router = useRouter();

  useEffect(() => {
    const onboardedValue = sessionStorage.getItem("isOnboarded");
    const dbName = sessionStorage.getItem("dbName");
    if (onboardedValue !== null && onboardedValue == JSON.stringify(true)) {
      dispatch({ type: "SET_DB", payload: dbName });
      router.push("/mainpage");
    } else {
      router.push("/onboarding");
    }
  }, []);

  return (
    <div>
      <h3>Redirecting...</h3>
    </div>
  );
}
