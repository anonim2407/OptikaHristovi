import Layout from "@/components/layout"
import styles from '../styles/kontakti.module.css'
import KontaktiCards from "@/components/kontaktiCards"
import News from "@/components/news"
function Kontakti() {
    return (
        <Layout>
            <main className="main">
                <h1 className='heading'>Контакти</h1>
                <div className={`contenedor ${styles.contenido}`}>

                    <div className={styles.cards}>
                        <KontaktiCards text_map={'Варна ул.“Георги Бенковски“ №50'} text_tel={'тел. 052/606 085; 0899 572 787'} />
                        <KontaktiCards text_map={'Варна ул.“Дрин“ №11'} text_tel={'тел. 052/696 500; 0884 25 96 55'} />
                    </div>
                    <News />
                </div>
            </main>
        </Layout>

    )
}

export default Kontakti