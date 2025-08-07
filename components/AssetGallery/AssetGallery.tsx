"use client";
import React from "react";

function AssetGallery({ 
  images = [],
  layout = "grid",
  columns = 3,
  spacing = "md"
}: { 
  images?: Array<{ url: string; alt?: string; name?: string }>,
  layout?: "grid" | "masonry" | "carousel",
  columns?: number,
  spacing?: "sm" | "md" | "lg"
}) {
    const [assets, setAssets] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAssets = async () => {
            try {
                setLoading(true);
                setError(null);
                
                // Use Builder.io's asset API to fetch assets from a specific folder ID
                const response = await fetch(
                    `https://cdn.builder.io/api/v1/assets?apiKey=${process.env.NEXT_PUBLIC_BUILDER_API_KEY}&folderId=${encodeURIComponent(folderId)}&limit=50`
                );
                
                if (!response.ok) {
                    throw new Error(`Failed to fetch assets: ${response.statusText}`);
                }
                
                const data = await response.json();
                setAssets(data.results || []);
            } catch (err) {
                console.error('Error fetching assets:', err);
                setError(err instanceof Error ? err.message : 'Failed to load assets');
            } finally {
                setLoading(false);
            }
        };

        if (folderId) {
            fetchAssets();
        }
    }, [folderId]);

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

    if (loading) {
        return (
            <div className="flex justify-center items-center py-8">
                <div className="loading loading-spinner loading-lg"></div>
                <span className="ml-2">Loading assets...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="alert alert-error max-w-md mx-auto">
                <span>Error: {error}</span>
            </div>
        );
    }

    if (assets.length === 0) {
        return (
            <div className="alert alert-info max-w-md mx-auto">
                <span>No assets found in folder ID "{folderId}"</span>
            </div>
        );
    }

    if (layout === "carousel") {
        return (
            <div className="carousel w-full space-x-4 p-4">
                {assets.map((asset, index) => (
                    <div key={asset.id || index} className="carousel-item">
                        <img 
                            src={asset.url} 
                            alt={asset.name || `Asset ${index + 1}`}
                            className="rounded-box h-64 w-auto object-cover"
                        />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className={`grid ${getGridCols()} ${spacingClasses[spacing]} p-4`}>
            {assets.map((asset, index) => (
                <div key={asset.id || index} className="relative group">
                    <img 
                        src={asset.url} 
                        alt={asset.name || `Asset ${index + 1}`}
                        className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    />
                    {asset.name && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-sm truncate">{asset.name}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default AssetGallery;
