import { Component } from 'react';

class ImageForm extends Component {
  constructor(props){
    super(props);

    
    // this.state = {
    //
    // };

  }
  render() {
    return (
      <>
      <h1>image form</h1>

      <div onClick={this.props.changeName}>Click me</div>
      <div>{this.props.lastName}</div>
      </>
    );
  }
}

export default ImageForm
