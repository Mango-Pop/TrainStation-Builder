"use client";
import React, { useState, useEffect } from "react";

interface GymImage {
    id?: string;
    image?: string | { url: string };
}

function GymGallery({ 
  spacing = "md"
}: { 
  spacing?: "sm" | "md" | "lg";
}) {
    const [images, setImages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchGymImages() {
            try {
                setLoading(true);
                setError(null);
                
                const getImages = await fetch("https://cdn.builder.io/api/v3/content/gallery?apiKey=49da8b8581a648f6989d85ec423cf285");
                const data = await getImages.json();
                
                setImages(data.results || []);
                console.log('Gym images API response:', data);
                console.log('Gym images results:', data.results);
            } catch (err) {
                console.error('Error fetching gym images:', err);
                setError('Failed to load gym images');
            } finally {
                setLoading(false);
            }
        }

        fetchGymImages();
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


    return (
        <div className={`grid grid-cols-1 gap-4 p-4 max-w-7xl mx-auto`}>
            {images.map((imageItem, index) => {
                // Handle different possible data structures
                const imageData = imageItem.data || imageItem;
                const finalImageUrl = getImageUrl(imageData.image || imageData.imageUrl || imageData.photo);
                
                return (
                    <div key={imageItem.id || index} className="relative rounded-lg overflow-hidden shadow-lg aspect-square w-full">
                        {finalImageUrl ? (
                            <img 
                                src={finalImageUrl} 
                                alt={`Gym image ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-500">No image</span>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default GymGallery;
