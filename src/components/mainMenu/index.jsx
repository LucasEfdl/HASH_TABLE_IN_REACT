import exportContact from "../../hooks/export";
import ButtonGreen from "../buttonGreen";
import ContactList from "./contactList";
import SearchBar from "./searchBar";

import styles from "./styles.module.css"

export default function MainMenur(props) {
    

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
            <ButtonGreen 
                func={() => exportContact(props.hashTable)}
            >
                Exportar Contatos
            </ButtonGreen>
        </div>
        
    )
}