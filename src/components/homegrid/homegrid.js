import React, {useEffect} from 'react'
import Card from './homegridcard.js';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


function HomeGrid() {
    useEffect(() => {
        ScrollTrigger.batch('.grid-card', {
            start: 'top 80%',
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
        <div className="grid grid-cols-2 md:grid-cols-6 2xl:grid-cols-12 auto-rows-fr grid-flow-row-dense mx-auto max-w-screen-xl gap-5 my-24">
            <Card classes="col-span-2 md:col-span-6 2xl:col-span-9 row-span-3" image="https://sbmqbrassets.s3.us-west-1.amazonaws.com/img/apple_safety_placeholder.jpg" align="top" heading="This is a card!" bgColor="red" protection="true"></Card>
            <Card classes="col-span-2 md:col-span-3 row-span-2 md:row-span-4 2xl:row-span-3" bgColor="blue" align="top" heading="This is a card!" protection="false"></Card>
            <Card classes="col-span-2 md:col-span-3 2xl:col-span-6 row-span-2" bgColor="red" align="top" heading="This is a card!" protection="true"></Card>
            <Card classes="col-span-1 md:col-span-3 row-span-2" bgColor="blue" align="bottom" heading="This is a card!" protection="false"></Card>
            <Card classes="col-span-1 md:col-span-3 row-span-2" bgColor="red" align="top" heading="This is a card!" protection="true"></Card>
            <Card classes="col-span-2 md:col-span-3 row-span-2" bgColor="blue" align="bottom" heading="This is a card!" protection="false"></Card>
            <Card classes="col-span-2 md:col-span-6 row-span-2" bgColor="red" align="top" heading="This is a card!" protection="true"></Card>
            <Card classes="col-span-2 md:col-span-3 row-span-2" bgColor="blue" align="bottom" heading="This is a card!" protection="false"></Card>
        </div>
        </div>
        
    )
}

export default HomeGrid;