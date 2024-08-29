import { useState, useEffect, useRef, cloneElement } from 'react';
import "./styles.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {AnimatePresence, easeIn, easeInOut, easeOut, motion, scroll, useInView } from "framer-motion"
import { Link } from 'react-router-dom'
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export const mercedesCars = [
  {
    image: "./src/mercedes-cars/mercedes8.jpg",
    title: "Mercedes-Benz SLR McLaren",
    categories: "Mid-Size Luxury SUV",
    engine: "Inline-6, V8, plug-in",
    features: `The GLE is a versatile mid-size 
    SUV with off-road capability and luxurious
    amenities. It features advanced technology,
    including the latest MBUX system, and offers
    optional third-row seating, making it suitable for families.`,
    isClicked: false,
    count: 0
  },
  {
    image: "./src/mercedes-cars/mercedes9.jpg",
    title: "Mercedes-Benz SLR McLaren",
    categories: "Full-Size Luxury SUV",
    engine: "Inline-6, V8, AMG V8",
    features: `The GLS is the largest SUV offered 
    by Mercedes-Benz, providing ample space with 
    three rows of seating. It's designed for maximum 
    comfort and luxury, with powerful engine options 
    and a host of advanced features, making it the "S-Class of SUVs."`,
    isClicked: false,
    count: 0
  },

  {
    image: "./src/mercedes-cars/mercedes11.jpg",
    title: "Mercedes-Benz SLR McLaren",
    categories: "Electric Luxury SUV",
    engine: "Dual electric motors",
    features: `The EQC is Mercedes-Benz's entry into 
    the luxury electric vehicle market. It offers a 
    smooth, silent ride with zero emissions, advanced 
    technology features, and a futuristic design, 
    appealing to environmentally conscious luxury buyers.`,
    isClicked: false,
    count: 0
  },
  {
    image: "./src/mercedes-cars/mercedes12.jpg",
    title: "Mercedes-Benz SLR McLaren",
    categories: "High-Performance S",
    engine: "Twin-turbo V8",
    features: `The AMG GT is a high-performance 
    sports car designed for driving enthusiasts. 
    It offers aggressive styling, track-oriented 
    performance, and a luxurious cabin. With its 
    powerful V8 engine, the AMG GT delivers exhilarating 
    speed and precision handling.`,
    isClicked: false,
    count: 0
  },
  {
    image: "./src/mercedes-cars/mercedes1.jpg",
    title: "Mercedes-Benz SLS AMG",
    categories: "Compact Luxury Car",
    engine: "Turbocharged 4-cylinder",
    features: `The A-Class is known for its 
    youthful and sporty design. It offers a 
    compact yet luxurious experience, featuring
    the MBUX (Mercedes-Benz User Experience) 
    infotainment system with voice control and
    artificial intelligence. It's a great entry-level luxury
    vehicle with modern tech and efficient performance.`,
    isClicked: false,
    count: 0
  },
  {
    image: "./src/mercedes-cars/mercedes2.jpg",
    title: "Mercedes-Benz SLR McLaren",
    categories: "Compact Executive Car",
    engine: "Turbocharged 4-cylinder",
    features: `The C-Class blends luxury and performance 
    seamlessly. With high-quality interiors, advanced 
    safety features, and multiple engine options 
    including powerful AMG variants, it's a popular 
    choice for those seeking a refined driving experience 
    in a compact executive car.`,
    isClicked: false,
    count: 0
  },
  {
    image: "./src/mercedes-cars/mercedes3.jpg",
    title: "Mercedes-Benz SLR McLaren",
    categories: "Mid-Size Luxury Sedan",
    engine: "Turbocharged 4-cylinder",
    features: `The E-Class is a benchmark for luxury 
    sedans, offering a balance of comfort, technology, 
    and performance. It's equipped with semi-autonomous
    driving features, an elegant design, and a 
    spacious, tech-filled interior, making it a 
    favorite among business professionals.`,
    isClicked: false,
    count: 0
  },
  {
    image: "./src/mercedes-cars/mercedes4.jpg",
    title: "Mercedes-Benz SLR McLaren",
    categories: "Full-Size Luxury",
    engine: "Inline-6, V12 AMG & MB",
    features: `The S-Class is the flagship model of Mercedes-Benz,
    representing the pinnacle of luxury and innovation. Known
    for its ultra-luxurious interior, cutting-edge 
    technology, and powerful engine options, 
    the S-Class is a symbol of prestige and status.`,
    isClicked: false,
    count: 0
  },
  {
    image: "./src/mercedes-cars/mercedes5.jpg",
    title: "Mercedes-Benz SLR McLaren",
    categories: "Compact Luxury",
    engine: "Turbocharged 4-cylinder",
    features: `The CLA stands out with its coupe-like 
    styling and dynamic performance. It offers a sporty
    and luxurious experience in a compact package,
    with advanced infotainment and driver assistance
    features, making it appealing to younger buyers.`,
    isClicked: false,
    count: 0
  },
  // {
  //   image: "./src/mercedes-cars/mercedes6.jpg",
  //   title: "Mercedes-Benz SLR McLaren",
  //   categories: "Subcompact Luxury SUV",
  //   engine: "Turbocharged 4-cylinder",
  //   features: `The GLA is the smallest SUV in 
  //   the Mercedes-Benz lineup, ideal for urban 
  //   environments. It offers a high driving 
  //   position, versatile interior space, and the 
  //   latest tech features in a compact, easy-to-maneuver package.`,
  //   isClicked: false,
  //   count: 0
  // }
];


