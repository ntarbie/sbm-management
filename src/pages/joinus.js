import React, { useEffect, useState, useRef } from "react";
import SeO from "../components/SEO";
import { withPreview } from "gatsby-source-prismic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import joinusbg from "../images/joinusbg.png";
import people from "../images/people.png";
import corp1 from "../images/corp1_1.png";
import collage from "../images/collage.png";

gsap.registerPlugin(ScrollTrigger);

const JoinUs = ({ data, transitionStatus, entry, exit }) => {
  let sidebar = useRef(null);
  let container = useRef(null);
  const [progress, setProgress] = useState(0);
  const [tweening, setTweening] = useState(false);
  const [item, setItem] = useState('01');
  useEffect(() => {
    if (!tweening) {
        let timeline = gsap.timeline({scrollTrigger: {
            trigger: '#sidebar',
            pin: '#sidebar',
            start: 'top 20%',
            endTrigger: '#container',
            end: 'bottom bottom', 
            markers: false,
            scrub: 1,
            onUpdate: (self) => {
                      setProgress(self.progress * 100);
                    }
            }})
        }
        let headings = [...container.current.getElementsByTagName('h2')]
        headings.forEach((h,i) => {
            ScrollTrigger.create({
                trigger: h,
                start: 'top center',
                onEnter: () => {
                    setItem('0' + (i+1).toFixed());
                }
            })
        })
    setTweening(true);
  });

  return (
    <>
      <SeO
        title="Join Us"
        description="None"
        body="negative-header dark-header"
      />
      <section
        className="w-full h-screen-66"
        style={{
          backgroundImage: `url(${joinusbg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="h-full max-w-screen-xl flex flex-row items-end justify-around pt-12 pb-0 mx-auto">
          <img
            src={people}
            alt=""
            className="w-8/12 max-h-full object-fit object-left-bottom pr-8"
          />
          <div class="w-4/12 h-full flex flex-col items-start justify-between flex-grow">
            <h1 class="hero-title text-black font-extrabold text-3xl lg:text-6xl mb-4 max-w-24ch">
              Find Your Place at SBM
            </h1>
            <p>
              We care about our people and are committed to building a team
              filled with proactive members who take an ownership approach to
              all they do.
            </p>
            <p class="font-bold">All Open Positions</p>
          </div>
        </div>
      </section>
      <div className="w-full bg-white py-12 px-6 ">
        <div className="max-w-screen-xl mx-auto flex flex-row items-start bg-white">
          <div
            id="sidebar"
            ref={sidebar}
            className="w-64 hidden lg:block flex-shrink-0">
            <div className="w-full">
              <p
                className="transform rotate-180 m-0 mb-12"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "sideways",
                }}>
                <span className="font-extrabold w-4">{item}</span> | 03
              </p>
              <div className="flex flex-row h-96 ml-3">
                <div
                  className="relative h-full bg-gray-200"
                  style={{ width: "2px" }}>
                  <div className="w-full bg-gray-500" style={{height: progress + "%"}}></div>
                </div>
                <div className="h-full flex flex-col justify-start ml-4">
                  <p
                    id="general"
                    className={
                      "text-sm uppercase font-black text-gray-400 transition-colors duration-300 " + (item === "01" ? 'text-gray-900' : '')
                    }>
                    Corporate Jobs
                  </p>
                  <p
                    id="critical"
                    className={
                      "text-sm uppercase font-black text-gray-400 transition-colors duration-300 " + (item === "02" ? 'text-gray-900' : '')
                    }>
                    Design & Engineering
                  </p>
                  <p
                    id="environmental"
                    className={
                      "text-sm uppercase font-black text-gray-400 transition-colors duration-300 " + (item === "03" ? 'text-gray-900' : '')
                    }>
                    Operations{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="container" ref={container}>
            <h2 className="font-black text-4xl dark:text-white ">
              Corporate Jobs
            </h2>
            <img
              className="w-full h-96 object-cover rounded shadow-lg my-12 my-24"
              src={corp1}
              alt=""
            />
            <p>
              Join a dynamic team responsible for supporting our daily
              operations through various corporate functions ranging from
              accounting to human resources, and everything in between. Our
              corporate team eagerly tackles departmental tasks to keep our
              organizational goals on course.
            </p>
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4 my-24">
              <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://source.unsplash.com/1600x900/?female,business,person"
                  alt=""
                  className="h-full w-5/12 lg:w-48 float-left object-cover"
                />
                <div className="h-full flex flex-col justify-between items-start p-8">
                  <blockquote className="text-xl font-bold">
                    "When you believe in what you do, it makes all the
                    difference."
                  </blockquote>
                  <div>
                    <p className="text-primary font-bold mb-0">Maria Aguirre</p>
                    <p className="font-bold mb-0">Finance Manager</p>
                  </div>
                </div>
              </div>
              <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://source.unsplash.com/1600x900/?man,business,person"
                  alt=""
                  className="h-full w-5/12 lg:w-48 float-left object-cover"
                />
                <div className="h-full flex flex-col justify-between items-start p-8">
                  <blockquote className="text-xl font-bold">
                    "When you believe in what you do, it makes all the
                    difference."
                  </blockquote>
                  <div>
                    <p className="text-primary font-bold mb-0">John Smith</p>
                    <p className="font-bold mb-0">IT Director</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="font-black text-4xl dark:text-white ">
              Design & Engineering
            </h2>
            <img
              className="w-full h-96 object-cover rounded shadow-lg my-12 my-24"
              src={corp1}
              alt=""
            />
            <p>
              Join a dynamic team responsible for supporting our daily
              operations through various corporate functions ranging from
              accounting to human resources, and everything in between. Our
              corporate team eagerly tackles departmental tasks to keep our
              organizational goals on course.
            </p>
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4 my-24">
              <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://source.unsplash.com/1600x900/?female,business,person"
                  alt=""
                  className="h-full w-32 lg:w-48 float-left object-cover"
                />
                <div className="h-full flex flex-col justify-between items-start p-8">
                  <blockquote className="text-xl font-bold">
                    "When you believe in what you do, it makes all the
                    difference."
                  </blockquote>
                  <div>
                    <p className="text-primary font-bold mb-0">Maria Aguirre</p>
                    <p className="font-bold mb-0">Finance Manager</p>
                  </div>
                </div>
              </div>
              <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://source.unsplash.com/1600x900/?man,business,person"
                  alt=""
                  className="h-full w-32 lg:w-48 float-left object-cover"
                />
                <div className="h-full flex flex-col justify-between items-start p-8">
                  <blockquote className="text-xl font-bold">
                    "When you believe in what you do, it makes all the
                    difference."
                  </blockquote>
                  <div>
                    <p className="text-primary font-bold mb-0">John Smith</p>
                    <p className="font-bold mb-0">IT Director</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="font-black text-4xl dark:text-white ">Operations</h2>
            <img
              className="w-full h-96 object-cover rounded shadow-lg my-12 my-24"
              src={corp1}
              alt=""
            />
            <p>
              Join a dynamic team responsible for supporting our daily
              operations through various corporate functions ranging from
              accounting to human resources, and everything in between. Our
              corporate team eagerly tackles departmental tasks to keep our
              organizational goals on course.
            </p>
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4 my-24">
              <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://source.unsplash.com/1600x900/?female,business,person"
                  alt=""
                  className="h-full w-5/12 lg:w-48 float-left object-cover"
                />
                <div className="h-full flex flex-col justify-between items-start p-8">
                  <blockquote className="text-xl font-bold">
                    "When you believe in what you do, it makes all the
                    difference."
                  </blockquote>
                  <div>
                    <p className="text-primary font-bold mb-0">Maria Aguirre</p>
                    <p className="font-bold mb-0">Finance Manager</p>
                  </div>
                </div>
              </div>
              <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://source.unsplash.com/1600x900/?man,business,person"
                  alt=""
                  className="h-full w-5/12 lg:w-48 float-left object-cover"
                />
                <div className="h-full flex flex-col justify-between items-start p-8">
                  <blockquote className="text-xl font-bold">
                    "When you believe in what you do, it makes all the
                    difference."
                  </blockquote>
                  <div>
                    <p className="text-primary font-bold mb-0">John Smith</p>
                    <p className="font-bold mb-0">IT Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full py-20 px-6 flex flex-col items-center justify-around"
        id="mission"
        style={{
          backgroundImage: "url(" + collage + ")",
          backgroundSize: "cover",
        }}>
        <h2 className="font-black text-4xl dark:text-white text-center">
          Our Mission & Core Values
        </h2>
        <p className="text-2xl text-center max-w-screen-xl font-medium my-12">
          SBM’s mission is to inspire and deliver extraordinary innovation,
          value, and service. We accomplish this by never losing sight of our
          core values and incorporating them into our daily operations.
        </p>
        <button className="px-6 py-2 bg-primary text-white border-2 border-primary rounded-full font-bold transition-colors hover:bg-transparent hover:text-primary">
          Watch Video
        </button>
      </div>
    </>
  );
};

export default JoinUs;
