import React, {Component} from 'react';


class TableCell extends Component{
    constructor(props){
        super(props);
        this.state = {
            color: this.props.color,
            changeColor: this.props.changeColor
        }
    }
    handleColor = () => {
        this.setState({
            color: "white"
        })
    }
    render(){
        return <td onClick = {this.handleColor} style={{backgroundColor: this.state.color}}>
            Cell
        </td>
    }
}

export default TableCell;