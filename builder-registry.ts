"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import MembershipCard from "./components/MembershipCard/MembershipCard";
import MembershipBenefits from "./components/MembershipBenefits/MembershipBenefits";
import Table from "./components/Table/Table";
import MealItem from "./components/MealItem/MealItem";
import StatSection from "./components/StatSection/StatSection";

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

Builder.registerComponent(MembershipBenefits, {
  name: "MembershipBenefits",
  inputs: [
    {
      name: "sectionTitle",
      type: "text",
      defaultValue: "Membership Benefits",
    },
    {
      name: "sectionDescription",
      type: "text",
      defaultValue: "",
    },
    {
      name: "benefitsTitle",
      type: "text",
      defaultValue: "Membership Benefits",
    },
    {
      name: "benefitsColumn1",
      type: "list",
      subFields: [
        {
          name: "title",
          type: "text",
          required: true,
        }
      ],
      defaultValue: [
        { title: "10+ Squat racks" },
        { title: "3 Complete sets of dumbbells up to 200 lbs." },
        { title: "25 Adjustable benches" },
        { title: "Selectorized Machines" },
        { title: "State of the art plate loaded equipment" },
        { title: "Variety of cardio equipment" }
      ],
    },
    {
      name: "benefitsColumn2",
      type: "list",
      subFields: [
        {
          name: "title",
          type: "text",
          required: true,
        }
      ],
      defaultValue: [
        { title: "Basketball Court" },
        { title: "Spin room" },
        { title: "Boxing area with Muay Thai, Aqua, Power Strike, and Speed bags" },
        { title: "Functional training area with turf" }
      ],
    },
    {
      name: "resourcesTitle",
      type: "text",
      defaultValue: "Additional Resources",
    },
    {
      name: "resources",
      type: "list",
      subFields: [
        {
          name: "title",
          type: "text",
          required: true,
        }
      ],
      defaultValue: [
        { title: "Personal training consultations" },
        { title: "Nutrition guidance and meal planning" },
        { title: "Group fitness class schedules" },
        { title: "Recovery and wellness services" }
      ],
    },
    {
      name: "trialMembership",
      type: "object",
      subFields: [
        {
          name: "title",
          type: "text",
          defaultValue: "Not Sure? Try a One-Week Trial!",
        },
        {
          name: "price",
          type: "text",
          defaultValue: "$15",
        },
        {
          name: "description",
          type: "text",
          defaultValue: "Experience everything we have to offer with a full week trial membership.",
        },
        {
          name: "buttonText",
          type: "text",
          defaultValue: "Sign Up Now",
        },
        {
          name: "buttonUrl",
          type: "url",
          defaultValue: "https://trainstationfitnesscenter.gymmasteronline.com/portal/signup",
        }
      ],
      defaultValue: {
        title: "Not Sure? Try a One-Week Trial!",
        price: "$15",
        description: "Experience everything we have to offer with a full week trial membership.",
        buttonText: "Sign Up Now",
        buttonUrl: "https://trainstationfitnesscenter.gymmasteronline.com/portal/signup"
      },
    },
  ],
});

Builder.registerComponent(Table, {
  name: "Table",
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: "Weekly Meal Plans",
    },
    {
      name: "icon",
      type: "text",
      helperText: "Optional: SVG icon code or leave empty for default table icon",
    },
    {
      name: "columns",
      type: "list",
      subFields: [
        {
          name: "header",
          type: "text",
          required: true,
        },
        {
          name: "key",
          type: "text",
          required: true,
          helperText: "Unique key for this column (used to match row data)",
        },
        {
          name: "width",
          type: "text",
          helperText: "Optional: CSS width value (e.g., '25%', '200px')",
        }
      ],
      defaultValue: [
        { header: "Plan", key: "plan", width: "" },
        { header: "Portion Size", key: "portionSize", width: "" },
        { header: "Price / Week", key: "pricePerWeek", width: "" }
      ],
    },
    {
      name: "rows",
      type: "list",
      subFields: [
        {
          name: "plan",
          type: "text",
        },
        {
          name: "portionSize",
          type: "text",
        },
        {
          name: "pricePerWeek",
          type: "text",
        }
      ],
      defaultValue: [
        { plan: "5 Meals", portionSize: "6 oz", pricePerWeek: "$62.50" },
        { plan: "7 Meals", portionSize: "4 oz", pricePerWeek: "$73.50" },
        { plan: "7 Meals", portionSize: "6 oz", pricePerWeek: "$87.50" },
        { plan: "7 Meals", portionSize: "8 oz", pricePerWeek: "$101.50" }
      ],
    },
    {
      name: "variant",
      type: "text",
      enum: ["default", "striped", "bordered"],
      defaultValue: "default",
      helperText: "Table styling variant",
    },
    {
      name: "size",
      type: "text",
      enum: ["sm", "md", "lg"],
      defaultValue: "md",
      helperText: "Table size",
    },
  ],
});

Builder.registerComponent(MealItem, {
  name: "MealItem",
  inputs: [
    {
      name: "name",
      type: "text",
      defaultValue: "Grilled Chicken Breast",
      helperText: "Meal name",
    },
    {
      name: "description",
      type: "text",
      defaultValue: "Tender grilled chicken breast seasoned with herbs and spices",
      helperText: "Meal description",
    },
    {
      name: "imageUrl",
      type: "file",
      allowedFileTypes: ["png", "jpg", "jpeg"],
      helperText: "Meal image",
    },
    {
      name: "price",
      type: "number",
      defaultValue: 12.99,
      helperText: "Meal price",
    },
    {
      name: "nutrition",
      type: "object",
      defaultValue: {
        calories: 250,
        protein: 45,
        carbs: 2,
        fat: 6,
      },
      subFields: [
        {
          name: "calories",
          type: "number",
        },
        {
          name: "protein",
          type: "number",
        },
        {
          name: "carbs",
          type: "number",
        },
        {
          name: "fat",
          type: "number",
        },
      ],
      helperText: "Nutritional information",
    },
    {
      name: "allergens",
      type: "list",
      defaultValue: [],
      subFields: [
        {
          name: "allergen",
          type: "text",
        },
      ],
      helperText: "List of allergens",
    },
    {
      name: "dietaryTags",
      type: "list",
      defaultValue: ["High Protein", "Low Carb"],
      subFields: [
        {
          name: "tag",
          type: "text",
        },
      ],
      helperText: "Dietary tags like Keto, Vegan, etc.",
    },
    {
      name: "available",
      type: "boolean",
      defaultValue: true,
      helperText: "Is the meal currently available",
    },
    {
      name: "category",
      type: "text",
      enum: ["Protein", "Vegetarian", "Vegan", "Keto", "Paleo"],
      defaultValue: "Protein",
      helperText: "Meal category",
    },
  ],
});

Builder.registerComponent(StatSection, {
  name: "StatSection",
  inputs: [
    {
      name: "statNumber",
      type: "text",
      defaultValue: "50K+",
      helperText: "The main statistic number or value",
    },
    {
      name: "statLabel",
      type: "text",
      defaultValue: "MEMBERS",
      helperText: "The label describing the statistic",
    },
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#2A2A2A",
      helperText: "Background color of the stat section",
    },
    {
      name: "textColor",
      type: "color",
      defaultValue: "white",
      helperText: "Color of the text",
    },
    {
      name: "accentColor",
      type: "color",
      defaultValue: "#F00",
      helperText: "Accent color for text shadow effects",
    },
  ],
});