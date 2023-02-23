import React from 'react'
import styles from '../styles/textoOferta.module.css'
const TextoOferta = () => {
    return (
        <div className={styles.contenido}>
            <div className={styles.ap1}>
                <p>-29%</p>
            </div>
            <div className={styles.texto}>
                <p className={styles.ap2}>НАМАЛЕНИЕ</p>
                <p className={styles.ap3}>на всички</p>
                <p className={styles.ap4}>ДИОПТРИНЧНИ</p>
                <p className={styles.ap4}>СТЪКЛА</p>
                <p className={styles.ap5}>от 01.02.2023 до 28.02.2023</p>
            </div>
        </div>
    )
}

export default TextoOferta
