"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (true) {
      router.push("");
    }
  });
  return <h3>Redirecting...</h3>;
}