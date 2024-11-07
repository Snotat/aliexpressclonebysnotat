'use client'

import "../../globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileHead from "@/components/MobileHead";
import TopBar from "@/components/TopBar";
import { useEffect, useState } from "react";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [scrollHeight, setScrollHeight] = useState(0)
    const [load, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
    }, [])
    useEffect(() => {
        const handleScroll = () => {
            typeof window !== "undefined" && setScrollHeight(window.scrollY); // window.scrollY gives the scroll position
        };

        // Add event listener for scrolling
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [signIn, setSignIn] = useState(false);
    const [screenWidth, setScreenWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0); // Initialize state with current screen width

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(typeof window !== "undefined" ? window.innerWidth : 0); // Update state on resize
        };

        // Add event listener for resize
        typeof window !== "undefined" && window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            typeof window !== "undefined" && window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='w-full flex flex-col'>
            <div className="w-full top-0 left-0 right-0 z-40 sticky">
                <div className="flex w-full max-lg:hidden"> <TopBar /></div>
                <div className="flex w-full lg:hidden"> <MobileHead /></div>
            </div>
            <div className="">{children}</div>
            <div className="">{screenWidth > 1024 && <Footer />}</div>
        </div>
    );
}
