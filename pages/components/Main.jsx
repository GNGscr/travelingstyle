"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import phanganMap from '../public/images/phangan-map.png';
import SwipeCarousel from "./SwipeCarousel";
import LogoLoader from "./LogoLoader";
import ButtonLightningAnimation from "./ButtonLightningAnimation";
import HotelsSection from "./HotelsSection";
import TiltComponent from "./TiltComponent";
import spa from '../public/images/summer-luxury-beach-resort-and-spa.webp';
// pages/public/images/summer-luxury-beach-resort-and-spa.webp
// import NextVideo from 'next-video';
// import Video from 'next-video';
// import getStarted from '../public/images/khoPhanganView.mp4';
// import Image from "next/image";

// import heroVid from '../public/images/khoPhanganView.mp4';


// :: TODOs :: //
// =========== //

// OverAll - 
        // Check how to fetch everything from outside source including gallery photos all dynamic text and values !!!
        // Add cookies for crawlers 
        // Connect google analytics (using Goldi) to check for data and have control

// Navbar - 
        // add other buttons (connect all buttons to vars including lang and maybe linktree)
        // add scroll event for scroll y = 0 default state to display nav & hide bg switch border-color and font-color.
        // set (if possible) mask on nav button svg to display opposite color when hovering same color - if not possible just add text-shadow to svg 

        // When clicking on nav button make a middle animation so it wont jump to place suprisingley :)

        // Set Navabr to have selected value so it will be able to have state (maybe with current) 
        // && also set something function to know if the user is in this section 
        // and if it is set it to be selected like this for each section


// Header Hero - Maybe replace with Icon (Maybe with animation or without) fix subheader fontsize/weight etc..

// Logo - 
        // fix animation when in "view" (use scrollYPosition to see when in view and try animating using FramerMotion if not toggle class like before)

// Map -
        // set map relative to map-photo and make the second mask (with the hover me txt) make it 50% height and justify-end..
        // ..so it will clear faster and be remove to enable hover the map (also remember to set opacity to 0 on photo when hover)
        
        // { on hover the map section: if user is already over the map but mask interupts, 
        // so if user clicks the hover the map mask to see why nothing is happening
        //  it will start animation to remove the blocking section, so the users hover will work }

        // When Clicking on navbar map - the animation to move the mask up will be invoked so the user will see text & it will be ready to be hovered already

        // Fix - the mask shadow bg to be cleared (only on this section) with the text [so the will be cleared together and after bright]

      

// Hotels - set new UI for section (all of it)

// DONE!!!!!!!!    // Bottom ScreenFitText - set row of icons for all of his social networks [OVER THE FIT_TEXT] - maybe make it floating (using fload card animation)
// ============


// Footer - Fix sticky bug so it will work good && add footer content + ul>li + all reserved etc..

// Check small media and and X button animation [facebook, instagram, linktree,]



// DONT FORGET TO FINISH AND UPLOAD ICE CREAM SITE ;))
// ------------------------------------------------- //

// new

// fix flip card button click 
// fix start position for nav bar open and visible



