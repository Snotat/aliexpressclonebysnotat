import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import AuthBar from "@/components/AuthBar";
import Footer from "@/components/Footer";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='w-full flex flex-col'>
            <div><AuthBar /></div>
            <div className="">{children}</div>
            <div className=""><Footer /></div>
        </div>
    );
}
