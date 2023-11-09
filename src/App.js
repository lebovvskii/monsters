import { Component } from 'react'
import './App.css';
import './components/card-list/card-list.component'
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {
    constructor() {
        super();
         
        this.state = {
            monsters: [],
            searchField: ''
        }
        this.URL = 'https://jsonplaceholder.typicode.com/users'
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLowerCase()    
        this.setState(() => {
            return { searchField }
        })
    }

    componentDidMount() {
        fetch(this.URL)
            .then(response => response.json())
            .then((users) => this.setState(()=> {
                return{ monsters: users}
            }))

    }     

    render() {
        const { monsters, searchField } = this.state;
        const { onSearchChange } = this
        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField )
        })
        return(
            <div className='App'>
                <SearchBox onChangeHandler={onSearchChange} placeholder="search monsters"/>
                <CardList monsters={filteredMonsters}/> 
            </div>
        );
    }
}

export default App;
