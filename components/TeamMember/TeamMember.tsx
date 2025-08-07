"use client";
import React, { useState, useEffect } from "react";
import { builder } from '@builder.io/sdk';

// Initialize Builder
builder.init('49da8b8581a648f6989d85ec423cf285');

interface Trainer {
    name?: string;
    lastInitial?: string;
    title?: string;
    imageUrl?: string | { url: string };
    bio?: string;
    certifications?: string[];
    specialties?: string[];
}

function TeamMember({ 
  trainerId,
  imageUrl, 
  name, 
  lastInitial, 
  title,
  showFromModel = false
}: { 
  trainerId?: string;
  imageUrl?: string | { url: string };
  name?: string;
  lastInitial?: string;
  title?: string;
  showFromModel?: boolean;
}) {
    const [trainer, setTrainer] = useState<Trainer | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (showFromModel && trainerId) {
            const fetchTrainer = async () => {
                try {
                    setLoading(true);
                    setError(null);
                    
                    const result = await builder.get('trainers', {
                        query: {
                            id: trainerId
                        }
                    }).promise();
                    
                    if (result?.data) {
                        setTrainer(result.data);
                    } else {
                        setError('Trainer not found');
                    }
                } catch (err) {
                    console.error('Error fetching trainer:', err);
                    setError('Failed to load trainer data');
                } finally {
                    setLoading(false);
                }
            };

            fetchTrainer();
        }
    }, [trainerId, showFromModel]);

    // Get the actual URL from either a string or an object with url property
    const getImageUrl = (imgUrl: string | { url: string } | undefined) => {
        if (!imgUrl) return '';
        if (typeof imgUrl === 'string') return imgUrl;
        if (typeof imgUrl === 'object' && imgUrl.url) return imgUrl.url;
        return '';
    };

    // Use trainer data from model if available, otherwise use props
    const displayData = showFromModel && trainer ? trainer : {
        name,
        lastInitial,
        title,
        imageUrl
    };

    const finalImageUrl = getImageUrl(displayData.imageUrl);

    if (loading) {
        return (
            <div className="relative bg-black rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto h-80 flex items-center justify-center">
                <div className="loading loading-spinner loading-lg text-white"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="relative bg-black rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto h-80 flex items-center justify-center">
                <div className="text-red-500 text-center p-4">
                    <p>Error loading trainer</p>
                    <p className="text-sm">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative bg-black rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto">
            {/* Main image */}
            {finalImageUrl && (
                <div className="relative h-64 sm:h-80">
                    <img 
                        src={finalImageUrl} 
                        alt={`${displayData.name} ${displayData.lastInitial}`}
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
                            {displayData.name}
                        </h3>
                    </div>
                </div>
            )}
            
            {/* Bottom section with name and title */}
            <div className="bg-gray-800 p-4 text-center">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-1">
                    {displayData.name} {displayData.lastInitial}.
                </h3>
                <p className="text-red-500 text-sm sm:text-base uppercase font-semibold tracking-wide">
                    {displayData.title}
                </p>
            </div>
        </div>
    );
}

export default TeamMember;
