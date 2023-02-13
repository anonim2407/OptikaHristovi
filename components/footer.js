import Link from "next/link"
import styles from '../styles/footer.module.css'
import Image from "next/image"
import NavProducts from "./nav_products"
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <div className={styles.menu}>
          <h2 className={styles.title}>Меню</h2>
          <ul>
            <li><Link href="/">Начало</Link></li>
            <li><Link href="/za_nas">За нас</Link></li>
            <li><Link href="/centrove">Очни центрове</Link></li>
            <li><Link href="/laboratoriq">Лаборатория</Link></li>
            <li><Link href="/polezni">Полезни</Link></li>
            <li><Link href="/kontakti">Контакти</Link></li>
          </ul>
        </div>

        <div className={styles.products}>
          <h2 className={styles.title}>Продукти и услуги</h2>
          <ul>
            <NavProducts />
          </ul>
        </div>

        <div className={styles.centers}>
          <h2 className={styles.title}>Очни центрове</h2>
          <p>Варна ул.“Георги Бенковски“ № 50</p>
          <p>тел. 052/606 085; 0899 572 787</p>
          <p>Варна ул.“Дрин“ № 11</p>
          <p>тел. 052/696 500; 0884 25 96 55</p>
        </div>


        <div className={styles.redes}>
          <h2 className={styles.title}>Социални мрежи</h2>
          <Link href={'https://www.facebook.com/hristovioptic'}>
            <Image src={'/img/icon_facebook.png'} width={35} height={0} />
          </Link>
          <Link href={'#'}>
            <Image src={'/img/icon_instagram.png'} width={35} height={0} />
          </Link>
        </div>

      </div>
      <p className={styles.derechos}>{`Авторско право © ${new Date().getFullYear()} Оптика Христови. Всички права запазени.`}</p>
    </footer>
  )
}

export default Footer