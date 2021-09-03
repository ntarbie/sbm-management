import React, {useRef} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './leadership.css';
import LeaderCard from './leader-card';
import gsap from 'gsap/gsap-core';



const leadershipsample = [
    {
      "name": "Charles Somers",
      "title": "CEO / Partner",
      "image_portrait": "https://sbmwebfeatures.s3.us-west-1.amazonaws.com/assets/charlessomers2.png", 
      "image_square": "https://sbmwebfeatures.s3.us-west-1.amazonaws.com/assets/charlessomers1.png",
      "bio" : "As an original founding partner, Charles Somers continues to advance SBM’s development as one of the leading global facilities service providers. As President and CEO since inception, Charles is committed to innovation and developing technology solutions that empower the successful delivery of exceptional service. His responsibilities include customer relations, operational development programs, and financial performance. When he's not overseeing SBM’s strategic direction, Charles enjoys traveling, cycling, and spending time with his family."
    },

    {
      "name": "Don Tracy",
      "title": "Executive VP / Partner",
      "image_portrait": "https://sbmwebfeatures.s3.us-west-1.amazonaws.com/assets/dontracy2.png",
      "image_square": "https://sbmwebfeatures.s3.us-west-1.amazonaws.com/assets/dontracy1.png",
      "bio" : "Don Tracy is one of the original founding partners of SBM. With more than 30 years experience in the building services industry, he spearheaded original national and international expansion efforts through the establishment of proprietary operational transition processes. Don currently supports the organization through strategic involvement with SBM’s procurement team to drive world-class quality and cost objectives for SBM’s customer base. When he's not providing support to SBM and its affiliated organizations, Don enjoys golfing and spending time with his grandkids."

    },
    {
      "name": "Ron Alvarado",
      "title": "Partner",
      "image_portrait": "https://sbmwebfeatures.s3.us-west-1.amazonaws.com/assets/ronalvarado2.png",
      "image_square": "https://sbmwebfeatures.s3.us-west-1.amazonaws.com/assets/ronalvarado1.png",
      "bio" : "With more than 20 years of experience within the facilities and real estate service industry, Ron Alvarado has been instrumental in establishing SBM's reputation as a premiere minority-owned business and actively supports the company's diversity initiatives. He became partner in 1993 and supported the organization as it embarked on national expansion initiatives. An innovative thinker, Ron focuses on collaboration with his two partners to help provide the Senior Leadership Team with strategic oversight and planning. Ron enjoys time traveling with his family, including cozy weekends at the North Central California Coast."
    },
    {
      "name": "Nick McMackins",
      "title": "President",
      "image_portrait": "https://sbmwebfeatures.s3.us-west-1.amazonaws.com/assets/nickmcmackins2.png",
      "image_square": "https://sbmwebfeatures.s3.us-west-1.amazonaws.com/assets/nickmcmackins1.png",
      "bio" : "As SBM’s President, Nick McMackins charts the course for our organization, collaborating directly with members of our senior leadership team. Often touted for his ability to cultivate cross-departmental alliances, Nick works with each team to ensure organizational preparedness and infrastructure scalability as SBM continues its rapid growth trajectory. During his 12 years with SBM, Nick’s contributions have directly impacted the company’s strategic vision, and his calculated approach has proven successful for SBM’s solutions team, yielding unprecedented organizational expansion across the company. A St. Louis sports superfan and self-professed thrill seeker, one of Nick’s favorite hobbies is skydiving. In fact, he took the plunge even more extreme during a mid-air proposal to his now-wife."
    },
      {
          "name": "Chris Harze",
          "title": "Chief Financial Officer",
          "image_portrait": "https://sbmwebfeatures.s3.us-west-1.amazonaws.com/assets/chrisharze2.png",
          "image_square": "https://sbmwebfeatures.s3.us-west-1.amazonaws.com/assets/chrisharze1.png",
          "bio" : "Chris leads our Finance and Information Technology departments as SBM continues to execute our strategy to become the world’s leading soft services provider. Before joining SBM, Chris served as the Vice President of Finance for AAA in addition to leading finance teams at Synchrony Financial, Verizon Wireless, and PwC. Chris obtained his MBA from Emory University in Georgia and is a licensed CPA. As a father of four, he balances his professional career by spending weekends at his kid’s soccer tournaments and competing as a family team during Spartan and Tough Mudder races."
        },
        {
          "name": "Carina O'Brien",
          "title": "Chief Accounting Officer",
          "image_portrait": "https://sbmwebfeatures.s3.us-west-1.amazonaws.com/assets/carinaobrien2.png",
          "image_square": "https://sbmwebfeatures.s3.us-west-1.amazonaws.com/assets/carinaobrien1.png",
          "bio" : "Drawing on her more than fifteen years in the finance industry, Carina O’Brien is responsible for forecasting and directing operational budget performance across the organization. She regularly interfaces with finance and operations teams to set and deliver expectations and maintain sustainable metrics for operational and customer service excellence. As a trusted subject matter expert, Carina maintains open communication channels with SBM’s Senior Leadership Team, operations management, and key customer contacts."
        },
          {
            "name": "Troy Hatcher",
            "title": "Chief Operating Officer",
            "image_portrait": "https://sbmwebfeatures.s3.us-west-1.amazonaws.com/assets/troyhatcher2.png", 
            "image_square": "https://sbmwebfeatures.s3.us-west-1.amazonaws.com/assets/troyhatcher1.png",
            "bio" : "Troy is the driven leader of operations divisions across SBM. As our organization continues to experience national and global growth opportunities, he is paving the way to ensure standardization across our operational infrastructure. His proven ability to cultivate and support operations excellence ensures our clients always experience exceptional service levels. During his nearly fifteen years with SBM, Troy has served in critical operations roles across the United States, realizing significant growth within the life sciences and high-tech verticals. His commitment to establishing trusted client partnerships and delivering results has yielded customer advocacy and organic expansion. Born in Ohio on a 75-acre farm, Troy now lives in Arizona. He loves a good thrill—he raced snowmobiles growing up, is a roller coaster enthusiast, and enjoys exploring Jeep trails with his family."
          },
          {
            "name": "Marcos Salvi",
            "title": "Chief Marketing Officer",
            "image_portrait": "https://sbmwebfeatures.s3.us-west-1.amazonaws.com/assets/marcossalvi2.png", 
            "image_square": "https://sbmwebfeatures.s3.us-west-1.amazonaws.com/assets/marcossalvi1a.png",
            "bio" : "As a skilled, experienced marketing professional, Marcos Salvi drives and supports creative initiatives throughout the organization. He oversees brand direction and company voice for internal and external audiences and is responsible for leading diverse teams that include training, design, communications, and marketing solutions. Marcos is committed to continually delivering innovative visual design and storytelling techniques, creating compelling content that effectively shares the SBM story. When he’s not at his desk, this former professional hoops star can be found flying the skies as an avid aviation enthusiast and licensed pilot."
          },
          {
              "name": "Joseph Garzia",
              "title": "Chief Information Officer",
              "image_portrait": "https://sbmwebfeatures.s3.us-west-1.amazonaws.com/assets/josephgarzia2.png", 
              "image_square": "https://sbmwebfeatures.s3.us-west-1.amazonaws.com/assets/josephgarzia1.png",
              "bio" : "As Chief Information Officer, Joe is responsible for designing, developing, and implementing organizational information systems, software applications, and IT support and infrastructure systems across the company.  He also directs SBM toward our primary technological objectives regarding long-term product and profitability goals.  Joe joined SBM with 23 years of experience building and transforming organizations. He has held leadership roles at Plasco ID, Swiss Watch International, The Men’s Warehouse, Winn-Dixie/BI-LO grocery stores, and Chicos FAS.  He obtained his master’s degree in decision and information sciences and bachelor’s degree in business administration from the University of Florida.  When he isn’t working, you can find him golfing, spending time outdoors with his family, or watching movies."
            },
          {
              "name": "Paul Emperador",
              "title": "EVP, Union Management",
              "image_portrait": "https://sbmwebfeatures.s3.us-west-1.amazonaws.com/assets/paulemperador2.png", 
              "image_square": "https://sbmwebfeatures.s3.us-west-1.amazonaws.com/assets/paulemperador1a.png",
              "bio" : "As a progressive leader, Paul Emperador is committed to supporting an organizational culture founded on creating a great place to work for all team members. His vast human resources knowledge and experience allows him to effectively develop staffing strategies and implement programs to identify talent within and outside the corporation. Paul actively participates in the development of organizational plans focusing on positive employee impact. When he's not carrying out HR duties, Paul can be found playing basketball or cheering on his daughters at their club soccer games."
            },
          {
            "name": "Brian Anderson",
            "title": "VP, EHS & Risk",
            "image_portrait": "https://sbmwebfeatures.s3.us-west-1.amazonaws.com/assets/briananderson2.png", 
            "image_square": "https://sbmwebfeatures.s3.us-west-1.amazonaws.com/assets/briananderson1.png",
            "bio" : "With 19 years of experience in global Enterprise Risk Management, Environment, Health and Safety (EHS) and Sustainability, Brian Anderson has successfully fostered a proactive safety environment at SBM. Under his direction, SBM has experienced year-over-year safety improvements as well as recognition among America’s Safest Companies according to EHS Today. Brian is no stranger to industry accolades and has been the back-to-back recipient of the Safety Professional of the Year Award by the Industrial Hygiene Practice Specialty (IHPS) of the American Society of Safety Engineers (ASSE). When not reinforcing SBM’s safety culture, Brian takes time to enjoy his hobby of weight lifting."
          }
  ]

