import React from 'react'
import Image from 'next/image'
import styles from '../styles/index.module.css'
const Cards = ({img,text1,text11,text2,text22}) => {
  return (
    <article className={styles.card}>
      <Image src={`/img/${img}`} width={35} height={0} alt={`Image ${img}`}/>
      <p className={styles.bold}>Първи център</p>
      <p>{text1}</p>
      <p style={{margin:0}}>{text11}</p>
      <p className={styles.bold}>Втори център</p>
      <p>{text2}</p>
      <p style={{margin:0}}>{text22}</p>
    </article>
  )
}

export default Cards
