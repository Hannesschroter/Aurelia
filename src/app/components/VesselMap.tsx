'use client';

import Script from 'next/script';
import dynamic from "next/dynamic"
import React from "react";
import { HydrationProvider, Server, Client } from "react-hydration-provider";
import { useEffect, useRef } from 'react';
import  Head  from 'next/head';
import postscribe from "postscribe";

 

  export default function VesselMap() {
    // const mapRef = useRef();
    const mapRef = useRef(null);
    let width = "2000";
    let height = "500";

  useEffect(() => {
    if (mapRef) {
      postscribe(
        mapRef.current,
        `<script src="https://www.vesselfinder.com/aismap.js"> </script>`,
      )
    }
  }, [mapRef])

  return (
    <div>
      <Script id="map_spec">{`var width=document.documentElement.clientWidth * 0.9; var height=document.documentElement.clientHeight * 0.4; var mmsi=218005800; var show_track=true;`}</Script>
      <div ref={mapRef} id="map"></div>

    </div>
    
  );
  }
  
