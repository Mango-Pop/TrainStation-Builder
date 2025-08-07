"use client";
import React from "react";

function TeamMember({ 
  imageUrl, 
  name, 
  lastInitial, 
  title 
}: { 
  imageUrl: string | { url: string },
  name: string,
  lastInitial: string,
  title: string
}) {
    // Get the actual URL from either a string or an object with url property
    const getImageUrl = () => {
      if (!imageUrl) return '';
      if (typeof imageUrl === 'string') return imageUrl;
      if (typeof imageUrl === 'object' && imageUrl.url) return imageUrl.url;
      return '';
    };
    
    const finalImageUrl = getImageUrl();

    return (
        <div className="relative bg-black rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto">
            {/* Main image */}
            {finalImageUrl && (
                <div className="relative h-64 sm:h-80">
                    <img 
                        src={finalImageUrl} 
                        alt={`${name} ${lastInitial}`}
                        className="w-full h-full object-cover"
                    />
                    {/* Name overlay on image */}
                    <div className="absolute top-4 right-4">
                        <h3 
                            className="text-white text-xl sm:text-2xl font-bold"
                            style={{
                                fontFamily: 'cursive',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                            }}
                        >
                            {name}
                        </h3>
                    </div>
                </div>
            )}
            
            {/* Bottom section with name and title */}
            <div className="bg-gray-800 p-4 text-center">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-1">
                    {name} {lastInitial}.
                </h3>
                <p className="text-red-500 text-sm sm:text-base uppercase font-semibold tracking-wide">
                    {title}
                </p>
            </div>
        </div>
    );
}

export default TeamMember;
