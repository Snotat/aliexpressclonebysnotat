
import "../globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileFoot from "@/components/MobileFoot";
import MobileHead from "@/components/MobileHead";
import { useEffect, useState } from "react";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <div className='w-full flex flex-col'>
            <div className="w-full"><Header /></div>
            <div className="">{children}</div>
            <div className=""><Footer /></div>
        </div>
    );
}
