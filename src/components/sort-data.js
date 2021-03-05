import React from "react";
import {SortByID, SortByLastName} from "../data/sort-types";

function SortData(props){

    const [sort, setSort] = React.useState({
        isSorted: false,
        type: 'ID'
    });

    const getType = (e) => {
        let jsonCopy = {...props.json};

        switch(e.target.innerText){
            case 'Asc':
                if(!sort.isSorted || sort.type === 'Desc'){
                    setSort({isSorted: true, type: 'Asc'});
                    jsonCopy.data.result = SortByLastName(props.json);
                    console.log(jsonCopy);
                    props.setJson(jsonCopy)
                }
                else if(sort.type === e.target.innerText){
                    setSort({isSorted: false, type: 'ID'});
                    jsonCopy.data.result = SortByID(props.json);
                    props.setJson(jsonCopy)
                }
                break;
            case 'Desc':
                if(!sort.isSorted || sort.type === 'Asc'){
                    setSort({isSorted: true, type: 'Desc'});
                    jsonCopy.data.result = SortByLastName(props.json).reverse();
                    props.setJson(jsonCopy)
                }
                else if(sort.type === e.target.innerText) {
                    setSort({isSorted: false, type: 'ID'});
                    jsonCopy.data.result = SortByID(props.json);
                    props.setJson(jsonCopy)
                }
                break;
            default:
                setSort({isSorted: false, type: 'ID'});
        }
    };

    return(
        <React.Fragment>
            <button onClick={getType}>Asc</button>
            <button onClick={getType}>Desc</button>
        </React.Fragment>
    )

}

export default SortData;