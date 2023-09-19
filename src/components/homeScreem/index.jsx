import styles from "./styles.module.css";

export default function HomeScreem() {

    return (
        <div className={styles.wraper}>
            <h2>Bem vindo à sua agenda!</h2>
            <p>Selecione um conato para mais informações</p>
            <div 
                className={styles.info}
            >
                <p>
                    Developers: 
                    <a 
                        href="https://github.com/LucasEfdl" 
                        target="blank"
                    >   
                        Lucas Emanuel
                    </a> 
                    and 
                    <a 
                        href="https://github.com/murilofontes1" 
                        target="blank"
                    >
                        Murilo Fontes
                    </a>   
                </p>
            </div>
        </div>
    )
}