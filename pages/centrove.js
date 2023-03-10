import Layout from "@/components/layout"
import styles from '../styles/centrove.module.css'
import CentroveCards from "@/components/centroveCards"
import Galeria from "@/components/galeria"
import Image from "next/image"
function Centrove() {
  return (
    <Layout
      title={'Очни центрове'}
      description={'Местоложение на очни центрове'}
    >
      <main className="main">
        <div className="contenedor">
          <h1 className="heading">Очни центрове</h1>
          <div className={styles.contenido}>
            <div className={styles.cards}>
              <CentroveCards
                text_map={'Варна ул.“Георги Бенковски“ № 50'}
                text_tel={'тел. 052/606 085; 0899 572 787'}
                text_time={'Работно време(зимно): 9:30 – 18:30 Събота: 10:00 – 14:30'}
                map_href={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.064165262855!2d27.904129115238057!3d43.20814348911349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4538a0568cc71%3A0x2c939d403936f1ad!2sul.%20%22Georgi%20Benkovski%22%2050%2C%209000%20Hristo%20Botev%2C%20Varna%2C%20Bulgaria!5e0!3m2!1ses!2ses!4v1673539825284!5m2!1ses!2ses'}
              />
              <CentroveCards
                text_map={'Варна ул.“Дрин“ № 11'}
                text_tel={'тел. 052/696 500; 0884 25 96 55'}
                text_time={'Работно време(зимно): 9:30 – 18:30 Събота: почивен ден'}
                map_href={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.962885204877!2d27.905522115238156!3d43.21026778897724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a45475d642d0d7%3A0xbe996bec05d941fa!2sul.%20%22Drin%22%2011%2C%209000%20Hristo%20Botev%2C%20Varna%2C%20Bulgaria!5e0!3m2!1ses!2ses!4v1673539978262!5m2!1ses!2ses'}
              />
            </div>
            <div className={styles.center}>
              <h2 className='heading'>Очен център - Георги Бенковски 50</h2>
              <div className={styles.center_image}>
                <div>
                  <Image
                    src={'/img/benkovski_mag/2.jpg'}
                    width={500}
                    height={500}
                    alt={'Снимка Магазин Бенковски 1'}
                    priority
                  />
                </div>
                <div>
                  <Image
                    src={'/img/benkovski_mag/1.jpg'}
                    width={500}
                    height={500}
                    alt={'Снимка Магазин Бенковски 2'}
                    priority
                  />
                </div>
                <div>
                  <Image
                    src={'/img/benkovski_mag/3.jpg'}
                    width={500}
                    height={500}
                    alt={'Снимка Магазин Бенковски 3'}
                    priority
                  />
                </div>
              </div>

              <div className={styles.cabinets} id={'width'}>
                <h3 className='subheading'>Кабинет 1</h3>
                <Galeria href={'/img/benkovski_k1/'} cantidad={7} alt={'Бенковски Кабинет 1 _'} />
                <h3 className='subheading'>Кабинет 2</h3>
                <Galeria href={'/img/benkovski_k2/'} cantidad={6} alt={'Бенковски Кабинет 2 _'}/>
              </div>

            </div>
            <div className={styles.center}>
              <h2 className='heading'>Очен център - Дрин 11</h2>
              <div className={styles.center_image}>
                <div>
                  <Image
                    src={'/img/drin_mag/1.jpg'}
                    width={500}
                    height={500}
                    alt={'Снимка Магазин Дрин 1'}
                    priority
                  />
                </div>
                <div>
                  <Image
                    src={'/img/drin_mag/2.jpg'}
                    width={500}
                    height={500}
                    alt={'Снимка Магазин Дрин 2'}
                    priority
                  />
                </div>
                <div>
                  <Image
                    src={'/img/drin_mag/3.jpg'}
                    width={500}
                    height={500}
                    alt={'Снимка Магазин Дрин 3'}
                    priority
                  />
                </div>
                <div>
                  <Image
                    src={'/img/drin_mag/4.jpg'}
                    width={500}
                    height={500}
                    alt={'Снимка Магазин Дрин 4'}
                    priority
                  />
                </div>
                <div>
                  <Image
                    src={'/img/drin_mag/5.jpg'}
                    width={500}
                    height={500}
                    alt={'Снимка Магазин Дрин 5'}
                    priority
                  />
                </div>
              
              </div>
              <div className={styles.cabinets} id={'width'}>
                <h3 className='subheading'>Кабинет 1</h3>
                <Galeria href={'/img/drin_k1/'} cantidad={3} alt={'Дрин Кабинет 1 _'} />
              </div>

            </div>
          </div>

        </div>


      </main>

    </Layout>

  )
}

export default Centrove