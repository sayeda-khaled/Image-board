import { Component } from 'react';

class ImageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      caption: '',
      url: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({[evt.target.name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addImage(this.state);
    this.setState({
      caption: '',
      url: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

      <label>
        Image URL:
        <input name="url" onChange={this.handleChange} value={this.state.url}/>
      </label>

        <label>
          Image Caption:
          <textarea name="caption" onChange={this.handleChange} value={this.state.caption} />
        </label>
        <button type="submit">Add image</button>
      </form>
    );
  }
}

export default ImageForm
