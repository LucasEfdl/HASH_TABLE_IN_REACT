import  styles  from "./styles.module.css";

export default function ButtonRed(prop) {


    return (
        <button 
            className={styles.wraper} 
            onClick={prop.func}
        >
            {prop.children}
        </button>
    )
}