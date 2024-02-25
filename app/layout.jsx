/** @format */

import Footer from "../components/Footer";
import Header from "../components/Header";
import { questrial } from "./font";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={questrial.variable}>
      <body className='flex flex-col px-20 py-16'>
        <header>
          <Header />
        </header>
        <main className='font-gilroy'>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
