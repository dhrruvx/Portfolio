import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhruv Bhutra - Portfolio",
  description: "Portfolio website showcasing my work and skills",
  authors: [{ name: 'Dhruv Bhutra' }],
  creator: 'Dhruv Bhutra',
  metadataBase: new URL('https://portfolio.dhruvbhutra.com'),
  openGraph: {
    title: "Dhruv Bhutra - Portfolio",
    description: 'Portfolio website showcasing my work and skills',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black`}>
        {/* Unified animated background */}
        <div className="fixed inset-0 z-0">
          {/* Main gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-blue-900" />
          
          {/* Animated grid overlay */}
          <div className="absolute inset-0" style={{ opacity: 0.1 }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.2)_0%,_transparent_50%)]" />
            {[...Array(10)].map((_, i) => (
              <div key={`h-${i}`} className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" style={{ top: `${i * 10}%` }} />
            ))}
            {[...Array(10)].map((_, i) => (
              <div key={`v-${i}`} className="absolute h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" style={{ left: `${i * 10}%` }} />
            ))}
          </div>

          {/* Star field effect */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={`star-${i}`}
                className="absolute h-px w-px bg-blue-500 rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
