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
      <div>
        <PrismicRichText field={slice.primary.header} />
        <div>
          {slice.primary.members.map((member) => (
            <div key={JSON.stringify(member)}>
              <PrismicNextImage field={member.image} />
              <div>{member.name}</div>
              <div>{member.role}</div>
              <div><PrismicRichText field={member.description} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
