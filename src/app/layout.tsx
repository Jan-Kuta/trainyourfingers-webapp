import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-lg mx-auto p-4">{children}</div>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
