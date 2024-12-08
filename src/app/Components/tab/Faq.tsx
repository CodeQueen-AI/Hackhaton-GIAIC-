// components/FaqAccordion.js
"use client"
import { useState } from "react";

const faqData = [
  {
    question: "What is the material of the t-shirt?",
    answer: "Provide details about the fabric type (e.g., cotton, polyester, blend), weight, and any specific features.",
  },
  {
    question: "What are the care instructions for the t-shirt?",
    answer: "Outline recommended washing, drying, and ironing methods to maintain quality and longevity.",
  },
  {
    question: "What is the design or print on the t-shirt made of?",
    answer: "Explain the material used for the design (e.g., vinyl, screen print, embroidery) and its durability.",
  },
  {
    question: "Is the t-shirt unisex or designed for specific genders?",
    answer: "Indicate whether the shirt is suitable for both men and women or targeted towards a particular gender.",
  },
  {
    question: "What are the shipping options and costs?",
    answer: "Provide information about shipping methods, estimated delivery times, and associated fees.",
  },
  {
    question: "What is the return policy for the t-shirt?",
    answer: "Outline the return window, conditions, and refund or exchange procedures.",
  },
];

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-8">FAQs</h1>
      <div className="space-y-6">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-t-lg"
              onClick={() => toggleFaq(index)}
            >
              <h2 className="text-lg font-semibold">{item.question}</h2>
              <span
                className={`text-2xl font-bold transition-transform transform ${
                  activeIndex === index ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </div>
            {activeIndex === index && (
              <div className="p-4 text-gray-700 bg-white rounded-b-lg">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
