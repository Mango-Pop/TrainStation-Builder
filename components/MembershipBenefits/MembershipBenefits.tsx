"use client";
import React from "react";

interface Benefit {
  title: string;
  description?: string;
}

interface Resource {
  title: string;
  description?: string;
}

interface TrialMembership {
  title: string;
  price: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

interface MembershipBenefitsProps {
  sectionTitle?: string;
  sectionDescription?: string;
  benefitsTitle?: string;
  benefitsColumn1: Benefit[];
  benefitsColumn2: Benefit[];
  resourcesTitle?: string;
  resources: Resource[];
  trialMembership: TrialMembership;
}

function MembershipBenefits({
  sectionTitle = "Membership Benefits",
  sectionDescription,
  benefitsTitle = "Membership Benefits",
  benefitsColumn1,
  benefitsColumn2,
  resourcesTitle = "Additional Resources",
  resources,
  trialMembership
}: MembershipBenefitsProps) {

  return (
    <div className="w-full py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left Column: Membership Benefits and Additional Resources (60%) */}
          <div className="space-y-8 md:col-span-3">
            {/* Membership Benefits */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">{benefitsTitle}</h3>
              <div className="card bg-noneshadow-xl border border-base-300">
                <div className="card-body">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      {benefitsColumn1.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span className="opacity-70">{benefit.title}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {benefitsColumn2.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span className="opacity-70">{benefit.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Resources */}
            {resources && resources.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{resourcesTitle}</h3>
                <div className="card shadow-xl border border-base-300">
                  <div className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        {resources.map((resource, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span className="opacity-70">{resource.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Trial Membership (40%) */}
          <div className="space-y-6 md:col-span-2">
            <h3 className="text-xl font-semibold">{trialMembership.title}</h3>
            <p className="opacity-70">
              <span className="font-semibold">{trialMembership.price}</span> {trialMembership.description}
            </p>
            <div className="card-actions mt-4">
              <a 
                href={trialMembership.buttonUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline btn-primary"
              >
                {trialMembership.buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipBenefits;
