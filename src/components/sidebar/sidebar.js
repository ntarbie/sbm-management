import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import ServicesSequence from "../servicessequence/servicessequence";
import gatsbyPluginTransitionLink from "gatsby-plugin-transition-link";
const isBrowser = typeof window !== "undefined";

gsap.registerPlugin(scrollTrigger);
let prevProgress = 0;

export default function Sidebar(children) {
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
        // markers: true
      },
    });
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        anticipatePin: 1,
        pin: true,
        scrub: 1,
        onUpdate: self => {
          if (completion.current) {
            completion.current.style.height = self.progress * 100 + "%";
            setProgress(self.progress * 100);
          }
        },
      },
      markers: true,
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
      <div>
        <div className="w-64 hidden lg:block" ref={sidebar}>
          <p
            className="transform rotate-180 m-0 mb-12"
            style={{ writingMode: "vertical-rl", textOrientation: "sideways" }}>
            {" "}
            <span className="font-extrabold">01</span> | 04{" "}
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
                className="text-sm uppercase font-black text-gray-200 text-gray-900">
                General
              </p>
              <p
                id="critical"
                className="text-sm uppercase font-black text-gray-200">
                Critical Environments
              </p>
              <p
                id="environmental"
                className="text-sm uppercase font-black text-gray-200">
                Environmental Services
              </p>
              <p
                id="exterior"
                className="text-sm uppercase font-black text-gray-200">
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
          <div className="service-section-1 absolute top-0 mt-8 z-20">
            <h2 className="font-bold text-primary">General Services</h2>
            <ul className="grid grid-cols-1 gap-x-4 lg:grid-cols-1">
              <li>Janitorial</li>
              <li>MAC: Moves, Adds and Changes services</li>
              <li>Warehouse management</li>
              <li>Conference room set-up</li>
              <li>Patch and paint</li>
              <li>Electrical/lighting</li>
              <li>Plumbing</li>
              <li>Floor and carpet maintenance</li>
              <li>Special event support</li>
              <li>Construction support</li>
              <li>Lock and key</li>
              <li>Pest control</li>
              <li>Call center support</li>
              <li>Signage design and installation</li>
              <li>Office supply replenishment</li>
              <li>Mailroom services and delivery</li>
              <li>Paper shredding service</li>
              <li>Interior plant maintenance</li>
              <li>Cork and whiteboard services</li>
              <li>Ceiling tile replacement</li>
            </ul>
          </div>
          <div className="service-section-2 absolute top-0 mt-8 z-20 opacity-0">
            <h2 className="font-bold text-primary">Critical Environments</h2>
            <ul className="grid grid-cols-1 gap-x-4 lg:grid-cols-1">
              <li>GMP Cleaning</li>
              <li>FDA/third-party regulatory compliance</li>
              <li>Lab Services</li>
              <li>Glass Wash Services</li>
              <li>Animal Care Services</li>
              <li>GMP Maintenance and Repairs</li>
              <li>Supply Management </li>
              <li>Emergency spill response</li>
              <li>Hazardous, medical and radioactive waste removal</li>
              <li>Environmental monitoring</li>
              <li>Safety shower/eyewash inspections</li>
              <li>Dycem mat and Tacky mat maintenance</li>
              <li>Particle sampling</li>
              <li>Fab cleaning</li>
              <li>Interstitial cleaning</li>
              <li>Class 1-30,000 cleanroom sanitizing</li>
              <li>Data center services</li>
              <li>Sub-floor cleaning</li>
              <li>Raised floor cleaning</li>
              <li>Protocol services</li>
            </ul>
          </div>
          <div className="service-section-3 absolute top-0 mt-8 z-20 opacity-0">
            <h2 className="font-bold text-primary">Environmental Services</h2>
            <ul className="grid grid-cols-1 gap-x-4 lg:grid-cols-1">
              <li>GMP Cleaning</li>
              <li>FDA/third-party regulatory compliance</li>
              <li>Lab Services</li>
              <li>Glass Wash Services</li>
              <li>Animal Care Services</li>
              <li>GMP Maintenance and Repairs</li>
              <li>Supply Management </li>
              <li>Emergency spill response</li>
              <li>Hazardous, medical and radioactive waste removal</li>
              <li>Environmental monitoring</li>
              <li>Safety shower/eyewash inspections</li>
              <li>Dycem mat and Tacky mat maintenance</li>
              <li>Particle sampling</li>
              <li>Fab cleaning</li>
              <li>Interstitial cleaning</li>
              <li>Class 1-30,000 cleanroom sanitizing</li>
              <li>Data center services</li>
              <li>Sub-floor cleaning</li>
              <li>Raised floor cleaning</li>
              <li>Protocol services</li>
            </ul>
          </div>
          <div className="service-section-4 absolute top-0 mt-8 z-20 opacity-0">
            <h2 className="font-bold text-primary">Exterior Services</h2>
            <ul className="grid grid-cols-1 gap-x-4 lg:grid-cols-1">
              <li>Landscape maintenance</li>
              <li>Snow removal</li>
              <li>Parking lot sweeping</li>
              <li>Erosion control</li>
              <li>Integrated pest management</li>
              <li>Landscape design</li><li>Construction services</li>
              <li>GreenScape programs</li>
              <li>Irrigation systems</li>
              <li>Stormwater management</li>
              <li>Wetlands mitigation and remediation</li>
              <li>Water conservation & management</li>
              <li>Turf renovation</li>
              <li>Pruning and clean-up services</li>
              <li>Total arbor care</li>
              <li>Hardscape maintenance</li>
            </ul>
          </div>
          {ServicesSequence({ images: [], progress: progress / 100 })}
        </div>
      </div>
    </>
  );
}
