
import { useEffect, useState } from 'react';

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

  return (
    <>
      <div className="wrapper">
        <Swiper
          autoHeight={true}
          cssMode={true}
          slidesPerView={'auto'}
          mousewheel={true}
          modules={[Mousewheel]}
          className="screens"
          grabCursor={true}
          resizeObserver={false}
          rewind={false}
          loop={false}
        // onReachEnd={(swiper) => {
        //   swiper.disable()

        // }}

        >
          <SwiperSlide><Screen1></Screen1></SwiperSlide>
          <SwiperSlide><Screen2></Screen2></SwiperSlide>

        </Swiper>

        {gap && <Footer gap={gap}></Footer>}

      </div>


    </>
  )
}

export default App
