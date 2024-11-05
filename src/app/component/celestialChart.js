"use client"
import React, {useEffect} from 'react';
import Head from "next/head";
import {useAppContext} from "@/context/state";


const CelestialChart = (
  {
    color,
    color_semi,
    hasCompass,
    hasGrid,
    year = new Date().getFullYear(),
    month = 0,
    date = 1,
    hour = 0,
    lng = 0,
    lat = 0,
  }) => {

  const {setLoading} = useAppContext()

  useEffect(() => {
    try {
      // const displayMap = () => {
      document.getElementById("celestial").innerHTML = ''
      Celestial.display({
        projection: "airy",
        // transform: "equatorial",
        follow: "zenith",
        scale: 1000,
        container: "celestial",
        disableAnimations: true,
        width: hasCompass ? 0 : 300,           // Default width, 0 = full parent element width;
        height: hasCompass ? 0 : 300,           // Default width, 0 = full parent element width;
        controls: false,     // Display zoom controls
        equatorial: {show: false, stroke: "#aaaaaa", width: 1.3, opacity: 0.7},
        interactive: false,
        adaptable: true,
        form: false,
        zoomextend: 4,
        formFields: {
          "location": false,  // Set visiblity for each group of fields with the respective id
          "general": false,
          "stars": false,
          "dsos": false,
          "constellations": false,
          "lines": false,
          "other": false,
          "download": false
        },
        background: {        // Background style
          fill: color,   // Area fill
          opacity: 1,
          stroke: hasCompass ? color : color_semi, // Outline
          width: hasCompass ? 2 : 1
        },
        lines: {  // Display & styles for graticule & some planes
          graticule: {
            show: hasGrid,
            stroke: "#cccccc", // Color of the graticule lines
            width: 0.4, // Width of the graticule lines
            // lon: 10, // Longitude interval for meridian lines
            // lat: 10 // Latitude interval for parallel lines
          },
          meridian: {
            show: true,
            stroke: "#ff0000", // Color of the meridian lines
            width: 1.0 // Width of the meridian lines
          },
          equatorial: {show: false},
          ecliptic: {show: false},
          galactic: {show: false},
          supergalactic: {show: false}
        },
        dsos: {show: false, style: {fill: "#000", stroke: "#000", width: .7, opacity: .7}},
        horizon: {show: false},
        datapath: "https://cdn.jsdelivr.net/npm/d3-celestial@0.7.35/data/",
        stars: {
          designation: false, // Show star names (Bayer, Flamsteed, Variable star, Gliese or designation,
          propername: false,
          size: 4,       // Maximum size (radius) of star circle in pixels
          style: {fill: color_semi || "#000", opacity: .7}, // Default style for stars
          colors: false,  // Show stars in spectral colors, if not use default color
        },
        constellations: {
          names: false,      // Show constellation names
          namesType: "iau", // Type of name Latin (iau, default), 3 letter designation (desig) or other language (see list below)
          nameStyle: {
            fill: color_semi || "#000", align: "center", baseline: "middle",
            font: ["14px Helvetica, Arial, sans-serif",  // Style for constellations
              "12px Helvetica, Arial, sans-serif",  // Different fonts for diff.
              "11px Helvetica, Arial, sans-serif"]
          },// ranked constellations
          lines: true,   // Show constellation lines, style below
          lineStyle: {stroke: color_semi || "#000", width: 0.5, opacity: 0.6},
          bounds: false, // Show constellation boundaries, style below
          boundStyle: {stroke: color_semi || "#000", width: 0.5, opacity: 0.8, dash: [2, 4]}
        },
      })
      Celestial.date(new Date(year, month, date, hour));
      Celestial.location([lat, lng]);
      Celestial.exportSVG((svg) => {
        const canvas = document.querySelector("#celestial canvas");
        let map_celestial = document.getElementById("celestial")
        if (canvas) canvas.remove();
        map_celestial.innerHTML = ''
        const svgContainer = document.createElement("div");
        svgContainer.oncontextmenu = "return false"
        svgContainer.innerHTML = svg;
        document.getElementById("celestial").appendChild(svgContainer);
        document.getElementById("celestial").oncontextmenu = "return false"
        document.querySelector("#celestial svg").oncontextmenu = "return false"
      })
      setTimeout(() => setLoading(false), 3000)
    } catch (e) {
    }
  }, [color, hasGrid, year, month, date, hour, hasCompass, lat, lng]);
  return (
    <div
      className={`${hasCompass ? 'w-[255px]' : 'w-[305px] h-[305px]'} min-h-[225px] rounded-full self-stretch overflow-hidden`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <script src="https://cdn.jsdelivr.net/npm/d3-celestial@0.7.35/lib/d3.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/d3-celestial@0.7.35/lib/d3.geo.projection.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/d3-celestial@0.7.35/celestial.min.js"></script>
      </Head>
      <div className='h-full'>
        <div className='overflow-hidden h-full rounded-full flex items-center justify-center'>
          <div
            id="celestial"
            className='rounded-full justify-center items-center flex overflow-hidden w-full'
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CelestialChart;
