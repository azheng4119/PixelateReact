import React, {Component} from 'react';
import "./NavBar.css";


class NavBar extends Component {


    render() {
        return (     
            <div className = "nav-bar">
                <button onClick = {this.props.addRow}>Add Row</button>
                <button onClick = {this.props.addColumn}>Add Column</button>
                <select defaultValue = "black" onChange = {this.props.changeColor}>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="black">Black</option>
                    <option value="whitesmoke">Whitesmoke</option>
                </select>

            </div>
            
        );
    }
}

export default NavBar;