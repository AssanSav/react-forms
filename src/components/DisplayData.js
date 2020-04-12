import React, { Component } from "react"

export default class DisplayData extends Component {

    render() {
        return (
            <section>
                {this.props.listOfSubmitteddata()}
            </section>
        )
    }
}