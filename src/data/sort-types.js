export function SortByID(json){
    return json.sort((a,b) => {
        return a.id - b.id
    })
}

export function SortByLastName(json) {
    return json.sort((a,b) => {
        if(a.last_name < b.last_name) return -1;
        if(a.last_name > b.last_name) return 1;
        return 0
    });
}

export function checkIfExists(value){
    if(value === '') return `missing data (empty)`;
    else if(!value || value === "undefined") return `missing data (${value})`;
    else return value;
}

export function checkIfSearched(context){
    if(context.data) {
        if(context.data.result.length > 0){
            return true
        }
    }

    return false
}