import { Footer, Navbar } from "./components";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Qpay Soulations Limited</title>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
