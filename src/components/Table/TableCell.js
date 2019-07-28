import React, {Component} from 'react';


class TableCell extends Component{
    constructor(props){
        super(props);
        this.state = {
            color: this.props.color,
            changeColor: this.props.changeColor()
        }
    }
    handleColor = () => {
        this.setState({
            color: this.props.changeColor()
        })
    }
    render(){
        return <td onMouseOver = {this.handleColor} 
                style={{backgroundColor: this.state.color,color: this.state.color, width:"50px", height:"50px", border:"1px solid black"}}>
            
                </td>
    }
}

export default TableCell;