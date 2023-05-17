import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      userName: "",
      address: "",
      city: "vadodara",
    };
  }
  changeUsername = (event) => {
    this.setState({ userName: event.target.value });
  };
  changeAddress = (event) => {
    this.setState({ address: event.target.value });
  };
  changeCity = (event) => {
    this.setState({ city: event.target.value });
  };
  getDetails = (event) => {
    alert(`${this.state.userName},${this.state.address},${this.state.city}`);
  };
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <form onSubmit={this.getDetails}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.changeUsername}
            ref={this.inputRef}
          ></input>
          <br></br>
          <br></br>
          <label>Address</label>
          <textarea
            value={this.state.address}
            onChange={this.changeAddress}
          ></textarea>
          <br></br>
          <label>City</label>
          <select
            name="Select City"
            value={this.state.city}
            onChange={this.changeCity}
          >
            <option value="vadodara">Vadodara</option>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="surat">Surat</option>
          </select>
          <br></br>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
