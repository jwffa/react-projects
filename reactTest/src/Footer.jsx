import { useState, useEffect, useRef } from 'react';
import "./styles.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {AnimatePresence, easeIn, easeInOut, easeOut, motion, scroll, useInView } from "framer-motion"
import { Link } from 'react-router-dom'



const companyText = [
  "Overview",
  "Carrers",
  "Investors",
  "Media Site"
];
const knowledgeText = [
  "Consumption & Emissions",
  "Real Driving Emissions",
  "UN 38.3 Test"
];
const servicesText = [
  "Fleet Sales",
  "Inernational Diplomatic Sales",
  "Mercedes-Benz GUARD",
  "Training for Authorized Dealers",
  "Mercedes-Benz Energy Storage"
];

const bigTextFooter = `The stated values 
were determined in accordance with the prescribed 
WLTP (Worldwide harmonised Light vehicles Test
 Procedure) measurement procedure. The ranges 
 given refer to the German market. The fuel 
 consumption, energy consumption and CO2 emissions
  of a car depend not only on the efficient use of
   the fuel or energy source by the car, but also
    on driving style and other non-technical factors.`

const moreInfo = {
  offscreen: {
    x: 100
  },
  onscreen: {
    x: 0,
    transition:{
      duration: 3,
      type: "spring",
      stiffness: 100
    }
  }
}

const services = {
  offscreen: {
    x: -100
  },
  onscreen: {
    x: 0,
    transition: {
      duration: 3,
      type: "spring",
      stiffness: 100
    }
  }
}

const footerLast = [
  "Provider",
  "Legal Notice",
  "Settings",
  "Privacy",
  "Contact",
  "Third Party License Notices",
  "Don't Sell My Personal Information (CCPA)"
]

function Footer(){
  return(
    <>
      <footer>
        <div className='footer-main-div'>
          <div className='more-info-div-footer'>
            <motion.p className="more-information"
            initial={moreInfo.offscreen}
            whileInView={moreInfo.onscreen}
            >
              More Information
            </motion.p>
          </div>

          <motion.div className='company-knowledge-services'
          initial={services.offscreen}
          whileInView={services.onscreen}
          >
            <div className="company-div">
              <p className='company-txt'>Company</p>
              {
                companyText.map((service, index) => {
                  return(
                    <p className='footer-texts-small' key={index}>{service}</p>
                  )
                })
              }
            </div>

            <div className="knowledge-div">
              <p className='company-txt'>Knowledge</p>
              {
                knowledgeText.map((service, index) => {
                  return(
                    <p className='footer-texts-small' key={index}>{service}</p>
                  )
                })
              }
            </div>

            <div className="services-div">
              <p className='company-txt'>Business Services</p>
              {
                servicesText.map((service, index) => {
                  return(
                    <p className='footer-texts-small' key={index}>{service}</p>
                  )
                })
              }
            </div>
          </motion.div>
        </div>

        <div className='big-footer-text-div'>
          <p className='bigTextFooter'>{bigTextFooter}</p>
        </div>
        
        <div className='footer-last-spot-div'>
          <div className='for-center-last-spot-div'>
            <div className='footer-last-spot-words'>
              {
                footerLast.map((word, index) => {
                  return(
                    <p key={index} className='footer-texts-small-2'>{word}</p>
                  )
                })
              }
            </div>
            
            <div className='footer-logo-benz-div'>
              <div className='mercedes-logo-div-foot'>
                <motion.img drag className='footer-merc-logo' src="./src/mercedes/logo.jpg" alt="" />
              </div>
              <p className='footer-benz'>Mercedes-Benz</p>
            </div>

          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer