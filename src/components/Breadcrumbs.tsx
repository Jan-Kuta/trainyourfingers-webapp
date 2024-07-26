import Link from 'next/link'

type LinkProps = {
  title: string
  href?: string
}

type Props = {
  links: LinkProps[]
}

export const Breadcrumbs = ({ links }: Props) => (
  <div className="breadcrumbs text-sm">
    <ul>
      {links.map(link => (
        <li key={JSON.stringify(link)}>
          {link.href ? (
              <Link href={link.href}>{link.title}</Link>
            ) :
              link.title
            }
        </li>
      ))}
    </ul>
  </div>
)