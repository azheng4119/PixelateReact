import React, {Component} from 'react';
// import TableElement from "./TableElement/TableElement";
import "./Table.css";

class Table extends Component {
    createTable = () => {
        let table = []
        for(let i = 0; i < this.props.row; i++) {
            let children = []
            for(let j = 0; j < this.props.column; j++) {
                children.push(<td>"MOM"</td>)
            }
            table.push(<tr>{children}</tr>)
        }
        return table;
    }
    render () {
        
        return (
            <div className = "main-table">
                {this.createTable()}
            </div>
        );
    }

}

export default Table;