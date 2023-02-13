import React from 'react'
import Image from 'next/image'
import styles from '../styles/index.module.css'
const Cards = ({img,text1,text2}) => {
  return (
    <article className={styles.card}>
      <Image src={`/img/${img}`} width={35} height={0} alt={`Image ${img}`}/>
      <p className={styles.bold}>Първи център</p>
      <p>{text1}</p>
      <p className={styles.bold}>Втори център</p>
      <p>{text2}</p>
    </article>
  )
}

export default Cards
