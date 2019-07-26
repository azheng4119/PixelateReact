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
    this.setState({
        row: this.state.row +1
    })
    console.log(this.state.row);
  }

  handleAddColumn = () => {
    this.setState({
        column: this.state.column +1
    })
    console.log(this.state.column);
  }

  render () {
    return (
    <div className="App">
      <header className="App-header">
        <h1>Pixelate</h1>
        <NavBar addRow = {this.handleAddRow} addColumn = {this.handleAddColumn}/>
        <Table row = {this.state.row} column = {this.state.column}/>
      </header>
    </div>
    );
  }
}
export default App;
