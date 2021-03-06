import React, {useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Context } from 'gatsby-plugin-transition-link/context/createTransitionContext';
import { render } from 'react-dom';

gsap.registerPlugin(ScrollTrigger);

const isBrowser = typeof window !== "undefined"

export default function ServicesSequence({progress}) {
    var canvas = useRef(null)
    const [initted, setInit] = useState(false);
    const [imageSeq, setImages] = useState(() => {
        let seq = [];
        let frames = 394;
        function currentFrame(index) {
            return `https://sbmwebfeatures.s3.us-west-1.amazonaws.com/sequence2/services_${(index + 1).toString()}.jpg`
         }

         for (let i = 0; i< frames; i++) {
            if (isBrowser) {
                const img = document.createElement('img');
                img.src = currentFrame(i);
                seq.push(img);
            }
        }
        return seq;
    })

    useEffect(() => {
        const context = canvas.current.getContext('2d');
        canvas.current.height = canvas.current.offsetHeight;
        canvas.current.width = canvas.current.offsetWidth;
        // const frameCount = 299;
        // function currentFrame(index) {
        //    return `https://sbmwebfeatures.s3.us-west-1.amazonaws.com/sequence/services_${(index + 1).toString().padStart(3, '0')}.jpg`
        // }
        const sequence = {
            frame: Math.min(...[Math.floor(394*progress),390])
            // frame: 0,
        };
        // for (let i = 0; i< frameCount; i++) {
        //     const img = new Image();
        //     img.src = currentFrame(i);
        //     images.push(img);
        // }



        context.clearRect(0,0,canvas.current.width,canvas.current.height);
        context.drawImage(imageSeq[sequence.frame],0,canvas.current.height - canvas.current.width*9/16, canvas.current.width, canvas.current.width*9/16)        // if (imageSeq.length > 0) {imageSeq[0].onload = render;}
        // console.log(imageSeq[sequence.frame])
        function render() {
            context.clearRect(0,0,canvas.current.width,canvas.current.height);
            context.drawImage(imageSeq[sequence.frame],0,(canvas.current.height - canvas.current.width*9/16)/2*1.5, canvas.current.width, canvas.current.width*9/16)
            // console.log(sequence.frame)
        }
        render();

    })
    

    return (
        <canvas id="canvas" className="absolute top-0 left-0 h-full w-full z-10 " ref={canvas}></canvas>
    )
}