const carVisibleRight = {
  offscreen: {

    opacity: 0,
    rotateX: 45
  },
  onscreen: {

    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 2,
      type: "tween",
      stiffness: 120
    }
  }
}

const scalingWhileInView = {
  offscreen:{
    y: 100
  },
  onscreen:{
    y: 0,
    scale: 1.2,
    transition: {
      duration: 1.5,
      type: "spring",
      stiffness: 120
    }
  }
}
const titleWhileInView = {
  offscreen:{
    y: 100
  },
  onscreen:{
    y: 0,
    transition: {
      duration: 1.5,
      type: "spring",
      stiffness: 120
    }
  }
}
const categoryWhileInView = {
  offscreen:{
    y: 100
  },
  onscreen:{
    y: 0,
    transition: {
      duration: 1.5,
      type: "spring",
      stiffness: 120
    }
  }
}

const engineWhileInView = {
  offscreen:{
    y: 100
  },
  onscreen:{
    y: 0,
    transition: {
      duration: 1.5,
      type: "spring",
      stiffness: 120
    }
  }
}

const collection = {
  offscreen:{
    y: 200,
    opacity:0
  },
  onscreen:{
    opacity:1,
    y:0,
    transition:{
      duration:1.5,
      type:"spring",
      stifness:140
    }
  }
}


export const favoriteCars = [];

