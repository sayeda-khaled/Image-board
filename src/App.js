import { Component } from 'react';
import './App.css';
import ImageForm from './components/ImageForm.js';
import ImageList from './components/ImageList.js';

// const defaultImages = [
//   {
//     caption: 'Animal image 1',
//     url: 'https://www.randomlists.com/img/animals/deer.webp'
//   },
//   {
//     caption: 'Animal image 2',
//     url: 'https://www.randomlists.com/img/animals/ocelot.webp'
//   },
//   {
//     caption: 'Animal image 3',
//     url: 'https://www.randomlists.com/img/animals/dugong.webp'
//   }
// ]

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      images: [],
    };
    this.addImage = this.addImage.bind(this);
  }

  componentDidMount(){
    this.setState({
    images: [],
    });
  }


  addImage(newEntry){
    let imageCopy=[...this.state.images];
    imageCopy.push(newEntry);
    this.setState({
      images: imageCopy,
    });
  }
  render() {

    return (
      <>
        <ImageForm addImage={this.addImage}/>
        <ImageList images={this.state.images}/>
        <h1> {this.state.name} </h1>
     </>
    );
  }
}



export default App;
