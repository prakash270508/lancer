"use client";

import React from "react";
import { useParams } from "next/navigation";

export default function page() {
  const params = useParams();
  console.log(params.id);
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
}
