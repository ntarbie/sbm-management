import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import ServicesSequence from "../servicessequence/servicessequence";
import gatsbyPluginTransitionLink from "gatsby-plugin-transition-link";
const isBrowser = typeof window !== "undefined";

gsap.registerPlugin(scrollTrigger);
let prevProgress = 0;

export default function Sidebar() {
  const [tween, setTween] = useState(false);
  const [progress, setProgress] = useState(0);
  const container = useRef(null);
  const sidebar = useRef(null);
  const completion = useRef(null);
  useEffect(() => {
    if (!container?.current) return;
    if (tween) return;
    let sidebartl = gsap.timeline({
      scrollTrigger: {
        trigger: sidebar.current,
        pin: true,
        anticipatePin: 1,
        start: "top 20%",
        endTrigger: container.current,
        end: "bottom bottom",
      },
    });
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        pin: true,
        anticipatePin: 1,
        scrub: true,
        // markers: true,
        onUpdate: self => {
          if (completion.current) {
            completion.current.style.height = self.progress * 100 + "%";
            setProgress(self.progress * 100);
            // console.log(self.progress*100);
          }
        },
      },
      markers: false,
    });
    tl.to(".service-section-1", { autoAlpha: 0, duration: 0.4 }, "25%")
      .to(".service-section-2", { autoAlpha: 1 })
      .to(".service-section-2", { autoAlpha: 0 }, "50%")
      .to(".service-section-3", { autoAlpha: 1 })
      .to(".service-section-3", { autoAlpha: 0 }, "75%")
      .to(".service-section-4", { autoAlpha: 1 });
    setTween(true);
  });

  return (
    <>
    <div className="w-64 hidden lg:block">

        <div className="w-full" ref={sidebar}>
          <p
            className="transform rotate-180 m-0 mb-12"
            style={{ writingMode: "vertical-rl", textOrientation: "sideways" }}>
            {" "}
            <span className="font-extrabold w-4">{progress < 15 ? "01" : progress < 49 ? "02" : progress < 83 ? "03" : "04"}</span> | 04{" "}
          </p>
          <div className="flex flex-row h-96 ml-3">
            <div
              className="relative h-full bg-gray-200"
              style={{ width: "2px" }}>
              <div ref={completion} className="w-full bg-gray-500"></div>
            </div>
            <div className="h-full flex flex-col justify-start ml-4">
              <p
                id="general"
                className={"text-sm uppercase font-black text-gray-400 transition-colors duration-300 " + (progress < 15 ? "text-gray-900":"")}>
                General
              </p>
              <p
                id="critical"
                className={"text-sm uppercase font-black text-gray-400 transition-colors duration-300 " + ((progress >= 15 && progress < 49) ? "text-gray-900":"")}>
                Critical Environments
              </p>
              <p
                id="environmental"
                className={"text-sm uppercase font-black text-gray-400 transition-colors duration-300 " + ((progress >= 49 && progress < 83) ? "text-gray-900":"")}>
                Environmental Services
              </p>
              <p
                id="exterior"
                className={"text-sm uppercase font-black text-gray-400 transition-colors duration-300 " + ((progress >= 83) ? "text-gray-900":"")}>
                Exterior Services
              </p>
            </div>
          </div>
        </div>
    </div>

      <div
        ref={container}
        className="w-full overflow-hidden"
        style={{ height: "800vh" }}>
        <div className="relative h-screen w-full flex flex-col items-center justify-start">
          <div className="service-section-1 absolute top-0 z-20">
            <h2 id="start" className="font-bold text-primary text-center">General Services</h2>
            <ul className="grid grid-cols-1 gap-x-4 lg:grid-cols-1">
              <li className="text-center text-sm">Janitorial</li>
              <li className="text-center text-sm">MAC: Moves, Adds and Changes services</li>
              <li className="text-center text-sm">Warehouse management</li>
              <li className="text-center text-sm">Conference room set-up</li>
              <li className="text-center text-sm">Patch and paint</li>
              <li className="text-center text-sm">Electrical/lighting</li>
              <li className="text-center text-sm">Plumbing</li>
              <li className="text-center text-sm">Floor and carpet maintenance</li>
              <li className="text-center text-sm">Special event support</li>
              <li className="text-center text-sm">Construction support</li>
              <li className="text-center text-sm">Lock and key</li>
              <li className="text-center text-sm">Pest control</li>
              <li className="text-center text-sm">Call center support</li>
              <li className="text-center text-sm">Signage design and installation</li>
              <li className="text-center text-sm">Office supply replenishment</li>
              <li className="text-center text-sm">Mailroom services and delivery</li>
              <li className="text-center text-sm">Paper shredding service</li>
              <li className="text-center text-sm">Interior plant maintenance</li>
              <li className="text-center text-sm">Cork and whiteboard services</li>
              <li className="text-center text-sm">Ceiling tile replacement</li>
            </ul>
          </div>
          <div className="service-section-2 absolute top-0 z-20 opacity-0">
            <h2 className="font-bold text-primary text-center">Critical Environments</h2>
            <ul className="grid grid-cols-1 gap-x-4 lg:grid-cols-1">
              <li className="text-center text-sm">GMP Cleaning</li>
              <li className="text-center text-sm">FDA/third-party regulatory compliance</li>
              <li className="text-center text-sm">Lab Services</li>
              <li className="text-center text-sm">Glass Wash Services</li>
              <li className="text-center text-sm">Animal Care Services</li>
              <li className="text-center text-sm">GMP Maintenance and Repairs</li>
              <li className="text-center text-sm">Supply Management </li>
              <li className="text-center text-sm">Emergency spill response</li>
              <li className="text-center text-sm">Hazardous, medical and radioactive waste removal</li>
              <li className="text-center text-sm">Environmental monitoring</li>
              <li className="text-center text-sm">Safety shower/eyewash inspections</li>
              <li className="text-center text-sm">Dycem mat and Tacky mat maintenance</li>
              <li className="text-center text-sm">Particle sampling</li>
              <li className="text-center text-sm">Fab cleaning</li>
              <li className="text-center text-sm">Interstitial cleaning</li>
              <li className="text-center text-sm">Class 1-30,000 cleanroom sanitizing</li>
              <li className="text-center text-sm">Data center services</li>
              <li className="text-center text-sm">Sub-floor cleaning</li>
              <li className="text-center text-sm">Raised floor cleaning</li>
              <li className="text-center text-sm">Protocol services</li>
            </ul>
          </div>
          <div className="service-section-3 absolute top-0 z-20 opacity-0">
            <h2 className="font-bold text-primary text-center">Environmental Services</h2>
            <ul className="grid grid-cols-1 gap-x-4 lg:grid-cols-1">
              <li className="text-center text-sm">GMP Cleaning</li>
              <li className="text-center text-sm">FDA/third-party regulatory compliance</li>
              <li className="text-center text-sm">Lab Services</li>
              <li className="text-center text-sm">Glass Wash Services</li>
              <li className="text-center text-sm">Animal Care Services</li>
              <li className="text-center text-sm">GMP Maintenance and Repairs</li>
              <li className="text-center text-sm">Supply Management </li>
              <li className="text-center text-sm">Emergency spill response</li>
              <li className="text-center text-sm">Hazardous, medical and radioactive waste removal</li>
              <li className="text-center text-sm">Environmental monitoring</li>
              <li className="text-center text-sm">Safety shower/eyewash inspections</li>
              <li className="text-center text-sm">Dycem mat and Tacky mat maintenance</li>
              <li className="text-center text-sm">Particle sampling</li>
              <li className="text-center text-sm">Fab cleaning</li>
              <li className="text-center text-sm">Interstitial cleaning</li>
              <li className="text-center text-sm">Class 1-30,000 cleanroom sanitizing</li>
              <li className="text-center text-sm">Data center services</li>
              <li className="text-center text-sm">Sub-floor cleaning</li>
              <li className="text-center text-sm">Raised floor cleaning</li>
              <li className="text-center text-sm">Protocol services</li>
            </ul>
          </div>
          <div className="service-section-4 absolute top-0 z-20 opacity-0">
            <h2 className="font-bold text-primary text-center">Exterior Services</h2>
            <ul className="grid grid-cols-1 gap-x-4 lg:grid-cols-1">
              <li className="text-center text-sm">Landscape maintenance</li>
              <li className="text-center text-sm">Snow removal</li>
              <li className="text-center text-sm">Parking lot sweeping</li>
              <li className="text-center text-sm">Erosion control</li>
              <li className="text-center text-sm">Integrated pest management</li>
              <li className="text-center text-sm">Landscape design</li><li className="text-center text-sm">Construction services</li>
              <li className="text-center text-sm">GreenScape programs</li>
              <li className="text-center text-sm">Irrigation systems</li>
              <li className="text-center text-sm">Stormwater management</li>
              <li className="text-center text-sm">Wetlands mitigation and remediation</li>
              <li className="text-center text-sm">Water conservation & management</li>
              <li className="text-center text-sm">Turf renovation</li>
              <li className="text-center text-sm">Pruning and clean-up services</li>
              <li className="text-center text-sm">Total arbor care</li>
              <li className="text-center text-sm">Hardscape maintenance</li>
            </ul>
          </div>
          {ServicesSequence({ progress: ((progress / 100) || 0 )})}
        </div>
      </div>
      <div className="w-64 hidden lg:block">

<div className="w-full">
  </div>
  </div>
    </>
  );
}
