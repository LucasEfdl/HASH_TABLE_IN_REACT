import ButtonGreen from "../buttonGreen";
import ButtonRed from "../buttonRed";

import styles from "./styles.module.css"

import { hashRemoval, useHashKey } from "../../hooks/useHashTable";

export default function ContactScreen(props) {
    
    const handleRemoval = () => {
        const contact = {
            name: props.name,
            email: props.email,
            phone: props.phone
        }
        const key = useHashKey(contact)

        hashRemoval(props.hashTable, contact, key)
        props.setScreen("home-screen")
    }

    return (
        <div className={styles.wraper}>
            <div className={styles.info}>
                <h3>{props.name}</h3>
                <p>{props.email}</p>
                <p>{props.phone}</p>
            </div>
            <div className={styles.btns}>
                <ButtonGreen>Editar</ButtonGreen>
                <ButtonRed func={handleRemoval}>Deletar</ButtonRed>
            </div>
        </div>
    )
}