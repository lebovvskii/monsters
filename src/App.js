import { useState, useEffect    } from 'react';
import './App.css';
import './components/card-list/card-list.component'
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

const App = () => {

    const [searchField, setSearchField] = useState('')
    const [monsters, setMonters] = useState([])
    const URL = 'https://jsonplaceholder.typicode.com/users';
     

    useEffect(() => {
        console.log('effect');
        fetch(URL)
            .then(response => response.json())
            .then((users) => setMonters(users))
    }, []) 

    const filteredMonsters = monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchField )
    })   
    
    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase()
        setSearchField(searchFieldString)     
    }

    return (
        <div className='App'>
            <h1 className="app-title">Monsters List</h1>    
            <SearchBox 
                onChangeHandler={onSearchChange}
                placeholder="search monsters"
                className="monsters-search-box"
            />
            <CardList monsters={filteredMonsters}/>
        </div>
    )
}  
// class App extends Component {
//     constructor() {
//         super();
         
//         this.state = {
//             monsters: [],
//             searchField: ''
//         }
//         this.URL = 'https://jsonplaceholder.typicode.com/users'
//     }

//     onSearchChange = (event) => {
//         const searchField = event.target.value.toLowerCase()    
//         this.setState(() => {
//             return { searchField }
//         })
//     }

//     componentDidMount() {
//            

//     }     

//     render() {
//         const { monsters, searchField } = this.state;
//         const { onSearchChange } = this
//         const filteredMonsters = monsters.filter((monster) => {
//             return monster.name.toLowerCase().includes(searchField )
//         })   
//         return(
//             <div className='App'>
//                 <h1 className="app-title">Monsters List</h1>
//                 <SearchBox onChangeHandler={onSearchChange} placeholder="search monsters" className="monsters-search-box"/>
//                 <CardList monsters={filteredMonsters} /> 
//             </div>
//         );
//     }
// }

export default App;
