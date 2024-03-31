import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import appMetaData from "@/utils/metadata";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = appMetaData;

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`text-dark-500 bg-light-200 ${manrope.variable}`}>
        <div className="main-overlayed">
          <Header />
          <div className="sub-overlayed flex-1 flex flex-col h-full">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
