import Layout from "@/components/layout"
import News from "@/components/news"
import styles from '../../styles/products.module.css'
import Image from "next/image"


function Stomatologichni() {



    return (
        <Layout
        title={'Стоматологични/ Хирургични очила'}
        description={'Изработка на Стоматологични/ Хирургични очила'}
        >
            <main className="main">
                <div className={`contenedor ${styles.contenido}`}>
                    <div>
                        <h1>Стоматологични/ Хирургични очила</h1>
                        <p className={`${styles.bold} ${styles.uppercase}`}>ПОВИШЕТЕ ПРЕЦИЗНОСТТА НА РАБОТАТА СИ</p>
                        <p>Увеличителните очила осигуряват отлична диагностика и лечение. Повишават качеството на работа на клинициста и същевременно  гарантират правилна позиция на тялото на практикуващия лекар.</p>
                        <p>Предлаганите увеличителни системи от  Очен център – Христови са  галилееви  и кеплерови  оптични системи с увеличение от  2.5 х, 3.5х, 4.5х и 6 х, както и различен дизайн на рамките. Предназначени за стоматолози, съдови хирурзи и други специалисти които се нуждаят в работата си от големи увеличения.</p>
                        <div className={styles.image_flex}>
                            <Image src={'/img/products/stomatologichni/fig_1.jpg'} width={500} height={300} alt={'Прогресивни очила Фигура 1'} />
                        </div>
                        <p>Защо  да изберем работа с увеличителни телескопични очила</p>
                        <p>Предимствата  при използването са:</p>
                        <ul className={styles.list}>
                            <li>осезаемо намаляване на напрежението в очите;</li>
                            <li>индивидуализирана работа на дистанция, подобряваща позицията на тялото и осигуряваща по-голям комфорт при работа;</li>
                            <li>по-голяма прецизност ефективност и точност при работа;</li>
                            <li>по-голяма удовлетвореност на пациента.</li>
                        </ul>
                        <br></br>
                        <p className={`${styles.bold} ${styles.uppercase}`}>Техническа спецификация</p>
                        <div className={styles.image_flex}>
                            <Image src={'/img/products/stomatologichni/grafico_1.png'} width={1000} height={1000} alt={'Прогресивни очила Фигура 1'} />
                        </div>

                        <div className={styles.image_flex}>
                            <Image src={'/img/products/stomatologichni/grafico_2.png'} width={1000} height={1000} alt={'Прогресивни очила Фигура 2'} />
                        </div>

                        <div className={styles.image_flex}>
                            <Image src={'/img/products/stomatologichni/grafico_3.png'} width={1000} height={1000} alt={'Прогресивни очила Фигура 3'} />

                        </div>
                        <div className={styles.image_flex}>
                            <Image src={'/img/products/stomatologichni/fig_2.jpg'} width={500} height={300} alt={'Прогресивни очила Фигура 1'} />
                        </div>
                        <div className={styles.image_flex}>
                            <Image src={'/img/products/stomatologichni/grafico_4.png'} width={1000} height={1000} alt={'Прогресивни очила Фигура 3'} />

                        </div>
                        <div className={styles.image_flex}>
                            <Image src={'/img/products/stomatologichni/fig_3.jpg'} width={500} height={300} alt={'Прогресивни очила Фигура 1'} />
                        </div>
                        <div className={styles.image_flex}>
                            <Image src={'/img/products/stomatologichni/grafico_5.png'} width={600} height={1000} alt={'Прогресивни очила Фигура 3'} />

                        </div>
                        <p>ПРИЛОЖЕНИЕ- Индивидуално изработените хирургични очила с монтирано на тях увеличения могат да бъдат използвани за наблюдение на много фини детайли по време на  хирургична интервенция, запазвайки оптималната позиция на тялото.</p>
                        <p>Увеличителната система, вградена в стъклата на очилата, са позиционирани спрямо  а употреба спрямо персоналните изисквания на оператора ( междузенично разстояние, диоптрична корекция и т.н.), осигурявайки  максимален комфорт по време на работа .</p>
                        <div className={styles.image_flex}>
                            <Image src={'/img/products/stomatologichni/fig_4.jpg'} width={500} height={1000} alt={'Прогресивни очила Фигура 3'} />

                        </div>

                        <p>Телескопичните очила са приложими в областта на микрохирургията, зъботехниката, естетичната и съдова хирургия, както и при сърдечната хирургия.</p>
                        <p>Не се препоръчва  употребата на тези очила в неврохирургията и при други апликации,  изискващи висока стабилност на изображението, тъй като това е невъзможно за постигане  с устройства , монтирани на главата на оператора.</p>
                    </div>

                    <News />
                </div>
            </main>
        </Layout>

    )
}

export default Stomatologichni