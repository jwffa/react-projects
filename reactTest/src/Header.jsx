import { useState, useEffect } from 'react';
import "./styles.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {AnimatePresence, easeIn, easeInOut, easeOut, motion } from "framer-motion"
import { Link } from 'react-router-dom'
// import Footer from './Footer.jsx'
import Scroll from './Scroll.jsx'

function Header(){
  const [click, setClick] = useState(false);
  const scroll = () => {
    window.scrollBy({
      top: 0,
      behavior: 'smooth'
    });
  }
  const scrollHistory = () => {
    window.scrollBy({
      top: 0,
      behavior: 'smooth'
    });
  }
  const [index, setIndex] = useState(0);

  const texts = [
    "MERCEDES-CARS-INSPIRATION",
    "FUTURE-OF-CARS-UNIVERSE",
    "MERCEDES-BENZ"
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Adds smooth scrolling
    });
  }


  

  // THIS IS VARIATIONS OF MOVING TEXT
  const myVariation = {
    enter: direction => {
      return {
        y: -70,
        opacity: 0
      }
    },

    center: {
      zIndex:1,
      y:0,
      opacity:1
    },

    exit: direction => {
      return{
        zIndex:0,
        opacity:0
      }
    }
  }
  
  // USE EFFECT HOOK FOR SLIDE
  useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      if (next === texts.length) {
        next = 0;
      }
      setIndex(next);
    }, 3000);
  }, [index, setIndex]);

  // -------------------------------------
  const menuStyle = {
    display: "flex"
  }
  const menuStyle1 = {
    display: "none"
  }

  const [menuClicked, setMenuClicked] = useState(false);
  const menuClick = () => {
    setMenuClicked(!menuClicked);
  }

  return(
    <>
      <header>
        <nav>
          <motion.div
          initial={{y:-200}}
          animate={{y: 0}}
          transition={{duration: 2, type:"spring", stiffness:140}} 
          >
            <div className='nav-main-motion-div'>
              <h1 className='logo-title'>MTS<span className='span-title'>-CARS</span></h1>
              <motion.div className="menu-bar"
              initial={{opacity: 0}}
              animate={{opacity:1}}
              transition={{duration:2.3}}
              >
                {/* <motion.a className='hrefs' href="#"
                whileHover={{scale:1.3, color:"white"}}
                >Home</motion.a>
                <motion.a className='hrefs' href="#"
                whileHover={{scale:1.3, color:"white"}}
                >Cars</motion.a>
                <motion.a className='hrefs' href="#"
                whileHover={{scale:1.3, color:"white"}}
                >FAQ</motion.a>
                <motion.a className='hrefs' href="#"
                whileHover={{scale:1.3, color:"white"}}
                >About</motion.a>
                <motion.a className='hrefs' href="#"
                whileHover={{scale:1.3, color:"white"}}
                >Contact</motion.a> */}
                <Link onClick={scroll} className='hrefs' to="/">Home</Link>
                <Link onClick={scroll} className='hrefs' to="/cars">Cars</Link>
                <Link onClick={scrollHistory} className='hrefs' to="/history">History</Link>
                <Link onClick={scroll} className='hrefs' to="/review">Review</Link>
                <div className='menu-bar-menu'>
                  <img onClick={menuClick} className='menu-bar-icon' src="./src/info/menu.png" alt="" />
                  {
                    menuClicked === true ?  <motion.div 
                    style={menuClicked === false ? menuStyle1 : menuStyle}
                    initial={{x: 200}}
                    animate={{x: -130}}
                    transition={{duration: 0.6, type:"spring", stiffness: 120}}
                    className="links-on-responsive">
                    <Link onClick={scroll} className='hrefs-resp' to="/">Home</Link>
                    <Link onClick={scrollHistory} className='hrefs-resp' to="/history">History</Link>
                    <Link onClick={scroll} className='hrefs-resp' to="/cars">Cars</Link>
                    <Link onClick={scroll} className='hrefs-resp' to="/review">Review</Link>
                  </motion.div> : <motion.div
                  style={menuClicked === false ? menuStyle1 : menuStyle}
                  initial={{x: -120}}
                  animate={{x: 200}}
                  transition={{duration: 0.6, type:"spring", stiffness: 120}}   
                  className="links-on-responsive">
                    <Link onClick={scroll} className='hrefs-resp' to="/">Home</Link>
                    <Link onClick={scrollHistory} className='hrefs-resp' to="/history">History</Link>
                    <Link onClick={scroll} className='hrefs-resp' to="/cars">Cars</Link>
                    <Link onClick={scroll} className='hrefs-resp' to="/review">Review</Link>
                  </motion.div>
                }
                </div>
              </motion.div>
              <motion.div className='create-login'
              initial={{opacity: 0}}
              animate={{opacity:1}}
              transition={{duration:2.3, ease:easeOut}}
              >
                <motion.img
                animate={{y:[0, 8, 0]}}
                transition={{duration: 1.5, repeat: Infinity}}
                style={{width: "40px"}}
                src="./src/info/merc-header.png" alt="merc-header" />
              </motion.div>
            </div>
          </motion.div>

          <section className='section-for-big-txt'>
            {/* <motion.p className='big-text-animation-mercedes'
            initial={{opacity:0, x:-2000}}
            animate={{opacity:1, x:0}}
            transition={{duration:3, type:"spring", stiffness:120, ease:easeInOut}}
            >MERCEDES-CARS-INSPIRATION</motion.p> */}
            <motion.p className="big-text-animation-mercedes"
            style={{ position: "absolute" }}
            variants={myVariation}
            key={index}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: "spring", stiffness: 150},
              opacity: { duration: 1.3 }
            }}
            >
              {texts[index]}
            </motion.p>
          </section>
          
        </nav>
      </header>
      
    </>
  )
}

export default Header