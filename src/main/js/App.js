import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom";
import AppBase from "./component/common/base/AppBase";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <AppBase/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;