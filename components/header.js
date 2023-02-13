import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/header.module.css'
import NavProducts from './nav_products'
function Header() {
  const [navActive, setNavActive] = useState(null);
  const [subNavActive, setSubNavActive] = useState(null);
  return (
    <>

      <header className={styles.header}>
        <div className={styles.subheader}>
          <div className={`contenedor ${styles.barra}`}>
            <div className={styles.icon_nav} onClick={() => { setNavActive(!navActive), setSubNavActive(subNavActive) }}>
              {
                !navActive ?
                  <Image src={'/img/icon_menu_open.png'} width={35} height={0} alt={'Navbar Image Open'}/>
                  :
                  <Image src={'/img/icon_menu_close.png'} width={35} height={0} alt={'Navbar Image Close'}/>
              }
            </div>



            <Link href={'/'} className={styles.logo}>
              <Image src={'/img/logo.svg'} width={250} height={100} alt={'Logo Image'} />
            </Link>
            <div className={styles.redes}>
              <Link href={'https://www.facebook.com/hristovioptic'}>
                <Image src={'/img/icon_facebook.png'} width={35} height={0} alt={'Facebook Image'} />
              </Link>
              <Link href={'#'}>
                <Image src={'/img/icon_instagram.png'} width={35} height={0} alt={'Instagram Image'} />
              </Link>

            </div>
          </div>
        </div>






        <nav className={`${styles.nav} ${navActive ? styles.show : ''}`}>
          <h3>Меню</h3>
          <ul className={styles.primary_list}>
            <li><Link href="/">Начало</Link></li>
            <li><Link href="/za_nas">За нас</Link></li>
            <li><Link href="/centrove">Очни центрове</Link></li>
            <li className={styles.nav_desplegable} onClick={() => setSubNavActive(!subNavActive)}>
              Продукти и услуги
              {
                !subNavActive ?
                  <Image src={'/img/icons_chevron_down.png'} width={15} height={0} alt={'Chevron Image Open'} />
                  :
                  <Image src={'/img/icons_chevron_up.png'} width={15} height={0} alt={'Chevron Image Close'} />
              }

            </li>
            <ul className={`${styles.subnav} ${subNavActive ? styles.show : ''}`}>
          <NavProducts/>
            </ul>




            <li><Link href="/laboratoriq">Лаборатория</Link></li>
            <li><Link href="/polezni">Полезни</Link></li>
            <li><Link href="/kontakti">Контакти</Link></li>
          </ul>
        </nav>
      </header>


    </>

  )
}

export default Header