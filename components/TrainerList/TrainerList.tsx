"use client";
import React, { useState, useEffect } from "react";

interface Trainer {
    id?: string;
    name?: string;
    lastInitial?: string;
    title?: string;
    imageUrl?: string | { url: string };
    bio?: string;
    certifications?: string[];
    specialties?: string[];
}

function TrainerList({ 
  columns = 3,
  spacing = "md"
}: { 
  columns?: number;
  spacing?: "sm" | "md" | "lg";
}) {
    const [trainers, setTrainers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchTrainers() {
            try {
                setLoading(true);
                setError(null);
                
                const getTrainers = await fetch("https://cdn.builder.io/api/v3/content/trainers?apiKey=49da8b8581a648f6989d85ec423cf285");
                const data = await getTrainers.json();
                setTrainers(data.results);
                console.log(data.results);
            } catch (err) {
                console.error('Error fetching trainers:', err);
                setError('Failed to load trainers');
            } finally {
                setLoading(false);
            }
        }

        fetchTrainers();
    }, []);

    // Get the actual URL from either a string or an object with url property
    const getImageUrl = (imgUrl: string | { url: string } | undefined) => {
        if (!imgUrl) return '';
        if (typeof imgUrl === 'string') return imgUrl;
        if (typeof imgUrl === 'object' && imgUrl.url) return imgUrl.url;
        return '';
    };

    const spacingClasses = {
        sm: "gap-2",
        md: "gap-4", 
        lg: "gap-6"
    };

    const getGridCols = () => {
        switch (columns) {
            case 1: return "grid-cols-1";
            case 2: return "grid-cols-1 sm:grid-cols-2";
            case 3: return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
            case 4: return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
            case 5: return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5";
            case 6: return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6";
            default: return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
        }
    }; 
    return (
        <div className={`grid ${getGridCols()} ${spacingClasses[spacing]} p-4 max-w-7xl mx-auto`}>
            {trainers.map((trainer, index) => {
                // Handle different possible data structures
                const trainerData = trainer.data || trainer;
                const finalImageUrl = getImageUrl(trainerData.profilePicture || trainerData.imageUrl || trainerData.image || trainerData.photo);
                
                return (
                    <div key={trainer.id || index} className="relative rounded-lg overflow-hidden shadow-lg w-full mx-auto border-zinc-800 border flex flex-row sm:flex-col">
                        {/* Main image */}
                        {finalImageUrl && (
                            <div className="relative w-36 h-36 sm:w-full sm:h-64 lg:h-80 flex-shrink-0">
                                <img 
                                    src={finalImageUrl} 
                                    alt={`${trainerData.firstName} ${trainerData.lastName}`}
                                    className="w-full h-full object-cover object-top"
                                />                                                                
                            </div>
                        )}
                        
                        {/* Bottom section with name and title */}
                        <div className="p-4 text-left sm:text-center bg-gradient-to-t flex-1 flex flex-col justify-center">
                            <h3 className="text-white text-xl sm:text-2xl lg:text-2xl mb-1">
                                {trainerData.firstName} {trainerData.lastName}
                            </h3>
                            <p className="text-red-500 text-xs sm:text-sm lg:text-base uppercase font-semibold tracking-widest">
                                {trainerData.title}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default TrainerList;
