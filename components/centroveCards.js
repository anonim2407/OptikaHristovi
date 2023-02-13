import React from 'react'
import Image from 'next/image'
import styles from '../styles/centrove.module.css'
const CentroveCards = ({text_map, text_tel, text_time, map_href}) => {
  return (
    <div className={styles.card}>
      <Image src={'/img/icon_map.png'} width={40} height={40}/>
      <p>{text_map}</p>
      <Image src={'/img/icon_ringer.png'} width={40} height={40}/>
      <p>{text_tel}</p>
      <Image src={'/img/icon_time.png'} width={40} height={40}/>
      <p>{text_time}</p>
      <iframe loading={'lazy'} src={map_href}  width={500} height={450}></iframe>
    </div>
  )
}

export default CentroveCards
