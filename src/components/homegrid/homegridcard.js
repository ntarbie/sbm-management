import React, {useState, useRef} from 'react';
import './homegridcard.css'
import gsap from 'gsap';


function Card({heading, image, bgColor, align, protection, classes, linkText, linkUrl}) {
    const currentLink = useRef(null);
    const currentLinkText = useRef(null)
    const linkWidth = useRef(null)
    const [cardAlign, setcardAlign] = useState(() => {
        if (align === "top") return 'justify-start';
        return 'justify-start';
    })
    const [protectionAlignment] = useState(() => {
        if (align === "top") return 'top-0';
        return 'top-0'
    })
    const [color] = useState(() => {
        if (bgColor) return `bg-${bgColor}-400`;
        return '';
    })
    const [protectionColor] = useState(() => {
        if (bgColor) return `from-${bgColor}-400`;
        return 'from-black';
    })
    const [classList] = useState(() => {
        if (classes) return classes;
        return '';
    })
    const [useLink] = useState('#')
    const [useLinkText] = useState('Test Link')

    function revealLink() {
        let inTL = new gsap.timeline();
        inTL.to(currentLink.current, {
            duration: 0.5,
            ease: 'power2.inOut',
            width: 'auto',
        }).to(currentLinkText.current, {
            opacity: 1,
            duration: 0.3,
            ease: 'power3.in',
        }, 0)
    }
    function hideLink() {
        let outTL = new gsap.timeline();
        outTL.to(currentLinkText.current, {
            opacity: 0,
            ease: 'power3.out',
            duration: 0.3
        }).to(currentLink.current, {
            duration: 0.5,
            ease: 'power2.inOut',
            width: '2rem',
        }, 0)
    }

    return (
        <div onMouseEnter={revealLink} onFocus={revealLink} onMouseLeave={hideLink} onBlur={hideLink} className={`grid-card relative rounded-3xl overflow-hidden flex flex-col ${cardAlign} ${color} h-64 min-h-full opacity-0 transform translate-y-24 ${classList}`}>
            {image && <img src={image} alt="" className="absolute top-0 left-0 h-full w-full z-10 object-cover" />}
            {protection && <div class={`absolute ${protectionAlignment} bg-gradient-to-b ${protectionColor} h-1/2 w-full z-20 opacity-50 blur-3xl`}></div>}
            <h2 className='z-30 mt-0 mb-0 p-6 text-white font-medium leading-none max-w-3/4'>{heading}</h2>
            <a ref={currentLink} href={useLink} className="absolute bottom-0 right-0 m-2 h-8 w-8 transition duration-300 bg-white text-black overflow-hidden rounded-full flex flex-row items-center justify-center leading-none p-0 font-bold z-40 hover:bg-primary hover:text-white">
                <div className="relative h-full w-full flex flex-row items-center justify-center">
                <div className="absolute left-0 h-8 w-8 flex items-center justify-center" aria-hidden="true">+</div>
                <div ref={linkWidth}>
                <p ref={currentLinkText} className="my-0 ml-8 mr-4 opacity-0 whitespace-nowrap">{useLinkText}</p>
                </div>
                </div>
            </a>
        </div>
    )
}

export default Card;