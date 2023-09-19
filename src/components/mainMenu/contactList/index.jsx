import style from "./styles.module.css"

export default function ContactList(props) {
    

    return (
        <div className={style.wraper}>
            {props.hashTable.map((contact) => {
                if(contact != null) {
                    return (
                        <h3 
                            className={style.name}
                            onClick={() => {
                                console.log(props.hashTable);
                                props.setSelectedContact(contact)
                                props.setScreen("contact-screen")
                            }} 
                        >
                            {contact.name}
                        </h3>
                    )
                }
            })}
        </div>
    )
}