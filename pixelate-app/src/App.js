import React , {Component} from 'react';
import NavBar from './components/NavBar/Nav';
import Table from './components/Table/Table';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
        row: 0,
        column: 0,
        color: "whitesmoke",
        changeToColor: "whitesmoke"
    }  
}
  handleAddRow = () => {
    let col = this.state.column;
    if (col === 0){
      col = 1;
    }
    this.setState({
        row: this.state.row +1,
        column : col 
    })
  }

  handleAddColumn = () => {
    let ro = this.state.row;
    if (ro === 0){
      ro = 1;
    }
    this.setState({
        column: this.state.column +1,
        row : ro
    })
    console.log(this.state.column);
  }

  handleRemoveRow = () => {
    if(this.state.row === 0) {
      return;
    }
    this.setState ({
      row: this.state.row -1
    })
    
  }

  handleRemoveColumn = () => {
    if(this.state.column === 0) {
      return;
    }
    this.setState ({
      column: this.state.column -1
    })
    
  }

  changeColor = event =>{
    this.setState({
        changeToColor : event.target.value
    })
  }

  returnColor = () =>{
    return this.state.changeToColor;
  }

  render () {
    return (
    <div className="App">
      <header className="App-header">
        <h2>Pixelate</h2>
        <NavBar changeColor = {this.changeColor} addRow = {this.handleAddRow} addColumn = {this.handleAddColumn} removeRow = {this.handleRemoveRow} removeCol = {this.handleRemoveColumn}/>
      </header>
      <div className = "main-table">
        <Table row = {this.state.row} column = {this.state.column} color = {this.state.color} changeColor = {this.returnColor}/>
      </div>
    </div>
    
    );
  }
}
export default App;