export default function Leadership(leadership) {
  var slider = useRef(null);
  var slidecontainer = useRef(null)
    leadership = leadershipsample;
    var settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: false,
        arrows: true,
        swipe: false,
        centerPadding: '100px',
        // beforeChange: async (current, next) => {
        //   if (slider.current.state.breakpoint !== null) return;
        //   var reset = (Math.abs(current - next) > 1 ? true : false);
        //   let slides = [...slidecontainer.current.querySelectorAll(`[data-index]`)];
        //   let center = [...slidecontainer.current.querySelectorAll('.slick-center')][0];
        //   let index = next + 7;
        //   let start = ((current - next > 1 && current - next !== (slider.current.props.children.length - 1)) ? 2 : 3)
        //   let end = ((current - next > 1) ? 3 : 2)
        //   let selection = slides.splice(index-start,5);
        //   let fadeIn = selection.splice((start === 2 ? 0 : selection.length - 1), 1);
        //   const timeline = gsap.timeline({onComplete: () => { setTimeout(function() {return true}, 100)}})
        //   await timeline.set(selection, {opacity: 1})
        //     .to(fadeIn, {opacity: 1, ease: 'ease', duration: 0.3})
        // },
        // afterChange: async (next) => {
        //   if (slider.current.state.breakpoint !== null) return;
        //   let slides = [...slidecontainer.current.querySelectorAll(`div.slick-slide:not(.slick-active)`)];
        //   let active = [...slidecontainer.current.querySelectorAll(`div.slick-slide.slick-active`)];
        //   await gsap.to(slides, {opacity: 0, duration: 0.3, delay: 0.1, onComplete: () => {return true }})
        //   await gsap.to(active, {opacity: 1, duration: 0.3, delay: 0.1, ease: 'ease'})
        // },
        responsive: [
            {breakpoint: 1440, 
            settings: {
                slidesToShow: 3,
                centerPadding: '80px',
                arrows: true,
                swipe: false,
            }},
            {breakpoint: 600,
            settings: {
                slidesToShow: 1,
                centerPadding: '100px',
                swipe: true,
            }}
        ]
    };

    return (
      <div id="leadership-slider" className="my-24 mx-auto" ref={slidecontainer}>
        <Slider {...settings} ref={slider}>
            {leadership.map((l,i) => {
                return LeaderCard(l,i)
            })}
        </Slider>
      </div>
    )
}