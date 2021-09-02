import React, {useState} from 'react';
import './leadership.css';

export default function LeaderCard(l, i) {
    const [bioVis, setBioVis] = useState(false);

    return (
        <div key={i} className="leadership-card bg-white shadow-lg rounded-lg overflow-hidden flex flex-col ">
                    <div className="relative bg-gradient-to-b from-white via-white to-gray-300 flex-shrink">
                        <img src={l.image_portrait} alt={l.name} className="w-full object-cover object-top" />
                        <div className={"absolute top-0 left-0 h-full w-full bio " + (bioVis ? 'opacity-1' : 'opacity-0')}>
                          <div className="relative h-full w-full bg-gradient-to-t from-primary-stop1 to-primary-stop2 z-10 opacity-80"></div>
                          <div className="absolute top-0 left-0 h-full w-full z-20 flex flex-col items-center justify-center">
                            <p className="font-semibold text-white text-base block p-6">
                              {l.bio.slice(0,200)}...
                            </p>
                          </div>
                        </div>
                        <div onMouseEnter={() => setBioVis(true)} onMouseLeave={() => {setBioVis(false)}} className={"absolute bottom-0 right-0 transform -translate-x-6 translate-y-6 z-50 bg-white rounded-full shadow-lg font-extrabold h-12 w-12 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors transition-transform duration-300 "}>
                          +
                        </div>
                    </div>
                    <div className="bg-white px-4 py-2">
                        <p className="text-base m-0 p-0">
                            {l.name}
                            </p>
                            <p className="text-sm m-0 p-0">
                                {l.title}
                            </p>
                    </div>
                </div>
    )
}