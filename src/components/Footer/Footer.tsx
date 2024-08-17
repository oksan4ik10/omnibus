
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import style from "./Footer.module.scss"

interface IProps {
    gap: string;
}

function Footer(props: IProps) {
    const { gap } = props;
    return (
        <div className={style.footer}>
            <Swiper
                allowTouchMove={false}
                slidesPerView={'auto'}
                spaceBetween={gap}
                speed={5000}
                freeMode={true}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                // modules={[Autoplay]}
                className={style.mySwiper}
            >
                <SwiperSlide><img src="/images/footer/1.png" alt="1" /></SwiperSlide>
                <SwiperSlide><img src="/images/footer/2.png" alt="2" /></SwiperSlide>
                <SwiperSlide><img src="/images/footer/3.png" alt="3" /></SwiperSlide>
                <SwiperSlide><img src="/images/footer/4.png" alt="4" /></SwiperSlide>
                <SwiperSlide><img src="/images/footer/5.png" alt="5" /></SwiperSlide>
                <SwiperSlide><img src="/images/footer/6.png" alt="6" /></SwiperSlide>
                <SwiperSlide><img src="/images/footer/1.png" alt="1" /></SwiperSlide>
                <SwiperSlide><img src="/images/footer/2.png" alt="2" /></SwiperSlide>
                <SwiperSlide><img src="/images/footer/3.png" alt="3" /></SwiperSlide>
                <SwiperSlide><img src="/images/footer/4.png" alt="4" /></SwiperSlide>
                <SwiperSlide><img src="/images/footer/5.png" alt="5" /></SwiperSlide>
                <SwiperSlide><img src="/images/footer/6.png" alt="6" /></SwiperSlide>
            </Swiper>



        </div>
    );
}

export default Footer;