import { useState, useEffect } from 'react';
import "./styles.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {AnimatePresence, easeIn, easeInOut, easeOut, motion } from "framer-motion"
import { Link } from 'react-router-dom'
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const historyArray = [
  {                                 // This is first info
    year: "1886?",
    bigtext: "How it all began: Benz Patent Motor Car.",
    title: "The world’s first automobile.",
    info: `The financial success of his gas engine factory 
    secures Benz an economic basis, enabling him to devote 
    himself to his vision of an engine-driven vehicle. 
    But since his two-stroke engine is too large and too 
    heavy to be installed in a vehicle, Benz puts all his 
    efforts into the four-stroke principle.`,
    img: "./src/info/motorwagen.jpg"
  },

  // THIS IS first mercedes
  {
    year: "1901?",
    bigtext:"How it all began 1901: The first Mercedes.",
    title: "The first contemporary",
    info: `The first contemporary automobile Due to his 
    premature death, Gottlieb Daimler does not witness 
    one of the most outstanding designs Maybach produced 
    for the joint company. The first Mercedes generates 
    great excitement at the “Nice Race Week” in March 1901. 
    It is a powerful, lightweight vehicle with a low centre 
    of gravity and stands out from all previously built cars. 
    The 35 hp Mercedes is an independent automobile design.`,
    img: "./src/info/firstmercedes.png"
  },

  // HISTORY OF THREE POINTED STARS
  {
    year: "1909?",
    bigtext: "How it all Began 1909: The three-pointed star on all routes.",
    title: "Three Pointed Star?",
    info: `From September 1902 DMG holds the patent for 
    successful “Mercedes” brand name. All that is missing 
    is a characteristic trademark. That’s when the sons of 
    Gottlieb Daimler, Paul and Adolf, remember, that their 
    father previously used a star for a symbol. The DMG 
    Board of Management follows this inspiration and in 
    June 1909 registers both a three-pointed and four-pointed 
    star as trademarks.`,
    img: "./src/info/threestar.png"
  }
];

const yearsAnimate = {
  offscreen:{
    opacity: 0
  },
  onscreen:{
    opacity: 1,
    transition:{
      duration: 2
    }
  }
}

const first = historyArray[0].info.split("");
const second = historyArray[1].info.split("");
const third = historyArray[2].info.split("");
const newInfoArr = [first, second, third];

const firstTitle = historyArray[0].title.split("");
const secondTitle = historyArray[1].title.split("");
const thirdTitle = historyArray[2].title.split("");
const newTitleArr = [firstTitle, secondTitle, thirdTitle];

function History(){
  const [text, setText] = useState([false, false, false]);
  const appearText = (index) => {
    if(text[index]===false){
      window.scrollBy({
        top: 700,
        behavior: 'smooth'
      });
    }else{
      window.scrollBy({
        top: -700,
        behavior: 'smooth'
      });
    }
    setText((prevText) => {
      const newArr = [...prevText];
      newArr[index] = !newArr[index];
      return newArr;
    });
  }
  return(
    <>
      <Header/>
      <section className="history-section">
        <div className="information-main-div">
          {
            historyArray.map((history, index) => {
              return(
                <div key={index} className='information-div'>
                  <motion.div className='year-arrow-div'>
                    
                    <motion.p
                    initial={yearsAnimate.offscreen}
                    whileInView={yearsAnimate.onscreen} 
                    className="year-text">What was in {history.year}</motion.p>

                    <motion.div
                    animate={{y: [0, 10, 0]}}
                    transition={{duration: 1, repeat: Infinity}} 
                    onClick={() => appearText(index)} className="arrow-icon-div">
                      <img className='arrow-icon' src="./src/info/dots.png" alt="arrow" />
                    </motion.div>
                  </motion.div>
                  {
                    text[index] ? <div className="picture-info-main-div">
                                      <p className='title-of-history'>
                                          {
                                            newTitleArr[index].map((letter, ind) => {
                                              return(
                                                <motion.span
                                                className="title-of-history"
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                
                                                transition={{duration:0.1, delay: index === 0 ? ind * 0.12 : ind * 0.19}}
                                                key={ind}
                                                >
                                                  {letter.toUpperCase()}
                                                </motion.span>
                                              )
                                            })
                                          }
                                      </p>
                                      {/* <p className="title-of-history">{history.title.toUpperCase()}</p> */}
                                      <div className="pic-info-div">
                                        <div className="historic-pic-div">
                                          <motion.img
                                          initial={{y: -400, opacity: 0}}
                                          animate={{y: 0, opacity: 1}}
                                          transition={{duration: 2, type:"tween", stiffness: 120}}
                                          className='historic-pic' src={history.img} alt="" />
                                        </div>
                                        
                                        <p className='history-info'>
                                          {
                                            newInfoArr[index].map((letter, ind) => {
                                              return(
                                                <motion.span
                                                className="history-info"
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                
                                                transition={{duration:0.1, delay: ind * 0.01}}
                                                key={ind}
                                                >
                                                  {letter}
                                                </motion.span>
                                              )
                                            })
                                          }
                                        </p>
                                      </div>
                                   </div> : null
                  }
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default History