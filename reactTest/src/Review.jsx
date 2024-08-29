import { useState, useEffect } from 'react';
import "./styles.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {AnimatePresence, easeIn, easeInOut, easeOut, motion } from "framer-motion"
import { Link } from 'react-router-dom'
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const reviewCars = [
  {
    image: "./src/review/mercedes1.jpg",
    firstText: "MERCEDES BENZ",
    secondText: "t HE FUTURE IS HERE",
    readMore: `Experience the epitome of 
    elegance and power with the new Mercedes-Benz. 
    Where innovation meets luxury, and every 
    journey becomes a statement.`
  },
  {
    image: "./src/review/mercedes2.jpg",
    firstText: "CRAFTED TO INSPIRE",
    secondText: "",
    readMore: `Step into a world where precision 
    engineering and timeless design converge. 
    The new Mercedes-Benz—crafted for 
    those who demand the best.`
  },
  {
    image: "./src/review/mercedes3.jpg",
    firstText: "t HIS IS INOVATION",
    secondText: "LIGHT ENGINE",
    readMore: `Unleash the power of performance 
    with Mercedes-Benz. Engineered to thrill, 
    designed to impress—drive the future today.`
  },
  {
    image: "./src/review/mercedes4.jpg",
    firstText: "ELEGANCE, CHARMING",
    secondText: "t RAVEL TO THE FUTURE",
    readMore: `Discover unparalleled comfort and 
    advanced technology with the new Mercedes-Benz. 
    Where every drive feels like a first-class experience.`
  },
  {
    image: "./src/review/mercedes5.jpg",
    firstText: "PUNISHER AND FEARLESS",
    secondText: "DEUTSCHALND",
    readMore: `Mercedes-Benz: A legacy of excellence. 
    Iconic design meets cutting-edge innovation 
    to deliver a driving experience like no other.`
  },
];




function Review(){
  const [select, setSelect] = useState(null);
  const handleSelect = (index) => {
    if(index === select){
      setSelect(null);
    }else{
      setSelect(index);
    }
    // setSelect(index===select ? null : index);
  }
  return(
    <>
      <Header/>
      <section className="review-section">
        <div className='review-main-div'>
          <div className="mercedes1-main-div">
            {
              reviewCars.map((car, index) => {
                return(
                  <div className="back-img-review" key={index} style={{backgroundImage: `url(${car.image})`}}>
                    <div className='review-column'>
                      <motion.p
                      initial={{y: -200, opacity: 0}}
                      whileInView={{y: 0, opacity: 1}}
                      transition={{duration: 1.3, type:"tween", stiffness: 160}}  

                      className='first-text-review'>{car.firstText}</motion.p>
                      <div className='line-review-div'>
                        <motion.p
                        initial={{y: -100, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{duration: 1.3, type:"tween", stiffness: 160}}  
                        onClick={() => handleSelect(index)} className='read-more'>READ MORE</motion.p>
                        <div className='line-review-parent'>
                          {
                            select === index ?  <motion.div
                            initial={{width: "0px"}}
                            animate={{width: "100%"}}
                            transition={{duration: 0.7,type:"tween"}} 
                            className="line-review"></motion.div> : <motion.div
                            initial={{width: "100%"}}
                            animate={{width: "0px"}}
                            transition={{duration: 0.7,type:"tween"}} 
                            className="line-review"></motion.div>

                            
                          }
                          {
                            select === index ? <motion.p 
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1.5}}
                            className="read-more-txt">
                              {car.readMore.toUpperCase()}
                            </motion.p> : null
                          }
                        </div>

                      </div>
                      
                    </div>
                    <motion.p
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 1.3, delay: 0.2}}
                    className="second-text-review">{car.secondText}</motion.p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Review