"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import MembershipCard from "./components/MembershipCard/MembershipCard";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Navbar, {
  name: "Navbar",
  inputs: [
    {
      name: "User Input",
      type: "text",
    },
  ],
});

Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    {
      name: "heroImageURL",
      type: "file",
      allowedFileTypes: ["png", "jpg", "jpeg"],
    },
    {
      name: "heroCaption",
      type: "text",
    },
    {
      name: "heroTitle",
      type: "text",
    },
    {
      name: "heroDescription",
      type: "text",
    },
    {
      name: "buttonText",
      type: "text",
    }
  ],
});

Builder.registerComponent(MembershipCard, {
  name: "MembershipCard",
  inputs: [
    {
      name: "planName",
      type: "text",
      required: true,
      defaultValue: "Premium",
    },
    {
      name: "description",
      type: "text",
      defaultValue: "Perfect for growing businesses",
    },
    {
      name: "monthlyPrice",
      type: "text",
      required: true,
      defaultValue: "$49",
    },
    {
      name: "annualPrice",
      type: "text",
      required: true,
      defaultValue: "$490",
    },
    {
      name: "priceUnit",
      type: "text",
      enum: ["time", "person"],
      defaultValue: "time",
      helperText: "Choose between time-based (/mo, /yr) or person-based (/person, /person/yr) pricing display",
    },
    {
      name: "monthlySavings",
      type: "text",
      defaultValue: "$0",
    },
    {
      name: "annualSavings",
      type: "text",
      defaultValue: "$98",
    },
    {
      name: "signupFee",
      type: "text",
      defaultValue: "$50",
    },
    {
      name: "features",
      type: "list",
      subFields: [
        {
          name: "feature",
          type: "text",
        },
        {
          name: "included",
          type: "boolean",
          defaultValue: true,
        }
      ],
      defaultValue: [
        { feature: "Free use of all equipment", included: true },
        { feature: "Access to all training areas", included: true },
        { feature: "All membership perks", included: true },
        { feature: "Free consultation with trainer", included: true }
      ],
    },
    {
      name: "signupUrl",
      type: "url",
      required: true,
      defaultValue: "https://trainstationfitnesscenter.gymmasteronline.com/portal/signup",
    },
    {
      name: "currentPeriod",
      type: "text",
      enum: ["monthly", "annual"],
      defaultValue: "monthly",
    },
    {
      name: "isPopular",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "popularBadgeText",
      type: "text",
      defaultValue: "Most Popular",
    },
  ],
});