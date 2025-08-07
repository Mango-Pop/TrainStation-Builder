"use client";
import React from "react";

interface MealItemProps {
  mealName: string;
  description?: string;
  imageUrl?: string | { url: string };
  price?: string;
  ingredients?: string[];
  nutritionInfo?: {
    calories?: string;
    protein?: string;
    carbs?: string;
    fat?: string;
  };
  allergens?: string[];
  dietaryTags?: string[];
  servingSize?: string;
  prepTime?: string;
  isAvailable?: boolean;
  orderUrl?: string;
  orderButtonText?: string;
}

function MealItem({
  mealName,
  description,
  imageUrl,
  price,
  ingredients = [],
  nutritionInfo,
  allergens = [],
  dietaryTags = [],
  servingSize,
  prepTime,
  isAvailable = true,
  orderUrl,
  orderButtonText = "Order Now"
}: MealItemProps) {

  // Get the actual URL from either a string or an object with url property
  const getImageUrl = () => {
    if (!imageUrl) return '';
    if (typeof imageUrl === 'string') return imageUrl;
    if (typeof imageUrl === 'object' && imageUrl.url) return imageUrl.url;
    return '';
  };

  const actualImageUrl = getImageUrl();

  return (
    <div className={`card bg-base-100 shadow-xl border border-base-300/20 ${!isAvailable ? 'opacity-60' : ''}`}>
      {/* Meal Image */}
      {actualImageUrl && (
        <figure className="relative">
          <img 
            src={actualImageUrl} 
            alt={mealName}
            className="w-full h-48 sm:h-56 object-cover"
          />
          {!isAvailable && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-semibold">Currently Unavailable</span>
            </div>
          )}
        </figure>
      )}

      <div className="card-body p-4 sm:p-6">
        {/* Header with Name and Price */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
          <h3 className="text-lg sm:text-xl font-bold">{mealName}</h3>
          {price && (
            <div className="text-lg font-semibold text-primary">{price}</div>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="text-sm opacity-70 mb-4">{description}</p>
        )}

        {/* Dietary Tags */}
        {dietaryTags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {dietaryTags.map((tag, index) => (
              <span key={index} className="badge badge-primary badge-sm">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Meal Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs sm:text-sm">
          {servingSize && (
            <div className="flex items-center gap-2">
              <span className="font-medium">Serving:</span>
              <span className="opacity-70">{servingSize}</span>
            </div>
          )}
          {prepTime && (
            <div className="flex items-center gap-2">
              <span className="font-medium">Prep Time:</span>
              <span className="opacity-70">{prepTime}</span>
            </div>
          )}
        </div>

        {/* Ingredients */}
        {ingredients.length > 0 && (
          <div className="mb-4">
            <h4 className="font-medium text-sm mb-2">Ingredients:</h4>
            <p className="text-xs opacity-70">{ingredients.join(', ')}</p>
          </div>
        )}

        {/* Nutrition Info */}
        {nutritionInfo && (
          <div className="mb-4">
            <h4 className="font-medium text-sm mb-2">Nutrition (per serving):</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {nutritionInfo.calories && (
                <div className="text-center">
                  <div className="font-medium">{nutritionInfo.calories}</div>
                  <div className="opacity-70">Calories</div>
                </div>
              )}
              {nutritionInfo.protein && (
                <div className="text-center">
                  <div className="font-medium">{nutritionInfo.protein}</div>
                  <div className="opacity-70">Protein</div>
                </div>
              )}
              {nutritionInfo.carbs && (
                <div className="text-center">
                  <div className="font-medium">{nutritionInfo.carbs}</div>
                  <div className="opacity-70">Carbs</div>
                </div>
              )}
              {nutritionInfo.fat && (
                <div className="text-center">
                  <div className="font-medium">{nutritionInfo.fat}</div>
                  <div className="opacity-70">Fat</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Allergens */}
        {allergens.length > 0 && (
          <div className="mb-4">
            <h4 className="font-medium text-sm mb-1">Allergens:</h4>
            <p className="text-xs opacity-70 text-warning">{allergens.join(', ')}</p>
          </div>
        )}

        {/* Order Button */}
        {orderUrl && isAvailable && (
          <div className="card-actions justify-end mt-auto">
            <a 
              href={orderUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm sm:btn-md"
            >
              {orderButtonText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default MealItem;
