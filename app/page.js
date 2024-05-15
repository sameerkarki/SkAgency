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

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); 
  });

  useGSAP(() => {
    gsap.from(".ht", {
      scrollTrigger: {
        trigger: '.ht',
        scroller: 'body'
      },
      opacity: 0,
      yPercent: 30,
      stagger: 0.5,
    });

    gsap.from(".about-t", {
      scrollTrigger: {
        trigger: '.right',
        scroller: 'body',
      },
      opacity: 0,
      duration: 0.5,
      yPercent: 30,
      stagger: 0.6,
    });

    gsap.from(".image", {
      scrollTrigger: {
        trigger: '.image',
        scroller: 'body'
      },
      xPercent: 150,
      delay: 1,
    });

    gsap.from(".card", {
      scrollTrigger: {
        trigger: '.card',
        scroller: 'body',
      },
      opacity: 0,
      yPercent: 20,
      duration: 0.2,
      stagger: 0.6,
    });
  });

  return (
    <>
      <section className="hero min-h-screen flex justify-center items-center flex-col gap-12 text-center mt-28 pt-12 pb-9  text-gray-900  ">
        <h1 className="ht text-[2.7rem] tracking-wider font-normal font-sans text-gray-700  ">Elevate Your Online Presence with Our Unique Designs</h1>
        <p className="ht text-[1.2rem] max-w-[700px] font-light text-gray-800 ">We help businesses boost their sales and digital presence by providing them with website and social media management.</p>
        <div className="circleLinear min-w-96 min-h-96 rounded-full blur-[150px] -z-50   absolute bg-emerald-400"></div>
        <Btn  text="Become our Client"/>
        <Image src={ill} width={600} className="image"/>
      </section>

      <section className="about min-h-screen flex  flex-col md:flex-row justify-evenly items-center text-center">
        <div className="left">
          <h2 className="about-text text-2xl font-medium">About</h2>
        </div>
        <div className="right flex flex-col gap-8">
          <h2 className="about-t text-4xl font-medium">Sk Digital Agency</h2>
          <p className="about-t text-2xl max-w-[700px] font-extralight">At Sk Digital Agency, we create eye-catching websites to boost your business's digital presence. We provide services to clients from all over the globe. Hire us now to boost your digital presence.</p>
        </div>
      </section>

      <section className="services min-h-screen flex justify-evenly mb-16 flex-col-reverse gap-4 items-center md:items-stretch md:flex-row">
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
          <h2 className="about-text text-2xl font-medium">Services</h2>
        </div>
      </section>

      <section className="How-we-work min-h-screen flex flex-col justify-evenly items-center">
        <h2 className="text-2xl font-medium">How we work</h2>
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
    </>
  );
}
