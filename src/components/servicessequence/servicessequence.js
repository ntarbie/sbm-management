import React, {useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Context } from 'gatsby-plugin-transition-link/context/createTransitionContext';
import { render } from 'react-dom';

gsap.registerPlugin(ScrollTrigger);


export default function ServicesSequence({images, progress}) {
    var canvas = useRef(null)
    const [initted, setInit] = useState(false);
    const [imageSeq, setImages] = useState(() => {
        let seq = [];
        let frames = 394;
        function currentFrame(index) {
            return `https://sbmwebfeatures.s3.us-west-1.amazonaws.com/sequence/services_${(index + 1).toString()}.jpg`
         }

         for (let i = 0; i< frames; i++) {
            const img = document.createElement('img');
            img.src = currentFrame(i);
            seq.push(img);
        }
        return seq;
    })

    useEffect(() => {
        const context = canvas.current.getContext('2d');
        canvas.current.height = 1920;
        canvas.current.width = 1920;
        // const frameCount = 299;
        // function currentFrame(index) {
        //    return `https://sbmwebfeatures.s3.us-west-1.amazonaws.com/sequence/services_${(index + 1).toString().padStart(3, '0')}.jpg`
        // }

        const images = [];
        const sequence = {
            frame: Math.min(...[Math.floor(394*progress),350])
            // frame: 0,
        };
        // for (let i = 0; i< frameCount; i++) {
        //     const img = new Image();
        //     img.src = currentFrame(i);
        //     images.push(img);
        // }

        if (imageSeq.length === 0) return;
        // if (imageSeq.length > 0) {imageSeq[0].onload = render;}
        console.log(imageSeq[sequence.frame])
        function render() {
            context.clearRect(0,0,1920,1800);
            context.drawImage(imageSeq[sequence.frame],0,640)
            console.log(sequence.frame)
        }
        
        render();

    })

    return (
        <canvas className="absolute top-0 left-0 h-full w-full " ref={canvas}></canvas>
    )
}