import { Card, CardProps } from '@/components/Card'


type Props = {
  title?: string
  links: CardProps[]
}

export const LinkCardList = ({ title, links }: Props) => (
  <div className="my-4">
    {title && (
      <h2 className="text-2xl">{title}</h2>
    )}
    {(links.map((link) => (
      <Card key={JSON.stringify(link)} {...link} />
    )))}
  </div>
)