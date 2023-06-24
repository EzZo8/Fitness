import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'
const Reasons = () => {
  return (
    <div className='reasons' id='reasons'>
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r">
            <span>some reasons</span>
            <div>
                <span className='stroke-text'>why </span>
                <span>choose us?</span>
            </div>
            <div className='details-r'>
                <div>
                    <img src={tick} alt=""/>
                    <span>over 140+ expert coaches</span>
                </div>
                <div>
                    <img src={tick} alt=""/>
                    <span>train smarter and faster than before</span>
                </div>
                <div>
                    <img src={tick} alt=""/>
                    <span>1 free program for new members</span>
                </div>
                <div>
                    <img src={tick} alt=""/>
                    <span>reliable partners</span>
                </div>
            </div>
            <span className='our-partners'> 
             our partners</span>
             <div className="partners">
                <img src={nb} alt="nb" />
                <img src={adidas} alt="ad" />
                <img src={nike} alt="nike" />
             </div>
        </div>
    </div>
  )
}

export default Reasons
