import React from 'react';
import {DataContext} from "../data/data-context";
import View from "./view";

function CreateView(){ //Create views from context

    const {jsonData, searchedJson} = React.useContext(DataContext);

    if(!jsonData.json.success) return <p>Please try again...</p>;

    return <View json={searchedJson.searched}/>
}

export default CreateView;