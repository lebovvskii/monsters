import './search-box.styles.css'

export const SearchBox = ({className, placeholder, onChangeHandler}) => (
    <input
        type="search"
        onChange={onChangeHandler}
        placeholder={placeholder}
        className={`search-box ${className}`}
    /> 
)