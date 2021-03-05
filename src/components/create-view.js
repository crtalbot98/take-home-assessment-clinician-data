import React from 'react';

function CreateView(props){ //Create views from JSON

    if(!props.json.success) return <p>Please try again...</p>;

    const list = props.json.data.result.map((data) => (
        <div key={data.id} className={'view-sect'}>
            {Object.entries(data).map(([k, v]) => (
                <p key={k}>{k} <span>{checkIfExists(v)}</span></p>
            ))}
        </div>
    ));

    return <div className={'view-cont'}>{list}</div>
}

function checkIfExists(value){
    if(value === '') return `missing data (empty)`;
    else if(!value || value === "undefined") return `missing data (${value})`;
    else return value;
}

export default CreateView;