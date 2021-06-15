import React, {useRef} from 'react';
import {Link} from 'gatsby'
import TransitionLink from "gatsby-plugin-transition-link"
import cardbg from '../../images/cardbg.svg'
import gsap from 'gsap'
import'./newshero.css'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

export default function NewsHero(props) {
    const p = useRef(null)
    const contentHeight = useRef(null)
    // function showDescription(e) {
    //     let tl = gsap.timeline();
    //     tl.to(p.current, {
    //         maxHeight: p.current.scrollHeight,
    //         ease: 'power2.inOut',
    //         duration: 0.3
    //     }).to(p.current, {
    //         opacity: 1,
    //         duration: 0.3,
    //         ease: 'power2.inOut'
    //     }, 0.15)
    // }
    // function hideDescription(e) {
    //     let tl = gsap.timeline();
    //     tl.to(p.current, {
    //         opacity: 0,
    //         ease: 'power2.inOut',
    //         duration: 0.3,
            
    //     }).to(p.current, {
    //         maxHeight: 0,
    //         ease: 'power2.inOut',
    //         duration: 0.3
    //     }, 0.15)
    // }
    function readingOutput(length) {
        let minutes = Math.ceil(length);
        return `${minutes} min read`
    }

    function maxHeight() {
        if (contentHeight.current) return contentHeight.current.scrollHeight;
    }

    const hero = props.news[0];
    const image = getImage(hero.node.data.hero_image.localFile);


    return(
        <div className="px-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 auto-rows-auto grid-rows-auto-4 xl:grid-rows-auto-2 grid-flow-col w-full gap-4 max-w-screen-xl mx-auto mt-8">
            <h3>Latest Story</h3>
            <div className="rounded-lg shadow-md relative flex flex-col justify-end overflow-hidden w-full h-full min-h-96 news-card" 
            // onMouseEnter={showDescription} onMouseLeave={hideDescription}
            >
                {/* <img alt={`${hero.node.data.title[0].text || null}`} height="400" className="absolute top-0 left-0 h-full w-full object-cover z-0" src={hero.node.data.hero_image.thumbnails.HDx500.url || null}></img> */}
                <GatsbyImage className="absolute top-0 left-0 h-full w-full object-cover z-0" style={{position: 'absolute'}}alt={`${hero.node.data.title[0].text || null}`} image={image}></GatsbyImage>
                <h3 className="absolute top-0 left-0 transform translate-y-2 pl-6 bg-primary py-1 pr-8 z-10 text-white m-0 mt-4 font-black tag-clip">Safety</h3>
                <div className="z-10 card-container p-8 pt-12">
                    <h3 className="text-white">{hero.node.data.title[0].text || null}</h3>
                    <div data-height={maxHeight()} className="card-inner opacity-0" ref={contentHeight}>
                    <p ref={p} className="text-white overflow-hidden">Eight SBM sites in New Jersey received the Governor’s Occupational Safety and Health Award for the calendar year.</p>
                    <TransitionLink 
                        exit={{
                            length: 1,
                            trigger: ({node, e, exit, entry}) => {
                                // console.log(node);
                                gsap.to(node.children, {y: 100, opacity: 0, duration: 0.4, stagger: -0.1, ease: 'power2.inOut'});
                            }
                            }}
                            entry={{
                            delay: 0.5,
                            trigger: ({node, e, exit, entry}) => {
                                // console.log(node);
                                gsap.from(node, {opacity: 0, duration: 0.8, ease: 'power2.inOut'});
                            }
                            }}
                    to={hero.node.url} className="text-white">Read Article <span className="text-sm">({readingOutput(props.length)})</span></TransitionLink>
                    </div>
                </div>
            </div>
            <h3>Editor's Picks</h3>
            <div className="grid grid-rows-4 grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
                <div className="bg-white dark:bg-dark-card rounded shadow-md flex flex-col p-8" style={{backgroundImage: `url(${cardbg})`, backgroundSize: 'cover'}}>
                    <h3 className="text-primary font-black mt-0 ">People</h3>
                    <p className='flex-grow text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="mb-0 text-base">Read Article <span className="text-sm opacity-70">3 min read</span></p>
                </div>
                <div className="bg-white dark:bg-dark-card rounded shadow-md flex flex-col p-8" style={{backgroundImage: `url(${cardbg})`, backgroundSize: 'cover'}}>
                    <h3 className="text-primary font-black mt-0 ">Quality</h3>
                    <p className='flex-grow text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="mb-0 text-base">Read Article <span className="text-sm opacity-70">3 min read</span></p>
                </div>
                <div className="bg-white dark:bg-dark-card rounded shadow-md flex flex-col p-8" style={{backgroundImage: `url(${cardbg})`, backgroundSize: 'cover'}}>
                    <h3 className="text-primary font-black mt-0 ">Procurement</h3>
                    <p className='flex-grow text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="mb-0 text-base">Read Article <span className="text-sm opacity-70">3 min read</span></p>
                </div>
                <div className="bg-primary rounded shadow-md flex flex-col p-8" style={{backgroundImage: `url(${cardbg})`, backgroundSize: 'cover'}}>
                    <h3 className="text-white font-black mt-0 ">Stay in touch</h3>
                    <p className='flex-grow text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="relative">
                        <input className="py-1 h-8 px-4 pr-12 rounded-full w-full text-base" type="text" id="email" placeholder="your@email.com"/>
                        <div className="absolute top-0 right-0 h-8 w-8 rounded-full bg-gray-800 flex flex-col items-center justify-center text-white cursor-pointer">→</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}