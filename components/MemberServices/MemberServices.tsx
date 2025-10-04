"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ColProps {
    imageUrl: string;
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
};

interface MemberServicesProps {
    firstCol: ColProps;
    secondCol: ColProps;
    thirdCol: ColProps;
};

function MemberServices({
    firstCol,
    secondCol,
    thirdCol
}: MemberServicesProps) {

    return (
        <div className="w-full flex justify-center items-center flex-col p-10 md:p-20 gap-8">
            <h2 className="text-saira-condensed font-black text-5xl md:text-6xl uppercase text-center">Member Services</h2>
            <div className="w-20 h-2 bg-primary"></div>
            <div className="w-full flex gap-10 flex-col md:flex-row items-center md:items-start">
                <div className="flex flex-col gap-2 md:gap-4 grow w-full md:w-1/3 max-w-[400px]">
                    <Image src={firstCol.imageUrl} alt={firstCol.title} width={448} height={310} className="w-full object-cover rounded-3xl"/>
                    <h3 className="text-2xl md:text-lg lg:text-3xl font-bold">{firstCol.title}</h3>
                    <p className="text-md lg:text-lg">{firstCol.description}</p>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg mt-2 w-fit uppercase font-bold text-sm">{firstCol.buttonText}</button>
                </div>
                <div className="flex flex-col gap-2 md:gap-4 grow w-full md:w-1/3 max-w-[400px]">
                    <Image src={secondCol.imageUrl} alt={secondCol.title} width={448} height={310} className="w-full object-cover rounded-3xl"/>
                    <h3 className="text-2xl md:text-lg lg:text-3xl font-bold">{secondCol.title}</h3>
                    <p className="text-md lg:text-lg">{secondCol.description}</p>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg mt-2 w-fit uppercase font-bold text-sm">{secondCol.buttonText}</button>
                </div>
                <div className="flex flex-col gap-2 md:gap-4 grow w-full md:w-1/3 max-w-[400px]">
                    <Image src={thirdCol.imageUrl} alt={thirdCol.title} width={448} height={310} className="w-full object-cover rounded-3xl"/>
                    <h3 className="text-2xl md:text-lg lg:text-3xl font-bold">{thirdCol.title}</h3>
                    <p className="text-md lg:text-lg">{thirdCol.description}</p>
                    <Link href={thirdCol.buttonUrl} className="bg-primary text-white px-4 py-2 rounded-lg mt-2 w-fit uppercase font-bold text-sm">
                        {thirdCol.buttonText}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MemberServices;
