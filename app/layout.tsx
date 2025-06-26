// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Wellness Detailing | Premium Car Detailing in Maryland",
  description:
    "Top-rated mobile car detailing in Gaithersburg, Rockville, Germantown, and surrounding areas. Interior cleaning, ceramic coating, and more.",
  keywords: [
    "car detailing Gaithersburg",
    "paint protection Rockville MD",
    "mobile detailing near me",
  ],
  alternates: {
    canonical: "https://wellnessdetailing.com",
  },
  openGraph: {
    title: "Wellness Detailing",
    description:
      "Premium car wash and mobile detailing service in Maryland.",
    url: "https://wellnessdetailing.com",
    siteName: "Wellness Detailing",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          newestOnTop
        />
      </body>
    </html>
  );
}

