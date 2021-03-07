import React from 'react';
import InputData from "./input-data.js";
import SortData from "./sort-data";
import SearchData from "./search-data";

function SideBar(){

    const [open, setOpen] = React.useState(false);

    React.useEffect(()  => {
        if(window.innerWidth < 1100) setOpen(false);
        else setOpen(true)
    }, []);

    return(
        <React.Fragment>
        <div className={open ? 'side-bar open' : 'side-bar closed'}>
            <div>
                <h2>Search and Sort by last name</h2>
                <SortData/>
                <SearchData/>
            </div>
            <div className={'input'}>
                <h2>Add a Clinician</h2>
                <InputData/>
            </div>
            <p>Created by Chandler Talbot</p>
        </div>
        <button className={'side-bar-btn'} onClick={() => setOpen(!open)}>{open ? 'Close Menu' : 'Open Menu'}</button>
        </React.Fragment>
    )
}

export default SideBar;