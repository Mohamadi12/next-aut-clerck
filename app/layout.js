import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import Loader from "./components/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next-Auth",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ClerkLoading>
            <Loader/>
          </ClerkLoading>
          <ClerkLoaded>
            <Header />
            {children}
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
