import Layout from "@/components/layout"
import News from "@/components/news"
import styles from '../../styles/products.module.css'
import Image from "next/image"
function Ski() {
    return (
        <Layout
        title={'Маски за ски с корекция'}
        description={'Изработка на маски за ски с корекция'}
        >
            <main className="main">
                <div className={`contenedor ${styles.contenido}`}>
                    <div>
                        <h1>Маски за ски с корекция</h1>
                        <p>Ние предлагаме универсална вложка за лещи с рецепта ( за деца и възрастни + лещи с рецепта). Подходящи за почти всички ски очила, очила за сняг, мотоциклети и мотокрос защитни очила и дори очила за пейнтбол.</p>
                    <p className={styles.uppercase}>ПОДХОДЯЩ ЗА ВЪЗРАСТНИ И ДЕЦА</p>
                    <p>Разходи само за малка част от цената на обикновените ски очила / очила за сноуборд / очила за мотокрос.</p>
                    <p>Преобразува любимите ви ски очила в очила с корекция за секунди.</p>
                    <p>Умно проектираната вложка приляга плътно зад вашите ски очила, за да не се отлепя, когато сте в действие.</p>
                    <p>Бързо поставяне или освобождаване, за да можете да го използвате за различните си  очила.</p>
                    <p>Подходящ за ски очила Oakley, Smith, Anon, Bolle, Abom, Cebe и много други марки.</p>
                    <p className={styles.uppercase}>УСТОЙЧИВ МАТЕРИАЛ</p>
                    <p>Рамка: TR90  Материал  силно удароустойчив</p>
                    <p>Лещи: Поликарбонат или материал CR39</p>
                    <p className={styles.uppercase}>Предписание</p>
                    <p>Избор между  CR39 или леки, удароустойчиви поликарбонатни лещи, направени по ваша рецепта.</p>
                    <p>Предлагат се с монофокални,прогресивни и бифокални  лещи.</p>
                    <p>Ако вашата рецепта се промени в бъдеще, просто поставяме нови лещи във вашата вложка</p>
                     <div className={styles.image_horizontal}>
                            <div className={styles.image_flex}>
                                <Image src={'/img/products/ski/fig_1.jpg'} width={400} height={300} alt={'Маски за ски с корекция Фигура 1'} />
                                <p>Фиг.1</p>
                            </div>
                            <div className={styles.image_flex}>
                                <Image src={'/img/products/ski/fig_2.jpg'} width={400} height={300} alt={'Маски за ски с корекция Фигура 2'} />
                                <p>Фиг.2</p>
                            </div>
                            <div className={styles.image_flex}>
                                <Image src={'/img/products/ski/fig_3.jpg'} width={400} height={300} alt={'Маски за ски с корекция Фигура 3'} />
                                <p>Фиг.3</p>
                            </div>
                            <div className={styles.image_flex}>
                                <Image src={'/img/products/ski/fig_4.jpg'} width={400} height={300} alt={'Маски за ски с корекция Фигура 4'} />
                                <p>Фиг.4</p>
                            </div>
                        </div>
                    </div>

                   

                    <News />
                </div>
            </main>
        </Layout>

    )
}

export default Ski