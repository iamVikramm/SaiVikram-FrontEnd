import React, { useCallback, useEffect, useState } from 'react';
import { ADD_DATA } from '../actions';
import Datagrid from './Datagrid';
import Loader from './Loader';



function ApiData(props) {
    const store = props.store;

    const[spacexData,setSpacexData] = useState([])
    const[isLoading,setLoading] = useState(true);


    const getUrl = ()=>{
        return "https://api.spacexdata.com/v4/capsules";
    }
    const getApiData = useCallback(async ()=>{
        const res = await fetch(getUrl());
        const response = await res.json();
        return response;
    }, []);
  
    useEffect(()=>{ 
        getApiData().then(setSpacexData)
        setLoading(false);
    }, [getApiData])



    if(!isLoading){
        store.dispatch({
            type:ADD_DATA,
            data:spacexData
        })
    }

    if(isLoading){
        return(
            <Loader />
        )
    }
    return(
        <>
           <Datagrid store={store} />
        </>
    
        
    )
}

export default ApiData;
