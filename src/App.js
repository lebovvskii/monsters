import { Component } from 'react'
import './App.css';
class App extends Component {
    constructor() {
        super();
         
        this.state = {
            monsters: []
        }
        this.URL = 'https://jsonplaceholder.typicode.com/users'
    }

    componentDidMount() {
        fetch(this.URL)
            .then(response => response.json())
            .then((users) => this.setState(()=> {
                return{ monsters: users}
            }))
            
    }

    render() {
        return(
            <div className='App'>
                {this.state.monsters.map((monster) => {
                    return(
                        <div key={monster.id}>
                            <h1>{monster.name}</h1>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default App;
