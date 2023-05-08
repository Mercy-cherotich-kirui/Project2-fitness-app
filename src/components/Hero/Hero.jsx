import React from 'react'
import Header from "../Header/Header";
import './Hero.css'
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
            <span>+100</span>
            <span>professional coaches</span>
          </div>
          <div>
            <span>+900</span>
            <span>members</span>
          </div>
          <div>
            <span>+48</span>
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
