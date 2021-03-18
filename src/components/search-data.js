import React from "react";
import {DataContext} from "../data/data-context";
import {checkIfSearched} from "../data/sort-types";

function SearchData(){

    const {jsonData, searchedJson} = React.useContext(DataContext);
    const [message, setMessage] = React.useState('');

    const search = (e) => {
        let jsonCopy = {success: true, data: {result: []}};
        let data;

        if(checkIfSearched(searchedJson.searched)) data = searchedJson.searched.data.result;
        else data = jsonData.json.data.result;

        jsonCopy.data.result = data.filter(itm => {
            return itm.last_name.toLowerCase().indexOf(e.target.value.toLowerCase()) === 0
        });

        if(jsonCopy.data.result.length < 1) setMessage('No matches');
        else setMessage(null);

        if(e.target.value.length < 1) searchedJson.updateSearchedJson(jsonData.json);
        else searchedJson.updateSearchedJson(jsonCopy)
    };

    return(
        <div>
            <input type="text" onChange={search}/>
            {message ? <p>{message}</p> : <br/>}
        </div>
    )
}

export default SearchData;