import React from 'react';

function CreateView(props){ //Create views from JSON

    const json = props.data;

    if(!json.success) return <p>Please try again...</p>;

    const list = json.data.result.map((data) =>
        <div key={data.id} className={'view-sect'}>
            <h2>{checkIfExists(data.first_name)} {checkIfExists(data.last_name)}</h2>
            <p>Created <span>{checkIfExists(data.created_date)}</span></p>
            <p>Email <span>{checkIfExists(data.email)}</span></p>
            <p>Address 1 <span>{checkIfExists(data.address1)}</span></p>
            <p>Address 2 <span>{checkIfExists(data.address2)}</span></p>
            <p>City <span>{checkIfExists(data.city)}</span></p>
            <p>Zip <span>{checkIfExists(data.zip)}</span></p>
            <p>State ID <span>{checkIfExists(data.id_state)}</span></p>
            <p>Country ID <span>{checkIfExists(data.id_country)}</span></p>
            <p>NPI <span>{checkIfExists(data.npi)}</span></p>
            <p>Clinic Name <span>{checkIfExists(data.clinic_name)}</span></p>
            <p>Clinician Credential ID <span>{checkIfExists(data.id_clinician_credential)}</span></p>
            <p>Clinician Credential Text <span>{checkIfExists(data.clinician_credential_text)}</span></p>
        </div>
    );

    return <div className={'view-cont'}>{list}</div>
}

function checkIfExists(value){
    if(value === '') return `Error: missing data (empty)`;
    else if(!value || value === "undefined") return `Error: missing data (${value})`;
    else return value;
}

// "id": 54,
//     "created_date": "2021-01-14T14:03:13.795Z",
//     "created_by": 26,
//     "deleted": false,
//     "deleted_by": null,
//     "deleted_date": null,
//     "modified_by": null,
//     "modified_date": null,
//     "id_person_type": 1,
//     "id_org": null,
//     "first_name": "f",
//     "last_name": "f",
//     "email": "f@f.com",
//     "address1": "f",
//     "address2": null,
//     "city": "f",
//     "zip": "12",
//     "id_state": 10,
//     "id_country": 1,
//     "npi": "1213123123",
//     "clinic_name": "f",
//     "id_clinician_credential": null,
//     "clinician_credential_text": null

export default CreateView;