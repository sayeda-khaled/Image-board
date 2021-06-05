import { Component } from 'react';

class ImageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value
    });
  }

  handleSubmit(event) {
    this.props.addImage(this.state);
    // event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

      <label>
        Image URL:
        <input name = "url" onChange={this.handleChange} />
      </label>

        <label>
          Image Caption:
          <textarea name = "caption" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ImageForm
