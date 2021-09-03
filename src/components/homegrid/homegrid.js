import React, {useEffect} from 'react'
import Card from './homegridcard.js';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import webmap from './assets/webmap.png';
import exp from './assets/exp_1.png'
import quality from './assets/quality_1.png'
import safe from './assets/safe_1.png'
import tech from './assets/tech_1.png'
import train from './assets/train_1.png'
import orange from './assets/orange_1.png'
import icSafe from '../../assets/icons/main_safety.svg'
import icClip from '../../assets/icons/main_clip_check.svg'
import icOnboarding from '../../assets/icons/main_onboarding.svg'
import icQuality from '../../assets/icons/main_quality.svg'
import icRetention from '../../assets/icons/main_retention.svg'
import icBrief from '../../assets/icons/main_brief.svg'
import icTraining from '../../assets/icons/main_training.svg'
import icTurnover from '../../assets/icons/main_turnover.svg'

gsap.registerPlugin(ScrollTrigger)


function HomeGrid() {
    useEffect(() => {
        ScrollTrigger.batch('.grid-card', {
            start: 'top 90%',
            end: 'bottom 200px',
            batchMax: 3,
            onEnter: batch => gsap.to(batch, {opacity: 1, y:0, stagger: 0.1,}),
            // markers: true,
            onLeave: batch => gsap.to(batch, {opacity: 0, y: -24, stagger: 0.1,}),
            onLeaveBack: batch =>gsap.to(batch, {opacity: 0, y: 24, stagger: 0.1,}),
            onEnterBack: batch => gsap.to(batch, {opacity: 1, y:0, stagger: 0.1,}),

        })
    })
    return (
        <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-6 2xl:grid-cols-12 auto-rows-fr grid-flow-row-dense mx-auto max-w-screen-xl gap-4 my-24">
            <Card classes="col-span-2 md:col-span-6 lg:col-span-4 2xl:col-span-6 row-span-2" image={webmap} align="top" bgColor="transparent" heading="Our Sites" protection={false}></Card>
            <Card classes="col-span-2 md:col-span-6 lg:col-span-2 2xl:col-span-3 row-span-2" image={orange} bgColor="white" align="top" heading="Differentiators" protection={false}>
                <ul className="relative divide-y-2 divide-solid divide-gray-700 divide-opacity-30 z-20">
                    <li className="py-1 font-medium flex flex-row items-center"><img src={icSafe} className="h-4 w-4 object-fit inline-block mr-2"/>5x Safer</li>
                    <li className="py-1 font-medium flex flex-row items-center"><img src={icTurnover} className="h-4 w-4 object-fit inline-block mr-2"/>10x Lower Turnover</li>
                    <li className="py-1 font-medium flex flex-row items-center"><img src={icQuality} className="h-4 w-4 object-fit inline-block mr-2"/>Quality Excellence</li>
                    <li className="py-1 font-medium flex flex-row items-center"><img src={icTraining} className="h-4 w-4 object-fit inline-block mr-2"/>Best-in-Class Training</li>
                    <li className="py-1 font-medium flex flex-row items-center"><img src={icClip} className="h-4 w-4 object-fit inline-block mr-2"/>Tier 1 Diversity Credit</li>
                    <li className="py-1 font-medium flex flex-row items-center"><img src={icBrief} className="h-4 w-4 object-fit inline-block mr-2"/>Supply Management</li>
                    <li className="py-1 font-medium flex flex-row items-center"><img src={icClip} className="h-4 w-4 object-fit inline-block mr-2"/>Seamless Transitions</li>
                </ul>
                </Card>
            <Card classes="col-span-2 md:col-span-3 2xl:col-span-3 row-span-1" image={quality} bgColor="white" align="top" heading="Quality" protection={false}></Card>
            <Card classes="col-span-2 md:col-span-3 2xl:col-span-3 row-span-1" image={safe} bgColor="white" align="top" heading="Safety" protection={false}></Card>
            <Card classes="col-span-2 md:col-span-3 row-span-1" bgColor="white" image={tech} align="top" heading="Technology" protection={false}></Card>
            <Card classes="col-span-2 md:col-span-3 row-span-1" bgColor="white" image={train} align="top" heading="Training" protection={false}></Card>
            <Card classes="col-span-2 md:col-span-6 row-span-1" bgColor="white" image={exp} align="top" heading="Employee Experience" protection={false}>
            <ul className="relative divide-y-2 divide-solid divide-gray-700 divide-opacity-30 z-20">
                    <li className="py-1 font-medium flex flex-row items-center"><img src={icOnboarding} className="h-4 w-4 object-fit inline-block mr-2"/>Onboarding</li>
                    <li className="py-1 font-medium flex flex-row items-center"><img src={icClip} className="h-4 w-4 object-fit inline-block mr-2"/>Absenteeism</li>
                    <li className="py-1 font-medium flex flex-row items-center"><img src={icRetention} className="h-4 w-4 object-fit inline-block mr-2"/>Retention</li>
                </ul>
            </Card>
        </div>
        </div>
        
    )
}

export default HomeGrid;