import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from '@prismicio/next'

/**
 * Props for `TeamSection`.
 */
export type TeamSectionProps = SliceComponentProps<Content.TeamSectionSlice>;

/**
 * Component for "TeamSection" Slices.
 */
const TeamSection = ({ slice }: TeamSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="text-center">
        <PrismicRichText field={slice.primary.header} />
        <div className="flex flex-row flex-wrap my-8">
          {slice.primary.members.map((member) => (
            <div
              key={JSON.stringify(member)}
              className="max-w-60 min-w-60 m-4 mx-auto bg-white dark:bg-black shadow-lg rounded-lg overflow-hidden"
            >
              <div className="flex justify-center mt-4">
                <PrismicNextImage className="rounded-full border-2 border-gray-300 dark:border-gray-700" field={member.image} height={120} width={120} />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-0">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
              </div>
              <div className="px-6 py-4 text-center text-gray-700 dark:text-gray-300 text-base"><PrismicRichText field={member.description} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
