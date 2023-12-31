import './styles.css'

export default function TextInput(props){
    return(
    <input 
        onChange={props.onTextChange} 
        type="search"
        className="cs_input"
        value={props.searchText}
    />
    )
}