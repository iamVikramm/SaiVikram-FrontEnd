import React from 'react';

function Popup(props) {
    const Array = props.data
    const arrData = Array.filter((item)=>{
        return item.id === props.clickedItem.id;
    })

    const data = Object.assign({},arrData[0])

    return(props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button onClick={()=>props.onClick()}>X</button>
                <h2>More about {data.serial} Dragon </h2>
                <p><span>Capsule ID</span> : {data.id}</p>
                <p><span>Capsule Serial</span> : {data.serial}</p>
                <p><span>Last Update</span> : {data.last_update}</p>
                <p><span>Land Landings</span> : {data.land_landings}</p>
                <p><span>Water Landings</span> : {data.water_landings}</p>
                <p><span>Reuses</span> : {data.reuse_count}</p>
                <p><span>Status</span> : {data.status}</p>
                <p><span>Number of Launches</span> : {data.launches.length}</p>
                <p><span>Type</span> : {data.type}</p>
            </div>
        </div>
    ):""
}

export default Popup;