import React from 'react';
import InputData from "./input-data.js";
import SortData from "./sort-data";

function SideBar(props){

    return(
        <div className={'side-bar'}>
            <div className={'input'}>
                <h2>Add a Clinician</h2>
                <InputData json={props.json} setJson={props.setJson}/>
            </div>
            <SortData json={props.json} setJson={props.setJson}/>
        </div>
    )
}

export default SideBar;