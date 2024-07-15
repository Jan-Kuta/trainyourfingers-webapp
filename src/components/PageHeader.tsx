import Link from 'next/link'

type Props = { title: string }

export const PageHeader = ({ title }: Props) => (
  <div className="center">
    <Link href="/">
      <h1 className="sm:text-5xl text-3xl font-bold mb-8">{title}</h1>
    </Link>
  </div>
)