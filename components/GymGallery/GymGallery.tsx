"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface GymImage {
    image: string;
    altText: string;
}

function GymGallery({
    galleryImages
} : {
    galleryImages: GymImage[];
}) {

    return (
        <div className="w-full flex justify-center items-center flex-col pt-10 pb-10 md:pt-20 md:pb-20 gap-8 overflow-hidden">
            <h2 className="text-saira-condensed font-black text-5xl md:text-6xl uppercase text-center pl-10 pr-10">Gym Gallery</h2>
            <div className="w-20 h-2 bg-primary"></div>
            <div className="w-full md:w-[135vw] grid grid-cols-1 md:grid-cols-10 gap-4 place-items-center pl-10 pr-10">
                {galleryImages.map((img, index) => (
                    <div 
                        key={`gym-gallery-` + index} 
                        className={`${[3,9,12,15].includes(index) && "md:col-start-2"} col-span-1 md:col-span-3 aspect-6/3 w-full rounded-3xl max-w-[400px] md:max-w-none`}
                        style={{ background: `url(${img.image}) center center / cover no-repeat` }}
                    />
                ))}
            </div>
        </div>
    );
}

export default GymGallery;
