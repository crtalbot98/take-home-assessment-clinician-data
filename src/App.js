import React from "react";
import clinicians from './data/clinicians.json';
import './App.css';
import CreateView from "./components/create-view.js";
import SideBar from "./components/side-bar.js";

function App() {
    return(
        <React.Fragment>
            <SideBar/>
            <div className={'dashboard'}>
                <CreateView data={clinicians}/>
            </div>
        </React.Fragment>
    )

}

export default App;
