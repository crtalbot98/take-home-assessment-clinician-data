import React from "react";
import {checkIfExists} from "../data/sort-types";

function View(props){

    const list = props.json.data.result.map((data) => (
        <div key={data.id} className={'view-sect'}>
            {Object.entries(data).map(([k, v]) => (
                <p key={k}>{k} <span>{checkIfExists(v)}</span></p>
            ))}
        </div>
    ));

    if(list.length < 1) return <p>There is nothing here...</p>;
    return <div className={'view-cont'}>{list}</div>
}

export default View;