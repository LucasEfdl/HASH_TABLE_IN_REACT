import Button from "../buttonGreen"
import InputText from "../inputText"

import { hashInsertion, hashRemoval, useHashKey } from "../../hooks/useHashTable"

import styles from "./styles.module.css"

export default function EditScreem(props) {
    
    const handleInputChange = (e) => {
        const {name, value} = e.target
        props.setFormData({
            ...(props.formData),
            [name]: value,
        })
    }

    const handleSave = () => {
        const key = useHashKey(props.formData.email)
        const result = hashInsertion(props.hashTable, props.formData, key)
        
        props.setFormData({
            hasBeenUsed: false,
            name: '',
            email: '',
            phone: '',
        })

        props.setScreen("home-screen")

        if (result == null) {
            props.setInfo("Esse contato já existe na sua agenda!")
            props.setScreen("info-screen")
        } else if(typeof result == "string") {
            props.setInfo(result)
            props.setScreen("info-screen")
        }
    }

    const handleEdit = () => {
        const oldContact = props.selectedContact
        const newContact = props.formData

        const oldKey = useHashKey(oldContact.email)
        const newKey = useHashKey(newContact.email)
        
        hashRemoval(props.hashTable, oldContact, oldKey)
        hashInsertion(props.hashTable, newContact, newKey)

        props.setScreen("home-screen")
    }

    return (
        <div className={styles.wraper}>
            <div>
                <InputText 
                    placeholder={"Nome..."} 
                    name={"name"} 
                    value={props.formData.name} 
                    inputChange={handleInputChange}
                />
                <InputText 
                    placeholder={"Email..."}
                    name={"email"}
                    value={props.formData.email}
                    inputChange={handleInputChange}
                
                />
                <InputText 
                    placeholder={"Telefone..."}
                    name="phone"
                    value={props.formData.phone}
                    inputChange={handleInputChange}
                />
                <div>
                    {props.editButton == false ? (
                        <Button 
                            func={handleSave}
                        >
                            Salvar
                        </Button>
                    ) : 
                    (
                        <Button 
                            func={handleEdit}
                        >
                            Editar
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}
