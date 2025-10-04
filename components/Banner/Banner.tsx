"use client";
import Link from "next/link";
import React from "react";

interface BannerProps {
    backgroundImage?: string;
    title?: string;
    subtitle?: string;
    showRedLine?: boolean;
    buttonText?: string;
    buttonUrl?: string;
};

function Banner({
    backgroundImage,
    title,
    subtitle,
    showRedLine,
    buttonText,
    buttonUrl="#"
} : BannerProps) {

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat p-10 md:p-20 gap-8"
      style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'transparent' }}
    >
        <h3 className="text-saira-condensed font-black text-5xl md:text-6xl uppercase text-center">{title}</h3>
        {showRedLine && <div className="w-20 h-2 bg-red-500"></div>}
        {subtitle && <p className="text-inter text-md lg:text-lg">{subtitle}</p>}
        {buttonText && <Link href={buttonUrl} className="btn btn-primary uppercase">{buttonText}</Link>}
    </div>
  );
}

export default Banner;
