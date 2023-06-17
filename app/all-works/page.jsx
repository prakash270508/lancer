import WorkCard from "@/components/WorkCard";
import React from "react";

export default function page() {
  return (
    <div className="flex justify-center mx-60">
      <div className="mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="text-gray-500 font-bold text-xl sm:p-2 md:p-2 my-3 mx-6">
          All freelancing Works
        </div>
        <hr />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  );
}
