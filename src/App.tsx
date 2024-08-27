/* eslint-disable @typescript-eslint/no-explicit-any */


import { useCallback, useEffect, useRef, useState } from 'react';
import {
  useWindowSize
} from '@react-hook/window-size'

import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';

import './App.scss'
import Screen1 from './screens/Screen1/Screen1.tsx';
import Screen2 from './screens/Screen2/Screen2.tsx';
import Screen3 from './screens/Screen3/Screen3.tsx';
import Screen4 from './screens/Screen4/Screen4.tsx';
import { resize } from './resize.ts'

import Footer from './components/Footer/Footer.tsx';

resize();
function App() {
  const [width, height] = useWindowSize()

  const [isMobile, setIsMobile] = useState((width < 1000) || ((width > 1000) && (width < 1200) && (height > 830)))

  useEffect(() => {
    setIsMobile((width < 1000) || ((width > 1000) && (width < 1200) && (height > 830)))
  }, [width, height])


  const [gap, setGap] = useState('');
  useEffect(() => {
    const width = window.innerWidth;
    setGap(width > 790 ? '6.5%' : '11.5%')

  }, [])

  const [screen, setScreen] = useState(1);

  const sliderRef = useRef<any>(null);
  // useEffect(() => {
  //   if (sliderRef.current) {
  //     console.dir(sliderRef.current)
  //     sliderRef.current.swiper.allowTouchMove = true
  //   }
  // }, [])
  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    setScreen(screen + 1);
  }, []);

  const [isScreen3Mobile, setIsScreen3Mobile] = useState(false);
  const nextScreen3Mobile = () => {
    setIsScreen3Mobile(true)
    handleNext();
  }

  const [isScreen4, setIsScreen4] = useState(false);
  const startGame = () => {
    setIsScreen4(true);
    handleNext()
  }


  const touch = (e: TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('screen');

  }
  const touchDisable = (s: SwiperClass, e: TouchEvent | MouseEvent | PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('swiper');

  }
  return (
    <>
      <div className={"wrapper" + (isScreen4 ? " screen4" : "")} >
        <Swiper
          ref={sliderRef}
          autoHeight={true}
          // cssMode={true}
          slidesPerView={'auto'}
          // mousewheel={true}
          // modules={[Mousewheel]}
          // className="screens"
          // watchSlidesProgress={true}
          // resizeObserver={false}
          // rewind={false}

          // onTouchStart={touchDisable}
          // speed={10000}
          // simulateTouch={true}
          // noSwiping={false}
          // noSwipingSelector={'div'}
          // preventInteractionOnTransition={true}
          allowTouchMove={false}
        // preventInteractionOnTransition={true}
        // noSwiping={true}
        // noSwipingClass={'swiper-no-swiping'}

        >
          <SwiperSlide><Screen1 changeSlide={handleNext}></Screen1></SwiperSlide>
          <SwiperSlide><Screen2 changeSlide={nextScreen3Mobile} isMobile={isMobile} screen={screen} startGame={startGame}></Screen2></SwiperSlide>
          {isMobile && <SwiperSlide><Screen3 isScreen3Mobile={isScreen3Mobile} screen={screen} startGame={startGame}></Screen3></SwiperSlide>}
          <SwiperSlide><Screen4></Screen4></SwiperSlide>
        </Swiper>

        {gap && <Footer gap={gap}></Footer>}

      </div>


    </>
  )
}

export default App
