import ButtonGreen from "../buttonGreen";
import ButtonRed from "../buttonRed";

import styles from "./styles.module.css"

import { hashRemoval, useHashKey } from "../../hooks/useHashTable";

export default function ContactScreen(props) {
    
    const handleEdit = () => {
        props.setFormData(props.contact)
        props.setScreen("edit-screen")
    }

    const handleRemoval = () => {
        const contact = {
            name: props.name,
            email: props.email,
            phone: props.phone
        }
        const key = useHashKey(contact.email)

        hashRemoval(props.hashTable, contact, key)
        props.setScreen("home-screen")
    }

    return (
        <div className={styles.wraper}>
            <div className={styles.info}>
                <h3>{props.contact.name}</h3>
                <p>{props.contact.email}</p>
                <p>{props.contact.phone}</p>
            </div>
            <div className={styles.btns}>
                <ButtonGreen func={handleEdit}>Editar</ButtonGreen>
                <ButtonRed func={handleRemoval}>Deletar</ButtonRed>
            </div>
        </div>
    )
}