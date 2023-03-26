import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Popup from './Popup';


function Datagrid(props) {

    const[isTriggered,setIsTriggered] = useState(false);
    const [itemTriggered,setItemTriggered] = useState([]);

    if(props.store){
        const data = props.store.getState();
    
        function whenTriggered(e){
            setItemTriggered(e)
            setIsTriggered(true);
        }
        function exitTrigger(){
            setIsTriggered(false);
        }
    
        if(data){
            const columns = [
                {field:"id",headerName:"ID",width:300},
                {field:"Last_Update",headerName:"Last_Update",width:600},
                {field:"Land_Landings",headerName:"Land_Landings",width:150},
                {field:"Water_Landings",headerName:"Water_Landings",width:150},
                {field:"Reuse_Count",headerName:"Reuse_Count",width:150},
                {field:"Type",headerName:"Type",width:200},
                {field:"Status",headerName:"Status",width:200}
            ]
        
            const rows = data.map((item)=>({
                id:item.id,
                Last_Update:item.last_update,
                Land_Landings:item.land_landings,
                Water_Landings:item.water_landings,
                Reuse_Count:item.reuse_count,
                Type:item.type,
                Status:item.status
            }))
            return (
                <div className='Data-Grid'>
                    <h2>SpaceX Dragons Data Grid</h2>
                    <DataGrid 
                    style={{height:"100%",backgroundColor:"#4B4A54",color:"#fff",border:"4px solid #fff"}}
                    rows={rows}
                    onRowClick={whenTriggered}
                    columns={columns}
                    initialState={{
                        ...data.initialState,
                        pagination: { paginationModel: { pageSize: 10 } },
                      }}
                      pageSizeOptions={[10]}
                    />
                    <Popup trigger={isTriggered} data={data} clickedItem={itemTriggered} onClick={exitTrigger}/>
                </div>
            );
        }
    
    }
    }

export default Datagrid;