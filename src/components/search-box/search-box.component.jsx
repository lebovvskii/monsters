import { Component } from "react";

export class SearchBox extends Component { 
    render() {
        return(
            <input
                type="search"
                onChange={this.props.onChangeHandler}
                placeholder={this.props.placeholder}
            /> 
        )
    }
}