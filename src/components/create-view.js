import React from 'react';

function CreateView(props){ //Create views from JSON

    const json = props.data;

    if(!json.success) return <p>Please try again...</p>;

    const list = json.data.result.map((data) =>
        <div key={data.id}>
            <h2>{data.first_name} {data.last_name}</h2>
            <p>{data.email}</p>
        </div>
    );

    return <div>{list}</div>
}

export default CreateView;