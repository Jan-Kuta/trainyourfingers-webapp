import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Leaderboard`.
 */
export type LeaderboardProps = SliceComponentProps<Content.LeaderboardSlice>;

/**
 * Component for "Leaderboard" Slices.
 */
const Leaderboard = ({ slice }: LeaderboardProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for leaderboard (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Leaderboard;
