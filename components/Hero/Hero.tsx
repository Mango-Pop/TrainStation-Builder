"use client";
import React, { useState, useEffect } from "react";

function Hero({ heroImageURL, heroTitle, heroDescription, buttonText }: { 
  heroImageURL: string | { url: string }, // Accept both string and object with url
  heroTitle: string, 
  heroDescription: string, 
  buttonText: string 
}) {    
    // Get the actual URL from either a string or an object with url property
    const getImageUrl = () => {
      if (!heroImageURL) return '';
      if (typeof heroImageURL === 'string') return heroImageURL;
      if (typeof heroImageURL === 'object' && heroImageURL.url) return heroImageURL.url;
      return '';
    };
    
    const imageUrl = getImageUrl();
    
    useEffect(() => {    
        console.log('Image URL:', imageUrl);
    }, [imageUrl]);
    
    return (        
        <main style={{
            background: `radial-gradient(circle, rgba(0, 0, 0, .5) 40%, rgba(220, 38, 38, 0.95) 150%), url('${imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>  
            <div className="hero min-h-screen max-h-[1200px]">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold uppercase">{heroTitle}</h1>
                        <p className="py-6">{heroDescription}</p>
                        <button className="btn btn-primary">{buttonText}</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Hero;
