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

            <img src={require('../../Assets/Images/Cloud-1.webp')} alt="" className="Cloud" />

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

            <img src={require('../../Assets/Images/Mountain-BG-4.webp')} alt="" className="Mountain-BG" />

            <img src={require('../../Assets/Images/Rocket-3.webp')} alt="" className="Rocket" />

            <img src={require('../../Assets/Images/Launchpad-1.webp')} alt="" className="Launchpad-1" />

            <img src={require('../../Assets/Images/Launchpad-1.webp')} alt="" className="Launchpad-2" />
        </div>

    </div>
  )
}

export default World