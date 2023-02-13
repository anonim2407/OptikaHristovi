import Layout from "@/components/layout"
import News from "@/components/news"
import styles from '../../styles/products.module.css'
import Image from "next/image"
function Progresivni() {
    return (
        <Layout
        title={'Прогресивни очила'}
        description={'Изработка на прогресивни очила'}
        >
            <main className="main">
                <div className={`contenedor ${styles.contenido}`}>
                    <div>
                        <h1>Прогресивни очила</h1>
                        <p> Прогресивните стъкла (комбинирани стъкла, мултифокални стъкла) способстват за естественото зрение, на което сте се радвали преди началото на пресбиопията (невъзможност и/или затруднения при работа на близки разстояния).</p>
                        <p className={styles.red}>Много от ползващите такива стъкла трудно свикват с тях или изобщо не свикват. Защо е така?</p>
                        <p className={styles.red}>Необходимо е да се направят специализирани тестове за  адаптиране към тези стъкла.</p>
                        <br></br>
                        <p className={styles.bold}>Три стъпки са необходими за успешното напасване на тези стъкла.</p>
                        <p>Първата стъпка е да се направи цялостен очен преглед, за актуализация на диоптрите, да се изследва бинокулярното зрение с определени тестове  включително и наличието на малки хетерофории които да се предпишат при изработване на стъклата.</p>
                        <div className={styles.image_horizontal}>
                            <div className={styles.image_flex}>
                                <Image src={'/img/products/progresivni/fig_1.jpg'} width={400} height={300} alt={'Прогресивни очила Фигура 1'} />
                                <p>Фиг.1</p>
                            </div>
                            <div className={styles.image_flex}>
                                <Image src={'/img/products/progresivni/fig_2.jpg'} width={400} height={300} alt={'Прогресивни очила Фигура 2'} />
                                <p>Фиг.2</p>
                            </div>
                        </div>
                        <p>Задължително трябва да се измери обема на акомодация и съотношението между акомодация и конвергенция за да се определи много точно необходимата добавка (Add) за близко зрение.</p>
                        <div className={styles.image_flex}>
                            <Image src={'/img/products/progresivni/fig_3.jpg'} width={400} height={300} alt={'Прогресивни очила Фигура 3'} />
                            <p>Фиг.3</p>
                        </div>
                        <p>Втората стъпка  е да се подбере спрямо изследванията  и корекцията подходящ  дизайн на прогресивните стъкла. Тези стъкла се произвеждат в множество дизайни съобразени с всички зрителни проблеми (далекогледство, късогледство, астигматизъм и др.)</p>
                        <div className={styles.image_flex}>
                            <Image src={'/img/products/progresivni/fig_4.jpg'} width={400} height={300} alt={'Прогресивни очила Фигура 4'} />
                            <p>Фиг.4</p>
                        </div>
                        <p className={styles.bold}>Третата стъпка към идеално зрение с прогресивните Ви очила е да се вземат индивидуални параметри.</p>
                        <p>Всички тези три стъпки нашите специалисти от <span className={styles.bold}>Очен център – Христови</span> извършват с помощта на високотехнологична апаратура.</p>
                        <p>Потърсете професионален съвет при нас за избор на най –подходящите прогресивни стъкла за вас.</p>
                    </div>

                    <News />
                </div>
            </main>
        </Layout>

    )
}

export default Progresivni