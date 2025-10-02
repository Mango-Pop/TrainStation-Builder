"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Hero from "./components/Hero/Hero";
import PricingCard from "./components/PricingCard/PricingCard";
import MembershipBenefits from "./components/MembershipBenefits/MembershipBenefits";
import Table from "./components/Table/Table";
import MealItem from "./components/MealItem/MealItem";
import StatSection from "./components/StatSection/StatSection";
import TextSection from "./components/TextSection/TextSection";
import TeamMember from "./components/TeamMember/TeamMember";
import TrainerList from "./components/TrainerList/TrainerList";
import GymGallery from "./components/GymGallery/GymGallery";
import ClosingCTA from "./components/ClosingCTA/ClosingCTA";
import MemberServices from "./components/MemberServices/MemberServices";

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

Builder.registerComponent(PricingCard, {
  name: "PricingCard",
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

Builder.registerComponent(TextSection, {
  name: "TextSection",
  inputs: [
    {
      name: "overline",
      type: "text",
      defaultValue: "MEET OUR TEAM",
      helperText: "Small text above the main title (optional)",
    },
    {
      name: "title",
      type: "text",
      defaultValue: "PERSONALIZED COACHING FROM OUR PROFESSIONALS",
      helperText: "Main heading text",
    },
    {
      name: "description",
      type: "text",
      defaultValue: "",
      helperText: "Optional description text below the title",
    },
    {
      name: "alignment",
      type: "text",
      enum: ["left", "center", "right"],
      defaultValue: "left",
      helperText: "Text alignment",
    },
  ],
});

Builder.registerComponent(TeamMember, {
  name: "TeamMember",
  inputs: [
    {
      name: "showFromModel",
      type: "boolean",
      defaultValue: false,
      helperText: "Load trainer data from Builder.io content model",
    },
    {
      name: "trainerId",
      type: "text",
      defaultValue: "",
      helperText: "Trainer ID from Builder.io content model (only used if 'Load from Model' is enabled)",
      showIf: "options.get('showFromModel')",
    },
    {
      name: "imageUrl",
      type: "file",
      allowedFileTypes: ["png", "jpg", "jpeg"],
      helperText: "Team member photo (manual entry)",
      showIf: "!options.get('showFromModel')",
    },
    {
      name: "name",
      type: "text",
      defaultValue: "Adam",
      helperText: "Team member's first name (manual entry)",
      showIf: "!options.get('showFromModel')",
    },
    {
      name: "lastInitial",
      type: "text",
      defaultValue: "Z",
      helperText: "Last name initial (manual entry)",
      showIf: "!options.get('showFromModel')",
    },
    {
      name: "title",
      type: "text",
      defaultValue: "CERTIFIED TRAINER",
      helperText: "Team member's job title (manual entry)",
      showIf: "!options.get('showFromModel')",
    },
  ],
});

Builder.registerComponent(TrainerList, {
  name: "TrainerList",
  inputs: [
    {
      name: "columns",
      type: "number",
      defaultValue: 3,
      helperText: "Number of columns in grid layout (1-6)",
    },
    {
      name: "spacing",
      type: "text",
      enum: ["sm", "md", "lg"],
      defaultValue: "md",
      helperText: "Spacing between trainer cards",
    },
  ],
});

Builder.registerComponent(GymGallery, {
  name: "GymGallery",
  inputs: [
    {
      name: "spacing",
      type: "text",
      enum: ["sm", "md", "lg"],
      defaultValue: "md",
      helperText: "Spacing between images",
    },
  ],
});

Builder.registerComponent(ClosingCTA, {
  name: "ClosingCTA",
  inputs: [
    {
      name: "backgroundImage",
      type: "file",
      allowedFileTypes: ["png", "jpg", "jpeg", "webp"],
      defaultValue: "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
      helperText: "Background image for the hero section",
    },
    {
      name: "title",
      type: "text",
      defaultValue: "Ready to Transform Your Fitness Journey?",
      helperText: "Main heading text",
    },
    {
      name: "description",
      type: "text",
      defaultValue: "Join thousands of members who have achieved their fitness goals with our state-of-the-art facilities and expert trainers.",
      helperText: "Description text below the title",
    },
    {
      name: "buttonText",
      type: "text",
      defaultValue: "Get Started Today",
      helperText: "Text displayed on the CTA button",
    },
    {
      name: "buttonUrl",
      type: "url",
      defaultValue: "https://trainstationfitnesscenter.gymmasteronline.com/portal/signup",
      helperText: "URL the button links to",
    },
  ],
});

Builder.registerComponent(MemberServices, {
  name: "MemberServices",
  inputs: [
    {
      name: "firstCol",
      friendlyName: "First Column",
      type: "object",
      defaultValue: {
        imageUrl: "https://images.unsplash.com/photo-1554284126-4c2b6f614a7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        title: "Default Title",
        description: "Default description text goes here.",
        buttonText: "Learn More",
        buttonUrl: "#"
      },
      subFields: [
        {
          name: "imageUrl",
          type: "file",
          allowedFileTypes: ["png", "jpg", "jpeg"],
        },
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "text",
        },
        {
          name: "buttonText",
          type: "text",
        },
        {
          name: "buttonUrl",
          type: "url",
        }
      ]
    },
    {
      name: "secondCol",
      friendlyName: "Second Column",
      type: "object",
      subFields: [
        {
          name: "imageUrl",
          type: "file",
          allowedFileTypes: ["png", "jpg", "jpeg"],
        },
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "text",
        },
        {
          name: "buttonText",
          type: "text",
        },
        {
          name: "buttonUrl",
          type: "url",
        }
      ]
    },
    {
      name: "thirdCol",
      friendlyName: "Third Column",
      type: "object",
      subFields: [
        {
          name: "imageUrl",
          type: "file",
          allowedFileTypes: ["png", "jpg", "jpeg"],
        },
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "text",
        },
        {
          name: "buttonText",
          type: "text",
        },
        {
          name: "buttonUrl",
          type: "url",
        }
      ]
    }
  ],
});