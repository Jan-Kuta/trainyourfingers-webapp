import Link from "next/link";

type Props = { title: string };

export const PageHeader = ({ title }: Props) => (
  <>
    <div className="fixed top-0 left-0 right-0 bg-slate-200">
      <Link href="/">
        <h1 className="sm:text-5xl text-3xl font-bold text-center">{title}</h1>
      </Link>
    </div>
    <div className="sm:h-28 h-24" />
  </>
);
