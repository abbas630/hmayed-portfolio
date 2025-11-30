import type { Metadata } from "next";
import { ReactLenis } from "lenis/react"; // Import from the new package
import "./globals.css";

// Configure the font (using generic sans for now, we can upgrade to a custom font later)
export const metadata: Metadata = {
  title: "Hmayed | Strategy & Cinema",
  description: "Portfolio of Hmayed - Marketing Strategist & Filmmaker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background text-primary antialiased">
      <ReactLenis root>
        {/* We wrap the body in ReactLenis to enable smooth scrolling 
          across the entire application.
        */}
        <body>
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}