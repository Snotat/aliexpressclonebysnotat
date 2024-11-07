'use client'

import type { Metadata } from "next";
import "./globals.css";
import { CounterStoreProvider } from "@/providers/providers";
import { useEffect, useState } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setLoad(true)
  }, [])
  return (
    <html lang="en">
      <CounterStoreProvider>
        <body>{load ? children : <h1>Loading...</h1>}</body>
      </CounterStoreProvider>
    </html>
  );
}
