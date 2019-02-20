import React from "react"
import "../styling/Form.css"

class Form extends React.Component {
  state = {
    name: "",
    email: "",
    // subject: "",
    message: ""
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }

    fetch("http://localhost:3000/api/v1/contacts", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({data})
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log(err))

    this.setState({
      name: "",
      email: "",
      message: ""
    })
  }

  render() {
    return (
      <div className="ui form" onSubmit={e => this.handleSubmit(e)}>
        <div className="four wide field">
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleOnChange(e)} />
        </div>

        <div className="four wide field">
          <label>Email</label>
          <input type="text" name="email" value={this.state.email} onChange={e => this.handleOnChange(e)} />
        </div>

        <div className="four wide field">
          <label>Message</label>
          <textarea name="message" value={this.state.message} onChange={e => this.handleOnChange(e)}></textarea>
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

// <div className="four wide field">
//   <label>Subject</label>
//   <input type="text" name="subject" value={this.state.subject} onChange={this.handleOnChange} />
// </div>
