"use client";
import React, { useState, useEffect } from "react";


function Navbar() {
    const [navData, setnavData] = useState<any>([]);
    useEffect(() => {
        async function fetchNavigation() {
            const getNav = await fetch("https://cdn.builder.io/api/v3/content/navigation?apiKey=49da8b8581a648f6989d85ec423cf285");
            const data = await getNav.json();
            setnavData(data.results);  
            console.log(data.results);          
        };

        fetchNavigation();

    }, []);
    return (
        
        <div>
            {navData.length > 0 && (
                <div>
                    {navData.map((item: any, index: number) => (
                        <div key={index}>
                            <a href={item.data.path}>{item.data.name}</a>                            
                        </div>
                    ))}
                </div>
            )}        
        </div>
    );
}

export default Navbar;
