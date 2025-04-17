import React from "react";
import "./global.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }: React.ComponentProps<"div">) {
  return (
    <html lang="ko-KR">
      <body>{children}</body>
    </html>
  );
}
