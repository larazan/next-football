import React from 'react'
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Header from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/FooterShop";
import ScrollTop from "@/components/ScrollTop";
import ProductCard from '@/components/ProductCard';



function Shop() {
  return (
    <>
    <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ScrollTop />

      <div className='bg-white'>
        <Hero />
      
        <ProductCard />
      </div>
      <Footer />
    </>
  )
}

export default Shop