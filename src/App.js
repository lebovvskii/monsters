import { useState, useEffect } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

const App = () => {

    const [searchField, setSearchField] = useState('')
    const [monsters, setMonters] = useState([])
    const [title, setTitle] = useState(' ')
    const URL = 'https://jsonplaceholder.typicode.com/users';
     

    useEffect(() => {
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

    const onTitleChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase()
        setTitle(searchFieldString)     
    }

    return (
        <div className='App'>
            <h1 className="app-title">{title}</h1>    
            <SearchBox 
                onChangeHandler={onSearchChange}
                placeholder="search monsters"
                className="monsters-search-box"
            />
            <br />  
             <SearchBox 
                onChangeHandler={onTitleChange}
                placeholder="title"
                className="title-search-box"
            />
            <CardList monsters={filteredMonsters}/>
        </div>
    )
}  

export default App;
