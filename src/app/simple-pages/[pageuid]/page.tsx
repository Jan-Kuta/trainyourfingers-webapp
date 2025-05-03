import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient, routes } from "@/prismicio";
import { components } from "@/slices";
import { PageHeader } from "@/components/PageHeader";
import { CardProps } from '@/components/Card'
import { LinkCardList } from '@/components/LinkCardList'
import { Breadcrumbs } from '@/components/Breadcrumbs'

type Params = { pageuid: string };

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("projectpage", params.pageuid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || "",
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("simplepage", params.pageuid)
    .catch(() => notFound());

  return (
    <>
      <PageHeader title="TrainYourFingers" />
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  /**
   * Query all Documents from the API, except the homepage.
   */
  const pages = await client.getAllByType("simplepage");

  /**
   * Define a path for every Document.
   */
  return pages.map((page) => {
    return { pageuid: page.uid };
  });
}
