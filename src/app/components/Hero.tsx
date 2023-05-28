"use client"

import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Link from 'next/link';


type Props = {}

export default function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words: ["37°54'46.1\" N 23°42'22.7\" E"],
        loop: true,
        delaySpeed: 4000,

    });

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center snap-center bg-[url('../assets/ocean.png')]">
        <h2 className="text-4xl uppercase text-slate-200 pb-10 tracking-[15px]">Aurelia</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor='#F7AB0' />
        </h1>
       
    </div>
  )
}