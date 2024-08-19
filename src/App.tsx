
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  useWindowSize
} from '@react-hook/window-size'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';

import './App.scss'
import Screen1 from './screens/Screen1/Screen1.tsx';
import Screen2 from './screens/Screen2/Screen2.tsx';
import Screen3 from './screens/Screen3/Screen3.tsx';
import { resize } from './resize.ts'

import Footer from './components/Footer/Footer.tsx';


resize();
function App() {
  const [width, height] = useWindowSize()

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile((width < 1000) || ((width > 1000) && (width < 1200) && (height > 830)))
  }, [width, height])


  const [gap, setGap] = useState('');
  useEffect(() => {
    const width = window.innerWidth;
    setGap(width > 790 ? '6.5%' : '11.5%')

  }, [])

  const [screen, setScreen] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sliderRef = useRef<any>(null);
  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    setScreen(screen + 1);
  }, []);

  return (
    <>
      <div className="wrapper">
        <Swiper
          ref={sliderRef}
          autoHeight={true}
          cssMode={true}
          slidesPerView={'auto'}
          mousewheel={true}
          modules={[Mousewheel]}
          className="screens"
          resizeObserver={false}
          rewind={false}
          loop={false}

        >
          <SwiperSlide><Screen1 changeSlide={handleNext}></Screen1></SwiperSlide>
          <SwiperSlide><Screen2 isMobile={isMobile} screen={screen}></Screen2></SwiperSlide>
          {isMobile && <SwiperSlide><Screen3></Screen3></SwiperSlide>}

        </Swiper>

        {gap && <Footer gap={gap}></Footer>}

      </div>


    </>
  )
}

export default App
