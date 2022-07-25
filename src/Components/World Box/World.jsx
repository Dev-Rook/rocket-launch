import React, {useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";

import './World.css'

const World = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    


  return (
    <div className="World-Box">
        <div className="Sky-Box">

            <img src={require('../../Assets/Images/Moon-1.webp')} alt="" className="Moon" />

            <img src={require('../../Assets/Images/Satelite-1.webp')} alt="" className="Satelite Satelite-Course" />

            <div data-aos="fade-right" data-aos-duration="1000" className="Control-Pannel">
                <p id="Welcome">
                    Welcome
                </p>

                <div className="Button-Container">
                    <button className='Control-Button Launch-Button'>
                        <p id="Button-Text">
                            Launch
                        </p>
                    </button>

                    <button className='Control-Button Land-Button'>
                        <p id="Button-Text">
                            Land
                        </p>
                    </button>
                </div>
            </div>
        </div>

        <div className="Ground-Box">
            <div className="Rocket-Platform">

            </div>
        </div>

    </div>
  )
}

export default World