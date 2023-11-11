import { Component } from "react";
import './search-box.styles.css'

export class SearchBox extends Component { 
    render() {
        return(
            <input
                type="search"
                onChange={this.props.onChangeHandler}
                placeholder={this.props.placeholder}
                className={`search-box ${this.props.className}`}
            /> 
        )
    }
}