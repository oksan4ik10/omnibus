
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
                loopAdditionalSlides={2}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className={style.mySwiper + " mySwiper"}
            >
                <SwiperSlide >
                    <div className={style.slide1 + " " + style.slide}>
                        <img src="/images/footer/1.png" alt="1" />
                    </div>
                    </SwiperSlide>
                <SwiperSlide>
                <div className={style.slide2 + " " + style.slide}>
                        <img src="/images/footer/2.png" alt="1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={style.slide3 + " " + style.slide}>
                        <img src="/images/footer/3.png" alt="13" />
                    </div>
                    </SwiperSlide>
                <SwiperSlide>
                <div className={style.slide4 + " " + style.slide}>
                        <img src="/images/footer/4.png" alt="4" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={style.slide5 + " " + style.slide}>
                        <img src="/images/footer/5.png" alt="5" />
                    </div>
                    </SwiperSlide>
                <SwiperSlide>
                <div className={style.slide6 + " " + style.slide}>
                        <img src="/images/footer/6.png" alt="6" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={style.slide7 + " " + style.slide}>
                        <img src="/images/footer/7.png" alt="7" />
                    </div>
                    </SwiperSlide>
                <SwiperSlide>
                <div className={style.slide8 + " " + style.slide}>
                        <img src="/images/footer/8.png" alt="8" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={style.slide9 + " " + style.slide}>
                        <img src="/images/footer/9.png" alt="9" />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide >
                    <div className={style.slide1 + " " + style.slide}>
                        <img src="/images/footer/1.png" alt="1" />
                    </div>
                    </SwiperSlide>
                <SwiperSlide>
                <div className={style.slide2 + " " + style.slide}>
                        <img src="/images/footer/2.png" alt="1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={style.slide3 + " " + style.slide}>
                        <img src="/images/footer/3.png" alt="13" />
                    </div>
                    </SwiperSlide>
                <SwiperSlide>
                <div className={style.slide4 + " " + style.slide}>
                        <img src="/images/footer/4.png" alt="4" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={style.slide5 + " " + style.slide}>
                        <img src="/images/footer/5.png" alt="5" />
                    </div>
                    </SwiperSlide>
                <SwiperSlide>
                <div className={style.slide6 + " " + style.slide}>
                        <img src="/images/footer/6.png" alt="6" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={style.slide7 + " " + style.slide}>
                        <img src="/images/footer/7.png" alt="7" />
                    </div>
                    </SwiperSlide>
                <SwiperSlide>
                <div className={style.slide8 + " " + style.slide}>
                        <img src="/images/footer/8.png" alt="8" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={style.slide9 + " " + style.slide}>
                        <img src="/images/footer/9.png" alt="9" />
                    </div>
                    </SwiperSlide>

                {/* <SwiperSlide><img src="/images/footer/1.png" alt="1" /></SwiperSlide>
                <SwiperSlide><img src="/images/footer/2.png" alt="2" /></SwiperSlide>
                <SwiperSlide><img src="/images/footer/3.png" alt="3" /></SwiperSlide>
                <SwiperSlide><img src="/images/footer/4.png" alt="4" /></SwiperSlide>
                <SwiperSlide><img src="/images/footer/5.png" alt="5" /></SwiperSlide>
                <SwiperSlide><img src="/images/footer/6.png" alt="6" /></SwiperSlide>
                <SwiperSlide><img src="/images/footer/7.png" alt="7" /></SwiperSlide>
                <SwiperSlide><img src="/images/footer/8.png" alt="8" /></SwiperSlide>
                <SwiperSlide><img src="/images/footer/9.png" alt="9" /></SwiperSlide> */}
            </Swiper>



        </div>
    );
}

export default Footer;