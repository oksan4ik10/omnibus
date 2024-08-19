
import { useCallback, useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';

import './App.scss'
import Screen1 from './screens/Screen1/Screen1.tsx';
import Screen2 from './screens/Screen2/Screen2.tsx';
import { resize } from './resize.ts'

import Footer from './components/Footer/Footer.tsx';


resize();
function App() {
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
          <SwiperSlide><Screen2 screen={screen}></Screen2></SwiperSlide>

        </Swiper>

        {gap && <Footer gap={gap}></Footer>}

      </div>


    </>
  )
}

export default App
