// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type DevlogpageDocumentDataSlicesSlice = RichTextSlice;

/**
 * Content for Devlog Page documents
 */
interface DevlogpageDocumentData {
  /**
   * Devlog field in *Devlog Page*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: devlogpage.devloguid
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  devloguid: prismic.ContentRelationshipField<"devlogpage">;

  /**
   * Project field in *Devlog Page*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: devlogpage.projectuid
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  projectuid: prismic.ContentRelationshipField<"projectpage">;

  /**
   * Slice Zone field in *Devlog Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: devlogpage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<DevlogpageDocumentDataSlicesSlice> /**
   * Meta Title field in *Devlog Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: devlogpage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Devlog Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: devlogpage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Devlog Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: devlogpage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Devlog Page document from Prismic
 *
 * - **API ID**: `devlogpage`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type DevlogpageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<DevlogpageDocumentData>,
    "devlogpage",
    Lang
  >;

type HomepageDocumentDataSlicesSlice = TeamSectionSlice | RichTextSlice;

/**
 * Content for HomePage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *HomePage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *HomePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *HomePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *HomePage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * HomePage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type ProjectpageDocumentDataSlicesSlice = TeamSectionSlice | RichTextSlice;

/**
 * Content for Project Page documents
 */
interface ProjectpageDocumentData {
  /**
   * Project field in *Project Page*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: projectpage.projectuid
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  projectuid: prismic.ContentRelationshipField<"projectpage">;

  /**
   * Slice Zone field in *Project Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: projectpage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectpageDocumentDataSlicesSlice> /**
   * Meta Title field in *Project Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: projectpage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Project Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: projectpage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Project Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projectpage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Project Page document from Prismic
 *
 * - **API ID**: `projectpage`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectpageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectpageDocumentData>,
    "projectpage",
    Lang
  >;

type SimplepageDocumentDataSlicesSlice =
  | LeaderboardSlice
  | TeamSectionSlice
  | RichTextSlice;

/**
 * Content for Simple Page documents
 */
interface SimplepageDocumentData {
  /**
   * Slice Zone field in *Simple Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: simplepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SimplepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Simple Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: simplepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Simple Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: simplepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Simple Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: simplepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Simple Page document from Prismic
 *
 * - **API ID**: `simplepage`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SimplepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<SimplepageDocumentData>,
    "simplepage",
    Lang
  >;

export type AllDocumentTypes =
  | DevlogpageDocument
  | HomepageDocument
  | ProjectpageDocument
  | SimplepageDocument;

/**
 * Default variation for LeaderboardTop10 Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LeaderboardSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *LeaderboardTop10*
 */
type LeaderboardSliceVariation = LeaderboardSliceDefault;

/**
 * LeaderboardTop10 Shared Slice
 *
 * - **API ID**: `leaderboard`
 * - **Description**: Leaderboard
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type LeaderboardSlice = prismic.SharedSlice<
  "leaderboard",
  LeaderboardSliceVariation
>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Item in *TeamSection → Default → Primary → Members*
 */
export interface TeamSectionSliceDefaultPrimaryMembersItem {
  /**
   * Image field in *TeamSection → Default → Primary → Members*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: team_section.default.primary.members[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Name field in *TeamSection → Default → Primary → Members*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_section.default.primary.members[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Role field in *TeamSection → Default → Primary → Members*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_section.default.primary.members[].role
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  role: prismic.KeyTextField;

  /**
   * Description field in *TeamSection → Default → Primary → Members*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_section.default.primary.members[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Primary content in *TeamSection → Default → Primary*
 */
export interface TeamSectionSliceDefaultPrimary {
  /**
   * Header field in *TeamSection → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_section.default.primary.header
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  header: prismic.RichTextField;

  /**
   * Members field in *TeamSection → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: team_section.default.primary.members[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  members: prismic.GroupField<
    Simplify<TeamSectionSliceDefaultPrimaryMembersItem>
  >;
}

/**
 * Default variation for TeamSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TeamSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TeamSection*
 */
type TeamSectionSliceVariation = TeamSectionSliceDefault;

/**
 * TeamSection Shared Slice
 *
 * - **API ID**: `team_section`
 * - **Description**: TeamSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamSectionSlice = prismic.SharedSlice<
  "team_section",
  TeamSectionSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      DevlogpageDocument,
      DevlogpageDocumentData,
      DevlogpageDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      ProjectpageDocument,
      ProjectpageDocumentData,
      ProjectpageDocumentDataSlicesSlice,
      SimplepageDocument,
      SimplepageDocumentData,
      SimplepageDocumentDataSlicesSlice,
      AllDocumentTypes,
      LeaderboardSlice,
      LeaderboardSliceVariation,
      LeaderboardSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      TeamSectionSlice,
      TeamSectionSliceDefaultPrimaryMembersItem,
      TeamSectionSliceDefaultPrimary,
      TeamSectionSliceVariation,
      TeamSectionSliceDefault,
    };
  }
}
