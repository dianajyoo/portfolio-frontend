import React from "react"
import { connect } from "react-redux"
import "../styling/Message.css"

class Message extends React.Component {

  showMessage = () => {
    const { success, error } = this.props
    
    return error ? <div>Error occurred. Please enter valid email address and try again.</div> : success ? <div>Your message has been sent! I will get back to you very soon.</div> : <div></div>
  }

  render() {
    return (
      <div className="message">
        {this.showMessage()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    success: state.contacts.isSuccess,
    error: state.contacts.isError
  }
}

export default connect(mapStateToProps)(Message)