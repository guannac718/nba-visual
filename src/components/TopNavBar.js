import React, {Component} from 'react';
import logo from "../assets/images/logo.svg"


 export class TopNavBar extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={ logo } alt="logo" className="App-logo"/>
                </header>
            </div>
        );
    }
}

