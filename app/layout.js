
import { Inter, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Head from "next/head";

const inter = Montserrat({ subsets: ["latin"],weight: '300' });

export const metadata = {
  title: "Sk digital Agency",
  description: "The best web agency in Nepal",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="overflow-x-hidden">
     
      <body className={inter.className}>

  <Navbar/> {children} <Footer/>

      

      
         </body>
    </html>
  );
}
