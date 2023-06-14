import React from "react";

export default function SmallCard({imageUrl, head, text}) {
  return (
    <div className="w-30 mx-8">
      <div className="flex">
        <div className="mr-1">
          <img
            src={imageUrl}
            alt=""
            className="h-16"
          />
        </div>
        <div className="text-2xl font-bold mt-3">{head}</div>
      </div>
      <div className="text-lg font-normal my-6">
        {text}
      </div>
    </div>
  );
}