function Cars(props){
  const title = props.title;
  const engine = props.engine;
  const category = props.category;
  const feature = props.feature

  const [select, setSelect] = useState(null);
  const handleSelect = (car, index) => {
    if(index === select){
      car.isClicked = false;
      setSelect(null);
    }else{
      car.isClicked = true;
      setSelect(index);
    }
    // setSelect(index===select ? null : index);
  }
  // const lineClick = (car, index) => {
  //   car.count ++;
  //   if(index === mercedesCars.indexOf(car) && car.count % 2 === 1){
  //     car.isClicked = true;
  //   }else{
  //     car.isClicked = false;
  //   }
  //   setLineClicked(!lineClicked);
  //   console.log(lineClicked)
  // }
  const [moreDetail, setMoreDetail] = useState([]);
  const moreDetails = (index) => {
    setMoreDetail((prevItems) => {
      const updatedItems = [...prevItems, mercedesCars[index]];
      console.log(updatedItems);
      return updatedItems;
    });
  }

  const [heart, setHeart] = useState("./src/mercedes-cars/heart.png");
  const [hearts, setHearts] = useState(
    Array(mercedesCars.length).fill("./src/mercedes-cars/heart.png")
  );

  const handleClickHeart = (index) => {
    const clickedHeart = [...hearts];
    clickedHeart[index] = clickedHeart[index] === "./src/mercedes-cars/heart.png" ? "./src/mercedes-cars/black-heart.png" : "./src/mercedes-cars/heart.png"
    setHearts(clickedHeart);
    if(clickedHeart[index] === "./src/mercedes-cars/black-heart.png"){
      favoriteCars.push(mercedesCars[index]);
      console.log(favoriteCars);
    }else{
      favoriteCars.splice(clickedHeart.indexOf(clickedHeart[index]), 1);
      console.log(favoriteCars);
    } 
  }

 

  return(
    <>
      <Header/>
      <section className='cars-section'>
        <motion.p
        initial={collection.offscreen}
        whileInView={collection.onscreen}
        className="collection">Welcome to Our Collection, Enjoy !</motion.p>
        <div className='main-cars-div'>
          <div  className="left-side-cars">
            {
              mercedesCars.map((mercedes, index) => {
                return(
                  <div key={index} className="mercedes-self-div">
                    <motion.p
                    initial={titleWhileInView.offscreen}
                    whileInView={titleWhileInView.onscreen}
                    className='mercedes-car-title'>{mercedes.title}</motion.p>
                    <motion.div
                    className='mercedes-cars-file-img-div'>
                      <motion.img
                      initial={scalingWhileInView.offscreen}
                      whileInView={scalingWhileInView.onscreen} 
                      className='mercedes-cars-file-img' src={mercedes.image} alt="mercedes"/>
                    </motion.div>

                    <div className='favorite-div'>
                      <motion.p
                      initial={categoryWhileInView.offscreen}
                      whileInView={categoryWhileInView.onscreen}  
                      className='mercedes-category'>Category: {mercedes.categories}</motion.p>
                      <div>
                        <img onClick={() => handleClickHeart(index)} key={index} className='heart' src={hearts[index]} alt="heart" />
                      </div>
                    </div>

                    <motion.p
                    initial={engineWhileInView.offscreen}
                    whileInView={engineWhileInView.onscreen} 
                    className='mercedes-engine'>Engine: {mercedes.engine}</motion.p>

                    <div key={index} className='more-click-div-animation-line'>
                      <div className='lines-animate-div'>
                        
                          
                          <div className='line-div1'>
                        
                            {select === index  ? <motion.div className="line2"
                            initial={{width:"10%"}}
                            animate={{width: "90%"}}
                            transition={{duration: 0.7,type:"tween"}}
                            exit={{width:"10%"}}
                            ></motion.div>  :   <motion.div className="line2"  // ELSE LINE
                            initial={{width:"90%"}}
                            animate={{width: "0%"}}
                            transition={{duration: 0.7,type:"tween"}}
                            exit={{width:"10%"}}
                            ></motion.div>  
                          }
                        
                          </div>
                          
                        
                        <motion.img className="more-button"
                        key={index} onClick={() => {handleSelect(mercedes, index)}}  src="./src/mercedes-cars/more.png" alt="more_button" />
                        
                          <div className='line-div'>
                          {select === index  ? <motion.div className="line2"
                            initial={{width:"10%"}}
                            animate={{width: "90%"}}
                            transition={{duration: 0.7,type:"tween"}}
                            exit={{width:"10%"}}
                            ></motion.div>  :   <motion.div className="line2"  // ELSE LINE
                            initial={{width:"90%"}}
                            animate={{width: "0%"}}
                            transition={{duration: 0.7,type:"tween"}}
                            exit={{width:"10%"}}
                            ></motion.div>  
                          }
                          </div>
                        

                      </div>

                      <motion.div className='feature-text-div'>
                        {select === index ? <motion.p
                        initial={{y:-150}}
                        animate={{y:0}}
                        transition={{duration: 0.7, type:"spring", stiffness:160}} 
                        key={index} className='mercedes-feature'>{mercedes.features}</motion.p> : <motion.p
                        initial={{y:0}}
                        animate={{opacity: 0, y:-150}}
                        transition={{duration: 0.7, type:"tween"}}
                        
                        key={index} className='mercedes-feature'>{mercedes.features}</motion.p>} 

                        
                      </motion.div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      <div className='more-details-position-abs-div'>
        
      </div>
    </>
  )
}

export default Cars