import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PageHeader } from "@/components/PageHeader";
import { LinkCardList } from '@/components/LinkCardList'
import { CardProps } from '@/components/Card'
import { Breadcrumbs } from '@/components/Breadcrumbs'

// This component renders your homepage.
//
// Use Next's generateMetadata function to render page metadata.
//
// Use the SliceZone to render the content of the page.

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getSingle("homepage");

  return {
    title: home.data.meta_title,
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Index() {
  // The lib queries content from the Prismic API
  const client = createClient();
  const home = await client.getSingle("homepage");

  const projects = await client.getAllByType("projectpage");

  /**
   * Define a Card for every project.
   */
  const links: CardProps[] = projects.map((page) => ({
      href: `/projects/${page.uid}`,
      title: (page.data.meta_title || "").toString(),
      description: (page.data.meta_description || "").toString(),
      imageUrl: page.data.meta_image?.url || undefined
    }))

  return (
    <>
      <PageHeader title="TrainYourFingers" />
      <Breadcrumbs links={[{title: "Home"}]} />
      <SliceZone slices={home.data.slices} components={components} />
      <div className="my-8">
        <LinkCardList links={links} title="Our projects" />
      </div>
    </>
  );
}
