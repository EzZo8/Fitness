
import './Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData';
import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion } from 'framer-motion';

const Testimonials = () => {
    const [selected,setSelected]= useState(0);
    const tLength = testimonialsData.length;
    const transition = {type:'spring',duraion:3};
  return (
    <div className='testimonials' id='testimonials'>
      <div className='left-t'>
    <span>Testimonials</span>
    <span className='stroke-text'>what they</span>
    <span>say about us</span>
    <motion.span
    key={selected}
    initial={{opacity:0, x:-100}} 
    transition={transition}
    animate={{opacity:1, x:0}}
    exit={{opacity:0, x:100}}
    >
        {testimonialsData[selected].review}
    </motion.span>
    <span>
        <span style={{'color':'var(--orange)'}}>
            {testimonialsData[selected].name}
        </span>{" "}
        - {testimonialsData[selected].status}
    </span>
      </div>

      <div className='right-t'>
        <motion.div 
        initial={{opacity:0, x:-100}} 
        transition={transition}
        whileInView={{opacity:1, x:0}}
        className='firstone'>

        </motion.div>
        <motion.div 
        initial={{opacity:0, x:100}} 
        transition={{...transition,duration:2}}
        whileInView={{opacity:1, x:0}}
        className='seconddiv'>

        </motion.div>
        <motion.img
        key={selected}
        initial={{opacity:0, x:100}} 
        transition={transition}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:-100}}
        src={testimonialsData[selected].image} alt=''/>
        <div className='arrows'>
            <img onClick={()=> {
                selected === 0 ? setSelected(tLength-1) :
                setSelected((prev)=> prev -1);
            }} src={leftArrow} alt="arrow" />
            <img onClick={()=> {
                selected === tLength -1 ? setSelected(0) :
                setSelected((prev) => prev +1)
            }} src={rightArrow} alt="arrow" />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
