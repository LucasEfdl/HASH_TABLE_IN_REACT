import styles from "./styles.module.css"

export default function InputText(prop) {
    return (
        <input 
            className={styles.wraper} 
            type="text"
            placeholder={prop.placeholder} 
            name={prop.name}
            value={prop.value}
            onChange={prop.inputChange} 
        />
    )
}