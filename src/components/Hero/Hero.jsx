import React from 'react'
import Header from "../Header/Header";
import './Hero.css'
import NumberCounter from 'number-counter'
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
{/*best fitness ad */}
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club</span>
        </div>

        {/* hero heading*/}

        <div className="hero-text">
          <div>
            <span className="stroke-text">shape your</span>
            <span></span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and strengthen your body
            </span>
          </div>
        </div>

        {/*figures*/}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={100} delay='4' prefix="+"></NumberCounter></span>
            <span>professional coaches</span>
          </div>
          <div>
            <span>
            <NumberCounter end={900} delay='4' prefix="+"></NumberCounter>
            </span>
            <span>members</span>
          </div>
          <div>
            <span>              
              <NumberCounter end={48} delay='4' prefix="+"></NumberCounter>
              </span>
            <span>fitness programs</span>
          </div>

          {/* hero buttons*/}
          <div className="hero-buttons">
            <buttons className="btn">Get Started</buttons>
            <buttons className="btn">Learn More</buttons>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Hero;
