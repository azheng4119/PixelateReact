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
        color: "black",
        changeToColor: "black"
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
        <h1>Pixelate</h1>
        <NavBar changeColor = {this.changeColor} addRow = {this.handleAddRow} addColumn = {this.handleAddColumn}/>
      </header>
      <Table row = {this.state.row} column = {this.state.column} color = {this.state.color} changeColor = {this.state.changeToColor}/>
    </div>
    
    );
  }
}
export default App;
