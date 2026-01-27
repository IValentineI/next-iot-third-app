import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Calculator Variety",
  description: "เครื่องคำนวณหลากหลายแบบ",
  keywords: ["Calculator", "BMI", "BMR", "Car Installment"],
  icons: {
    icon: "/next.svg"
  },
  authors: [
    {
      name: "Natthawut",
      url: "https://github.com/IValentineI"
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
