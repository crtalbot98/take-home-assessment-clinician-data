import React from "react";

function InputData(props){

    const inputObj =  {
        "id": null,
        "created_date": null,
        "created_by": 0,
        "deleted": false,
        "deleted_by": null,
        "deleted_date": null,
        "modified_by": null,
        "modified_date": null,
        "id_person_type": 1,
        "id_org": null,
        "first_name": '',
        "last_name": '',
        "email": '',
        "address1": '',
        "address2": '',
        "city": '',
        "zip": '',
        "id_state": 1,
        "id_country": 1,
        "npi": "1212121212",
        "clinic_name": '',
        "id_clinician_credential": null,
        "clinician_credential_text": null
    };
    const [input, setInput] = React.useState(filterObjs(inputObj));

    const merge = () => {
        let jsonCopy = {...props.json};
        jsonCopy.data.result.push({...inputObj, ...input});
        props.setJson(jsonCopy);
        setInput(filterObjs(inputObj));
    };

    const inputList = Object.entries(input).map(([k,v]) =>
        <div key={k}>
            <label htmlFor={k}>{k}</label>
            <input type={"text"} id={k} value={input[k]} onChange={(e) => {setInput({...input, [k]: e.target.value})}}/>
        </div>
    );

    return(
        <React.Fragment>
            {inputList}
            <button onClick={merge}>Input</button>
        </React.Fragment>
    )
}

function filterObjs(obj){ //Remove null and existing values from input obj
    let res = {};

    for(let key in obj){
        if(obj.hasOwnProperty(key) && obj[key] === '') res[key] = obj[key]
    }

    return res;
}

export default InputData;