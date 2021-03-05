export function SortByID(json){
    return json.data.result.sort((a,b) => {
        return a.id - b.id
    })
}

export function SortByLastName(json) {
    return json.data.result.sort((a,b) => {
        if(a.last_name < b.last_name) return -1;
        if(a.last_name > b.last_name) return 1;
        return 0
    })
}