"use client";
import React, { useState, useEffect } from "react";

function Hero({ heroImageURL, heroCaption, heroTitle, heroDescription, buttonText }: { 
  heroImageURL: string | { url: string }, // Accept both string and object with url
  heroCaption: string,
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
    const hasBackgroundImage = imageUrl && imageUrl.trim() !== '';
    
    useEffect(() => {    
        console.log('Image URL:', imageUrl);
        console.log('Has background image:', hasBackgroundImage);
    }, [imageUrl, hasBackgroundImage]);
    
    return (        
        <main style={{
            background: hasBackgroundImage 
                ? `radial-gradient(circle, rgba(0, 0, 0, .85) 80%, rgba(0, 0, 0, 0.95) 150%), url('${imageUrl}')`
                : 'transparent',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',            
        }}>  
            <div className={`hero ${hasBackgroundImage ? 'min-h-[100vh] max-h-[1200px]' : 'pt-16 sm:pt-48'}`}>
                <div className="hero-content text-center">
                    <div className="max-w-[350px] md:max-w-[500px]">
                        <p className="text-saira text-sm sm:text-lg md:text-3xl lg:text-3xl text-center uppercase tracking-[5px] text-primary">{heroCaption}</p>
                        <h1 className="text-saira-condensed font-extrabold text-6xl sm:text-6xl md:text-8xl lg:text-8xl text-center uppercase tracking-tight leading-none pb-4">{heroTitle}</h1>
                        {buttonText && (
                            <button className="btn btn-primary uppercase">{buttonText}</button>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Hero;
