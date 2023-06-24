import "./Hero.css";
import Header from "../Header/Header";
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png'
import { motion } from "framer-motion";
import NumberCounter from 'number-counter';
const Hero = () => {
  

const transition = {type:'spring', duration:3}
const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div initial={{left: mobile? '178px' : "238px"}} whileInView={{left:'8px'}}
           transition={{...transition, type:'tween'}}>

          </motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/* Hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+"/>
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
            <NumberCounter end={978} start={800} delay="3" preFix="+"/>
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
            <NumberCounter end={50} start={0} delay="3" preFix="+"/>
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
        </div>

      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div transition={transition} initial={{right:"-1rem"}} whileInView={{right:"4rem"}} className="heart-rate">
            <img src={heart} alt="heart"/>
            <span>Heart Rate</span><span>116 BPM</span>
              </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
        whileInView={{right:"20rem"}} initial={{right:"11rem"}} transition={transition}
        src={hero_image_back} alt="" className="hero-image-back" />

        {/* caloriees */}
        <motion.div whileInView={{right:"28rem"}} initial={{right:"37rem"}} transition={transition}
         className="calories">
            <img src={calories} alt="" />
            <div>
                <span>Calories Burned</span>
                <span>220 Kcal</span>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
