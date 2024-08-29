import { useState, useEffect, useRef } from 'react';
import "./styles.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {AnimatePresence, easeIn, easeInOut, easeOut, motion, scroll, useInView } from "framer-motion"
import { Link } from 'react-router-dom'
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const imagesOfMercedes = [
  {
    image: "./src/scroll-mercedes/merc1.jpg",
    text: `BRABUS Masterpiece combines passionate 
    handcrafting with unconditional luxury. 
    Uncompromising and extravagant, impeccable
     manufacturing refined to the smallest detail.`,
    under: "Art"
  },
  {
    image: "./src/scroll-mercedes/merc2.jpg",
    text: `Intensive tests in the wind tunnel and on 
    test benches, thousands of kilometers on our own 
    test track – before a BRABUS supercar leaves the 
    plant, every detail has been checked and found to
     be superb. Only then is it approved.`,
    under: "Zeitgeist"
  },
  {
    image: "./src/scroll-mercedes/merc3.jpg",
    text: `The interior of every supercar is as individual 
    as its driver. Precious woods, carbon fiber, BRABUS fine 
    leather as soft as a glove in 3,500 leather colors – the 
    choices are endless when it comes to the interior 
    appointments. Every special request is fulfilled. 
    BRABUS creates tailor-made automotive dreams in an
     intelligent mix of craftsmanship and state-of-the-art machining.`,
    under: "Vehicles"
  },
  {
    image: "./src/scroll-mercedes/merc4.jpg",
    text: `Innovative business and multimedia 
    solutions make your BRABUS supercar the fastest 
    workspace on wheels – and an entertainment 
    universe that exceeds all expectations. Custom 
    concepts and state-of-the-art technology ensure 
    that you are always connected conveniently – 
    everywhere and without limitation.`,
    under: "Inovation"
  },
];

const stlForEven = {
  flexDirection: "row-reverse"
};
const stlForOdd = {
  flexDirection: "row"
};


const brabusVariants = {
  offscreen: {
  y: 250  
  },
  onscreen:  {
    y: 0,
    once: true,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      stiffness: 120,
    }
  }
} 
const brabusImg = {
  offscreen: {
    opacity: 0,
    y: 300
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    y:0,
    transition: {
      type: "tween",
      stiffness: 120,
      duration: 0.8
    }
  }
}
const brabusTxt = {
  offscreen: {
    // opacity: 0
    y: 150
  },
  onscreen: {
    // opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      stiffness: 120,
      duration: 1
    }
  }
}

const visualText = {
  offscreen: {
    opacity: 0,
    y: 130
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 1.2
    }
  }
}


function Scroll(){
  return(
    <>
      <Header/>
      <section className='brabus-section'>
        <motion.p className="visual-elegance"
        initial={visualText.offscreen}
        whileInView={visualText.onscreen}
        >Visual elegance. Superior engine. 
        Absolute individuality.</motion.p>

        <div className="brabus-scroll-under-header">
          {
            imagesOfMercedes.map((brabus, index) => {
              return(
                <motion.div
                 className='brabus-txt-div' key={index}>
                  <motion.div className='brabus-image-div'>
                    <motion.img
                    initial={brabusImg.offscreen}
                    whileInView={brabusImg.onscreen}
                     className='brabus-image' src={brabus.image} alt="brabus"/>
                  </motion.div>
                  <div className='brabus-txt-under-text'>
                    <motion.div
                    initial={brabusTxt.offscreen}
                    whileInView={brabusTxt.onscreen}
                    >
                      <p className='brabus-text'>{brabus.text}</p>
                      <p className='brabus-text-under'>{brabus.under}</p>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })
          }
        </div>
      </section>

    </>
  )
}

export default Scroll