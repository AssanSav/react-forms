import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <form  onSubmit={this.props.handleSubmit}>
        <input id="reset" type="text" name="firstName" onChange={this.props.handleOnChange} value={this.props.formData.firstName} />
        <input id="reset" type="text" name="lastName" onChange={this.props.handleOnChange} value={this.props.formData.lastName} />
        <input type="submit" />
      </form>
    )
  }
}
