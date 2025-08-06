"use client";
import { ComponentProps } from "react";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { BuilderContent, builder } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";
import "../builder-registry";

type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

// Builder Public API Key set in .env file
const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

if (!apiKey) {
  console.error("❌ Builder.io API key is missing! Please add NEXT_PUBLIC_BUILDER_API_KEY to your .env.local file");
} else {
  console.log("✅ Builder.io API key found:", apiKey.substring(0, 8) + "...");
  builder.init(apiKey);
}

export function RenderBuilderContent({ content, model }: BuilderPageProps) {
  // Call the useIsPreviewing hook to determine if
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing();
  
  // Check if we're in Builder editing mode via URL params
  const isBuilderEditing = typeof window !== 'undefined' && 
    (window.location.search.includes('builder.space=') || 
     window.location.search.includes('__builder_editing__=true'));
  
  console.log("Builder Content Debug:", {
    hasContent: !!content,
    isPreviewing,
    isBuilderEditing,
    model,
    apiKey: !!apiKey,
    url: typeof window !== 'undefined' ? window.location.href : 'SSR'
  });
  
  // If no API key, show error message
  if (!apiKey) {
    return (
      <div style={{ padding: '2rem', background: '#fee', border: '1px solid #fcc', borderRadius: '8px', margin: '2rem' }}>
        <h2 style={{ color: '#c00' }}>Builder.io Configuration Error</h2>
        <p>Missing <code>NEXT_PUBLIC_BUILDER_API_KEY</code> environment variable.</p>
        <p>Please add your Builder.io API key to <code>.env.local</code></p>
      </div>
    );
  }
  
  // If "content" has a value or the page is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  if (content || isPreviewing || isBuilderEditing) {
    return <BuilderComponent content={content} model={model} />;
  }
  // If the "content" is falsy and the page is
  // not being previewed in Builder, render the
  // DefaultErrorPage with a 404.
  return <DefaultErrorPage statusCode={404} />;
}
