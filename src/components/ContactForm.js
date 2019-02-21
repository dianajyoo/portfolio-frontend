import React from "react"
import { connect } from "react-redux"
import { submitContactRequest } from "../store/actions/contactActions"
import "../styling/Form.css"

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
  }

  clearState = () => {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    })
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.submitContactRequest("api/v1/contacts", this.state)
    this.clearState()
  }

  render() {
    return (
      <form className="ui form" onSubmit={e => this.handleSubmit(e)}>
        <div className="four wide field">
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleOnChange(e)} />
        </div>

        <div className="four wide field">
          <label>Email</label>
          <input type="text" name="email" value={this.state.email} onChange={e => this.handleOnChange(e)} />
        </div>

        <div className="four wide field">
          <label>Subject</label>
          <input type="text" name="subject" value={this.state.subject} onChange={e => this.handleOnChange(e)} />
        </div>

        <div className="four wide field">
          <label>Message</label>
          <textarea name="message" value={this.state.message} onChange={e => this.handleOnChange(e)}></textarea>
        </div>

        <button className="ui basic button">
          <i className="paper plane icon"></i>
          Send
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitContactRequest: (url, data) => dispatch(submitContactRequest(url, data))
  }
}


export default connect(null, mapDispatchToProps)(ContactForm)
