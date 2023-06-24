import './Plans.css'
import  {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
const Plans = () => {
  return (
    <div className='plans-theBig' id='plans'>
      <div className="plans-container">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header">
            <span className='uc stroke-text'>ready to start</span>
            <span className='uc'>your journey</span>
            <span className='uc stroke-text'>now with us</span>
        </div>

        <div className="plans">
    {plansData.map((plan,i)=> (
        <div key={i} className='plan'>
          {plan.icon}
          <span>{plan.name}</span>
          <span>$ {plan.price}</span>
          <div className='features'>
            {plan.features.map((feature,i)=> (
              <div className='feature'>
                <img src={whiteTick} alt=''/>
                <span key={i}>{feature}</span>
              </div>
            ))}
          </div>
          <div> <span>See more benefits -{'>'} </span></div>
          <button className='btn'>Join now</button>
        </div>
    ))}
        </div>

      </div>
    </div>
  )
}

export default Plans