export default function Main({ data, lang, media, activateMenuIsActive, title="Koh Phangan" }) {
  // const { filter, regions } = data;

  let mainParaSplitter = { en: "Everything from", he: "הכל מהכל" };
  const [ articlePara1, articlePara2 ] = data['article-main-paragraph'][lang].split(mainParaSplitter[lang]);

  let articlePara1Splitter = { en: "Koh Phangan is", he: "קופנגן הוא" };
  const [ main1Para1, main1Para2 ] = articlePara1.split(articlePara1Splitter[lang]);

  let articlePara2Splitter = { en: "But once", he: "אך פעם" };
  const [ main2Para1, main2Para2 ] = articlePara2.split(articlePara2Splitter[lang]);

  console.log('TODO!!!!! ::  fix but with missing words when splitting');
  console.log("בונגלוס על הים עם בריכה משותפת, מלון בסגנון מודרני עם חדרים יחסית פשוטים. מתאים למטיילים יחידים,זוגות ומשפחות. במקום יש מסעדה עם צוות אדיב ושירותי. ממוקם בין טונג סלה לבאן תאי. באווירה רגועה ושקטה.".length);
  console.log('card limit en: ', 285);
  console.log('card limit he: ', 225);
  console.log('card limit en recommended: ', 255);
  console.log('card limit he recommended: ', 205);
  
  return (
    <div className="bg-white main">
      <TextParallaxContentComponent
        isMapVisible={false}
        imgUrl={spa.src}
        subheading={data['heroPara'][lang]}
        heading="Koh Phangan"
        isCtaButton={true}
        isHeader={true}
        isHotels={false}
        data={data}
        lang={lang}
        activateMenuIsActive={activateMenuIsActive}
        title={title}
      >
        <ExampleContent
          para1={main1Para1}
          para2={main1Para2}
          isLogoSection={true}
          sidePara={data.sideParagraphs.sidePara1}
          lang={lang} 
        />

      </TextParallaxContentComponent>

      <TextParallaxContentComponent
        isMapVisible={true}
        imgUrl={phanganMap.src}
        isCtaButton={false}
        isHeader={false}
        isHotels={false}
        subheading=""
        heading={data["map-title"][lang][media]}
        data={data}
        lang={lang}
        activateMenuIsActive={activateMenuIsActive}
        title={title}
      >
        <ExampleContent
          para1={main2Para1}
          para2={main2Para2}
          isLogoSection={false}
          sidePara={data.sideParagraphs.sidePara2}
          lang={lang}
          data={data}
        />

      </TextParallaxContentComponent>

      <div className="relative h-[120vh]">
        <div className="sticky top-0">
          <SwipeCarousel data={data} lang={lang} />
        </div>
      </div>

      <div className="decleration-wrapper">
        <motion.div 
          className="decleration"
          initial={{ opacity: 0, y: "120%", }}
          whileInView={{ opacity: 1, y: 0, }}
          transition={{ duration: 0.75, type: "spring" }}
          >
          <span className="text-7xl text-[#ccc] relative top-[-0.75rem]">"</span>
            {data["article-second-paragraph"][lang]} 
          <div
            className={`blink-emoji text-[2.25rem] absolute bottom-[-0.5rem]
              ${lang === 'he' ? 'left-80' : 'right-60'} pl-9`}>
            😉
          </div>
          <span className="text-7xl text-[#ccc]" style={{transform: 'rotateZ(180deg)'}}>"</span>
        </motion.div>
      </div>
      <HotelsSection data={data} lang={lang} media={media} />
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContentComponent = ({
  imgUrl,
  subheading,
  heading,
  children,
  isMapVisible,
  isCtaButton,
  isHeader,
  data,
  lang,
  activateMenuIsActive,
  title
}) => {  
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]" id={`${isMapVisible ? 'map-img' : ''}`}>
        <StickyImage imgUrl={imgUrl} isMapVisible={isMapVisible} />
        <OverlayCopy
          heading={heading}
          subheading={subheading}
          isCtaButton={isCtaButton}
          isHeader={isHeader}
          data={data}
          lang={lang}
          activateMenuIsActive={activateMenuIsActive}
          title={title}
        />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl, isMapVisible }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.02, 1], [1, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.02, 1], [1, 0, 0]);
  return (
    <motion.div
    style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
      >
        
        {
          isMapVisible
          ? <div id="map">
              <div className="map-responsive">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75468.17036922644!2d100.02495431595077!3d9.739631379237098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3054fd96fa0377ef%3A0xd3fd8d1a5e79affe!2sKo%20Pha%20Ngan!5e1!3m2!1sen!2sil!4v1727364051594!5m2!1sen!2sil"
                    width="600" 
                    height="450" 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Responsive Google Map">
                </iframe>
              </div>
          </div>
          : ''
        }
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{ opacity }}
        />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
  isCtaButton,
  isHeader,
  data,
  lang,
  activateMenuIsActive,
  title
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);
{/* <LogoLoader style={{ fill: '#000' }} /> */}
  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className={`hero-content absolute ${isCtaButton ? 'pt-32' : ''} left-0 top-0 flex
      ${isCtaButton ? 'h-screen' : 'h-[45%]'} w-full flex-col items-center
      ${isCtaButton ? 'justify-center' : 'justify-end'} text-white pl-[25%] pr-[25%] rtl`}
    >
      <div className="hover-the-map-txt text-center text-4xl font-bold md:text-7xl">
        {
        isHeader
          ? <h3 className="mt-[-3rem]">{title}</h3>
          : <div className="hover-map">{heading}</div>
        }
      </div>
      <motion.div
        initial={{ opacity: 0, y: "75%" }}
        // animate={lang ? { opacity: 1, y: 0, } : { opacity: 0, y: "50%" }}
        whileInView={{ opacity: 1, y: 0, }}
        transition={{ duration: 0.5, type: "tween", }}
        className="main-header mb-2 text-center text-xl md:mb-4 md:text-4xl text-bold">
        {subheading}
      </motion.div>
      {isCtaButton && <ButtonLightningAnimation text={data.ctaText[lang]} activateMenuIsActive={activateMenuIsActive} />}
    </motion.div>
  );
};
// bug with overflow
const ExampleContent = ({para1, para2, isLogoSection, sidePara, lang, data}) => (
  <div className={`section-content
    ${lang === "he"
      ? 'mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12'
      : 'mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-12 pt-24 md:grid-cols-12 md:grid-cols-reverse'
    }
    `}>
    <h2 className={`section-content-h col-span-1 text-3xl font-bold md:col-span-4 overflow-hidden`}>
      {sidePara && lang &&

        <div className="text-[2.7rem] relative right-[15%] text-[#aaa]">
          <motion.div
            className="quote"
            initial={{
              opacity: 0,
              x: lang === "he" ? "-100%" : "100%",
              skewX: "30deg"}}
            whileInView={{ opacity: 1, x: "15%", skewX: 0 }}
            transition={{ duration: 0.4, type: "tween", }}
          >
            "{sidePara[lang]}"
          </motion.div>
          </div>
      }
    </h2>
    <div className="section-content-para col-span-1 md:col-span-8">
      <p className="section-content-para-1 mb-4 text-xl text-neutral-600 md:text-2xl">
        {para1}
      </p>
      <p className="section-content-para-2 mb-8 text-xl text-neutral-600 md:text-2xl">
        {para2}
      </p> 

      <TiltComponent isLogoSection={isLogoSection} data={data} />
    </div>
  </div>
);

 
// function VideoHero() {
//   return <Video src={getStarted} />;
// }
// type spring
// damping
// {/* <div className="relative h-[150vh]"></div> */}


          // {/* &nbsp;  */}


// {/* <VideoHero /> */}
// {/* <video src={require("../../media/khoPhanganView.mp4")} autoPlay loop muted={true}></video> */}
// {/* <NextVideo src={require(`../public/images/khoPhanganView.mp4`)}></NextVideo>
// <NextVideo src={`url(${''})`}></NextVideo> */}