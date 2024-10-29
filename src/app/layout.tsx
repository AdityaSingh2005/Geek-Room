import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import "../styles/globals.css";
import { Metadata } from "next";
import ColorSchemeProvider from "./ColorSchemeProvider";

export const metadata: Metadata = {
  title: "Geek Room",
  description: "Welcome to Geek Room",
  icons: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/Favicon.svg',
    },
    {
      rel: 'apple-touch-icon',
      url: '/Favicon.svg',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/Favicon.svg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
      </head>
      <body>
        <ColorSchemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ColorSchemeProvider>
      </body>
    </html>
  );
}