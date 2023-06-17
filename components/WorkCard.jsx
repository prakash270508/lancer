import React from "react";
import Link from "next/link";

export default function WorkCard() {
  return (
    <>
      <Link className="mt-3 mx-10" href={`/all-works/sidnfkldsnvknsl`}>
        <h1 className="text-xl font-bold text-green-700 mx-8 hover:underline">
          Build a Project Management Website using Laravel
        </h1>
        <p className="mx-8 my-5">
          This project involves developing a Laravel website with project
          management and other features. The website aims to be a free
          non-profit platform allowing people to solve problems in society by
          creating issues, ideas, tasks and objectives related to the area of
          their interest. Wiki and Communication features are also needed such
          as forums, chat and private messages. A financial system for receiving
          and sending money is also needed. Please see the Outline of the
          document in the Navigation pane on the left to get an idea of the
          various other supporting components. This document does not provide
          the full specifications of the website. Some functionalities will need
          to be updated and decided with discussion between you and me while you
          are implementing the website. Any work beyond the scope of this
          document will be discussed, agreed by both of us and compensated for
          fairly and appropriately. If you need, I will be glad to talk about
          the project via voice chat/screen sharing to answer questions before
          you bid.
        </p>
        <div>
          <span className="mx-8">
            <span className="text-black font-bold">Price :- </span>
            <span className="text-gray-600 font-semibold">$454</span>
          </span>
          <span className="mx-8 float-right">
            <span className="text-black font-bold">Owner :- </span>
            <span className="text-gray-600 font-semibold">Ram Pal </span>
          </span>
        </div>
      </Link>
      <hr />
    </>
  );
}
