import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import sm from "../slicemachine.config.json";
import {
  DevlogpageDocument,
  HomepageDocument,
  ProjectpageDocument,
  SimplepageDocument,
} from "../prismicio-types";

/**
 * The project's Prismic repository name.
 */
export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || sm.repositoryName;

function isHomepage(value: prismic.PrismicDocument): value is HomepageDocument {
  return value.type === "homepage";
}

function isProjectpage(
  value: prismic.PrismicDocument,
): value is ProjectpageDocument {
  return value.type === "projectpage";
}

function isDevlogpage(
  value: prismic.PrismicDocument,
): value is DevlogpageDocument {
  return value.type === "devlogpage";
}

function isSimplepage(
  value: prismic.PrismicDocument,
): value is SimplepageDocument {
  return value.type === "simplepage";
}

function linkResolver(doc: prismic.PrismicDocument) {
  if (isHomepage(doc)) {
    return "/";
  }

  if (isProjectpage(doc)) {
    return `/projects/${doc.uid}`;
  }

  if (isDevlogpage(doc)) {
    return `/projects/${doc.data.projectuid}/${doc.uid}`;
  }

  if (isSimplepage(doc)) {
    return `/simple-pages/${doc.uid}`;
  }

  return null;
}

/**
 * The project's Prismic Route Resolvers. This list determines a Prismic document's URL.
 */
export const routes: prismic.ClientConfig["routes"] = [
  { type: "homepage", path: "/" },
  {
    type: "projectpage",
    path: "/:projectuid",
    resolvers: { projectuid: "projectuid" },
  },
  {
    type: "devlogpage",
    path: "/:projectuid/:devloguid",
    resolvers: { projectuid: "projectuid", devloguid: "devloguid" },
  },
];

/**
 * Creates a Prismic lib for the project's repository. The lib is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic lib.
 */
export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(sm.apiEndpoint || repositoryName || "", {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });

  prismicNext.enableAutoPreviews({ client });

  return client;
};
