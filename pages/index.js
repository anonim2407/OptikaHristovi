
import Layout from '@/components/layout'
import styles from '../styles/index.module.css'
import Link from 'next/link'
import Cards from '@/components/cards'
import News from '@/components/news'
import Oferti from '@/components/oferti'
import TextoOferta from '@/components/textoOferta'

export default function Home() {
  // if (typeof window !== 'undefined') {

  //   window.addEventListener('DOMContentLoaded', function () {
  //    new WOW().init()
  //   })

  // }
  return (
    <>
      <Layout
        title={'Начало'}
        description='В Очен център – Христови се извършва адаптирането
            на прогресивни стъкла за очила, на специализирани офис-стъкла,
            изписване и напасване на средства за „слабо зрение“(low vision),
            поставяне на специални терапевтични филтърни стъкла за различни
            очни заболявания, очни упражнения за деца с кривогледство или
            „мързеливо око“, изработване на специализирани очила за стоматология
            и микрохирургия, изработване на леководолазни и ски маски с
            необходимата корекция.'
      >
        <div className={`main ${styles.header_imagen}`}>
          <div className={`contenedor ${styles.contenido_header_imagen}`}>
            <TextoOferta />
            <Link legacyBehavior href={'/kontakti'}><a>Към контакти</a></Link>
          </div>
        </div>

        <main className={styles.main}>
          <section className={`contenedor ${styles.cards} wow animate__animated animate__fadeInUp `}>
            <Cards
              img={'icon_map.png'}
              text1={'Варна ул.“Георги Бенковски“ №50'}
              text2={'Варна ул.“Дрин“ № 11'}
            />
            <Cards
              img={'icon_time.png'}
              text1={'Работно време(зимно): 9:30 – 18:30'}
              text11={' Събота: 10:00 – 14:30'}
              text2={'Работно време(зимно): 9:30 – 18:30 '}
              text22={'Събота: почивен ден'}
            />
            <Cards
              img={'icon_ringer.png'}
              text1={'тел. 052/606 085; '}
              text11={'0899 572 787'}
              text2={`тел. 052/696 500;`}
              text22={'0884 25 96 55'}
            />
          </section>



          <section className={`contenedor  ${styles.contenido_principal} `}>

            <div className={styles.principal_fondos}>
              <Link href={'products/progresivni_ochila'}>
                <div className={styles.image_box}>
                  <div className={`${styles.image} ${styles.img1}`}>
                    <h3>Прогресивни очила</h3>
                  </div>
                </div>
              </Link>

              <div className={styles.grid_images}>
                <Link href={'products/kontaktni_leshti'}>
                  <div className={styles.image_box}>
                    <div className={`${styles.image} ${styles.img2}`}>
                      <h3>Контактни лещи</h3>
                    </div>
                  </div>
                </Link>

                <Link href={'products/kontrol_na_kysogledstvo'}>
                  <div className={styles.image_box}>
                    <div className={`${styles.image} ${styles.img3}`}>
                      <h3>Контрол на късогледство</h3>
                    </div>
                  </div>
                </Link>
              </div>


            </div>

            <News />
          </section>
        </main>


      </Layout >
    </>

  )
}
