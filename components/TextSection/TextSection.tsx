"use client";
import React from "react";

function TextSection({
    overline,
    title,
    description,
    alignment = "left",
    overlineColor = "#999999",
    titleColor = "#000000",
    descriptionColor = "#666666"
}: {
    overline?: string,
    title: string,
    description?: string,
    alignment?: "left" | "center" | "right",
    overlineColor?: string,
    titleColor?: string,
    descriptionColor?: string
}) {
    const alignmentClasses = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    };

    return (
        <section className={`py-8 px-4 ${alignmentClasses[alignment]}`}>
            <div className="max-w-4xl mx-auto">
                {overline && (
                    <p
                        className="text-sm sm:text-base md:text-lg uppercase tracking-[3px] font-semibold text-primary mb-4">
                        {overline}
                    </p>
                )}
                <h2
                    className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-medium uppercase leading-tight mb-6 max-w-lg">
                    {title}
                </h2>
                {description && (
                    <p
                        className="text-zinc-400 sm:text-lg md:text-xl leading-relaxed max-w-3xl"
                    >
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
}

export default TextSection;
