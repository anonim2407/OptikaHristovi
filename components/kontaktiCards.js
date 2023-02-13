import React from 'react'
import Image from 'next/image'
import styles from '../styles/centrove.module.css'
const KontaktiCards = ({text_map, text_tel}) => {
  return (
    <div className={styles.card}>
      <Image src={'/img/icon_map.png'} width={40} height={40} alt={'Image Map'}/>
      <p>{text_map}</p>
      <Image src={'/img/icon_ringer.png'} width={40} height={40} alt={'Image Ringer'}/>
      <p>{text_tel}</p>
    </div>
  )
}

export default KontaktiCards
