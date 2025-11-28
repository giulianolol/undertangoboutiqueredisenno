import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "UnderTangoCoin — Boutique",
  description: "UnderTangoCoin — ecosistema VIP"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="overflow-x-hidden">
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
