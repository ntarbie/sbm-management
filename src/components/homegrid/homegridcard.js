import React, {useState, useRef} from 'react';
import './homegridcard.css'
import gsap from 'gsap';


function Card({heading, image, bgColor, align, protection, classes, linkText, linkUrl, children}) {
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
        if (bgColor) return `bg-${bgColor}-100`;
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
        <div 
        //onMouseEnter={revealLink} onFocus={revealLink} onMouseLeave={hideLink} onBlur={hideLink} 
        className={`grid-card relative rounded-lg overflow-hidden flex flex-col ${cardAlign} ${color} h-48 min-h-full opacity-0 transform translate-y-24 shadow-lg ${classList}`}>
            {image && <img src={image} alt="" className="absolute top-0 left-0 h-full w-full z-10 object-cover" />}
            {protection && <div className={`absolute ${protectionAlignment} bg-gradient-to-t ${protectionColor} h-full w-full z-20 opacity-50 blur-3xl`}></div>}
            <h3 className='z-30 mt-0 mb-0 p-6 font-medium leading-none max-w-3/4 text-black font-black'>{heading}</h3>
            <div className="h-full flex flex-col items-start justify-start px-6">
                {children}
            </div>
        </div>
    )
}

export default Card;