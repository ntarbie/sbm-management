import React, {useRef} from 'react';
// import {Link} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import gsap from 'gsap'

export default function NewsHero(props) {
    const p = useRef(null)
    function showDescription(e) {
        let tl = gsap.timeline();
        tl.to(p.current, {
            maxHeight: p.current.scrollHeight,
            ease: 'power2.inOut',
            duration: 0.3
        }).to(p.current, {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.inOut'
        }, 0.15)
    }
    function hideDescription(e) {
        let tl = gsap.timeline();
        tl.to(p.current, {
            opacity: 0,
            ease: 'power2.inOut',
            duration: 0.3,
            
        }).to(p.current, {
            maxHeight: 0,
            ease: 'power2.inOut',
            duration: 0.3
        }, 0.15)
    }
    function readingOutput(length) {
        let minutes = Math.ceil(length);
        return `${minutes} min read`
    }
    const hero = props.news[0];
    return(
        <div className="grid grid-cols-2 auto-rows-auto grid-rows-auto-2 grid-flow-col w-full gap-4 max-w-screen-xl mx-auto mt-8">
            <h3>Latest Stories</h3>
            <div className="rounded-lg shadow relative flex flex-col justify-end p-6 overflow-hidden h-96" onMouseEnter={showDescription} onMouseLeave={hideDescription}>
                <img alt={`${hero.node.data.title[0].text || null}`} height="400" className="absolute top-0 left-0 h-full w-full object-cover z-0" src={hero.node.data.hero_image.thumbnails.HDx500.url || null}></img>
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent via-black to-black z-0 opacity-50"></div>
                <h3 className="absolute top-0 left-0 transform translate-y-2 pl-6 bg-primary py-1 pr-2 z-10 text-white">Safety</h3>
                <div className="z-10">
                    <h3 className="text-white">{hero.node.data.title[0].text || null}</h3>
                    <p ref={p} className="text-white max-h-0 overflow-hidden opacity-0">Eight SBM sites in New Jersey received the Governor’s Occupational Safety and Health Award for the calendar year.</p>
                    <AniLink cover to="right" bg="#ffffff" to={hero.node.url} className="text-white">Read Article <span className="text-sm">({readingOutput(props.length)})</span></AniLink>
                </div>
            </div>
            <h3>Editor's Picks</h3>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <div className="bg-white rounded shadow"></div>
                <div className="bg-white rounded shadow"></div>
                <div className="bg-white rounded shadow"></div>
                <div className="bg-white rounded shadow"></div>
            </div>
        </div>
    )
}