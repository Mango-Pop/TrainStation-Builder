"use client";
import React from "react";

interface ClosingCTAProps {
  backgroundImage?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
}

function ClosingCTA({
  backgroundImage = "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
  title = "Ready to Transform Your Fitness Journey?",
  description = "Join thousands of members who have achieved their fitness goals with our state-of-the-art facilities and expert trainers.",
  buttonText = "Get Started Today",
  buttonUrl = "https://trainstationfitnesscenter.gymmasteronline.com/portal/signup"
}: ClosingCTAProps) {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold">
            {title}
          </h1>
          <p className="mb-5 text-sm sm:text-base lg:text-lg">
            {description}
          </p>
          <a 
            href={buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ClosingCTA;
