import React from 'react';

function CreateView(props){ //Create views from JSON

    const json = props.data;

    if(!json.success) return <p>Please try again...</p>;

    const list = json.data.result.map((data) => (
        <div key={data.id} className={'view-sect'}>
            {Object.entries(data).map(([k, v]) => (
                <p>{k} <span>{checkIfExists(v)}</span></p>
            ))}
        </div>
    ));

    console.log(list);
    return <div className={'view-cont'}>{list}</div>
}

function checkIfExists(value){
    if(value === '') return `Error: missing data (empty)`;
    else if(!value || value === "undefined") return `Error: missing data (${value})`;
    else return value;
}

export default CreateView;