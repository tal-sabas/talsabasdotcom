import Footer from "@/components/footer";
import { theme } from "@/lib/theme-registry";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Script from "next/script";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tal Sabas",
  description: "Tal Sabas Cloud Engineer portfolio landing site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <Footer />
        </ThemeProvider>
        <Script strategy="beforeInteractive" src="https://cloud.umami.is/script.js" data-website-id="a63010b3-df7f-47a3-8fb0-5649ae2be870" />
      </body>
    </html>
  );
}
