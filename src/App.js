import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageForm from './components/ImageForm.js';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      firstName: "Taylor",
      lastName: "WHIT",
    };
    this.changeName = this.changeName.bind(this);
  }

  changeName (){
    let fullName= this.state.firstName + this.state.lastName;
    this.setState({
      name: fullName
    });
  }
  render() {

    return (
      <>

      <ImageForm changeName={this.changeName} lastName={this.state.lastName}/>
      <h1> {this.state.name} </h1>


     </>
    );
  }
}



export default App;
