import React, { Component } from "react"
import Form from "./Form"
import DisplayData from "./DisplayData"

export default class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            submittedData: []
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.listOfSubmitteddata = this.listOfSubmitteddata.bind(this)
    }
    
    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        let formData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }
        let dataArray = this.state.submittedData.concat(formData)
        this.setState({
            submittedData: dataArray,
            firstName: document.getElementById("reset").value = "",
            lastName: document.getElementById("reset").value = ""  
        })
    }

    listOfSubmitteddata() {
        return this.state.submittedData.map(data => { 
            return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
        })
    }

    render() {
        return (
            <div>
                <Form handleOnChange={this.handleOnChange} formData={this.state} handleSubmit={this.handleSubmit}/>
                <DisplayData listOfSubmitteddata={this.listOfSubmitteddata} />
            </div>
        )
    }
}