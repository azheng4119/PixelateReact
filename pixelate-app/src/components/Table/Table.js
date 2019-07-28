import React, {Component} from 'react';
// import TableElement from "./TableElement/TableElement";
import "./Table.css";
import TableRow from './TableRow';

class Table extends Component {
    render () {
        let Table = [];
        for (let i = 0; i < this.props.row; i++){
            Table.push(<TableRow col = {this.props.column} color = {this.props.color} changeColor = {this.props.changeColor}></TableRow >)
        }
        return (
                Table
        );
    }

}

export default Table;