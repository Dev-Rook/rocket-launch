import React, {useEffect, useState} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";

import {Howl} from 'howler';
// import ReactHowler from 'ReactHowler'

import './World.css'
import LaunchCalibrateAudio from '../../Assets/Audio/Loading-Sound-Effect.mp3';
import ClickAudio from '../../Assets/Audio/Click-Sound-Effect.mp3';


const World = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    const [launch, setLaunch] = useState(false);
    const [land, setLand] = useState(false);

    // const [lauchCalibrateAudio, setLaunchCalibrateAudio] = useState

    const liftOff = () => {
        setLaunch((prevState) => !prevState)
    }

    const landRocket = () => {
        setLand((prevState) => !prevState)
    }

    const Audios = [
        {
            sound: LaunchCalibrateAudio,
            lable: "Launch Calibrate Audio"
        },

        {
            sound: ClickAudio,
            lable: "Click Effect"
        }
    ]

    const src = (`https://www.youtube.com/watch?v=TfDIHymqS_w`)

    const soundCall = (src) => {
        const sound = new Howl({
            src,
            html5: true,
            preload: true,
        });
        sound.play()
    }


    // const launchAndSound = () => {
    //     liftOff();
    //     sound();
    // }
    


  return (
    <div className="World-Box">
        <div className="Sky-Box">

            <img data-aos="fade-right" data-aos-duration="1500" src={require('../../Assets/Images/Moon-1.webp')} alt="" className="Moon" />

            <img src={require('../../Assets/Images/Satelite-1.webp')} alt="" className="Satelite Satelite-Course" />

            <img src={require('../../Assets/Images/Cloud-1.webp')} alt="" className="Cloud" />

            <div data-aos="fade-right" data-aos-duration="1500" className="Control-Pannel">
                <p id="Welcome">
                    Welcome
                </p>

                <div className="Button-Container">
                    <button onClick={liftOff} className='Control-Button Launch-Button'>
                        <p onClick={() => soundCall(src)} id="Button-Text">
                            Launch
                        </p>
                    </button>

                    <button onClick={landRocket} className='Control-Button Land-Button'>
                        <p id="Button-Text">
                            Land
                        </p>
                    </button>
                </div>
            </div>
        </div>

        <div className="Ground-Box">

            <img src={require('../../Assets/Images/Mountain-BG-3.webp')} alt="" className="Mountain-BG" />

            <img src={require('../../Assets/Images/Ground-Station-2.webp')} alt="" className="Gound-Station-2" />

            <img src={require('../../Assets/Images/Ground-Station-3.webp')} alt="" className="Gound-Station-3" />

            {/* Rockets */}

            <img src={require('../../Assets/Images/Rocket-3.webp')} alt="" className={launch ? "Rocket  Sky-High" : "Rocket"} />

            <img src={require('../../Assets/Images/Rocket-3.webp')} alt="" className={land ? "Lander-Rocket  Land-Rocket" : "Lander-Rocket"} />

            {/* Rockets */}

            <img src={require('../../Assets/Images/Launchpad-1.webp')} alt="" className="Launchpad-1" />

            <img src={require('../../Assets/Images/Launchpad-1.webp')} alt="" className="Launchpad-2" />
        </div>

    </div>
  )
}

export default World