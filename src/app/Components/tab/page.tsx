"use client";
import { useState } from "react";
import Faq from "./Faq";
import Review from './Review';
import Productdetail from './details';

export default function Accordion() {
  // Set "faq" as the default active section
  const [activeSection, setActiveSection] = useState("faq");

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className='mb-[100px] mt-[100px]'>
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-3xl text-[#FB2576]">
          Clarity 
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#DA0C81] inline-flex" />
        </div>
      </div>
    <div className="max-width-36 mx-auto mt-10">
      <div className="flex justify-around border-b-2 border-gray-300 pb-2 gap-6">
        {/* Product Details Button */}
        <button
          className={`text-lg font-semibold ${
            activeSection === "productDetails"
              ? "text-blue-500"
              : "text-gray-700"
          }`}
          onClick={() => toggleSection("productDetails")}
        >
          Product Details
        </button>

        {/* Reviews Button */}
        <button
          className={`text-lg font-semibold ${
            activeSection === "review" ? "text-blue-500" : "text-gray-700"
          }`}
          onClick={() => toggleSection("review")}
        >
          Reviews
        </button>

        {/* FAQs Button */}
        <button
          className={`text-lg font-semibold ${
            activeSection === "faq" ? "text-blue-500" : "text-gray-700"
          }`}
          onClick={() => toggleSection("faq")}
        >
          FAQs
        </button>
      </div>

      {/* Section Content */}
      <div className="mt-5">
        {activeSection === "productDetails" && (
          <div className="p-4 bg-gray-100 rounded-md">
            <Productdetail />
          </div>
        )}
        {activeSection === "review" && (
          <div className="p-4 bg-gray-100 rounded-md">
            <Review />
          </div>
        )}
        {activeSection === "faq" && (
          <div className="p-4 bg-gray-100 rounded-md">
            <Faq /> {/* Render the FAQs here */}
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
