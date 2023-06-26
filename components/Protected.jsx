"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Protected({ children }) {
  const { isLoggedin } = useSelector((state) => state.user);

  const router = useRouter();

  console.log("From protected", isLoggedin);

  useEffect(() => {
    setTimeout(() => {
      if (!isLoggedin) {
        router.push("/login");
      }
    }, [100]);
  }, [isLoggedin, router]);

  return isLoggedin ? <>{children}</> : null;
}
