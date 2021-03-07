import React from "react";
import './App.css';
import CreateView from "./components/create-view.js";
import SideBar from "./components/side-bar.js";
import {DataProvider, SearchProvider} from "./data/data-context.js"

function App() {

    return(
        <DataProvider>
            <SideBar/>
            <div className={'dashboard'}>
                <CreateView/>
            </div>
        </DataProvider>
    )
}

export default App;