import { hashSearch, useHashKey } from "../../../hooks/useHashTable"
import styles from "./styles.module.css"

export default function SearchBar(props) {
    const handleClick = () => {
        const key = useHashKey(props.searchBarValue)
        const contact = hashSearch(props.hashTable, key)
        props.setSearchBarValue("")
        props.setSelectedContact(contact)
        props.setScreen("contact-screen")
    }

    return (
        <div className={styles.wraper}>
            <input 
                className={styles.input} 
                type="text"
                value={props.searchBarValue}
                onChange={(ev) => props.setSearchBarValue(ev.target.value)}
                placeholder="Buscar contato..."
            ></input>
            <svg 
                className={styles.icon}
                onClick={handleClick}
                xmlns="http://www.w3.org/2000/svg" 
                x="0px" 
                y="0px" 
                width="100" 
                height="100" 
                viewBox="0 0 50 50"
            >
                <path d="M 21 3 C 11.622998 3 4 10.623005 4 20 C 4 29.376995 11.622998 37 21 37 C 24.712383 37 28.139151 35.791079 30.9375 33.765625 L 44.085938 46.914062 L 46.914062 44.085938 L 33.886719 31.058594 C 36.443536 28.083 38 24.223631 38 20 C 38 10.623005 30.377002 3 21 3 z M 21 5 C 29.296122 5 36 11.703883 36 20 C 36 28.296117 29.296122 35 21 35 C 12.703878 35 6 28.296117 6 20 C 6 11.703883 12.703878 5 21 5 z"></path>
            </svg>
            <svg 
                onClick={() => props.setScreen("edit-screen")} 
                className={styles.icon} 
                xmlns="http://www.w3.org/2000/svg" 
                x="0px" 
                y="0px" 
                width="100" 
                height="100" 
                viewBox="0 0 50 50"
            >
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
            </svg>
        </div>
    )
}