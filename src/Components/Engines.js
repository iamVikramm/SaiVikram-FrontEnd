import React, { useState } from 'react';

function Engines(props) {
    const[draco,setDraco] = useState(true);
    function changeEngine(){
        setDraco(!draco);
    }
    return (
        <>
        {
            draco ?  
            <section id='draco-engines'>
            <div className='engines-div'>
                <div className='engines-heading'>
                    <p>ENGINES</p>
                    <h2>DRACO</h2>
                </div>
                <div className='engine-names'><span onClick={changeEngine} style={{textDecoration:"underline",textUnderlineOffset:".5rem",cursor:"pointer"}}>DRACO</span><span>|</span><span onClick={changeEngine} style={{color:"gray",cursor:"pointer"}}>SUPERDRACO</span></div>
            </div>
            <div className='engines-content'>
                    <p>The Dragon spacecraft is equipped with 16 Draco thrusters used to orient the spacecraft during the mission, including apogee/perigee maneuvers, orbit adjustment and attitude control. Each Draco thruster is capable of generating 90 pounds of force in the vacuum of space.</p>
            </div>
            <div className='engines-ratings'>
                <div className='engines-ratings-child'>
                    <p>NUMBER OF ENGINES</p>
                    <p>16</p>
                </div>
                <div className='engines-ratings-child'>
                    <p>THURST IN VACCUM</p>
                    <p>400N/ 90lbf</p>
                </div>
            </div>
        </section> 
        :
        <section id='super-drago-engines'>
        <div className='engines-div'>
            <div className='engines-heading'>
                <p>ENGINES</p>
                <h2>DRACO</h2>
            </div>
            <div className='engine-names'><span onClick={changeEngine} style={{color:"gray",cursor:"pointer"}}>DRACO</span><span>|</span><span onClick={changeEngine} style={{cursor:"pointer",textDecoration:"underline",textUnderlineOffset:".5rem"}}>SUPERDRACO</span></div>
        </div>
        <div className='engines-content'>
                <p>An array of eight SuperDraco engines provide fault-tolerant propulsion for Dragon’s launch escape system. In the unlikely event of an emergency, the eight SuperDraco engines can power Dragon half a mile away from the launch vehicle in less than eight seconds.</p>
        </div>
        <div className='engines-ratings'>
            <div className='engines-ratings-child'>
                <p>NUMBER OF ENGINES</p>
                <p>8</p>
            </div>
            <div className='engines-ratings-child'>
                <p>ESCAPE THURST</p>
                <p>73 kN/16,400lbf</p>
            </div>
        </div>
    </section>
        }
        </>
    );
}

export default Engines;