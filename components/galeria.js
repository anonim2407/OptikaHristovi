import { useEffect,useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay,
    Virtual, Scrollbar, A11y
} from "swiper/core";
import "swiper/swiper-bundle.css";
import styles from '../styles/galeria.module.css'
import Image from "next/image";
import { EffectFade } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

function Galeria({ href, cantidad }) {
const [width, setWidth]= useState()
   

    useEffect(() => {
        const width = document.getElementById('width').clientWidth;
        setWidth(width)
    }, []);



   

    const slides = [];

    for (let i = 1; i < cantidad; i++) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} className={styles.swiperslide}>
                <div className={styles.slide}>
                    <Image src={`${href}${i}.jpg`} width={400} height={400} alt={`Image Lab_${i}`} />
                </div>
            </SwiperSlide>
        );
    }console.log(width)
    return (
        <div className={styles.container}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={width > 768 ? 3 : 1}
                navigation
                pagination={{ clickable: true }}
                
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {slides}
            </Swiper>
        </div>

    )
}

export default Galeria