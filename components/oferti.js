import Image from "next/image"
import styles from '../styles/index.module.css'
const Oferti = () => {
  return (
    <div className={styles.ofertas}>
    <Image src={'/img/oferti/oferta_1.jpg'} width={1000} height={250} alt={'Снимка на офертите'} />
  </div>
  )
}

export default Oferti
