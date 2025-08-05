"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

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