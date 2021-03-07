import React from "react";
import {SortByID, SortByLastName, checkIfSearched} from "../data/sort-types";
import {DataContext} from "../data/data-context";

function SortData(){

    const context = React.useContext(DataContext);
    const [sort, setSort] = React.useState({
        isSorted: false,
        type: 'Default'
    });

    const getType = (e) => {
        switch(e.target.innerText){
            case 'Asc':
                if(!sort.isSorted || sort.type !== e.target.innerText){
                    setSort({isSorted: true, type: 'Asc'});
                    checkSort(e.target.innerText, context)
                }
                else if(sort.type === e.target.innerText){
                    setSort({isSorted: false, type: 'Default'});
                    resetSort(context)
                }
                break;
            case 'Desc':
                if(!sort.isSorted || sort.type !== e.target.innerText){
                    setSort({isSorted: true, type: 'Desc'});
                    checkSort(e.target.innerText, context)
                }
                else if(sort.type === e.target.innerText) {
                    setSort({isSorted: false, type: 'Default'});
                    resetSort(context)
                }
                break;
            default:
                setSort({isSorted: false, type: 'Default'});
                resetSort(context)
        }
    };

    return(
        <React.Fragment>
            <button onClick={getType}>Asc</button>
            <button onClick={getType}>Desc</button>
        </React.Fragment>
    )
}

function checkSort(value, context){
    let jsonCopy = {...context.jsonData.json};

    if(value === 'Asc'){
        jsonCopy.data.result = SortByLastName(jsonCopy.data.result);
        context.jsonData.updateJson(jsonCopy)
    }
    else if(value === 'Desc'){
        jsonCopy.data.result = SortByLastName(jsonCopy.data.result).reverse();
        context.jsonData.updateJson(jsonCopy)
    }
    else{
        resetSort(jsonCopy, context)
    }
}

function resetSort(context){
    let jsonCopy = {...context.jsonData.json};

    jsonCopy.data.result = SortByID(jsonCopy.data.result);
    context.jsonData.updateJson(jsonCopy)
}

export default SortData;