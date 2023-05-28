"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import VesselMap from "./VesselMap";
import { HydrationProvider, Client } from "react-hydration-provider";
import  Head  from 'next/head';




  


export default function Map() {

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center snap-center">
        <h2 className="text-3xl uppercase text-gray-700 pb-6 tracking-[15px]">Aurelia</h2>
        <h1 className="text-5xl lg:text-6xl pb-10">
            Find us!
        </h1>
          <VesselMap />
    </div>
  )
}