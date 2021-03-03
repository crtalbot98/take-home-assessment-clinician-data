import React from "react";
import clinicians from './data/clinicians.json';
import './App.css';
import CreateView from "./components/create-view.js";

function App() {
    return(
        <CreateView data={clinicians}/>
    )

}

export default App;
