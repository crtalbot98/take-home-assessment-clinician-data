import React from 'react';
import {DataContext} from "../data/data-context";
import View from "./view";
import {checkIfSearched} from "../data/sort-types";

function CreateView(){ //Create views from context

    const {jsonData, searchedJson} = React.useContext(DataContext);

    if(!jsonData.json.success) return <p>Please try again...</p>;

    if(checkIfSearched(searchedJson.searched)) return <View json={searchedJson.searched}/>;
    else return <View json={jsonData.json}/>
}

export default CreateView;