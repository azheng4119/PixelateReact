import React, {Component} from 'react';
import TableCell from './TableCell';


class TableRow extends Component{
    render(){
        let rows= [];
        for (let i = 0; i < this.props.col; i++){
            rows.push(<TableCell color = {this.props.color} changeColor = {this.props.changeColor}></TableCell>)
        }
        return <tr>
            {rows}
        </tr>
    }
}

export default TableRow;