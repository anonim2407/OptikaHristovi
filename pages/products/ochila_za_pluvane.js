import Layout from "@/components/layout"
import News from "@/components/news"
import styles from '../../styles/products.module.css'
import Image from "next/image"
function Pluvane() {
    return (
        <Layout
        title={'Очила за плуване с диоптрична корекция'}
        description={'Изработка на очила за плуване с диоптрична корекция'}
        >
            <main className="main">
                <div className={`contenedor ${styles.contenido}`}>
                    <div>
                        <h1>Очила за плуване с диоптрична корекция</h1>
                        <p>Ние предлагаме очила за плуване с диоптрична  корекция на късогледство, далекогледство и астигматизъм.</p>
                        <div className={styles.image_horizontal}>
                            <div className={styles.image_flex}>
                                <Image src={'/img/products/pluvane/fig_1.png'} width={400} height={300} alt={'Очила за плуване с диоптрична корекция Фигура 1'} />
                                <p>Фиг.1</p>
                            </div>
                            <div className={styles.image_flex}>
                                <Image src={'/img/products/pluvane/fig_2.png'} width={400} height={300} alt={'Очила за плуване с диоптрична корекция Фигура 2'} />
                                <p>Фиг.2</p>
                            </div>
                        </div>
                        <p>Очила за плуване с диоптри в два размера с възможност за три дължини на моста с положителни, отрицателни и астигматични лещи . Материал на лещи е поликарбонат. Силиконова каишка, регулируема по дължина. Комплектът включва удобна кутийка за съхранение и пренасяне на очилата.</p>
                    </div>

                    <News />
                </div>
            </main>
        </Layout>

    )
}

export default Pluvane