import React, { useState } from 'react';


function Search(props) {

    const store = props.store;
    const arrData = store.getState();

    const [value,setValue] = useState("");
    const[searchedItems,setSearchedItems] = useState([]);

    function onSearch(){
        const toSearch = value.toLowerCase()+"";
        if(toSearch){
            const temp = arrData.filter((i)=>{
                return (i.serial.toLowerCase().includes(toSearch)||i.status.toLowerCase().includes(toSearch)||i.type.toLowerCase().includes(toSearch))
            });
            setSearchedItems(temp)
        }else{
            setSearchedItems([])
        }
    }

    function inputOnchange(e){
        setValue(e.target.value)
        if(e.target.value === ""){
            setSearchedItems([])
        }
    }
    
    // console.log(searchedItems)
    return (
        <section id='search'>
            <h2>Search for Serial, Status or Type :</h2>
            <div className='search-outer-div'>
                <div className='search-div'>
                    <input onChange={inputOnchange} value={value} spellCheck={false} placeholder='search here'></input><span title='search' style={{color:"#000"}} onClick={onSearch}><i className="fa fa-light fa-rocket"></i></span>
                </div>
            </div>
            <div className='searched-items'>
            {searchedItems.map((item)=>{
                return(
                    <div className='each-search-item' key={item.id} color='#8f8f8f'>
                        <p>Serial : {item.serial}</p>
                        <p>Status : {item.status}</p>
                        <p>Lastupdate : {item.reuse_count}</p>
                        <p>Land Landings : {item.land_landings}</p>
                        <p>Water Landings : {item.water_landings}</p>
                    </div>
                )
            })
            }
            </div>

        </section>
    );
}

export default Search;