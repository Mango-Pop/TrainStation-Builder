import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../components/builder";
import Navbar from '../components/Navbar/Navbar';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

export default async function Page(props: PageProps) {
  const builderModelName = "page";

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: "/" + ((await props?.params)?.page?.join("/") || ""),
      },
      cachebust: true, // Optional: force Builder to bypass cache
    })
    .toPromise();

  return (
    <main>
      <Navbar />
      <RenderBuilderContent content={content} model={builderModelName} />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">This is a test to see if DaisyUI is working properly.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
}