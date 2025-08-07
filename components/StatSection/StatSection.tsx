"use client";
import React from "react";

function StatSection({ 
  statNumber, 
  statLabel, 
  backgroundColor = "#2A2A2A",
  textColor = "white",
  accentColor = "#F00" 
}: { 
  statNumber: string,
  statLabel: string,
  backgroundColor?: string,
  textColor?: string,
  accentColor?: string
}) {
    return (
        <section 
            className="py-16 px-4"
            style={{ backgroundColor }}
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2 
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase leading-tight mb-4"
                    style={{ 
                        color: textColor
                    }}
                >
                    {statNumber}
                </h2>
                <p 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl uppercase tracking-[3px] font-medium"
                    style={{ color: textColor }}
                >
                    {statLabel}
                </p>
            </div>
        </section>
    );
}

export default StatSection;
