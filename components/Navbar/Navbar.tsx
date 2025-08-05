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
        <>
            {navData.length > 0 && (
            <div className="navbar bg-base-100 shadow-sm" style={{ marginTop: 0 }}>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {navData.map((item: any, index: number) => (
                            <li key={index}>
                                <a href={item.data.path}>{item.data.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )}
        </>
    );
}

export default Navbar;
