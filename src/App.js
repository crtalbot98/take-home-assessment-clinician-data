import React from "react";
import clinicians from './data/clinicians.json';
import './App.css';
import CreateView from "./components/create-view.js";
import SideBar from "./components/side-bar.js";

function App() {
    const [json, setJson] = React.useState(clinicians);

    return(
        <React.Fragment>
            <SideBar json={json} setJson={setJson}/>
            <div className={'dashboard'}>
                <CreateView json={json}/>
            </div>
        </React.Fragment>
    )
}

export default App;