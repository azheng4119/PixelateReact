import React , {Component} from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar/Nav';
import Table from './components/Table/Table';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
        row: 0,
        column: 0
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

  render () {
    return (
    <div className="App">
      <header className="App-header">
        <h1>Pixelate</h1>
        <NavBar addRow = {this.handleAddRow} addColumn = {this.handleAddColumn}/>
      </header>
      <Table row = {this.state.row} column = {this.state.column}/>
    </div>
    );
  }
}
export default App;
