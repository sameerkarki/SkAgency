"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect, useRef } from "react";
import ill from "@/public/ill.png";
import Btn from "./Components/Btn";
import './globals.css';

import social from "@/public/icons/social.svg";
import design from '@/public/icons/design.svg';
import management from '@/public/icons/management.svg';
import SplitType from "split-type";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); 

    const text = SplitType.create('.ht')
    var char = text.words
   gsap.from(char, {
    scrollTrigger: {
      trigger: '.ht',
      scroller: 'body',
      toggleActions: "restart reset restart reset",

    },
    opacity: 0,
    yPercent: 100,
    duration: 0.2,
    stagger: 0.0850,
   })


   gsap.from('.about-text', {
    scrollTrigger: {
      trigger: '.about',
      toggleActions: "restart reset restart reset",
      scroller: 'body',
    },
    
    opacity: 0,
    duration: 1,
    yPercent: 250,
   })

   gsap.from('.service-text', {
    scrollTrigger: {
      trigger: '.service-text',
      scroller: 'body',
      toggleActions: "restart reset restart reset",      
    },
    
    opacity: 0,
    duration: 1,
    yPercent: 250,
   })

   gsap.from('.work-text', {
    scrollTrigger: {
      trigger: '.work-text',
      scroller: 'body',
      toggleActions: "restart reset restart reset",

      
    },
    
    opacity: 0,
    duration: 1,
    yPercent: 150,
   })

   gsap.from(".card", {
    scrollTrigger: {
      trigger: "card",
      scroller: 'body',
    },
    xPercent: -100,
    duration: 0.4,
    stagger: 0.7,
    opacity: 0,
    delay: 1
   })

  
  });


  return (
    <>
      <section data-scroll data-scroll-speed="0.1"  id="home" className="hero 2xl:max-h-[50vh] min-h-[80vh] flex justify-center items-center flex-col gap-12 text-center mt-28 pt-12 pb-9  text-gray-900  ">
        <h1 className="ht text-[3.5rem] tracking-wider font-light font-sans text-gray-900  ">Unleash Your Digital Potential with Us</h1>
        <p className="text-[1.8rem] max-w-[700px] font-extralight text-gray-800 ">boost your business&apos;s online presence with sk digital agency</p>
        <Btn  text="connect with us" link="https://wa.me/9841528597"/>
        <Image src={ill} width={600} className="image" alt="image"/>
      </section>

      <section  data-scroll data-scroll-speed="0.1" id="about" className="about min-h-[75vh]  flex  flex-col md:flex-row justify-evenly items-center text-center">
        <div className="left">
          <h2 className="about-text dot text-3xl font-semibold">About</h2>
        </div>
        <div className="right flex flex-col gap-8">
          <h2 className="about-t text-4xl font-medium">Sk Digital Agency</h2>
          <p className="about-t text-2xl max-w-[700px] font-extralight">At Sk Digital Agency, we create eye-catching websites to boost your  digital presence. We provide services to clients from all over the globe. Hire us now to boost your digital presence.</p>
        </div>
      </section>

      <section data-scroll data-scroll-speed="0.5" id="services" className="services  2xl:min-h-[50vh] min-h-[80vh] flex justify-evenly mb-16 flex-col-reverse text-center gap-4 items-center md:items-stretch md:flex-row">
        <div className="left flex flex-col gap-16">
          <div className="card border-b border-black rounded-none pb-2">
            <h2 className="text-2xl font-light pb-5">Website Design</h2>
            <p className="text-xl max-w-[600px]">We will design eye-catching designs for your website to boost your online presence.</p>
          </div>

          <div className="card border-b border-black rounded-none pb-2">
            <h2 className="text-2xl font-light pb-5">Website Development</h2>
            <p className="text-xl max-w-[600px]">We will make a website for you, host it, and provide a domain for you.</p>
          </div>

          <div className="card border-b border-black rounded-none pb-2">
            <h2 className="text-2xl font-light pb-5">Website Management</h2>
            <p className="text-xl max-w-[600px]">We also manage websites for our clients and solve their errors and problems.</p>
          </div>

          <div className="card border-b border-black rounded-none pb-2">
            <h2 className="text-2xl font-light pb-5">Social Media Management</h2>
            <p className="text-xl max-w-[600px]">We also manage social media accounts for our clients.</p>
          </div>
        </div>
        <div className="right">
          <h2 className="service-text dot text-3xl font-semibold">Services</h2>
        </div>
      </section>

      <section data-scroll data-scroll-speed="0.5" id="work" className=" 2xl:min-h-[50vh] mb-20 How-we-work min-h-[70vh] flex flex-col justify-evenly items-center">
        <h2 className="work-text text-3xl font-bold mb-4">How we work</h2>
        <div className="items flex flex-row overflow-x-hidden flex-wrap gap-5 justify-center items-center">
          <div className="item min-w-[300px] border-2 p-3">
            <h1 className="text-3xl font-semibold">01</h1>
            <p>Get Proposal</p>
          </div>

          <div className="item min-w-[300px] border-2 p-3">
            <h1 className="text-3xl font-semibold">02</h1>
            <p>Select Designs</p>
          </div>

          <div className="item min-w-[300px] border-2 p-3">
            <h1 className="text-3xl font-semibold">03</h1>
            <p>Pass the Given Design</p>
          </div>

          <div className="item min-w-[300px] border-2 p-3">
            <h1 className="text-3xl font-semibold">04</h1>
            <p>Start the Development Process</p>
          </div>

          <div className="item min-w-[300px] border-2 p-3">
            <h1 className="text-3xl font-semibold">05</h1>
            <p>Host the Website and Make It Live</p>
          </div>

          <div className="item min-w-[300px] border-2 p-3">
            <h1 className="text-3xl font-semibold">06</h1>
            <p>Complete the Payment</p>
          </div>
        </div>
      </section>

  <section className="Hire Us flex flex-col gap-12 min-h-[28vh] text-center">
  <h2 className="text-3xl font-bold">Let&apos;s Work Together</h2>
  <div className="btns">
  <Btn main={true} text="Call Now" link="https://wa.me/9841528597"/>

  </div>

  </section>

    </>
  );
}
