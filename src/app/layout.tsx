import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-slate-100 dark:bg-zinc-900 min-h-screen relative">
          <SpeedInsights />
          <div className="max-w-screen-lg mx-auto p-4">{children}</div>
        </div>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
