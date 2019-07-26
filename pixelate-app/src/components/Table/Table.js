import React, {Component} from 'react';
// import TableElement from "./TableElement/TableElement";
import "./Table.css";

class Table extends Component {
    constructor(props) {
        super(props);
        this.setState= {
            row: this.props.row,
            column: this.props.column
            
        }
    }
    
    createTable = () => {
        let table = []
        for(let i = 0; i < 5; i++) {
            let children = []
            for(let j = 0; j < 5; j++) {
                children.push(<td>"MOM"</td>)
            }
            table.push(<tr>{children}</tr>)
        }
        return table;
    }
    render () {
        
        return (
            <div className = "main-table">
                {this.createTable}
            </div>
        );
    }

}

export default Table;