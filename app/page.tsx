import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../components/builder";

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
    <RenderBuilderContent content={content} model={builderModelName} />
  );
}