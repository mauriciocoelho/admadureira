import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AD Madureira - Aqui se faz amigos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt_br">
      <body className={poppins.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}