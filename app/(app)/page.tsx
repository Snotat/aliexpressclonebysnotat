'use client'

import BannerHeader from '@/components/BannerHeader'
import CartegoryHeader from '@/components/CartegoryHeader'
import Eighth from '@/components/Eighth'
import Eleventh from '@/components/Eleventh'
import Fifth from '@/components/Fifth'
import Footer from '@/components/Footer'
import Forth from '@/components/Forth'
import HeaderBottom from '@/components/HeaderBottom'
import NavBar from '@/components/NavBar'
import Ninth from '@/components/Ninth'
import ProductListHome from '@/components/ProductListHome'
import Seventh from '@/components/Seventh'
import Sixth from '@/components/Sixth'
import Tenth from '@/components/Tenth'
import TopBar from '@/components/TopBar'
import Twelveth from '@/components/Twelveth'
import React, { useEffect, useState } from 'react'
import "../globals.css"
import MobileTopnav from '@/components/MobileTopnav'
import SearchProduct from '@/components/SearchProduct'
import MobileFoot from '@/components/MobileFoot'
import { Suspense } from "react";

function page() {
  const [screenWidth, setScreenWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0); // Initialize state with current screen width

  useEffect(() => {
    typeof window !== "undefined" && setScreenWidth(window.innerWidth);
    const handleResize = () => {
      typeof window !== "undefined" && setScreenWidth(window.innerWidth); // Update state on resize
    };

    // Add event listener for resize
    typeof window !== "undefined" && window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      typeof window !== "undefined" && window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="flex w-full flex-col min-h-screen items-start">
      {(typeof window !== "undefined" && screenWidth < 1023) && <Suspense fallback={<>Loading...</>}>
        <div className="flex w-full lg:hidden flex-col min-h-screen items-start">
          <MobileTopnav />
          <SearchProduct input='appliances' page={1} />
          <MobileFoot />
        </div>
      </Suspense>}
      <div className="flex w-full max-lg:hidden flex-col min-h-screen items-start">
        <NavBar />
        <CartegoryHeader />
        <BannerHeader />
        <HeaderBottom />
        <ProductListHome />
        <Forth />
        <Fifth />
        <Sixth />
        <Seventh />
        <Eighth />
        <Ninth />
        <Tenth />
        <Eleventh />
        <Twelveth />
        <Footer />
      </div>

    </div>)
}
export const dynamic = "force-dynamic";
export default page
