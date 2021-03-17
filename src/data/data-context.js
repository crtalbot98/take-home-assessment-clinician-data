import React from "react";
import clinicians from './clinicians.json';

export const DataContext = React.createContext({
    jsonData: clinicians,
    searchedJson: clinicians,
    addJson: () => {},
    updateJson: () => {},
    updateSearchedJson: () => {}
});

export const DataProvider = (props) => {

    const addJson = (json) => {
        let jsonCopy = {...jsonData.json};
        jsonCopy.data.result.push(json);
        setJsonData({...jsonData, json: jsonCopy});
    };

    const updateJson = (json) => {
        setJsonData({...jsonData, json: json});
    };

    const updateSearchedJson = (json) => {
        setSearchedJson({...searchedJson, searched: json});
    };

    const [jsonData, setJsonData] = React.useState( {
        json: clinicians,
        addJson: addJson,
        updateJson: updateJson
    });

    const [searchedJson, setSearchedJson] = React.useState({
        searched: clinicians,
        updateSearchedJson: updateSearchedJson
    });

    return (
        <DataContext.Provider value={{jsonData: jsonData, searchedJson: searchedJson}}>
            {props.children}
        </DataContext.Provider>
    )
};