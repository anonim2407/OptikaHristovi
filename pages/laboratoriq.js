import Layout from "@/components/layout"
import styles from '../styles/laboratoriq.module.css'
import News from "@/components/news"
import Image from "next/image"
function Laboratoriq() {
  return (
    <Layout
    title={'Лаборатория'}
    description={'Изображения на лабораторията на Очен център Христови'}
    >
      <main className="main">
        <div className={`contenedor ${styles.contenido}`}>
          <div>
            <h1 className="heading">Лаборатория</h1>
            <p>Освен прецизната изработка на вашите индивидуални очила, получавате и безплатен сервиз. Качеството на работа се гарантира с едни от най-добрите системи за периферна обработка на лещите към момента в Европа, с които е оборудвана лабораторията. </p>
          <div className={styles.images}>
          <Image priority src={`/img/lab/lab1.jpg`} width={400} height={400} alt={'Image Laboratory 1'} />
          <Image priority src={`/img/lab/lab2.jpg`} width={400} height={400} alt={'Image Laboratory 2'} />
          <Image priority src={`/img/lab/lab3.jpg`} width={400} height={400} alt={'Image Laboratory 3'} />
          <Image priority src={`/img/lab/lab4.jpg`} width={400} height={400} alt={'Image Laboratory 4'} />
          <Image priority src={`/img/lab/lab5.jpg`} width={400} height={400} alt={'Image Laboratory 5'} />
          <Image priority src={`/img/lab/lab6.jpg`} width={400} height={400} alt={'Image Laboratory 6'} />
          </div>
          </div>
          <News />


        </div>
      </main>
    </Layout >

  )
}

export default Laboratoriq