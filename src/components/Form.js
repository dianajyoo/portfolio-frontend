import React from "react"
import "../styling/Form.css"

class Form extends React.Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div className="ui form">
        <div className="four wide field">
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} />
        </div>

        <div className="four wide field">
          <label>Email</label>
          <input type="text" name="email" value={this.state.email} onChange={this.handleOnChange} />
        </div>

        <div className="four wide field">
          <label>Subject</label>
          <input type="text" name="subject" value={this.state.subject} onChange={this.handleOnChange} />
        </div>

        <div className="four wide field">
          <label>Message</label>
          <textarea name="message" value={this.state.message} onChange={this.handleOnChange}></textarea>
        </div>

        <button className="ui basic button">
          <i className="paper plane icon"></i>
          Send
        </button>
      </div>
    )
  }
}

export default Form
