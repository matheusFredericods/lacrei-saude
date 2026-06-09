import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import StyledComponentsRegistry from "./lib/registry";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display:"swap",
});

export const metadata: Metadata = {
  title: "Lacrei Saúde",
  description: "Conectamos pessoas LGBTQIAPN+ a profissionais de saúde preparados para um atendimento acolhedor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${nunito.className} antialiased`}>
      <body>
      <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
