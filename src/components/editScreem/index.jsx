import Button from "../buttonGreen"
import InputText from "../inputText"

import { hashInsertion, useHashKey } from "../../hooks/useHashTable"

import styles from "./styles.module.css"

export default function EditScreem(props) {
    
    const handleInputChange = (e) => {
        const {name, value} = e.target
        props.setFormData({
            ...(props.formData),
            [name]: value,
        })
    }

    const handleSubmit = () => {
        const key = useHashKey(props.formData.email)
        hashInsertion(props.hashTable, props.formData, key)
        props.setFormData({
            name: '',
            email: '',
            phone: '',
        })
        props.setScreen("home-screen")
    }

    return (
        <div className={styles.wraper}>
            <div>
                <InputText 
                    placeholder={props.name} 
                    name={"name"} 
                    value={props.formData.name} 
                    inputChange={handleInputChange}
                />
                <InputText 
                    placeholder={props.email}
                    name={"email"}
                    value={props.formData.email}
                    inputChange={handleInputChange}
                
                />
                <InputText 
                    placeholder={props.phone}
                    name="phone"
                    value={props.formData.phone}
                    inputChange={handleInputChange}
                />
                <div>
                    <Button 
                        func={handleSubmit}
                    >
                        Salvar
                    </Button>
                </div>
            </div>
        </div>
    )
}
