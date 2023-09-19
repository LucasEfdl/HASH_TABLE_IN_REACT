import Button from "../buttonGreen";
import ContactList from "./contactList";
import SearchBar from "./searchBar";

import styles from "./styles.module.css"

export default function MainMenur(props) {
    
    const exportarContatos = () => {
        console.log("Hello wordl")
    }

    return (
        <div className={styles.mainMenur}>
            <SearchBar
                setScreen={props.setScreen}
                searchBarValue={props.searchBarValue}
                setSearchBarValue={props.setSearchBarValue}
                setSelectedContact={props.setSelectedContact}
                setFormData={props.setFormData}
                hashTable={props.hashTable}
                setEditButton={props.setEditButton}
            />
            <ContactList
                setSelectedContact={props.setSelectedContact}
                setEditButton={props.setEditButton}
                hashTable={props.hashTable}
                setScreen={props.setScreen}
            />
            <Button 
                func={exportarContatos}
            >
                Exportar Contatos
            </Button>
        </div>
        
    )
}