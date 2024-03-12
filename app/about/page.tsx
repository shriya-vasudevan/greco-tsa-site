"use client"

import Title from "@/components/title";
import Image from "next/image";
import Link from "next/link";

export default function About () {
    return (
      <main> 
          <div>
            <Image className="h-screen object-cover w-2/4 border-green-100 border-l-8 opacity-50" src="/heros/about.png" height={1080} width={1920} alt=""/>
            <div className="h-screen object-cover w-2/4 bg-green-200 absolute left-0 top-28 -z-10"></div>
            <Image className="h-full object-cover object-left absolute top-28 right-0 w-2/4 h-screen -z-50" src="/circlez.svg" width="546" height="832" alt=""/>
            <div className="hidden 2xl:block bg-transparent w-2/4 h-1/4 absolute right-14 bottom-14 border-green-50 border-r-2 border-b-2"></div>          
            <Title title="ABOUT"/> 
          </div> 
          <div className="overflow-hidden">
            <h1 className="mt-10 pl-8 h1 border-green-50 border-l-4">About GRECO</h1>  
            <p className="py-8 px-14">
              Green energy is energy that can be produced without harming the natural environment. It is generated using natural, renewable resources, such as sunlight. Focused on affordable, accessible, green home energy solutions, GRECO is a well-established, reliable source of information for all your energy decisions, excited to be part of the green revolution.
              <br/>
              <br/>
              GRECO has recently partnered with Hugging Face to create <Link href="/gaia" key="1" className="text-green-50">GAIA</Link>, here to help you with anything you need during your switch to clean, green energy.
            </p>  
            <div className="bg-green-200 p-14 relative">
              <h1 className="h1 absolute top-8 left-8 !text-9xl">"</h1>
              <blockquote className="tracking-wide text-center text-lg font-bold italic">The greatest threat to our planet is the belief that someone else will save it.</blockquote>
              <span className="font-medium italic absolute bottom-8 right-32">- Robert Swan</span>
            </div>
            <div className="mr-14">
              <div dir="rtl">
                <h1 className="right-8 mt-10 pr-8 h1 border-green-50 border-r-4 w-fit">About this Site</h1>  
              </div>
              <p className="py-8 px-4 text-right">
                Using the latest frameworks and state-of-the-art technologies, including the implementation of AI, this highly responsive website demonstrates exemplary design skills and methodologies throughout. Enjoy!
                <br/>
                <br/>
                <span className="italic">
                  Created by Shriya Vasudevan from Panther Creek HS, NC 
                  <br/>
                  TSA 2024
                </span>
              </p>  
            </div>
          </div>
      </main>
    );
  }
  