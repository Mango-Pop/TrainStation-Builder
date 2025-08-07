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
            backgroundSize: '150%',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',            
        }}>  
            <div className={`hero ${hasBackgroundImage ? 'min-h-[950px] max-h-[1200px]' : 'pt-16 sm:pt-48'}`}>
                <div className="hero-content text-center">
                    <div className="max-w-4xl">
                        <p className="text-4xl sm:text-4xl md:text-4xl lg:text-4xl text-center uppercase tracking-[5px]">{heroCaption}</p>
                        <h1 className="text-6xl sm:text-6xl md:text-8xl lg:text-8xl text-center uppercase leading-tight" style={{
                            textShadow: `
                                -1px -1px 0 #F00,
                                1px -1px 0 #F00,
                                -1px 1px 0 #F00,
                                1px 1px 0 #F00,
                                5px 5px 30px #F00,
                                0 4px 124px #F00
                            `
                        }}>{heroTitle}</h1>
                        <p className="py-6">{heroDescription}</p>
                        {buttonText && (
                            <button className="btn btn-primary">{buttonText}</button>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Hero;
