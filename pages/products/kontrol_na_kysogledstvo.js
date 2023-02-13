import Layout from "@/components/layout"
import News from "@/components/news"
import styles from '../../styles/products.module.css'
import Image from "next/image"
function Kontrol() {
    return (
        <Layout
        title={'Контрол на късогледство'}
        description={'Контрол на късогледство'}
        >
            <main className="main">
                <div className={`contenedor ${styles.contenido}`}>
                    <div>
                        <h1>Контрол на късогледство</h1>
                        <p style={{ margin: '0' }} className={`${styles.bold} ${styles.uppercase}`}>CONTROL MYOPIA</p>
                        <p style={{ margin: '0' }}>решение, което контролира прогресията на късогледството се предлага в Очен център – Христови</p>
                        <p className={`${styles.bold} ${styles.uppercase}`}>СПЕЦИАЛНИ ЛЕЩИ ЗА ЗАБАВЯНЕ НА КЪСОГЛЕДСТВО</p>
                        <p>Миопията е най-често срещаният очен проблем, засягащ 1,5 милиарда души в момента. Проучванията показват, че в бъдеще ще имаме шест милиарда късогледи до 2050 г., което го прави водеща причина за постоянна слепота, увеличавайки риска от глаукома, катаракта и отлепване на ретината.</p>
                        <p>Сега това може да звучи страшно – и всъщност е така, защото досега няма ефективен начин за забавяне развитието на късогледство в ранен стадий. Друго погрешно схващане, което съществува от десетилетия в офталмологичния свят, когато става дума за лечение на късогледство, е, че може просто да се влоши, без да има начин да се спре това.
                            <span className={styles.bold}> Реалността  е, че част от това погрешно схващане се дължи на факта, че винаги са използвани лещи с висок диоптър, които коригират късогледството с агресивен подход, който е доказано неефективен. Всъщност с течение на времето използването на тази стратегия кара очите да страдат от зрителна умора и в крайна сметка това води до влошаване на самото късогледство.</span>
                        </p>
                        <p>Така че, вместо това, се предлага подход, който носи резултати в дългосрочен план – защото правенето на дългосрочни планове, когато става въпрос за късогледство, е от решаващо значение.</p>
                        <p>Имайки предвид това, успяхме да намери решение за подобряване на очното здраве на децата и за предотвратяване на потенциалното въздействие на късогледството върху бъдещия им живот.</p>
                        <p>Името му е <span className={styles.bold}>Control Miopia</span>, дизайн на лещи, който се изработва по много сложни алгоритми и математически изчисления</p>
                        <p>Технологията зад <span className={styles.bold}>Control Miopia</span></p>
                        <p>Изображението по-долу ясно обяснява как работят традиционните лещи за миопия: централната част на изображението се проектира върху ретината, докато периферните части се проектират зад ретината.</p>
                        <div className={styles.image_flex}>
                            <Image src={'/img/products/kontrol/fig_1.png'} width={500} height={300} alt={'Контрол на късогледствои Фигура 1'} />
                            <p>Фиг.1</p>
                        </div>
                        <p>С течение на времето това води до създаване на замъглено изображение в периферната област. Следователно, формата на очната ябълка ще има тенденция да се адаптира към проектираното изображение, причинявайки влошаване на късогледството. С <span className={styles.bold}> Control Miopia</span> както централната, така и периферната част на изображението се проектират правилно върху ретината, като ефективно намаляват аксиалния растеж и осигуряват ясно зрение върху цялата област на лещата.</p>
                        <div className={styles.image_flex}>
                            <Image src={'/img/products/kontrol/fig_2.png'} width={500} height={300} alt={'Контрол на късогледство Фигура 2'} />
                            <p>Фиг.1</p>
                        </div>
                        <p className={styles.bold}>Това е важна промяна в технологията на лещите, която ще подобри здравето на очите на нашите деца.</p>

                    </div>

                    <News />
                </div>
            </main>
        </Layout>

    )
}

export default Kontrol