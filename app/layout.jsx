import Head from "next/head";
import { Footer, Navbar } from "./components";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>About Page</title>
        <meta
          name="Qpay Soulation Limited"
          content="Fintech App for all Qcash memeber banks."
        />
      </Head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
