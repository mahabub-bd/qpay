import { Footer, Navbar } from "./components";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import styles from "./styles/style";

export const metadata = {
  title: "Qpay Soulations Limited",
  description: "App For Qcash Member Banks",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main >{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
};
export default RootLayout;
