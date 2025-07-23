"use client";
import React, { useState, useEffect } from "react";

function Hero({ heroImageURL, heroText }: { heroImageURL: string, heroText: string }) {    
    useEffect(() => {    
        console.log(heroImageURL);
    }, []);
    return (
        
        <div>
            <h1>{heroText}</h1>
            <button className="btn">Default</button>   
        </div>
    );
}

export default Hero;
