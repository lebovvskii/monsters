import { Component } from 'react'
import './card.styles.css'

export class Card extends Component {
    render() {
        const { id, email, name } =  this.props.monster
        return(
            <div className="card-container">
                <img
                    alt={`monster ${name}`}
                    src={`https://robohash.org/${id}?set=set2&size=180x180`}
                />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>  
        )
    }
}