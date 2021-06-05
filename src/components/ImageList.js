import { Component } from 'react';




class ImageList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {

const listItems = this.props.images.map((image, index) =>(
<div key={index}>
  <img src={image.url}></img>
  <p>{image.caption}</p>
</div>
));
    return (
      <>
      <div>

        <div>{listItems}</div>


      </div>
      </>
    );
  }
}

export default ImageList
