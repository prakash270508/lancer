"use client";

import React from "react";
import { useParams } from "next/navigation";

export default function page() {
  const params = useParams();
  return (
    <div className="flex justify-center mx-60">
      <div className="mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="text-xl font-bold text-green-700 mx-6 md:p-2 sm:p-2 my-3 ">
          Build a Project Management Website using Laravel
        </div>
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
          you bid. the full specifications of the website. Some functionalities
          will need to be updated and decided with discussion between you and me
          while you are implementing the website. Any work beyond the scope of
          this document will be discussed, agreed by both of us and compensated
          for fairly and appropriately. If you need, I will be glad to talk
          about the project via voice chat/screen sharing to answer questions
          before you bid.
        </p>
        <p className="mx-8">100+ <span className="font-semibold">Proposals</span> </p>
        <div className="my-8">
          <span className="mx-8">
            <span className="text-black font-bold">Work sample :- </span>
            <a
              href="https://www.figma.com/file/ixUhynpD5Evd2FeGxt3c30/Live-streaming-Dashboard-(Community)?type=design&node-id=0-1"
              target="_blank"
            >
              Link
            </a>
          </span>
          <span className="mx-8 float-right">
            <span className="text-black font-bold">Owner :- </span>
            <span className="text-gray-600 font-semibold">Ram Pal </span>
          </span>
        </div>
        <div className="float-right mx-6 mb-6">
          <button className="text-white bg-green-700 hover:bg-green-800 focus:ring-0 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-3 text-center md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Apply now</button>
        </div>
      </div>
    </div>
  );
}
