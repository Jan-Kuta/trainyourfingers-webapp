import Link from "next/link";
import Image from "next/image";

export type CardProps = {
  href: string;
  title: string;
  description: string;
  imageUrl?: string;
};

export const Card = ({ imageUrl, description, title, href }: CardProps) => (
  <div className="card card-compact bg-base-100 max-w-96 shadow-xl">
    {imageUrl && (
      <figure>
        <Image src={imageUrl} alt={title} />
      </figure>
    )}
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
      <div className="card-actions justify-end">
        <Link href={href}>
          <button className="btn btn-primary">Show more</button>
        </Link>
      </div>
    </div>
  </div>
);
