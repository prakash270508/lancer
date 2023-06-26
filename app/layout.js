"use client"

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://seeklogo.com/images/F/freelancer-com-logo-2B5CE1A961-seeklogo.com.png"
        />
      </head>
      <body className={inter.className}>
        <>
          <Provider store={store}>
            <Navbar />
            <div className="mt-20">{children} </div>
            <div className="mt-16">
              <hr />
              <Footer />
            </div>

            <ToastContainer />
          </Provider>
        </>
      </body>
    </html>
  );
}
