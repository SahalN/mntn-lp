/** @format */

import Footer from "../components/Footer";
import Header from "../components/Header";
import { questrial } from "./font";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={questrial.variable}>
      <body className='relative flex flex-col  bg-[#0B1D26] text-white min-h-screen'>
        <header>
          <Header />
          <div className='absolute top-0 p-0 m-0 bg-center bg-cover -z-40'>
            <img src='/images/HG.png' alt='' />
          </div>
          <div>
            <img
              src='/images/bg-hero.png'
              alt=''
              className='absolute top-0 p-0 m-0 bg-center bg-cover -z-30'
            />
          </div>
          <div>
            <img
              src='/images/MG.png'
              alt=''
              className='absolute p-0 m-0 bg-center bg-cover top-30 -z-20'
            />
          </div>
          <div>
            <img
              src='/images/VG.png'
              alt=''
              className='absolute p-0 m-0 bg-center bg-cover top-96 -z-10'
            />
          </div>
        </header>
        <main className='font-gilroy grow bg-[#0B1D26] mt-[200px] '>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
