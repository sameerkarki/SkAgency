
import { Inter, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Head from "next/head";

const inter = Montserrat({ subsets: ["latin"],weight: '300' });

export const metadata = {
  title: "Sk digital Agency",
  description: "The best web agency in Nepal",
  keywords: ["web agency in Nepal","website agency in Nepal","How to make a website in Nepal","How to make a website"],
  icons: {
    icon: '/public/lg.png',
    apple: "/public/lg.png",
    other: {
      url: '/public/lg.png'
    }
  }
  
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
