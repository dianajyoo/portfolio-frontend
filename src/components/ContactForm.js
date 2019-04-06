import React from "react"
import Message from "./Message"
import { connect } from "react-redux"
import { submitContactRequest } from "../store/actions/contactActions"
import "../styling/Form.css"

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    submitted: false
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

    this.setState({
      submitted: true
    })

    this.props.submitContactRequest("api/v1/contacts", this.state)
    this.clearState()
  }

  render() {
    return (
      <div className="form-container">
        <form className="ui massive form" onSubmit={e => this.handleSubmit(e)}>
          <h3>Send me an email</h3>
          <div className="four wide field">
            <input type="text" name="name" value={this.state.name} placeholder="Name" onChange={e => this.handleOnChange(e)} />
          </div>

          <div className="four wide field">
            <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={e => this.handleOnChange(e)} />
          </div>

          <div className="four wide field">
            <input type="text" name="subject" value={this.state.subject} placeholder="Subject" onChange={e => this.handleOnChange(e)} />
          </div>

          <div className="four wide field">
            <textarea name="message" value={this.state.message} placeholder="Message" onChange={e => this.handleOnChange(e)}></textarea>
          </div>

          <button className="massive ui basic button">
            <i className="paper plane icon"></i>
            Send
          </button>
        </form>

        {this.state.submitted ? <Message /> : null}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitContactRequest: (url, data) => dispatch(submitContactRequest(url, data))
  }
}

export default connect(null, mapDispatchToProps)(ContactForm)
