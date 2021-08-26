import React, {useEffect, useState, useRef} from 'react';
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
import ServicesSequence from '../servicessequence/servicessequence';
const isBrowser = typeof window !== "undefined"

gsap.registerPlugin(scrollTrigger);

export default function Sidebar(children) {
    const [tween, setTween] = useState(false);
    const [progress, setProgress] = useState(0);
    const container = useRef(null)
    const sidebar = useRef(null)
    const completion = useRef(null)
    useEffect(() => {
        if (!container?.current) return;
        if (tween) return;
        let sidebartl = gsap.timeline({
            scrollTrigger: {
                trigger: sidebar.current,
                pin: true,
                anticipatePin: 1,
                start: 'top 20%',
                endTrigger: container.current,
                end: "bottom bottom",
                // markers: true
            }
        })
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "bottom bottom",
                anticipatePin: 1,
                scrub: 1,
                pin: true,
                
                onUpdate: (self) => { if (completion.current) {completion.current.style.height = self.progress*100 + '%';
                setProgress(self.progress * 100);
            }}
            },
            markers: true,
        });
        setTween(true)
    })

    return(
        <>
        <div>
        <div className="w-64 " ref={sidebar}>
            <p className="transform rotate-180 m-0 mb-12" style={{writingMode: 'vertical-rl', textOrientation: 'sideways'}}> <span className="font-extrabold">01</span> | 04 </p>
            <div className="flex flex-row h-96 ml-3">
                <div className="relative h-full bg-gray-200" style={{width: '2px'}}>
                    <div ref={completion} className="w-full bg-gray-500"></div>
                </div>
                <div className="h-full flex flex-col justify-evenly ml-4">
                    <p className="text-sm uppercase font-black text-black">General</p>
                    <p className="text-sm uppercase font-black text-gray-200">Critical Environments</p>
                    <p className="text-sm uppercase font-black text-gray-200">Sustainability</p>
                    <p className="text-sm uppercase font-black text-gray-200">Exterior</p>
                    
                </div>
            </div>
        </div>
        </div>
        <div ref={container} className="w-full overflow-hidden" style={{height: '1000vh'}}>
            <div className="relative h-screen w-full flex flex-col items-center justify-start">
                <div className="bg-white mt-36">
                    <ul>
                        <li>Service List</li>
                        <li>Service List</li>
                        <li>Service List</li>
                        <li>Service List</li>
                        <li>Service List</li>
                        <li>Service List</li>
                        <li>Service List</li>
                        <li>Service List</li>
                    </ul>
                </div>
                    {ServicesSequence({images: [], progress: progress/100})}
            </div>
        </div>
        </>
    )
}