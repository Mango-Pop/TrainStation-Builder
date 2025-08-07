"use client";
import React from "react";

interface MembershipCardProps {
  planName: string;
  description?: string;
  monthlyPrice: string;
  annualPrice: string;
  monthlySavings?: string;
  annualSavings?: string;
  features: Array<{ feature: string; included?: boolean }> | string[];
  signupUrl: string;
  currentPeriod: 'monthly' | 'annual';
  isPopular?: boolean;
  popularBadgeText?: string;
  priceUnit?: 'time' | 'person';
}

function PricingCard({
  planName,
  description,
  monthlyPrice,
  annualPrice,
  monthlySavings = "$0",
  annualSavings = "$0",
  features,
  signupUrl,
  currentPeriod,
  isPopular = false,
  popularBadgeText = "Most Popular",
  priceUnit = 'time'
}: MembershipCardProps) {
  const currentPrice = currentPeriod === 'monthly' ? monthlyPrice : annualPrice;
  const currentSavings = currentPeriod === 'monthly' ? monthlySavings : annualSavings;
  
  // Dynamic price label based on period and unit type
  const getPriceLabel = () => {
    if (priceUnit === 'person') {
      return currentPeriod === 'monthly' ? '/person' : '/person/yr';
    }
    return currentPeriod === 'monthly' ? '/mo' : '/yr';
  };
  
  const priceLabel = getPriceLabel();

  return (
    <div className={`card w-full h-full mx-auto mb-6 sm:mb-8 shadow-sm flex flex-col bg-gradient-to-br from-red-500/25 via-black to-red-500/25 ${isPopular ? 'border border-primary/50' : ''}`}>
      <div className="card-body p-4 sm:p-6 flex flex-col flex-1">
        {/* Popular Badge */}
        {isPopular && (
          <span className="badge badge-xs badge-primary">{popularBadgeText}</span>
        )}
        
        {/* Header with Plan Name and Price */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <h2 className="text-md sm:text-xl font-bold">{planName}</h2>
          <div className="text-left sm:text-right">
            <span className="text-lg sm:text-xl">{currentPrice}{priceLabel}</span>
          </div>
        </div>

        {/* Description */}
        {description && (
          <p className="text-sm opacity-70 mt-2">{description}</p>
        )}

        {/* Savings Display */}
        {currentSavings !== "$0" && (
          <p className="text-xs text-success mt-1">Save {currentSavings} vs. Individual</p>
        )}

        {/* Features List */}
        <ul className="mt-4 sm:mt-6 flex flex-col gap-2 text-xs sm:text-sm">
          {features.map((feature, index) => {
            const featureText = typeof feature === 'string' ? feature : feature.feature;
            const isIncluded = typeof feature === 'string' ? true : (feature.included !== false);
            
            return (
              <li key={index} className={`flex items-start ${isIncluded ? '' : 'opacity-50'}`}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`size-4 me-2 flex-shrink-0 mt-0.5 ${isIncluded ? 'text-success' : 'text-base-content/50'}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                <span className={`break-words ${isIncluded ? '' : 'line-through'}`}>{featureText}</span>
              </li>
            );
          })}
        </ul>

        {/* Subscribe Button */}
        <div className="mt-auto pt-4 sm:pt-6">
          <a 
            href={signupUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary btn-soft btn-block text-sm sm:text-base text-red-400 hover:text-white"
          >
            Subscribe
          </a>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
