import styles from "./styles.module.css"

export default function InfoScreen(props) {
    return(
        <div className={styles.wraper}>
            <h1>{props.children}</h1>
    </div>
    )
}