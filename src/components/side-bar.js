import React from 'react';
import InputData from "./input-data.js";

function SideBar(props){

    return(
        <div className={'side-bar'}>
            <div>
                <h2>Add a Clinician</h2>
                <InputData json={props.json} setJson={props.setJson}/>
            </div>
        </div>
    )
}

export default SideBar;