"use client"

import AdvantageCard from "@/ui-kit/advantages-card/page";
import BestSeller from "@/ui-kit/best-seller/page";
import ContactUs from "@/ui-kit/contact-us/page";
import CTACard from "@/ui-kit/cta-card/page";
import Detail from "@/ui-kit/detail/page";
import { FixedPlugin } from "@/ui-kit/fixed-plugin/page";
import AppFooter from "@/ui-kit/footer/page";
import Hero from "@/ui-kit/hero/page";
import { AppNavbar } from "@/ui-kit/navbar/page";
import RecentBlogs from "@/ui-kit/recent-blogs/page";
import React, { useEffect } from "react";

export default function Home() {
  const [openNav, setOpenNav] = React.useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <main>
      <AppNavbar openNav={openNav} setOpenNav={setOpenNav} /> 

      <Hero />

      <section className="flex gap-10 justify-center container flex-wrap">
        {
          [
            {
              image: "free delivery.svg",
              title: "Free Delivery",
              caption: "For orders over $199"
            },
            {
              image: "ethically made.svg",
              title: "30 Days Return",
              caption: "No questions asked"
            },
            {
              image: "30 days return.svg",
              title: "Ethically Made",
              caption: "From sustainable sources"
            },
            {
              image: "free delivery.svg",
              title: "Secure Payments",
              caption: "For seamless checkout"
            },
          ].map((props: any) => <AdvantageCard {...props} />)
        }
      </section>

      <section className="grid grid-cols-4 container flex-wrap">
        {
          [
            {
              width: 50,
              image: "all_products-removebg.png",
              bg: "Rectangle 883.png",
              title: "NEW JEWELLERY DESIGN",
              cardClass: "sm:col-span-4 lg:col-span-2"
            },
            {
              width: 25,
              image: "earrings-removebg-preview.png",
              bg: "Rectangle 885.png",
              title: "EARRINGS COLLECTION",
            },
            {
              width: 25,
              image: "bracelets-removebg-preview.png",
              bg: "Rectangle 886.png",
              title: "BRACELETS COLLECTION",
            },
            {
              width: 25,
              image: "necklaces-removebg-preview.png",
              bg: "Rectangle 888.png",
              title: "NECKLACES COLLECTION",
            },
            {
              width: 50,
              image: "rings-removebg-preview.png",
              bg: "Rectangle 884.png",
              title: "RINGS COLLECTION",
              cardClass: "sm:col-span-4 lg:col-span-2"
            },
            {
              width: 25,
              image: "pendants-removebg-preview.png",
              bg: "Rectangle 887.png",
              title: "PENDANTS COLLECTION",
            },
          ].map((props: any) => <CTACard {...props} />)
        }
      </section>

      <Detail />

      <BestSeller />

      <RecentBlogs />

      <ContactUs />

      <FixedPlugin />

      <AppFooter />

    </main>
  );
}
