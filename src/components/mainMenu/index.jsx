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
                screen={props.screen} 
                setScreen={props.setScreen}
            />
            <ContactList
                selectedContact={props.selectedContact}
                setSelectedContact={props.setSelectedContact}
                hashTable={props.hashTable} 
                screen={props.screen} 
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